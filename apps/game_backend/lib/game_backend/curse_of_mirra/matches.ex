defmodule GameBackend.CurseOfMirra.Matches do
  @moduledoc """
  Matches
  """
  alias GameBackend.Units.Unit
  alias GameBackend.CurseOfMirra.Quests
  alias GameBackend.Users.Currencies
  alias GameBackend.Quests.DailyQuest
  alias GameBackend.Utils
  alias GameBackend.Users
  alias Ecto.Multi
  alias GameBackend.Matches.ArenaMatchResult
  alias GameBackend.Repo

  def create_arena_match_results(match_id, results) do
    Multi.new()
    |> create_arena_match_results(match_id, results)
    |> add_google_users_to_multi(results)
    |> give_prestige(results)
    |> maybe_complete_quests()
    |> Repo.transaction()
  end

  ####################
  # Multi operations #
  ####################

  defp create_arena_match_results(multi, match_id, results) do
    Enum.reduce(results, multi, fn result, multi ->
      attrs =
        Map.put(result, "google_user_id", result["user_id"])
        |> Map.put("match_id", match_id)

      changeset = ArenaMatchResult.changeset(%ArenaMatchResult{}, attrs)
      Multi.insert(multi, {:insert, result["user_id"]}, changeset)
    end)
  end

  defp add_google_users_to_multi(multi, results) do
    Multi.run(multi, :get_google_users, fn repo, _changes_so_far ->
      google_users =
        Enum.map(results, fn result -> result["user_id"] end)
        |> Users.get_google_users_with_todays_daily_quests(repo)

      {:ok, google_users}
    end)
  end

  defp give_prestige(multi, results) do
    prestige_config = Application.get_env(:game_backend, :arena_prestige)

    Enum.reduce(results, multi, fn result, transaction_acc ->
      Multi.run(transaction_acc, {:update_prestige, result["user_id"]}, fn repo, %{get_google_users: google_users} ->
        google_user =
          Enum.find(google_users, fn google_user -> google_user.id == result["user_id"] end)

        Enum.find(google_user.user.units, fn unit -> unit.character.name == result["character"] end)
        |> case do
          nil ->
            {:error, :unit_not_found}

          unit ->
            reward = match_prestige_reward(unit, result["position"], prestige_config[:rewards])
            changes = calculate_rank_and_amount_changes(unit, reward, prestige_config[:ranks])

            Unit.curse_of_mirra_update_changeset(unit, changes)
            |> repo.update()
        end
      end)
    end)
  end

  defp maybe_complete_quests(multi) do
    Multi.run(multi, :insert_completed_quests_result, fn repo,
                                                         %{
                                                           get_google_users: google_users
                                                         } ->
      correctly_updated_list =
        Enum.map(google_users, fn
          google_user ->
            Quests.get_google_user_daily_quests_completed(google_user)
            |> Enum.map(fn %DailyQuest{quest: quest} = daily_quest ->
              updated_match =
                DailyQuest.changeset(daily_quest, %{
                  completed: true,
                  completed_at: DateTime.utc_now()
                })
                |> repo.update()

              inserted_currency =
                Currencies.add_currency_by_name_and_game(
                  google_user.user.id,
                  quest.reward["currency"],
                  Utils.get_game_id(:curse_of_mirra),
                  quest.reward["amount"]
                )

              get_operation_result(updated_match, inserted_currency)
            end)
        end)
        |> List.flatten()

      if Enum.empty?(correctly_updated_list) or Enum.all?(correctly_updated_list, fn {result, _} -> result == :ok end) do
        {:ok, nil}
      else
        {:error, nil}
      end
    end)
  end

  ####################
  #      Helpers     #
  ####################
  defp match_prestige_reward(unit, position, rewards) do
    Map.get(rewards, position)
    |> Enum.find(fn %{min: minp, max: maxp} -> unit.prestige in minp..maxp end)
    |> Map.get(:reward)
  end

  defp calculate_rank_and_amount_changes(unit, reward, ranks) when reward >= 0 do
    amount = unit.prestige + reward
    new_rank = Enum.find(ranks, fn rank -> amount in rank.min..rank.max end)

    %{rank: rank_name_converter(new_rank.rank), sub_rank: new_rank.sub_rank, prestige: amount}
  end

  defp calculate_rank_and_amount_changes(unit, loss_amount, ranks) when loss_amount < 0 do
    current_rank = Enum.find(ranks, fn rank -> unit.prestige in rank.min..rank.max end)
    amount = max(unit.prestige + loss_amount, current_rank.min)
    %{prestige: amount}
  end

  defp get_operation_result({:ok, _}, {:ok, _}), do: {:ok, nil}
  defp get_operation_result(_, _), do: {:error, nil}

  defp rank_name_converter("bronze"), do: 1
  defp rank_name_converter("silver"), do: 2
  defp rank_name_converter("gold"), do: 3
  defp rank_name_converter("platinum"), do: 4
  defp rank_name_converter("diamond"), do: 5
  defp rank_name_converter("champion"), do: 6
  defp rank_name_converter("grandmaster"), do: 7
end
