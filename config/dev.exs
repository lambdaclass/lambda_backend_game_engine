import Config

# Should I delete this?
# Configure your database
config :game_backend, GameBackend.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "game_backend_dev",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"
