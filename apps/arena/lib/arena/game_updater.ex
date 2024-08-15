defmodule Arena.GameUpdater do
  @moduledoc """
  GenServer that broadcasts the latest game update to every client
  (player websocket).
  """

  use GenServer
  require Logger
  alias Plug.Debugger
  alias Arena.Game.Obstacle
  alias Arena.Game.Bounties
  alias Arena.GameBountiesFetcher
  alias Arena.GameTracker
  alias Arena.Game.Crate
  alias Arena.Game.Effect
  alias Arena.{Configuration, Entities}
  alias Arena.Game.{Player, Skill}
  alias Arena.Serialization.GameEvent
  alias Arena.Serialization.GameState
  alias Arena.Serialization.GameFinished
  alias Arena.Serialization.ToggleBots
  alias Arena.Serialization.PingUpdate
  alias Arena.Serialization.Ping
  alias Phoenix.PubSub
  alias Arena.Utils
  alias Arena.Game.Trap

  ##########################
  # API
  ##########################
  def join(game_pid, client_id) do
    GenServer.call(game_pid, {:join, client_id})
  end

  def move(game_pid, player_id, direction, timestamp) do
    GenServer.cast(game_pid, {:move, player_id, direction, timestamp})
  end

  def attack(game_pid, player_id, skill, skill_params, timestamp) do
    GenServer.cast(game_pid, {:attack, player_id, skill, skill_params, timestamp})
  end

  def use_item(game_pid, player_id, timestamp) do
    GenServer.cast(game_pid, {:use_item, player_id, timestamp})
  end

  def select_bounty(game_pid, player_id, bounty_quest_id) do
    GenServer.cast(game_pid, {:select_bounty, player_id, bounty_quest_id})
  end

  def toggle_zone(game_pid) do
    GenServer.cast(game_pid, :toggle_zone)
  end

  def toggle_bots(game_pid) do
    GenServer.cast(game_pid, :toggle_bots)
  end

  def change_tickrate(game_pid, tickrate) do
    GenServer.cast(game_pid, {:change_tickrate, tickrate})
  end

  def pong(game_pid, client_pid, ping_timestamp) do
    GenServer.cast(game_pid, {:pong, client_pid, ping_timestamp})
  end

  ##########################
  # END API
  ##########################

  def init(%{clients: clients, bot_clients: bot_clients, game_params: game_params}) do
    game_id = self() |> :erlang.term_to_binary() |> Base58.encode()
    game_config = Configuration.get_game_config()
    game_config = Map.put(game_config, :game, Map.merge(game_config.game, game_params))

    game_state = new_game(game_id, clients ++ bot_clients, game_config)
    match_id = Ecto.UUID.generate()

    send(self(), :update_game)
    send(self(), :send_ping)
    Process.send_after(self(), :selecting_bounty, game_config.game.bounty_pick_time_ms)

    clients_ids = Enum.map(clients, fn {client_id, _, _, _} -> client_id end)
    bot_clients_ids = Enum.map(bot_clients, fn {client_id, _, _, _} -> client_id end)

    :ok = GameTracker.start_tracking(match_id, game_state.client_to_player_map, game_state.players, clients_ids)

    :telemetry.execute([:arena, :game], %{count: 1})

    {:ok,
     %{
       match_id: match_id,
       clients: clients_ids,
       bot_clients: bot_clients_ids,
       game_config: game_config,
       game_state: game_state
     }}
  end

  def terminate(_, _state) do
    :telemetry.execute([:arena, :game], %{count: -1})
    :telemetry.execute([:arena, :game, :tick], %{duration: 0, duration_measure: 0})
    :ok
  end

  ##########################
  # API Callbacks
  ##########################

  def handle_call({:join, client_id}, _from, state) do
    case get_in(state.game_state, [:client_to_player_map, client_id]) do
      nil ->
        {:reply, :not_a_client, state}

      player_id ->
        bounties =
          GameBountiesFetcher.get_bounties()
          |> Enum.shuffle()
          |> Enum.take(state.game_config.game.bounties_options_amount)

        response = %{
          player_id: player_id,
          game_config: state.game_config,
          game_status: state.game_state.status,
          bounties: bounties
        }

        state =
          put_in(state, [:game_state, :players, player_id, :aditional_info, :bounties], bounties)

        {:reply, {:ok, response}, state}
    end
  end

  def handle_cast({:move, player_id, direction, timestamp}, state) do
    player =
      state.game_state.players
      |> Map.get(player_id)
      |> Player.move(direction)

    game_state =
      state.game_state
      |> put_in([:players, player_id], player)
      |> put_in([:player_timestamps, player_id], timestamp)

    {:noreply, %{state | game_state: game_state}}
  end

  def handle_cast({:attack, player_id, skill_key, skill_params, timestamp}, state) do
    broadcast_player_block_actions(state.game_state.game_id, player_id, true)

    game_state =
      get_in(state, [:game_state, :players, player_id])
      |> Player.use_skill(skill_key, skill_params, state)
      |> put_in([:player_timestamps, player_id], timestamp)

    {:noreply, %{state | game_state: game_state}}
  end

  def handle_cast({:use_item, player_id, _timestamp}, state) do
    game_state =
      get_in(state, [:game_state, :players, player_id])
      |> Player.use_item(state.game_state, state.game_config)

    {:noreply, %{state | game_state: game_state}}
  end

  def handle_cast({:select_bounty, player_id, bounty_quest_id}, state) do
    GameTracker.push_event(self(), {:select_bounty, player_id, bounty_quest_id})

    state =
      update_in(state, [:game_state, :players, player_id, :aditional_info], fn aditional_info ->
        bounty =
          Enum.find(aditional_info.bounties, fn bounty -> bounty.id == bounty_quest_id end)

        PubSub.broadcast(Arena.PubSub, state.game_state.game_id, {:bounty_selected, player_id, bounty})

        aditional_info
        |> Map.put(:selected_bounty, bounty)
      end)

    {:noreply, state}
  end

  def handle_cast(:toggle_zone, state) do
    zone_enabled? = state.game_state.zone.enabled

    state =
      state
      |> put_in([:game_state, :zone, :enabled], not zone_enabled?)
      |> put_in([:game_state, :zone, :shrinking], not zone_enabled?)

    {:noreply, state}
  end

  def handle_cast(:toggle_bots, state) do
    encoded_msg =
      GameEvent.encode(%GameEvent{
        event: {:toggle_bots, %ToggleBots{}}
      })

    PubSub.broadcast(Arena.PubSub, state.game_state.game_id, {:toggle_bots, encoded_msg})

    {:noreply, state}
  end

  def handle_cast({:change_tickrate, tickrate}, state) do
    {:noreply, put_in(state, [:game_config, :game, :tick_rate_ms], tickrate)}
  end

  def handle_cast({:pong, client_pid, ping_timestamp}, state) do
    now = DateTime.utc_now() |> DateTime.to_unix(:millisecond)
    latency = now - ping_timestamp

    encoded_msg =
      GameEvent.encode(%GameEvent{
        event: {:ping_update, %PingUpdate{latency: latency}}
      })

    send(client_pid, {:ping_update, encoded_msg})

    {:noreply, state}
  end

  ##########################
  # END API Callbacks
  ##########################

  ##########################
  # Game Callbacks
  ##########################

  def handle_info(:toggle_bots, state) do
    GenServer.cast(self(), :toggle_bots)

    {:noreply, state}
  end

  def handle_info(:update_game, %{game_state: game_state} = state) do
    tick_duration_start_at = System.monotonic_time()
    Process.send_after(self(), :update_game, state.game_config.game.tick_rate_ms)
    now = DateTime.utc_now() |> DateTime.to_unix(:millisecond)
    delta_time = now - game_state.server_timestamp

    now_microseconds = DateTime.utc_now() |> DateTime.to_unix(:microsecond)

    game_state =
      game_state
      |> Map.put(:delta_time, delta_time / 1)
      # Effects
      |> remove_expired_effects()
      |> remove_effects_on_action()
      |> reset_players_effects()
      |> Effect.apply_effect_mechanic_to_entities()
      # Players
      |> move_players()
      |> reduce_players_cooldowns(delta_time)
      |> recover_mana()
      |> resolve_players_collisions_with_power_ups()
      |> resolve_players_collisions_with_items()
      |> resolve_projectiles_effects_on_collisions(state.game_config)
      |> apply_zone_damage_to_players(state.game_config.game)
      |> update_visible_players(state.game_config)
      |> update_bounties_states(state)
      # Projectiles
      |> update_projectiles_status()
      |> move_projectiles()
      |> resolve_projectiles_collisions()
      |> explode_projectiles()
      # Pools
      |> add_pools_collisions()
      |> handle_pools(state.game_config)
      |> remove_expired_pools(now)
      # Crates
      |> handle_destroyed_crates()
      # Traps
      |> remove_activated_traps()
      |> prepare_traps()
      |> handle_trap_collisions()
      |> activate_trap_mechanics()
      # Obstacles
      |> handle_obstacles_transitions()
      |> Map.put(:server_timestamp, now)

    end_time = DateTime.utc_now() |> DateTime.to_unix(:microsecond)

    Logger.info("total time: #{end_time - now_microseconds}")

    broadcast_game_update(game_state)
    game_state = %{game_state | killfeed: [], damage_taken: %{}, damage_done: %{}}

    tick_duration = System.monotonic_time() - tick_duration_start_at
    :telemetry.execute([:arena, :game, :tick], %{duration: tick_duration, duration_measure: tick_duration})
    {:noreply, %{state | game_state: game_state}}
  end

  def handle_info(:send_ping, state) do
    Process.send_after(self(), :send_ping, 500)
    broadcast_ping(state.game_state)
    {:noreply, state}
  end

  def handle_info(:selecting_bounty, state) do
    Process.send_after(self(), :game_start, state.game_config.game.start_game_time_ms)

    {:noreply, put_in(state, [:game_state, :status], :SELECTING_BOUNTY)}
  end

  def handle_info(:game_start, state) do
    broadcast_enable_incomming_messages(state.game_state.game_id)

    Process.send_after(self(), :start_zone_shrink, state.game_config.game.zone_shrink_start_ms)
    Process.send_after(self(), :spawn_item, state.game_config.game.item_spawn_interval_ms)
    Process.send_after(self(), :match_timeout, state.game_config.game.match_timeout_ms)

    send(self(), :pick_default_bounty_for_missing_players)
    send(self(), :natural_healing)
    send(self(), {:end_game_check, Map.keys(state.game_state.players)})

    unless state.game_config.game.bots_enabled do
      toggle_bots(self())
    end

    {:noreply, put_in(state, [:game_state, :status], :RUNNING)}
  end

  def handle_info({:end_game_check, last_players_ids}, state) do
    case check_game_ended(state.game_state.players, last_players_ids) do
      {:ongoing, players_ids} ->
        Process.send_after(
          self(),
          {:end_game_check, players_ids},
          state.game_config.game.end_game_interval_ms
        )

      {:ended, winner} ->
        state =
          put_in(state, [:game_state, :status], :ENDED)
          |> update_in([:game_state], fn game_state -> put_player_position(game_state, winner.id) end)

        PubSub.broadcast(Arena.PubSub, state.game_state.game_id, :end_game_state)
        broadcast_game_ended(winner, state.game_state)
        GameTracker.finish_tracking(self(), winner.id)

        ## The idea of having this waiting period is in case websocket processes keep
        ## sending messages, this way we give some time before making them crash
        ## (sending to inexistant process will cause them to crash)
        Process.send_after(self(), :game_ended, state.game_config.game.shutdown_game_wait_ms)
    end

    {:noreply, state}
  end

  # Shutdown
  def handle_info(:game_ended, state) do
    {:stop, :normal, state}
  end

  ##########################
  # End Game Callbacks
  ##########################

  ##########################
  # Skill Callbacks
  ##########################

  def handle_info({:remove_skill_action, player_id, skill_action}, state) do
    player =
      Map.get(state.game_state.players, player_id)
      |> Player.remove_action(skill_action)

    state = put_in(state, [:game_state, :players, player_id], player)
    {:noreply, state}
  end

  def handle_info({:stop_dash, player_id, previous_speed}, state) do
    player =
      Map.get(state.game_state.players, player_id)
      |> Player.reset_forced_movement(previous_speed)

    state = put_in(state, [:game_state, :players, player_id], player)
    {:noreply, state}
  end

  def handle_info({:stop_leap, player_id, previous_speed, on_arrival_mechanic}, state) do
    player =
      Map.get(state.game_state.players, player_id)
      |> Player.reset_forced_movement(previous_speed)

    game_state =
      put_in(state.game_state, [:players, player_id], player)
      |> Skill.do_mechanic(player, on_arrival_mechanic, %{skill_direction: player.direction})

    {:noreply, %{state | game_state: game_state}}
  end

  def handle_info({:trigger_mechanic, player_id, mechanic, skill_params}, state) do
    player = Map.get(state.game_state.players, player_id)
    game_state = Skill.do_mechanic(state.game_state, player, mechanic, skill_params)
    state = Map.put(state, :game_state, game_state)
    {:noreply, state}
  end

  def handle_info({:delayed_skill_mechanics, player_id, mechanics, skill_params}, state) do
    player = Map.get(state.game_state.players, player_id)
    game_state = Skill.do_mechanic(state.game_state, player, mechanics, skill_params)
    {:noreply, %{state | game_state: game_state}}
  end

  def handle_info(
        {:delayed_effect_application, _player_id, nil, _execution_duration_ms},
        state
      ) do
    {:noreply, state}
  end

  def handle_info({:delayed_effect_application, player_id, effects_to_apply, execution_duration_ms}, state) do
    player = Map.get(state.game_state.players, player_id)

    game_state =
      Skill.handle_skill_effects(state.game_state, player, effects_to_apply, execution_duration_ms, state.game_config)

    {:noreply, %{state | game_state: game_state}}
  end

  # Natural healing
  def handle_info(:natural_healing, state) do
    Process.send_after(
      self(),
      :natural_healing,
      state.game_config.game.natural_healing_interval_ms
    )

    players = Player.trigger_natural_healings(state.game_state.players)
    state = put_in(state, [:game_state, :players], players)
    {:noreply, state}
  end

  ##########################
  # End Skill Callbacks
  ##########################

  ##########################
  # Zone Callbacks
  ##########################

  def handle_info(:start_zone_shrink, state) do
    Process.send_after(self(), :stop_zone_shrink, state.game_config.game.zone_stop_interval_ms)
    send(self(), :zone_shrink)

    now = DateTime.utc_now() |> DateTime.to_unix(:millisecond)

    state =
      put_in(state, [:game_state, :zone, :shrinking], true)
      |> put_in(
        [:game_state, :zone, :next_zone_change_timestamp],
        now + state.game_config.game.zone_stop_interval_ms
      )

    {:noreply, state}
  end

  def handle_info(:stop_zone_shrink, state) do
    Process.send_after(self(), :start_zone_shrink, state.game_config.game.zone_start_interval_ms)

    now = DateTime.utc_now() |> DateTime.to_unix(:millisecond)

    state =
      put_in(state, [:game_state, :zone, :shrinking], false)
      |> put_in(
        [:game_state, :zone, :next_zone_change_timestamp],
        now + state.game_config.game.zone_start_interval_ms
      )

    {:noreply, state}
  end

  def handle_info(:zone_shrink, %{game_state: %{zone: %{shrinking: false}}} = state) do
    {:noreply, state}
  end

  def handle_info(:zone_shrink, %{game_state: %{zone: %{enabled: false}}} = state) do
    {:noreply, state}
  end

  def handle_info(:zone_shrink, %{game_state: %{zone: zone}} = state) do
    Process.send_after(self(), :zone_shrink, state.game_config.game.zone_shrink_interval)
    radius = max(zone.radius - state.game_config.game.zone_shrink_radius_by, 0.0)
    state = put_in(state, [:game_state, :zone, :radius], radius)
    {:noreply, state}
  end

  ##########################
  # End Zone Callbacks
  ##########################

  def handle_info(
        {:to_killfeed, killer_id, victim_id},
        %{game_state: game_state, game_config: game_config} = state
      ) do
    entry = %{killer_id: killer_id, victim_id: victim_id}
    victim = Map.get(game_state.players, victim_id)
    amount_of_power_ups = get_amount_of_power_ups(victim, game_config.power_ups.power_ups_per_kill)

    game_state =
      game_state
      |> update_in([:killfeed], fn killfeed -> [entry | killfeed] end)
      |> maybe_add_kill_to_player(killer_id)
      |> spawn_power_ups(game_config, victim, amount_of_power_ups)
      |> put_player_position(victim_id)

    broadcast_player_dead(state.game_state.game_id, victim_id)

    case Map.get(game_state.players, killer_id) do
      nil ->
        GameTracker.push_event(self(), {:kill_by_zone, victim.id})

      killer ->
        GameTracker.push_event(
          self(),
          {:kill, %{id: killer.id, character_name: killer.aditional_info.character_name},
           %{id: victim.id, character_name: victim.aditional_info.character_name}}
        )
    end

    {:noreply, %{state | game_state: game_state}}
  end

  def handle_info({:recharge_stamina, player_id}, state) do
    player =
      Map.get(state.game_state.players, player_id)
      |> Player.recharge_stamina()

    state = put_in(state, [:game_state, :players, player_id], player)
    {:noreply, state}
  end

  def handle_info({:damage_done, player_id, damage}, state) do
    GameTracker.push_event(self(), {:damage_done, player_id, damage})

    state =
      update_in(state, [:game_state, :damage_done, player_id], fn
        nil -> damage
        current -> current + damage
      end)

    {:noreply, state}
  end

  def handle_info({:damage_taken, player_id, damage}, state) do
    GameTracker.push_event(self(), {:damage_taken, player_id, damage})

    state =
      update_in(state, [:game_state, :damage_taken, player_id], fn
        nil -> damage
        current -> current + damage
      end)

    {:noreply, state}
  end

  def handle_info({:remove_projectile, projectile_id}, state) do
    case Map.get(state.game_state.projectiles, projectile_id) do
      %{aditional_info: %{status: :ACTIVE}} ->
        state =
          put_in(
            state,
            [:game_state, :projectiles, projectile_id, :aditional_info, :status],
            :EXPIRED
          )

        {:noreply, state}

      _ ->
        {:noreply, state}
    end
  end

  def handle_info(:spawn_item, state) do
    Process.send_after(self(), :spawn_item, state.game_config.game.item_spawn_interval_ms)

    last_id = state.game_state.last_id + 1

    item_config = Enum.random(state.game_config.items)

    position =
      random_position_in_map(
        item_config.radius,
        state.game_state.external_wall,
        state.game_state.obstacles,
        state.game_state.external_wall.position,
        state.game_state.external_wall.radius
      )

    item = Entities.new_item(last_id, position, item_config)

    state =
      put_in(state, [:game_state, :last_id], last_id)
      |> put_in([:game_state, :items, item.id], item)

    {:noreply, state}
  end

  def handle_info({:block_actions, player_id, value}, state) do
    broadcast_player_block_actions(state.game_state.game_id, player_id, value)
    {:noreply, state}
  end

  def handle_info({:block_movement, player_id, value}, state) do
    broadcast_player_block_movement(state.game_state.game_id, player_id, value)
    {:noreply, state}
  end

  def handle_info(:pick_default_bounty_for_missing_players, state) do
    Enum.each(state.game_state.players, fn {player_id, player} ->
      if is_nil(player.aditional_info.selected_bounty) and not Enum.empty?(player.aditional_info.bounties) do
        random_bounty = Enum.random(player.aditional_info.bounties)
        select_bounty(self(), player_id, random_bounty.id)
      end
    end)

    {:noreply, state}
  end

  def handle_info({:delayed_power_up_spawn, entity, amount}, state) do
    game_state =
      state.game_state
      |> spawn_power_ups(state.game_config, entity, amount)

    {:noreply, Map.put(state, :game_state, game_state)}
  end

  def handle_info({:activate_power_up, power_up_id}, state) do
    game_state =
      state.game_state
      |> update_in([:power_ups, power_up_id], fn power_up ->
        put_in(power_up, [:aditional_info, :status], :AVAILABLE)
      end)

    {:noreply, Map.put(state, :game_state, game_state)}
  end

  def handle_info(:match_timeout, state) do
    game_state =
      Enum.reduce(Player.alive_players(state.game_state.players), state.game_state, fn {player_id, _player},
                                                                                       game_state ->
        update_in(game_state, [:players, player_id], fn player ->
          Player.kill_player(player)
        end)
      end)

    {:noreply, Map.put(state, :game_state, game_state)}
  end

  def handle_info({:activate_pool, pool_id}, state) do
    state =
      put_in(state, [:game_state, :pools, pool_id, :aditional_info, :status], :READY)

    {:noreply, state}
  end

  ##########################
  # End callbacks
  ##########################

  ##########################
  # Broadcast
  ##########################

  defp broadcast_player_block_actions(game_id, player_id, value) do
    PubSub.broadcast(Arena.PubSub, game_id, {:block_actions, player_id, value})
  end

  def broadcast_player_block_movement(game_id, player_id, value) do
    PubSub.broadcast(Arena.PubSub, game_id, {:block_movement, player_id, value})
  end

  # Broadcast game update to all players
  defp broadcast_player_dead(game_id, player_id) do
    PubSub.broadcast(Arena.PubSub, game_id, {:player_dead, player_id})
  end

  defp broadcast_enable_incomming_messages(game_id) do
    PubSub.broadcast(Arena.PubSub, game_id, :enable_incomming_messages)
  end

  defp broadcast_game_update(state) do
    encoded_state =
      GameEvent.encode(%GameEvent{
        event:
          {:update,
           %GameState{
             game_id: state.game_id,
             players: complete_entities(state.players),
             projectiles: complete_entities(state.projectiles),
             power_ups: complete_entities(state.power_ups),
             pools: complete_entities(state.pools),
             bushes: complete_entities(state.bushes),
             items: complete_entities(state.items),
             server_timestamp: state.server_timestamp,
             player_timestamps: state.player_timestamps,
             zone: state.zone,
             killfeed: state.killfeed,
             damage_taken: state.damage_taken,
             damage_done: state.damage_done,
             status: state.status,
             start_game_timestamp: state.start_game_timestamp,
             obstacles: complete_entities(state.obstacles),
             crates: complete_entities(state.crates),
             traps: complete_entities(state.traps),
             external_wall: complete_entity(state.external_wall)
           }}
      })

    PubSub.broadcast(Arena.PubSub, state.game_id, {:game_update, encoded_state})
  end

  defp broadcast_ping(state) do
    now = DateTime.utc_now() |> DateTime.to_unix(:millisecond)

    encoded_state =
      GameEvent.encode(%GameEvent{
        event: {:ping, %Ping{timestamp_now: now}}
      })

    PubSub.broadcast(Arena.PubSub, state.game_id, {:ping, encoded_state})
  end

  defp broadcast_game_ended(winner, state) do
    game_state = %GameFinished{
      winner: complete_entity(winner),
      players: complete_entities(state.players)
    }

    encoded_state = GameEvent.encode(%GameEvent{event: {:finished, game_state}})
    PubSub.broadcast(Arena.PubSub, state.game_id, {:game_finished, encoded_state})
  end

  defp complete_entities(entities) do
    entities
    |> Enum.reduce(%{}, fn {entity_id, entity}, entities ->
      entity = complete_entity(entity)

      Map.put(entities, entity_id, entity)
    end)
  end

  defp complete_entity(entity) do
    Map.put(entity, :category, to_string(entity.category))
    |> Map.put(:shape, to_string(entity.shape))
    |> Map.put(:aditional_info, entity |> Entities.maybe_add_custom_info())
  end

  ##########################
  # End broadcast
  ##########################

  ##########################
  # Game Initialization
  ##########################

  # Create a new game
  defp new_game(game_id, clients, config) do
    now = System.monotonic_time(:millisecond)
    initial_timestamp = DateTime.utc_now() |> DateTime.to_unix(:millisecond)

    new_game =
      Map.new(game_id: game_id)
      |> Map.put(:last_id, 0)
      |> Map.put(:players, %{})
      |> Map.put(:power_ups, %{})
      |> Map.put(:projectiles, %{})
      |> Map.put(:items, %{})
      |> Map.put(:player_timestamps, %{})
      |> Map.put(:obstacles, %{})
      |> Map.put(:server_timestamp, 0)
      |> Map.put(:client_to_player_map, %{})
      |> Map.put(:pools, %{})
      |> Map.put(:killfeed, [])
      |> Map.put(:damage_taken, %{})
      |> Map.put(:damage_done, %{})
      |> Map.put(:crates, %{})
      |> Map.put(:external_wall, Entities.new_external_wall(0, config.map.radius))
      |> Map.put(:zone, %{
        radius: config.map.radius,
        enabled: config.game.zone_enabled,
        shrinking: false,
        next_zone_change_timestamp:
          initial_timestamp + config.game.zone_shrink_start_ms + config.game.start_game_time_ms +
            config.game.bounty_pick_time_ms
      })
      |> Map.put(:status, :PREPARING)
      |> Map.put(
        :start_game_timestamp,
        initial_timestamp + config.game.start_game_time_ms + config.game.bounty_pick_time_ms
      )
      |> Map.put(:positions, %{})
      |> Map.put(:traps, %{})

    {game, _} =
      Enum.reduce(clients, {new_game, config.map.initial_positions}, fn {client_id, character_name, player_name,
                                                                         _from_pid},
                                                                        {new_game, positions} ->
        last_id = new_game.last_id + 1
        {pos, positions} = get_next_position(positions)
        direction = Physics.get_direction_from_positions(pos, %{x: 0.0, y: 0.0})

        players =
          new_game.players
          |> Map.put(
            last_id,
            Entities.new_player(last_id, character_name, player_name, pos, direction, config, now)
          )

        new_game =
          new_game
          |> Map.put(:last_id, last_id)
          |> Map.put(:players, players)
          |> put_in([:client_to_player_map, client_id], last_id)
          |> put_in([:player_timestamps, last_id], 0)

        {new_game, positions}
      end)

    {obstacles, last_id} = initialize_obstacles(config.map.obstacles, game.last_id)
    {crates, last_id} = initialize_crates(config.crates, last_id)
    {bushes, last_id} = initialize_bushes(config.map.bushes, last_id)
    {pools, last_id} = initialize_pools(config.map.pools, last_id)

    game
    |> Map.put(:last_id, last_id)
    |> Map.put(:obstacles, obstacles)
    |> Map.put(:bushes, bushes)
    |> Map.put(:crates, crates)
    |> Map.put(:pools, pools)
  end

  # Initialize obstacles
  defp initialize_obstacles(obstacles, last_id) do
    Enum.reduce(obstacles, {Map.new(), last_id}, fn obstacle, {obstacles_acc, last_id} ->
      last_id = last_id + 1

      obstacle =
        Entities.new_obstacle(
          last_id,
          obstacle
        )

      obstacle =
        if obstacle.aditional_info.type == "dynamic" do
          Obstacle.handle_transition_init(obstacle)
        else
          obstacle
        end

      obstacles_acc =
        Map.put(
          obstacles_acc,
          last_id,
          obstacle
        )

      {obstacles_acc, last_id}
    end)
  end

  defp initialize_bushes(bushes, last_id) do
    Enum.reduce(bushes, {Map.new(), last_id}, fn bush, {bush_acc, last_id} ->
      last_id = last_id + 1

      bush_acc =
        Map.put(
          bush_acc,
          last_id,
          Entities.new_bush(last_id, bush.position, bush.radius, bush.shape, bush.vertices)
        )

      {bush_acc, last_id}
    end)
  end

  # Initialize crates
  defp initialize_crates(crates, last_id) do
    Enum.reduce(crates, {Map.new(), last_id}, fn crate, {crates_acc, last_id} ->
      last_id = last_id + 1

      crates_acc =
        Map.put(
          crates_acc,
          last_id,
          Entities.new_crate(
            last_id,
            crate
          )
        )

      {crates_acc, last_id}
    end)
  end

  defp initialize_pools(pools, last_id) do
    Enum.reduce(pools, {Map.new(), last_id}, fn pool, {pools_acc, last_id} ->
      last_id = last_id + 1

      pools_acc =
        Map.put(
          pools_acc,
          last_id,
          Entities.new_pool(
            pool
            |> Map.merge(%{id: last_id, owner_id: 9999, skill_key: "0", status: :READY})
          )
        )

      {pools_acc, last_id}
    end)
  end

  ##########################
  # End Game Initialization
  ##########################

  ##########################
  # Game flow. Actions executed in every tick.
  ##########################

  defp remove_expired_effects(game_state) do
    players =
      Map.new(game_state.players, fn {player_id, player} ->
        player = Player.remove_expired_effects(player)
        {player_id, player}
      end)

    %{game_state | players: players}
  end

  defp activate_trap_mechanics(game_state) do
    now = System.monotonic_time(:millisecond)

    activated_traps =
      Enum.filter(game_state.traps, fn {_trap_id, trap} ->
        trap_activated?(trap, now)
      end)

    Enum.reduce(activated_traps, game_state, fn {_trap_id, trap}, game_state_acc ->
      game_state = Trap.do_mechanics(game_state_acc, trap, trap.aditional_info.mechanics)
      trap = put_in(trap, [:aditional_info, :status], :USED)
      update_entity_in_game_state(game_state, trap)
    end)
  end

  defp remove_activated_traps(game_state) do
    remaining_traps =
      Enum.filter(game_state.traps, fn {_trap_id, trap} ->
        trap.aditional_info.status != :USED
      end)
      |> Map.new()

    put_in(game_state, [:traps], remaining_traps)
  end

  def handle_trap_collisions(game_state) do
    players = game_state.players
    traps = game_state.traps |> Enum.filter(fn {_trap_id, trap} -> trap.aditional_info.status == :PREPARED end)

    Enum.reduce(players, game_state, fn {_player_id, player}, game_state_acc ->
      Enum.reduce(traps, game_state_acc, fn {trap_id, trap}, game_state_acc ->
        if trap_id in player.collides_with && trap.aditional_info.activate_on_proximity do
          now = System.monotonic_time(:millisecond)

          trap =
            trap
            |> put_in([:aditional_info, :status], :TRIGGERED)
            |> Map.put(:activate_at, now + trap.aditional_info.activation_delay_ms)

          update_entity_in_game_state(game_state_acc, trap)
        else
          game_state_acc
        end
      end)
    end)
  end

  def prepare_traps(game_state) do
    now = System.monotonic_time(:millisecond)

    Enum.reduce(game_state.traps, game_state, fn {_trap_id, trap}, game_state_acc ->
      if trap_ready?(trap, now) do
        trap = put_in(trap, [:aditional_info, :status], :PREPARED)
        update_entity_in_game_state(game_state_acc, trap)
      else
        game_state_acc
      end
    end)
  end

  defp trap_activated?(trap, now) do
    Map.has_key?(trap, :activate_at) && trap.activate_at < now && trap.aditional_info.status == :TRIGGERED
  end

  defp trap_ready?(trap, now) do
    trap.aditional_info.status == :PENDING && trap.prepare_at < now
  end

  defp remove_effects_on_action(game_state) do
    players =
      Map.new(game_state.players, fn {player_id, player} ->
        player = Player.remove_effects_on_action(player)
        {player_id, player}
      end)

    %{game_state | players: players}
  end

  defp reset_players_effects(game_state) do
    players =
      Map.new(game_state.players, fn {player_id, player} ->
        player = Player.reset_effects(player)
        {player_id, player}
      end)

    %{game_state | players: players}
  end

  defp reduce_players_cooldowns(game_state, time_diff) do
    players =
      Map.new(game_state.players, fn {player_id, player} ->
        cooldowns =
          Map.new(player.aditional_info.cooldowns, fn {skill_key, cooldown} ->
            {skill_key, cooldown - time_diff}
          end)
          |> Map.filter(fn {_skill_key, cooldown} -> cooldown > 0 end)

        player = put_in(player, [:aditional_info, :cooldowns], cooldowns)
        {player_id, player}
      end)

    %{game_state | players: players}
  end

  defp recover_mana(game_state) do
    if game_state.status == :RUNNING do
      players =
        Map.new(game_state.players, fn {player_id, player} ->
          player = Player.recover_mana(player)
          {player_id, player}
        end)

      %{game_state | players: players}
    else
      game_state
    end
  end

  defp move_players(
         %{
           players: players,
           delta_time: delta_time,
           external_wall: external_wall,
           obstacles: obstacles,
           bushes: bushes,
           power_ups: power_ups,
           pools: pools,
           items: items,
           traps: traps,
           crates: crates
         } = game_state
       ) do
    entities_to_collide =
      Map.merge(power_ups, pools) |> Map.merge(items) |> Map.merge(bushes) |> Map.merge(crates) |> Map.merge(traps)

    moved_players =
      players
      |> Physics.move_entities(
        delta_time,
        external_wall,
        Obstacle.get_collisionable_obstacles(obstacles)
      )
      |> update_collisions(players, entities_to_collide)

    %{game_state | players: moved_players}
  end

  # Remove exploded projectiles
  # Update expired to explode status
  defp update_projectiles_status(%{projectiles: projectiles} = game_state) do
    updated_projectiles =
      Enum.reduce(projectiles, projectiles, fn {projectile_id, projectile}, acc ->
        case projectile.aditional_info.status do
          status when status in [:EXPLODED, :CONSUMED] ->
            Map.delete(acc, projectile_id)

          :EXPIRED ->
            Map.put(acc, projectile_id, put_in(projectile, [:aditional_info, :status], :EXPLODED))

          _ ->
            acc
        end
      end)

    %{game_state | projectiles: updated_projectiles}
  end

  defp move_projectiles(
         %{
           projectiles: projectiles,
           players: players,
           obstacles: obstacles,
           crates: crates,
           external_wall: external_wall,
           delta_time: delta_time,
           pools: pools
         } = game_state
       ) do
    # We don't want to move recently exploded projectiles
    {recently_exploded_projectiles, alive_projectiles} =
      projectiles
      |> Map.split_with(fn {_projectile_id, projectile} ->
        projectile.aditional_info.status == :EXPLODED
      end)

    entities_to_collide_with =
      Player.alive_players(players)
      |> Map.merge(Obstacle.get_collisionable_obstacles_for_projectiles(obstacles))
      |> Map.merge(crates)
      |> Map.merge(pools)
      |> Map.merge(%{external_wall.id => external_wall})

    moved_projectiles =
      alive_projectiles
      |> Physics.move_entities(delta_time, external_wall, %{})
      |> update_collisions(
        projectiles,
        entities_to_collide_with
      )
      |> Map.merge(recently_exploded_projectiles)

    %{game_state | projectiles: moved_projectiles}
  end

  defp resolve_players_collisions_with_power_ups(%{players: players, power_ups: power_ups} = game_state) do
    {updated_players, updated_power_ups} =
      Enum.reduce(players, {players, power_ups}, fn {_player_id, player}, {players_acc, power_ups_acc} ->
        case find_collided_power_up(player.collides_with, power_ups_acc) do
          nil ->
            {players_acc, power_ups_acc}

          power_up_id ->
            power_up = Map.get(power_ups_acc, power_up_id)
            process_power_up(player, power_up, players_acc, power_ups_acc)
        end
      end)

    game_state
    |> Map.put(:players, updated_players)
    |> Map.put(:power_ups, updated_power_ups)
  end

  defp resolve_players_collisions_with_items(game_state) do
    {players, items} =
      Enum.reduce(game_state.players, {game_state.players, game_state.items}, fn {_player_id, player},
                                                                                 {players_acc, items_acc} ->
        case find_collided_item(player.collides_with, items_acc) do
          nil ->
            {players_acc, items_acc}

          item ->
            process_item(player, item, players_acc, items_acc)
        end
      end)

    game_state
    |> Map.put(:players, players)
    |> Map.put(:items, items)
  end

  # This method will decide what to do when a projectile has collided with something in the map
  # - If collided with something with the same owner skip that collision
  # - If collided with external wall or obstacle explode projectile
  # - If collided with another player or a crate, do the projectile's damage
  # - Do nothing on unexpected cases
  defp resolve_projectiles_collisions(
         %{
           projectiles: projectiles,
           players: players,
           obstacles: obstacles,
           crates: crates,
           external_wall: external_wall
         } = game_state
       ) do
    {updated_projectiles, updated_players, updated_crates} =
      Enum.reduce(projectiles, {projectiles, players, crates}, fn {_projectile_id, projectile},
                                                                  {_projectiles_acc, players_acc, crates_acc} = accs ->
        # check if the projectiles is inside the walls
        collides_with =
          case projectile.collides_with do
            [] -> [external_wall.id]
            entities -> List.delete(entities, external_wall.id)
          end

        collided_entity = decide_collided_entity(projectile, collides_with, external_wall.id, players_acc, crates_acc)

        collsionable_entities =
          Map.merge(players, crates)

        process_projectile_collision(
          projectile,
          Map.get(collsionable_entities, collided_entity),
          Map.get(obstacles, collided_entity),
          collided_entity == external_wall.id,
          accs
        )
      end)

    game_state
    |> Map.put(:projectiles, updated_projectiles)
    |> Map.put(:players, updated_players)
    |> Map.put(:crates, updated_crates)
  end

  defp add_pools_collisions(
         %{
           players: players,
           crates: crates,
           pools: pools
         } = game_state
       ) do
    entities_to_collide_with =
      Player.alive_players(players)
      |> Map.merge(crates)

    updated_pools = update_collisions(pools, pools, entities_to_collide_with)

    Map.put(game_state, :pools, updated_pools)
  end

  defp resolve_projectiles_effects_on_collisions(
         %{
           projectiles: projectiles,
           players: players,
           obstacles: obstacles,
           pools: pools,
           crates: crates
         } = game_state,
         game_config
       ) do
    Enum.reduce(projectiles, game_state, fn {_projectile_id, projectile}, game_state ->
      case get_in(projectile, [:aditional_info, :on_collide_effects]) do
        nil ->
          game_state

        on_collide_effects ->
          entities_map =
            Map.merge(pools, obstacles)
            |> Map.merge(players)
            |> Map.merge(projectiles)
            |> Map.merge(crates)

          effects_to_apply =
            get_effects_from_config(on_collide_effects.effects, game_config)

          entities_map
          |> Map.take(projectile.collides_with)
          |> get_entities_to_apply(projectile)
          |> apply_effect_to_entities(effects_to_apply, game_state, projectile)
      end
    end)
  end

  defp explode_projectiles(%{projectiles: projectiles} = game_state) do
    Enum.reduce(projectiles, game_state, fn {_projectile_id, projectile}, game_state ->
      if projectile.aditional_info.status == :EXPLODED &&
           Map.get(projectile.aditional_info, :on_explode_mechanics) do
        Skill.do_mechanic(
          game_state,
          projectile,
          projectile.aditional_info.on_explode_mechanics,
          %{skill_direction: projectile.direction}
        )
      else
        game_state
      end
    end)
  end

  defp apply_zone_damage_to_players(%{zone: %{enabled: false}} = game_state, _zone_params), do: game_state

  defp apply_zone_damage_to_players(%{zone: %{enabled: true}} = game_state, zone_params) do
    players = game_state.players
    zone = game_state.zone
    safe_zone = Entities.make_circular_area(0, %{x: 0.0, y: 0.0}, zone.radius)
    safe_ids = Physics.check_collisions(safe_zone, players)
    to_damage_ids = Map.keys(players) -- safe_ids
    now = System.monotonic_time(:millisecond)

    updated_players =
      Enum.reduce(to_damage_ids, players, fn player_id, players_acc ->
        player = Map.get(players_acc, player_id)

        case Player.alive?(player) do
          false ->
            players_acc

          true ->
            last_damage = player |> get_in([:aditional_info, :last_damage_received])
            elapse_time = now - last_damage

            player =
              player
              |> maybe_receive_zone_damage(elapse_time, zone_params.zone_damage_interval_ms, zone_params.zone_damage)

            Map.put(players_acc, player_id, player)
        end
      end)

    %{game_state | players: updated_players}
  end

  defp handle_destroyed_crates(%{crates: crates} = game_state) do
    Enum.reduce(crates, game_state, fn {crate_id, crate}, game_state ->
      if Crate.alive?(crate) or crate.aditional_info.status == :DESTROYED do
        game_state
      else
        amount_of_power_ups = crate.aditional_info.amount_of_power_ups

        Process.send_after(
          self(),
          {:delayed_power_up_spawn, crate, amount_of_power_ups},
          crate.aditional_info.power_up_spawn_delay_ms
        )

        game_state
        |> put_in([:crates, crate_id, :aditional_info, :status], :DESTROYED)
      end
    end)
  end

  defp update_bounties_states(%{status: :RUNNING} = game_state, state) do
    # We only want to run this check for actual players, and we are saving their id in state.clients
    game_state.client_to_player_map
    |> Map.take(state.clients)
    |> Enum.reduce(game_state, fn {client_id, player_id}, game_state ->
      player = get_in(game_state, [:players, player_id])

      if not player.aditional_info.bounty_completed and Player.alive?(player) and
           Bounties.completed_bounty?(player.aditional_info.selected_bounty, [
             GameTracker.get_player_result(player_id)
           ]) do
        spawn(fn ->
          path = "/curse/users/#{client_id}/quest/#{player.aditional_info.selected_bounty.id}/complete_bounty"
          gateway_url = Application.get_env(:arena, :gateway_url)

          Finch.build(:get, "#{gateway_url}#{path}")
          |> Finch.request(Arena.Finch)
        end)

        put_in(game_state, [:players, player_id, :aditional_info, :bounty_completed], true)
      else
        game_state
      end
    end)
  end

  defp update_bounties_states(game_state, _state) do
    game_state
  end

  ##########################
  # End Game Flow
  ##########################

  ##########################
  # Helpers
  ##########################

  defp get_next_position([pos | rest]) do
    positions = rest ++ [pos]
    {pos, positions}
  end

  # Check entities collisions
  defp update_collisions(new_entities, old_entities, entities_to_collide) do
    Enum.reduce(new_entities, %{}, fn {key, value}, acc ->
      entity =
        Map.get(old_entities, key)
        |> Map.merge(value)
        |> Map.put(
          :collides_with,
          Physics.check_collisions(value, entities_to_collide)
        )

      acc |> Map.put(key, entity)
    end)
  end

  # Check if game has ended
  defp check_game_ended(players, last_players_ids) do
    players_alive =
      Map.values(players)
      |> Enum.filter(&Player.alive?/1)

    cond do
      Enum.count(players_alive) == 1 && Enum.count(players) > 1 ->
        {:ended, hd(players_alive)}

      Enum.empty?(players_alive) ->
        ## TODO: We probably should have a better tiebraker (e.g. most kills, less deaths, etc),
        ##    but for now a random between the ones that were alive last is enough
        player = Map.get(players, Enum.random(last_players_ids))
        {:ended, player}

      true ->
        {:ongoing, Enum.map(players_alive, & &1.id)}
    end
  end

  defp maybe_receive_zone_damage(player, elapse_time, zone_damage_interval, zone_damage)
       when elapse_time > zone_damage_interval do
    updated_player = Player.take_damage(player, zone_damage)

    unless Player.alive?(updated_player) do
      send(self(), {:to_killfeed, 9999, player.id})
    end

    updated_player
  end

  defp maybe_receive_zone_damage(player, _elaptime, _zone_damage_interval, _zone_damage),
    do: player

  # Function to process the projectile collision with other entities
  defp process_projectile_collision(
         projectile,
         player,
         obstacle,
         collided_with_external_wall?,
         accs
       )

  # Projectile collided an obstacle or went outside of the arena
  defp process_projectile_collision(
         projectile,
         nil,
         obstacle,
         collided_with_external_wall?,
         {projectiles_acc, players_acc, crate_acc}
       )
       when not is_nil(obstacle) or collided_with_external_wall? do
    projectile = put_in(projectile, [:aditional_info, :status], :EXPLODED)

    {
      Map.put(projectiles_acc, projectile.id, projectile),
      players_acc,
      crate_acc
    }
  end

  # Projectile collided a player
  defp process_projectile_collision(
         projectile,
         %{category: :player} = player,
         _,
         _,
         {projectiles_acc, players_acc, crate_acc}
       ) do
    attacking_player = Map.get(players_acc, projectile.aditional_info.owner_id)
    real_damage = Player.calculate_real_damage(attacking_player, projectile.aditional_info.damage)
    player = Player.take_damage(player, real_damage)

    send(
      self(),
      {:damage_done, projectile.aditional_info.owner_id, real_damage}
    )

    projectile = put_in(projectile, [:aditional_info, :status], :EXPLODED)

    unless Player.alive?(player) do
      send(self(), {:to_killfeed, projectile.aditional_info.owner_id, player.id})
    end

    {
      Map.put(projectiles_acc, projectile.id, projectile),
      Map.put(players_acc, player.id, player),
      crate_acc
    }
  end

  # Projectile collided a crate
  defp process_projectile_collision(
         projectile,
         %{category: :crate} = crate,
         _,
         _,
         {projectiles_acc, players_acc, crates_acc}
       ) do
    attacking_player = Map.get(players_acc, projectile.aditional_info.owner_id)
    real_damage = Player.calculate_real_damage(attacking_player, projectile.aditional_info.damage)
    crate = Crate.take_damage(crate, real_damage)

    projectile = put_in(projectile, [:aditional_info, :status], :EXPLODED)

    {
      Map.put(projectiles_acc, projectile.id, projectile),
      players_acc,
      Map.put(crates_acc, crate.id, crate)
    }
  end

  # Projectile didn't collide at all
  defp process_projectile_collision(_, _, _, _, accs), do: accs

  defp decide_collided_entity(_projectile, [], _external_wall_id, _players, _crates), do: nil

  defp decide_collided_entity(_projectile, [entity_id], external_wall_id, _players, _crates)
       when entity_id == external_wall_id,
       do: external_wall_id

  defp decide_collided_entity(
         projectile,
         [entity_id | other_entities],
         _external_wall_id,
         _players,
         _crates
       )
       when entity_id == projectile.aditional_info.owner_id,
       do: List.first(other_entities, nil)

  defp decide_collided_entity(projectile, [entity_id | other_entities], external_wall_id, players, crates) do
    cond do
      Map.get(players, entity_id) ->
        if Player.alive?(Map.get(players, entity_id)) do
          entity_id
        else
          decide_collided_entity(projectile, other_entities, external_wall_id, players, crates)
        end

      Map.get(crates, entity_id) ->
        if Map.get(crates, entity_id).aditional_info.status != :DESTROYED do
          entity_id
        else
          decide_collided_entity(projectile, other_entities, external_wall_id, players, crates)
        end

      true ->
        entity_id
    end
  end

  defp spawn_power_ups(
         game_state,
         game_config,
         victim,
         amount
       ) do
    distance_to_power_up = game_config.power_ups.power_up.distance_to_power_up

    Enum.reduce(1..amount//1, game_state, fn _, game_state ->
      random_position =
        random_position_in_map(
          game_config.power_ups.power_up.radius,
          game_state.external_wall,
          game_state.obstacles,
          victim.position,
          distance_to_power_up
        )

      last_id = game_state.last_id + 1

      power_up =
        Entities.new_power_up(
          last_id,
          random_position,
          victim.direction,
          victim.id,
          game_config.power_ups.power_up
        )

      Process.send_after(self(), {:activate_power_up, last_id}, game_config.power_ups.power_up.activation_delay_ms)

      game_state
      |> put_in([:power_ups, last_id], power_up)
      |> put_in([:last_id], last_id)
    end)
  end

  defp get_amount_of_power_ups(%{aditional_info: %{power_ups: power_ups}}, power_ups_per_kill) do
    Enum.sort_by(power_ups_per_kill, fn %{minimum_amount: minimum} -> minimum end, :desc)
    |> Enum.find(fn %{minimum_amount: minimum} ->
      minimum <= power_ups
    end)
    |> case do
      %{amount_of_drops: amount} -> amount
      _ -> 0
    end
  end

  defp find_collided_power_up(collides_with, power_ups) do
    Enum.find(collides_with, fn collided_entity_id ->
      Map.has_key?(power_ups, collided_entity_id)
    end)
  end

  defp find_collided_item(collides_with, items) do
    Enum.find_value(collides_with, fn collided_entity_id ->
      Map.get(items, collided_entity_id)
    end)
  end

  defp process_power_up(player, power_up, players_acc, power_ups_acc) do
    if power_up.aditional_info.status == :AVAILABLE && Player.alive?(player) do
      updated_power_up = put_in(power_up, [:aditional_info, :status], :TAKEN)

      updated_player =
        update_in(player, [:aditional_info, :power_ups], fn amount -> amount + 1 end)
        |> update_in([:aditional_info], fn additional_info ->
          Map.update(additional_info, :health, additional_info.health, fn current_health ->
            Utils.increase_value_by_base_percentage(
              current_health,
              additional_info.base_health,
              power_up.aditional_info.power_up_health_modifier
            )
          end)
          |> Map.update(:max_health, additional_info.max_health, fn max_health ->
            Utils.increase_value_by_base_percentage(
              max_health,
              additional_info.base_health,
              power_up.aditional_info.power_up_health_modifier
            )
          end)
        end)

      {Map.put(players_acc, player.id, updated_player), Map.put(power_ups_acc, power_up.id, updated_power_up)}
    else
      {players_acc, power_ups_acc}
    end
  end

  defp handle_pools(%{pools: pools, crates: crates, players: players} = game_state, game_config) do
    entities = Map.merge(crates, players)

    Enum.reduce(pools, game_state, fn {_pool_id, pool}, game_state ->
      Enum.reduce(entities, game_state, fn {entity_id, entity}, acc ->
        if entity_id in pool.collides_with and pool.aditional_info.status == :READY do
          add_pool_effects(acc, game_config, entity, pool)
        else
          Effect.remove_owner_effects(acc, entity_id, pool.id)
        end
      end)
    end)
  end

  defp add_pool_effects(game_state, game_config, entity, pool) do
    if entity.id == pool.aditional_info.owner_id do
      game_state
    else
      Enum.reduce(pool.aditional_info.effects_to_apply, game_state, fn effect_name, game_state ->
        effect = Enum.find(game_config.effects, fn effect -> effect.name == effect_name end)
        Effect.put_effect_to_entity(game_state, entity, pool.id, effect)
      end)
    end
  end

  defp process_item(player, item, players_acc, items_acc) do
    if Player.inventory_full?(player) do
      {players_acc, items_acc}
    else
      player = Player.store_item(player, item.aditional_info)
      {Map.put(players_acc, player.id, player), Map.delete(items_acc, item.id)}
    end
  end

  defp random_position_in_map(object_radius, external_wall, obstacles, initial_position, available_radius) do
    integer_radius = trunc(available_radius - object_radius)
    x = Enum.random(-integer_radius..integer_radius) / 1.0 + initial_position.x
    y = Enum.random(-integer_radius..integer_radius) / 1.0 + initial_position.y

    circle = %{
      id: 1,
      shape: :circle,
      position: %{x: x, y: y},
      radius: object_radius,
      vertices: [],
      speed: 0.0,
      category: :power_up,
      direction: %{x: 0.0, y: 0.0},
      is_moving: false,
      name: "Circle 1"
    }

    collisionable_obstacles =
      Map.filter(obstacles, fn {_obstacle_id, obstacle} -> obstacle.aditional_info.collisionable end)

    Physics.get_closest_available_position(
      circle.position,
      circle,
      external_wall,
      collisionable_obstacles
    )
  end

  defp update_visible_players(%{players: players, bushes: bushes} = game_state, game_config) do
    now = System.monotonic_time(:millisecond)

    Enum.reduce(players, game_state, fn {player_id, player}, game_state ->
      bush_collisions =
        Enum.filter(player.collides_with, fn collided_id ->
          Map.has_key?(bushes, collided_id)
        end)

      visible_players =
        Map.delete(players, player_id)
        |> Enum.reduce([], fn {candicandidate_player_id, candidate_player}, acc ->
          candidate_bush_collisions =
            Enum.filter(candidate_player.collides_with, fn collided_id ->
              Map.has_key?(bushes, collided_id)
            end)

          players_in_same_bush? =
            Enum.any?(bush_collisions, fn collided_id -> collided_id in candidate_bush_collisions end)

          players_close_enough? =
            Physics.distance_between_entities(player, candidate_player) <=
              game_config.game.field_of_view_inside_bush

          enough_time_since_last_skill? =
            now - candidate_player.aditional_info.last_skill_triggered_inside_bush <
              game_config.game.time_visible_in_bush_after_skill

          if Enum.empty?(candidate_bush_collisions) or (players_in_same_bush? and players_close_enough?) or
               enough_time_since_last_skill? do
            [candicandidate_player_id | acc]
          else
            acc
          end
        end)

      update_in(game_state, [:players, player_id, :aditional_info], fn aditional_info ->
        Map.put(aditional_info, :visible_players, visible_players)
        |> Map.put(:on_bush, not Enum.empty?(bush_collisions))
      end)
    end)
  end

  # You'll only apply effect to owned entities or
  # entities without an owner, implement behavior if needed
  defp get_entities_to_apply(collided_entities, projectile) do
    Map.filter(collided_entities, fn {_entity_id, entity} ->
      entity_owned_or_player? =
        not is_nil(entity.aditional_info[:owner_id]) and
          projectile.aditional_info.owner_id == entity.aditional_info.owner_id

      apply_to_entity_type? =
        Atom.to_string(entity.category) in projectile.aditional_info.on_collide_effects.apply_effect_to_entity_type

      apply_to_entity_type? and entity_owned_or_player?
    end)
  end

  defp apply_effect_to_entities(entities, effects, game_state, projectile) do
    Enum.reduce(entities, game_state, fn {_entity_id, entity}, game_state ->
      game_state =
        Enum.reduce(effects, game_state, fn effect, game_state ->
          Effect.put_effect_to_entity(game_state, entity, projectile.id, effect)
        end)

      remove_projectile_on_collision? =
        Enum.any?(effects, fn effect -> effect.consume_projectile end) or
          projectile.aditional_info.status == :CONSUMED

      if remove_projectile_on_collision? do
        consumed_projectile = put_in(projectile, [:aditional_info, :status], :CONSUMED)

        update_entity_in_game_state(game_state, consumed_projectile)
      else
        game_state
      end
    end)
  end

  defp remove_expired_pools(%{pools: pools} = game_state, now) do
    pools =
      Enum.reduce(pools, %{}, fn {pool_id, pool}, acc ->
        time_passed_since_spawn =
          now - pool.aditional_info.spawn_at

        if pool.aditional_info.duration_ms != nil && time_passed_since_spawn >= pool.aditional_info.duration_ms do
          acc
        else
          Map.put(acc, pool_id, pool)
        end
      end)

    Map.put(game_state, :pools, pools)
  end

  def update_entity_in_game_state(game_state, entity) do
    put_in(game_state, [get_entity_path(entity), entity.id], entity)
  end

  defp get_entity_path(%{category: :pool}), do: :pools
  defp get_entity_path(%{category: :player}), do: :players
  defp get_entity_path(%{category: :power_up}), do: :power_ups
  defp get_entity_path(%{category: :projectile}), do: :projectiles
  defp get_entity_path(%{category: :obstacle}), do: :obstacles
  defp get_entity_path(%{category: :trap}), do: :traps
  defp get_entity_path(%{category: :crate}), do: :crates

  def get_effects_from_config([], _game_config), do: []

  def get_effects_from_config(effect_list, game_config) do
    Enum.map(effect_list, fn effect_name ->
      Enum.find(game_config.effects, fn effect -> effect.name == effect_name end)
    end)
  end

  defp put_player_position(%{positions: positions} = game_state, player_id) do
    next_position = Application.get_env(:arena, :players_needed_in_match) - Enum.count(positions)

    {client_id, _player_id} =
      Enum.find(game_state.client_to_player_map, fn {_, map_player_id} -> map_player_id == player_id end)

    update_in(game_state, [:positions], fn positions -> Map.put(positions, client_id, "#{next_position}") end)
  end

  defp maybe_add_kill_to_player(%{players: players} = game_state, player_id) do
    if Map.has_key?(players, player_id) do
      update_in(game_state, [:players, player_id, :aditional_info, :kill_count], fn count ->
        count + 1
      end)
    else
      game_state
    end
  end

  defp handle_obstacles_transitions(%{status: :RUNNING} = game_state) do
    Enum.reduce(game_state.obstacles, game_state, fn {_obstacle_id, obstacle}, game_state ->
      Obstacle.update_obstacle_transition_status(game_state, obstacle)
    end)
  end

  defp handle_obstacles_transitions(game_state) do
    game_state
  end

  ##########################
  # End Helpers
  ##########################
end
