defmodule Arena.QuickGameHandler do
  @moduledoc """
  Module that handles cowboy websocket requests
  """
  alias Arena.Authentication.GatewayTokenManager
  alias Arena.Authentication.GatewaySigner
  alias Arena.GameLauncher
  alias Arena.Serialization.ProtoGameState
  alias Arena.Serialization.ProtoJoinedLobby
  alias Arena.Serialization.ProtoLobbyEvent

  @behaviour :cowboy_websocket

  @impl true
  def init(req, _opts) do
    [{"gateway_jwt", jwt}] = :cowboy_req.parse_qs(req)
    signer = GatewaySigner.get_signer()
    {:ok, %{"sub" => user_id}} = GatewayTokenManager.verify_and_validate(jwt, signer)
    character_name = :cowboy_req.binding(:character_name, req)
    player_name = :cowboy_req.binding(:player_name, req)
    {:cowboy_websocket, req, %{client_id: user_id, character_name: character_name, player_name: player_name}}
  end

  @impl true
  def websocket_init(state) do
    GameLauncher.join_quick_game(state.client_id, state.character_name, state.player_name)

    joined_msg = LobbyEvent.encode(%LobbyEvent{event: {:joined, %JoinedLobby{}}})
    {:reply, {:binary, joined_msg}, state}
  end

  @impl true
  def websocket_info(:leave_waiting_game, state) do
    {:stop, state}
  end

  @impl true
  def websocket_info({:join_game, game_id}, state) do
    game = %GameState{game_id: game_id, players: %{}, projectiles: %{}}
    game_msg = LobbyEvent.encode(%LobbyEvent{event: {:game, game}})
    {:reply, {:binary, game_msg}, state}
  end

  @impl true
  def websocket_handle(:ping, state) do
    {:reply, {:pong, ""}, state}
  end
end
