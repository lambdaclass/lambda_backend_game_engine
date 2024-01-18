defmodule Arena.GameUpdater do
  @moduledoc """
  GenServer that broadcasts the latest game update to every client
  (player websocket).
  """

  use GenServer
  alias Arena.Configuration
  alias Arena.Entities
  alias Arena.Serialization.GameEvent
  alias Arena.Serialization.GameState
  alias Arena.Utils
  alias Phoenix.PubSub

  ##################
  # API
  ##################
  def join(game_pid, client_id) do
    GenServer.call(game_pid, {:join, client_id})
  end

  def move(game_pid, player_id, direction, timestamp) do
    GenServer.call(game_pid, {:move, player_id, direction, timestamp})
  end

  def attack(game_pid, player_id, skill) do
    GenServer.call(game_pid, {:attack, player_id, skill})
  end

  ##################
  # Callbacks
  ##################
  def init(%{clients: clients}) do
    game_id = self() |> :erlang.term_to_binary() |> Base58.encode()
    game_config = Configuration.get_game_config()
    game_state = new_game(game_id, clients, game_config.map.radius)

    Process.send_after(self(), :update_game, 1_000)
    {:ok, %{game_config: game_config, game_state: game_state}}
  end

  def handle_info(:update_game, %{game_state: game_state} = state) do
    Process.send_after(self(), :update_game, state.game_config.game.tick_rate_ms)

    entities_to_collide = Map.merge(game_state.players, game_state.projectiles)

    new_players_state =
      update_entities(game_state.players, entities_to_collide, game_state.external_wall)

    new_projectiles_state =
      update_entities(game_state.projectiles, entities_to_collide, game_state.external_wall)

    game_state =
      game_state
      |> Map.put(:players, new_players_state)
      |> Map.put(:projectiles, new_projectiles_state)

    broadcast_game_update(game_state)

    {:noreply, %{state | game_state: game_state}}
  end

  def handle_call({:move, player_id, _direction = {x, y}, timestamp}, _from, state) do
    player =
      state.game_state.players
      |> Map.get(player_id)
      |> Map.put(:direction, Utils.normalize(x, y))

    players = state.game_state.players |> Map.put(player_id, player)

    game_state =
      state.game_state
      |> Map.put(:players, players)
      |> Map.put(:player_timestamp, timestamp)

    {:reply, :ok, %{state | game_state: game_state}}
  end

  def handle_call({:attack, player_id, _skill}, _from, %{game_state: game_state} = state) do
    current_player = Map.get(game_state.players, player_id)
    last_id = game_state.last_id + 1

    projectiles =
      game_state.projectiles
      |> Map.put(
        last_id,
        Entities.new_projectile(
          last_id,
          current_player.position,
          current_player.direction,
          current_player.id
        )
      )

    game_state =
      game_state
      |> Map.put(:last_id, last_id)
      |> Map.put(:projectiles, projectiles)

    {:reply, :ok, %{state | game_state: game_state}}
  end

  def handle_call({:join, client_id}, _from, state) do
    player_id = get_in(state.game_state, [:client_to_player_map, client_id])
    response = %{player_id: player_id, game_config: state.game_config}
    {:reply, {:ok, response}, state}
  end

  ##################
  # Private
  ##################

  # Game creation
  defp new_game(game_id, clients, playable_radius) do
    new_game =
      Map.new(game_id: game_id)
      |> Map.put(:last_id, 0)
      |> Map.put(:players, %{})
      |> Map.put(:projectiles, %{})
      |> Map.put(:player_timestamp, 0)
      |> Map.put(:server_timestamp, 0)
      |> Map.put(:client_to_player_map, %{})
      |> Map.put(:external_wall, Entities.new_external_wall(playable_radius))

    Enum.reduce(clients, new_game, fn {client_id, _from_pid}, new_game ->
      last_id = new_game.last_id + 1
      players = new_game.players |> Map.put(last_id, Entities.new_player(last_id))

      new_game
      |> Map.put(:last_id, last_id)
      |> Map.put(:players, players)
      |> put_in([:client_to_player_map, client_id], last_id)
    end)
  end

  # Move entities and add game fields
  defp update_entities(entities, entities_to_collide, external_wall) do
    new_state = Physics.move_entities(entities, external_wall)

    Enum.reduce(new_state, %{}, fn {key, value}, acc ->
      entity =
        Map.get(entities, key)
        |> Map.merge(value)
        |> Map.put(
          :is_colliding,
          Physics.check_collisions(value, entities_to_collide) |> Enum.any?()
        )

      acc |> Map.put(key, entity)
    end)
  end

  # Broadcast game update to all players
  defp broadcast_game_update(state) do
    game_state = %GameState{
      game_id: state.game_id,
      players: complete_entities(state.players),
      projectiles: complete_entities(state.projectiles),
      server_timestamp: DateTime.utc_now() |> DateTime.to_unix(:millisecond),
      player_timestamp: state.player_timestamp
    }

    encoded_state =
      GameEvent.encode(%GameEvent{
        event: {:update, game_state}
      })

    PubSub.broadcast(Arena.PubSub, state.game_id, {:game_update, encoded_state})
  end

  defp complete_entities(entities) do
    entities
    |> Enum.reduce(%{}, fn {entity_id, entity}, entities ->
      entity =
        Map.put(entity, :category, to_string(entity.category))
        |> Map.put(:shape, to_string(entity.shape))
        |> Map.put(:name, "Entity" <> Integer.to_string(entity_id))
        |> Map.put(:aditional_info, entity |> Entities.maybe_add_custom_info())

      Map.put(entities, entity_id, entity)
    end)
  end
end
