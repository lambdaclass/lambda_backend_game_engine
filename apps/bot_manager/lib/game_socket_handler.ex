defmodule BotManager.GameSocketHandler do
  @moduledoc """
  BotManager socket handler.
  It handles the communication with the server.
  """

  use WebSockex, restart: :transient
  require Logger

  @message_delay_ms 300

  def start_link(%{"bot_client" => bot_client, "game_id" => game_id}) do
    ws_url = ws_url(bot_client, game_id)

    WebSockex.start_link(ws_url, __MODULE__, %{
      client_id: bot_client,
      game_id: game_id
    })
  end

  def handle_connect(_conn, state) do
    send(self(), :move)
    send(self(), :attack)
    {:ok, state}
  end

  def handle_frame(_frame, state) do
    {:ok, state}
  end

  def handle_info(:move, state) do
    Process.send_after(
      self(),
      :move,
      @message_delay_ms
    )

    timestamp = DateTime.utc_now() |> DateTime.to_unix(:millisecond)
    {x, y} = create_random_movement()

    game_action =
      BotManager.Protobuf.GameAction.encode(%BotManager.Protobuf.GameAction{
        action_type:
          {:move,
           %BotManager.Protobuf.Move{
             direction: %BotManager.Protobuf.Direction{
               x: x,
               y: y
             }
           }},
        timestamp: timestamp
      })

    WebSockex.cast(self(), {:send, {:binary, game_action}})

    {:ok, state}
  end

  def handle_info(:attack, state) do
    timestamp = DateTime.utc_now() |> DateTime.to_unix(:millisecond)
    {x, y} = create_random_movement()

    game_action =
      BotManager.Protobuf.GameAction.encode(%BotManager.Protobuf.GameAction{
        action_type:
          {:attack,
           %BotManager.Protobuf.Attack{
             skill: "1",
             parameters: %BotManager.Protobuf.AttackParameters{
               target: %BotManager.Protobuf.Direction{
                 x: x,
                 y: y
               }
             }
           }},
        timestamp: timestamp
      })

    WebSockex.cast(self(), {:send, {:binary, game_action}})

    Process.send_after(self(), :attack, 300, [])
    {:ok, state}
  end

  def handle_cast({:send, {_type, _msg} = frame}, state) do
    # Logger.info("Sending frame with payload: #{msg}")
    {:reply, frame, state}
  end

  def terminate(_, _, _) do
    Logger.info("Websocket terminated")
    :ok
  end

  defp ws_url(player_id, game_id) do
    host = System.get_env("SERVER_HOST", "localhost:4000")

    case System.get_env("SSL_ENABLED") do
      "true" ->
        "wss://#{host}/play/#{game_id}/#{player_id}"

      _ ->
        "ws://#{host}/play/#{game_id}/#{player_id}"
    end
  end

  defp create_random_movement() do
    Enum.random([
      {1, 0},
      {0, -1},
      {-1, 0},
      {0, 1}
    ])
  end
end
