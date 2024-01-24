import Config

# Configure your database
config :items, Items.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "game_backend_dev",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10
