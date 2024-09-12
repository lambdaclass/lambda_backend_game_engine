defmodule BotManager.BotStateMachine do
  @moduledoc """
  This module will take care of deciding what the bot will do on each deciding step
  """

  alias BotManager.Utils
  alias BotManager.Math.Vector

  def decide_action(%{bots_enabled?: false}) do
    {:move, %{x: 0, y: 0}}
  end

  def decide_action(%{game_state: game_state, bot_player: bot_player, attack_blocked: attack_blocked}) do
    closest_player =
      map_directions_to_players(game_state, bot_player)
      |> Enum.min_by(fn player_info -> player_info.distance end)

    random_distance = 1000

    cond do
      attack_blocked ->
        :stand

      closest_player.distance > random_distance ->
        {:move, closest_player.direction}

      closest_player.distance < 50 ->
        {:move, create_random_direction()}

      closest_player.distance <= random_distance ->
        {:attack, closest_player.direction}

      true ->
        {:move, create_random_direction()}
    end
  end

  def decide_action(_), do: :stand

  defp create_random_direction() do
    %{x: Enum.random(1..200)/100 - 1, y: Enum.random(1..200)/100 - 1}
  end

  defp map_directions_to_players(game_state, bot_player) do
    Map.delete(game_state.players, bot_player.id)
    |> Map.filter(fn {_player_id, player} -> Utils.player_alive?(player) end)
    |> Enum.map(fn {_player_id, player} ->
      player_info =
        get_distance_and_direction_to_positions(bot_player.position, player.position)

      Map.merge(player, player_info)
    end)
  end

  defp get_distance_and_direction_to_positions(base_position, end_position) do
    %{x: x, y: y} = Vector.sub(end_position, base_position)
    distance = :math.sqrt(:math.pow(x, 2) + :math.pow(y, 2))
    direction = %{x: x / distance, y: y / distance}

    %{
      direction: direction,
      distance: distance
    }
  end
end
