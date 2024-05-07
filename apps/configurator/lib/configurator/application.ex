defmodule Configurator.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      ConfiguratorWeb.Telemetry,
      Configurator.Repo,
      {Phoenix.PubSub, name: Configurator.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Configurator.Finch},
      # Start a worker by calling: Configurator.Worker.start_link(arg)
      # {Configurator.Worker, arg},
      # Start to serve requests, typically the last entry
      ConfiguratorWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Configurator.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    ConfiguratorWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
