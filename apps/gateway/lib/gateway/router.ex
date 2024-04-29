defmodule Gateway.Router do
  use Gateway, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/champions", Gateway.Champions do
    pipe_through :api
  end

  scope "/auth", Gateway do
    pipe_through :api

    get "/:provider/token/:token_id", Controllers.AuthController, :validate_token
  end

  scope "/users", Gateway do
    pipe_through :api

    post "/users/:user_id/change_username/:username", Controllers.UserController, :change_username
    post "/users/:user_id/change_profile_picture/:profile_picture", Controllers.UserController, :change_profile_picture
  end

  # Other scopes may use custom stacks.
  # scope "/api", Gateway do
  #   pipe_through :api
  # end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:gateway, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: Gateway.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
