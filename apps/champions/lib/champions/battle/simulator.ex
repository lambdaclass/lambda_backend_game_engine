defmodule Champions.Battle.Simulator do
  @moduledoc """
  Runs battles.

  Units have stats that are calculated on battle start (Attack, Max Health, Defense), as well as two skills. The ultimate
  has no cooldown and it's cast whenever a unit reaches 500 energy. Energy is gained whenever the target attacks.
  The primary skill has a cooldown and it's cast when it's available if the ultimate is not.

  Skills possess many effects with their own targets. Effects are composed of `Components`, `Modifiers` and
  `Executions` (check module docs for more info on each).

  They have different application types (checked are implemented):
  [x] Instant - Applied once, irreversible.
  [x] Permanent - Applied once, is stored in the unit so that it can be reversed (with a dispel, for example)
  [x] Duration - Applied once and reverted once its duration ends.

  They also have different targeting strategies:
  [x] Random
  [ ] Nearest
  [ ] Furthest
  [ ] Frontline - Heroes in slots 1 and 2
  [ ] Backline - Heroes in slots 2 to 4
  [ ] Factions
  [ ] Classes
  [ ] Min (STAT)
  [ ] Max (STAT)

  And different ways in which their amount is interpreted:
  [x] Additive
  [x] Multiplicative
  [x] Additive & based on stat - The amount is a % of one of the caster's stats
  [ ] Multiplicative & based on stat?

  Two units can attack the same unit at the same time and over-kill it. This is expected behavior that results
  from having the battle be simultaneous.

  """
  alias GameBackend.Units.Skills.Effect
  alias GameBackend.Units.Skill
  alias Champions.Units
  alias GameBackend.Units.Unit

  require Logger

  @default_seed 1
  @default_maximum_steps 500
  @ultimate_energy_cost 500

  @doc """
  Runs a battle between two teams.
  Teams are expected to be lists of units with their character and their skills preloaded.

  Returns a map with the the initial state of the battle, the development of the battle for animation, and the result of the battle.

  Options allowed are:

  - `maximum_steps`
  - `seed`

  Options allowed are:

  - `maximum_steps`
  - `seed`

  ## Examples

      iex> team_1 = Enum.map(user1.units, GameBackend.Repo.preload([character: [:basic_skill, :ultimate_skill]]))
      iex> team_2 = Enum.map(user2.units, GameBackend.Repo.preload([character: [:basic_skill, :ultimate_skill]]))
      iex> run_battle(team_1, team_2)
      %{initial_state: %{}, steps: [%{actions: [], step_number: 1}, ...], result: :team_1}
  """
  def run_battle(team_1, team_2, options \\ []) do
    maximum_steps = options[:maximum_steps] || @default_maximum_steps
    seed = options[:seed] || @default_seed

    :rand.seed(:default, seed)
    Logger.info("Running battle with seed: #{seed}")

    team_1 = Enum.into(team_1, %{}, fn unit -> create_unit_map(unit, 1) end)
    team_2 = Enum.into(team_2, %{}, fn unit -> create_unit_map(unit, 2) end)
    units = Map.merge(team_1, team_2)

    initial_state = %{units: units, skills_being_cast: [], pending_effects: [], pending_executions: []}

    # The initial_step_state is what allows the battle to be simultaneous. If we refreshed the accum on every action,
    # we would be left with a turn-based battle. Instead we take decisions based on the state of the battle at the beggining
    # of the step regardless of the changes that happened "before" (execution-wise) in this step.

    {history, result} =
      Enum.reduce_while(
        0..(maximum_steps - 1),
        {initial_state, []},
        fn step, {initial_step_state, history} ->
          {new_state, new_history} =
            {Map.put(initial_step_state, :step_number, step), history}
            |> advance_history_step()
            |> process_step_for_units()
            |> process_step_for_skills(initial_step_state)
            |> process_step_for_effects()

          Logger.info("Step #{step} finished: #{inspect(format_step_state(new_state))}")

          {new_state, new_history}
          |> remove_dead_units()
          |> check_winner(step, maximum_steps)
        end
      )

    %{initial_state: transform_initial_state_for_replay(initial_state), steps: Enum.reverse(history), result: result}
  end

  # Removes dead units from the battle state.
  defp remove_dead_units({state, history}) do
    {new_units, new_history} =
      Enum.reduce(state.units, {%{}, history}, fn {unit_id, unit}, {units, history_acc} ->
        if unit.health > 0 do
          {Map.put(units, unit_id, unit), history_acc}
        else
          Logger.info("Unit #{format_unit_name(unit)} died.")

          new_history = add_to_history(history_acc, %{unit_id: unit_id}, :death)

          {units, new_history}
        end
      end)

    {Map.put(state, :units, new_units), new_history}
  end

  defp advance_history_step({state, []}) do
    {state, [%{step_number: 0, actions: []}]}
  end

  defp advance_history_step({state, [%{step_number: step_number} | _tail] = history}) do
    {state, [%{step_number: step_number + 1, actions: []} | history]}
  end

  # Check if the battle has ended.
  # Battle can end if all unit of a team are dead, or if the maximum step amount has been reached.
  defp check_winner({state, history}, step, maximum_steps) do
    winner =
      cond do
        Enum.empty?(state.units) -> "tie"
        Enum.all?(state.units, fn {_id, unit} -> unit.team == 2 end) -> "team_2"
        Enum.all?(state.units, fn {_id, unit} -> unit.team == 1 end) -> "team_1"
        true -> "none"
      end

    case winner do
      "none" ->
        if step == maximum_steps - 1 do
          Logger.info("Battle timeout.")
          {:halt, {history, "timeout"}}
        else
          {:cont, {state, history}}
        end

      result ->
        Logger.info("Battle ended. Result: #{result}.")

        {:halt, {history, result}}
    end
  end

  defp process_step_for_units({initial_step_state, history}) do
    Enum.reduce(initial_step_state.units, {initial_step_state, history}, fn {unit_id, unit}, {current_state, history} ->
      Logger.info("Process step #{initial_step_state.step_number} for unit #{format_unit_name(unit)}")
      process_step_for_unit(initial_step_state.units[unit_id], current_state, initial_step_state, history)
    end)
  end

  # Calculate the new state of the battle after a step passes for a unit.
  # Updates cooldowns, casts skills and reduces self-affecting modifier durations.
  defp process_step_for_unit(unit, current_state, initial_step_state, history) do
    {new_state, new_history} =
      cond do
        not can_attack(unit, initial_step_state) ->
          {current_state, history}

        can_cast_ultimate_skill(unit) ->
          Logger.info("Unit #{format_unit_name(unit)} casting Ultimate skill")

          new_state =
            current_state
            |> Map.put(:skills_being_cast, [unit.ultimate_skill | current_state.skills_being_cast])
            |> put_in([:units, unit.id, :energy], 0)

          new_history =
            add_to_history(
              history,
              %{
                caster_id: unit.id,
                target_ids: [],
                skill_id: unit.ultimate_skill.id,
                skill_action_type: :ANIMATION_START,
                stats_affected: []
              },
              :skill_action
            )

          {new_state, new_history}

        can_cast_basic_skill(unit) ->
          Logger.info("Unit #{format_unit_name(unit)} casting basic skill")

          new_state =
            current_state
            |> Map.put(:skills_being_cast, [unit.basic_skill | current_state.skills_being_cast])
            |> put_in(
              [:units, unit.id, :basic_skill, :remaining_cooldown],
              # We need this + 1 because we're going to reduce the cooldown at the end of the step
              unit.basic_skill.base_cooldown + 1
            )
            |> update_in([:units, unit.id, :energy], &(&1 + unit.basic_skill.energy_regen))

          new_history =
            add_to_history(
              history,
              %{
                caster_id: unit.id,
                target_ids: [],
                skill_id: unit.basic_skill.id,
                skill_action_type: :ANIMATION_START,
                stats_affected: []
              },
              :skill_action
            )

          {new_state, new_history}

        true ->
          {current_state, history}
      end

    # Reduce modifier remaining timers & remove expired ones
    {additives, new_history} = reduce_modifier_timers(unit.modifiers.additives, unit, new_history)
    {multiplicatives, new_history} = reduce_modifier_timers(unit.modifiers.multiplicatives, unit, new_history)
    {overrides, new_history} = reduce_modifier_timers(unit.modifiers.overrides, unit, new_history)

    new_modifiers =
      %{
        additives: additives,
        multiplicatives: multiplicatives,
        overrides: overrides
      }

    # Reduce tags remaining timers & remove expired ones
    {new_tags, new_history} = reduce_tag_timers(unit, new_history)

    # Reduce basic skill cooldown
    new_state =
      new_state
      |> put_in(
        [:units, unit.id, :basic_skill, :remaining_cooldown],
        max(new_state.units[unit.id].basic_skill.remaining_cooldown - 1, 0)
      )
      |> put_in([:units, unit.id, :modifiers], new_modifiers)
      |> put_in([:units, unit.id, :tags], new_tags)

    {new_state, new_history}
  end

  # Reduces modifier timers and removes expired ones.
  # Called when processing a step for a unit.
  defp reduce_modifier_timers(modifiers, unit, history) do
    Enum.reduce(modifiers, {[], history}, fn modifier, {acc, history} ->
      case modifier.remaining_steps do
        # Modifier is permanent
        -1 ->
          {[modifier | acc], history}

        # Modifier expired
        0 ->
          Logger.info("Modifier [#{format_modifier_name(modifier)}] expired for #{format_unit_name(unit)}.")

          {acc,
           add_to_history(
             history,
             %{
               skill_id: modifier.skill_id,
               target_ids: [unit.id],
               stat_affected: %{
                 stat: modifier.attribute |> String.upcase() |> String.to_atom(),
                 amount: modifier.float_magnitude
               }
             },
             :modifier_expired
           )}

        # Modifier still going, reduce its timer by one
        remaining ->
          Logger.info(
            "Modifier [#{format_modifier_name(modifier)}] remaining time reduced for #{format_unit_name(unit)}."
          )

          {[Map.put(modifier, :remaining_steps, remaining - 1) | acc], history}
      end
    end)
  end

  # Reduces tag timers and removes expired ones.
  # Called when processing a step for a unit.
  defp reduce_tag_timers(unit, history) do
    Enum.reduce(unit.tags, {[], history}, fn tag, {acc, history} ->
      case tag.remaining_steps do
        # Tag is permanent
        -1 ->
          {[tag | acc], history}

        # Tag expired
        0 ->
          Logger.info(~c"Tag \"#{tag.tag}\" expired for #{format_unit_name(unit)}.")

          {acc,
           add_to_history(
             history,
             %{
               skill_id: tag.skill_id,
               unit_id: unit.id,
               tag: tag.tag
             },
             :tag_expired
           )}

        # Tag still going, reduce its timer by one
        remaining ->
          Logger.info(~c"Tag \"#{tag.tag}\" remaining time reduced for #{format_unit_name(unit)}.")

          {[Map.put(tag, :remaining_steps, remaining - 1) | acc], history}
      end
    end)
  end

  defp process_step_for_skills({current_state, history}, initial_step_state) do
    Enum.reduce(current_state.skills_being_cast, {current_state, history}, fn skill, {current_state, history} ->
      Logger.info(
        "Process step #{current_state.step_number} for skill #{skill.name} cast by #{String.slice(skill.caster_id, 0..2)}"
      )

      # We need the initial_step_state to decide effect targets
      process_step_for_skill(skill, current_state, initial_step_state, history)
    end)
  end

  # Calculate the new state of the battle after a step passes for a skill being cast.
  # Reduces the remaining animation and effect trigger, and casts the effects if the latter has ended.
  defp process_step_for_skill(skill, current_state, initial_step_state, history) do
    # Check if the casting unit has died
    if Map.has_key?(current_state.units, skill.caster_id) do
      {{new_skill, new_state}, history} =
        process_skill_effects_trigger_value(skill, current_state, initial_step_state, history)

      if new_skill.animation_duration == 0 do
        # If the animation has finished, we remove skill from list.
        {Map.put(new_state, :skills_being_cast, List.delete(new_state.skills_being_cast, skill)), history}
      else
        # Otherwise, we update it with its new state.
        new_skill = %{new_skill | animation_duration: skill.animation_duration - 1}
        {Map.put(new_state, :skills_being_cast, [new_skill | List.delete(new_state.skills_being_cast, skill)]), history}
      end
    else
      # If the unit died, just delete the skill being cast
      Logger.info("Skill caster #{String.slice(skill.caster_id, 0..2)} died. Deleting skill from list.")
      {Map.put(current_state, :skills_being_cast, List.delete(current_state.skills_being_cast, skill)), history}
    end
  end

  # Calculate the new state of the battle after a step passes for a skill being cast, specifically for its `effects_trigger` value.
  # If the effects_trigger is ready, trigger the skill's effects, adding them to the `pending_effects` in the state.
  defp process_skill_effects_trigger_value(%{effects_trigger: 0} = skill, current_state, initial_step_state, history) do
    Logger.info("Animation trigger for skill #{skill.name} ready. Creating #{Enum.count(skill.effects)} effects.")
    {new_state, new_history} = add_skill_effects_to_pending_effects(skill, current_state, initial_step_state, history)

    {{%{skill | effects_trigger: -1}, new_state}, new_history}
  end

  # Calculate the new state of the battle after a step passes for a skill being cast, specifically for its `effects_trigger` value.
  # If the effects have already triggered, do nothing.
  defp process_skill_effects_trigger_value(
         %{effects_trigger: -1} = skill,
         current_state,
         _initial_step_state,
         history
       ),
       do: {{skill, current_state}, history}

  # Calculate the new state of the battle after a step passes for a skill being cast, specifically for its `effects_trigger` value.
  # If the effect hasn't triggered yet, reduce the remaining effects_trigger counter.
  defp process_skill_effects_trigger_value(skill, current_state, _initial_step_state, history) do
    {{%{skill | effects_trigger: skill.effects_trigger - 1}, current_state}, history}
  end

  # Calculate the new state of the battle after a step passes for all pending effects
  def process_step_for_effects({state, history}) do
    {{updated_pending_effects, updated_game_state}, new_history} =
      Enum.reduce(state.pending_effects, {{[], state}, history}, fn effect,
                                                                    {{new_pending_effects, current_state}, new_history} ->
        # Calculate the new state of the battle after a step passes for a pending effect.
        case effect do
          %{delay: 0} ->
            # If the effect is ready to be processed, we apply it.
            Logger.info("#{format_unit_name(effect.caster)}'s effect is ready to be processed")

            {targets_after_effect, new_history} =
              Enum.reduce(effect.targets, {%{}, new_history}, fn target_id, {targets, new_history} ->
                target = current_state.units[target_id]

                {new_target, new_history} =
                  maybe_apply_effect(
                    effect,
                    target,
                    effect.caster,
                    current_state.step_number,
                    effect_hits?(effect, target),
                    new_history
                  )

                {Map.put(targets, target_id, new_target), new_history}
              end)

            new_state =
              update_in(current_state, [:units], fn units -> Map.merge(units, targets_after_effect) end)

            # We don't add this effect to the new_pending_effects list because it has already been applied
            {{new_pending_effects, new_state}, new_history}

          effect ->
            # If the effect isn't ready to be processed, we reduce its remaining delay.

            {{[%{effect | delay: effect.delay - 1} | new_pending_effects], current_state}, history}
        end
      end)

    {Map.put(updated_game_state, :pending_effects, updated_pending_effects), new_history}
  end

  # Check if the unit can attack this turn.
  # For now, attacking capability is only affected by whether the unit is currently casting a skill.
  # Later on, things like stuns will be handled here.
  defp can_attack(unit, initial_step_state) do
    # Check the unit is not casting anything right now and is not stunned
    cond do
      Enum.any?(initial_step_state.skills_being_cast, &(&1.caster_id == unit.id)) ->
        Logger.info("Unit #{format_unit_name(unit)} cannot attack because it is casting another skill")
        false

      Enum.any?(unit.tags, &(&1.tag == "Stun")) ->
        Logger.info("Unit #{format_unit_name(unit)} cannot attack because it is stunned")
        false

      true ->
        true
    end
  end

  # Check if the unit can cast their ultimate skill this step.
  defp can_cast_ultimate_skill(unit), do: unit.energy >= @ultimate_energy_cost

  # Check if the unit can cast their basic skill this step.
  defp can_cast_basic_skill(unit), do: unit.basic_skill.remaining_cooldown <= 0

  # Called when a skill being cast reaches effect_trigger 0.
  # "Queues" the effect to be processed when its delay reaches 0.
  defp add_skill_effects_to_pending_effects(skill, current_state, initial_step_state, history) do
    caster = current_state.units[skill.caster_id]

    # We store the caster's state in the effect in case the unit dies before the effect's delay ends.
    # Also, we want to calculate numbers like damage done based on the status of the caster when the effect was cast.
    {effects_with_caster, new_history} =
      Enum.reduce(skill.effects, {[], history}, fn effect, {effects_list, history} ->
        new_effect =
          effect
          |> Map.put(:caster, caster)
          |> Map.put(:targets, choose_targets(caster, effect, initial_step_state))
          |> Map.put(:skill_id, skill.id)

        new_history =
          add_to_history(
            history,
            %{
              caster_id: caster.id,
              target_ids: new_effect.targets,
              skill_id: skill.id,
              skill_action_type: :EFFECT_TRIGGER,
              stats_affected: []
            },
            :skill_action
          )

        {[new_effect | effects_list], new_history}
      end)

    new_state = Map.put(current_state, :pending_effects, effects_with_caster ++ current_state.pending_effects)

    {new_state, new_history}
  end

  # Choose the targets for an effect with "random" as the strategy. Returns the target ids.
  # The `== target_allies` works as a negation operation when `target_allies` is `false`, and does nothing when `true`.
  defp choose_targets(
         %{team: team} = _caster,
         %{
           target_count: count,
           target_strategy: "random",
           target_allies: target_allies
         } = _effect,
         state
       ),
       do:
         state.units
         |> Enum.filter(fn {_id, unit} -> unit.team == team == target_allies end)
         |> Enum.take_random(count)
         |> Enum.map(fn {id, _unit} -> id end)

  # Apply an effect to its target. Returns the new state of the target.
  # For now this applies the executions on the spot.
  # Later on, it will "cast" them as we do with skills and effects to account for execution delays.
  # Returns the new state of the target.
  defp maybe_apply_effect(effect, target, caster, current_step_number, true, history) do
    {target_after_modifiers, new_history} =
      Enum.reduce(effect.modifiers, {target, history}, fn modifier, {target, history} ->
        # If it's permanent, we set its duration to -1
        new_modifier =
          modifier
          |> Map.put(:remaining_steps, Map.get(effect.type, "duration", -1))
          |> Map.put(:step_applied_at, current_step_number)

        new_history =
          add_to_history(
            history,
            %{
              skill_id: modifier.skill_id,
              target_ids: [target.id],
              stat_affected: %{
                stat: modifier.attribute |> String.upcase() |> String.to_atom(),
                amount: modifier.float_magnitude
              }
            },
            :modifier_received
          )

        new_target =
          case modifier.modifier_operation do
            "Add" ->
              put_in(target, [:modifiers, :additives], [new_modifier | target.modifiers.additives])

            "Multiply" ->
              put_in(target, [:modifiers, :multiplicatives], [new_modifier | target.modifiers.multiplicatives])

            "Override" ->
              put_in(target, [:modifiers, :overrides], [new_modifier | target.modifiers.overrides])
          end

        {new_target, new_history}
      end)

    {target_after_tags, new_history} =
      Enum.reduce(effect.components, {target_after_modifiers, new_history}, fn component, {target, history} ->
        if component["type"] == "ApplyTags",
          do: apply_tags(target, component["tags"], effect, history),
          else: {target, history}
      end)

    Enum.reduce(effect.executions, {target_after_tags, new_history}, fn execution, {target_acc, history_acc} ->
      process_execution(execution, target_acc, caster, history_acc, effect.skill_id)
    end)
  end

  defp maybe_apply_effect(effect, target, caster, _current_step_number, false, history) do
    Logger.info("#{format_unit_name(effect.caster)}'s effect missed.")

    new_history =
      add_to_history(
        history,
        %{
          caster_id: caster.id,
          target_ids: [target.id],
          skill_id: effect.skill_id,
          skill_action_type: :EFFECT_MISS,
          stats_affected: []
        },
        :skill_action
      )

    {target, new_history}
  end

  # Return whether an effect hits.
  defp effect_hits?(effect, target) do
    cond do
      !target_tag_requirements_met?(effect, target) -> false
      !chance_to_apply_hits?(effect) -> false
      true -> true
    end
  end

  defp target_tag_requirements_met?(effect, target) do
    requirements_component =
      Enum.find(effect.components, fn comp -> comp["type"] == "TargetTagRequirements" end)

    case requirements_component do
      nil ->
        true

      requirements_component ->
        target_tags = Enum.map(target.tags, fn %{tag: tag} -> tag end)
        Enum.all?(requirements_component["tags"], &(&1 in target_tags))
    end
  end

  defp chance_to_apply_hits?(effect) do
    chance_to_apply_component =
      Enum.find(effect.components, fn comp -> comp["type"] == "ChanceToApply" end)

    case chance_to_apply_component do
      nil ->
        true

      chance_to_apply_component ->
        chance_to_apply_component["chance"] >= :rand.uniform()
    end
  end

  defp apply_tags(target, tags_to_apply, effect, history) do
    {new_tags, new_history} =
      Enum.reduce(tags_to_apply, {[], history}, fn tag, {acc, history} ->
        Logger.info(~c"Applying tag \"#{tag}\" to unit #{format_unit_name(target)}")

        new_history =
          add_to_history(
            history,
            %{
              skill_id: effect.skill_id,
              unit_id: target.id,
              tag: tag
            },
            :tag_received
          )

        {[%{tag: tag, remaining_steps: Map.get(effect.type, "duration", -1) - 1, skill_id: effect.skill_id} | acc],
         new_history}
      end)

    new_target =
      update_in(target, [:tags], fn tags ->
        tags ++ new_tags
      end)

    {new_target, new_history}
  end

  # Apply a DealDamage execution to its target. Returns the new state of the target.
  defp process_execution(
         %{
           "type" => "DealDamage",
           "attack_ratio" => attack_ratio,
           "energy_recharge" => energy_recharge,
           # TODO
           "delay" => _delay
         },
         target,
         caster,
         history,
         skill_id
       ) do
    damage = max(floor(attack_ratio * calculate_unit_stat(caster, :attack)), 0)

    Logger.info(
      "Dealing #{damage} damage to #{format_unit_name(target)} (#{target.health} -> #{target.health - damage})"
    )

    new_history =
      add_to_history(
        history,
        %{
          caster_id: caster.id,
          target_ids: [target.id],
          skill_id: skill_id,
          skill_action_type: :EFFECT_HIT,
          stats_affected: [%{stat: :HEALTH, amount: -damage}]
        },
        :skill_action
      )

    new_target =
      target
      |> Map.put(:health, target.health - damage)
      |> Map.put(:energy, min(target.energy + energy_recharge, @ultimate_energy_cost))

    {new_target, new_history}
  end

  defp process_execution(
         _,
         target,
         caster,
         history,
         _skill_id
       ) do
    Logger.warning("#{format_unit_name(caster)} tried to apply an unknown execution to #{format_unit_name(caster)}")
    {target, history}
  end

  # Calculate the current amount of the given attribute that the unit has, based on its modifiers.
  defp calculate_unit_stat(unit, attribute) do
    overrides = Enum.filter(unit.modifiers.overrides, &(&1.attribute == Atom.to_string(attribute)))

    if Enum.empty?(overrides) do
      addition =
        Enum.filter(unit.modifiers.additives, &(&1.attribute == Atom.to_string(attribute)))
        |> Enum.reduce(0, fn mod, acc -> mod.float_magnitude + acc end)

      multiplication =
        Enum.filter(unit.modifiers.multiplicatives, &(&1.attribute == Atom.to_string(attribute)))
        |> Enum.reduce(1, fn mod, acc -> mod.float_magnitude * acc end)

      (unit[attribute] + addition) * multiplication
    else
      Enum.min_by(overrides, & &1.step_applied_at).float_magnitude
    end
  end

  # Used to create the initial unit maps to be used during simulation.
  defp create_unit_map(%Unit{character: character} = unit, team),
    do:
      {unit.id,
       %{
         id: unit.id,
         team: team,
         slot: unit.slot,
         character_id: character.id,
         character_name: character.name,
         class: character.class,
         faction: character.faction,
         ultimate_skill: create_skill_map(character.ultimate_skill, unit.id),
         basic_skill: create_skill_map(character.basic_skill, unit.id),
         max_health: Units.get_health(unit),
         health: Units.get_health(unit),
         attack: Units.get_attack(unit),
         defense: Units.get_defense(unit),
         energy: 0,
         modifiers: %{
           additives: [],
           multiplicatives: [],
           overrides: []
         },
         tags: []
       }}

  # Used to create the initial skill maps to be used during simulation.
  defp create_skill_map(%Skill{} = skill, caster_id),
    do: %{
      id: skill.id,
      name: skill.name,
      effects: Enum.map(skill.effects, &create_effect_map(&1, skill.id)),
      base_cooldown: skill.cooldown,
      remaining_cooldown: skill.cooldown,
      energy_regen: skill.energy_regen || 0,
      animation_duration: skill.animation_duration || 0,
      effects_trigger: skill.animation_trigger || 0,
      caster_id: caster_id
    }

  # Used to create the initial effect maps to be used during simulation.
  defp create_effect_map(%Effect{} = effect, skill_id),
    do: %{
      type: effect.type,
      delay: effect.initial_delay,
      target_count: effect.target_count,
      # TODO: replace random for the corresponding target strategy name (CHoM #325)
      # target_strategy: effect.target_strategy,
      target_strategy: "random",
      target_allies: effect.target_allies,
      components: effect.components,
      modifiers: Enum.map(effect.modifiers, &Map.put(&1, :skill_id, skill_id)),
      executions: effect.executions,
      skill_id: skill_id
    }

  # Format step state for logs.
  defp format_step_state(%{
         units: units,
         skills_being_cast: skl,
         pending_effects: eff,
         pending_executions: exec
       }) do
    units = Enum.map(units, fn {_unit_id, unit} -> unit end)

    %{
      units:
        Enum.group_by(units, &"Team #{Map.get(&1, :team)}", fn unit ->
          %{
            unit: String.slice(unit.id, 0..2),
            health: unit.health,
            energy: unit.energy,
            cooldown: unit.basic_skill.remaining_cooldown
          }
        end),
      skills_being_cast:
        Enum.map(
          skl,
          &%{
            name: &1.name,
            animation_duration: &1.animation_duration,
            effects_trigger: &1.effects_trigger,
            caster_id: &1.caster_id
          }
        ),
      pending_effects: eff,
      pending_executions: exec
    }
  end

  # Format unit name for logs.
  defp format_unit_name(unit), do: "#{unit.character_name}-#{String.slice(unit.id, 0..2)}"

  # Format modifier name for logs.
  defp format_modifier_name(modifier),
    do: "#{modifier.modifier_operation} #{modifier.attribute} by #{modifier.float_magnitude}"

  defp add_to_history([%{step_number: step_number, actions: actions} | history], entry_to_add, type),
    do: [%{step_number: step_number, actions: [%{action_type: {type, entry_to_add}} | actions]} | history]

  defp transform_initial_state_for_replay(%{units: units}) do
    %{
      units:
        Enum.into(units, [], fn {_id, unit} ->
          Map.take(unit, [:id, :health, :slot, :character_id, :team])
        end)
    }
  end
end
