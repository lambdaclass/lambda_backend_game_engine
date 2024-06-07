defmodule ConfiguratorWeb.ConfigurationLive.ConfigurationShow do
  use ConfiguratorWeb, :html
  use Phoenix.LiveView
  use Phoenix.Component

  def render do
    render("configuration_show.html")
  end

  def mount(
        _params,
        %{"game" => game, "configuration_group" => configuration_group, "configuration" => configuration},
        socket
      ) do
    data = Jason.decode!(configuration.data)

    socket =
      socket
      |> assign(:game, game)
      |> assign(:configuration_group, configuration_group)
      |> assign(:configuration, configuration)
      |> assign(:data, data)

    {:ok, socket}
  end

  def render_map_as_table(assigns) do
    ~H"""
    <table class="config-table w-full">
      <thead>
        <tr>
          <th><%= ConfiguratorWeb.UtilsConfiguration.key_prettier(@name) %></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <%= for key <- Map.keys(@map) do %>
          <tr>
            <td><%= ConfiguratorWeb.UtilsConfiguration.key_prettier(key) %></td>
            <%= cond do %>
              <% is_map(@map[key]) -> %>
                <td>
                  <.modal id={"#{@name}_#{key}"}>
                    <.render_map_as_table map={@map[key]} name={key} />
                  </.modal>
                  <.button phx-click={show_modal("#{@name}_#{key}")}>
                    Display <%= key %>
                  </.button>
                </td>
              <% is_list(@map[key]) -> %>
                <td>
                  <.modal id={"#{@name}_#{key}"}>
                    <.render_list_as_table list={@map[key]} name={key} />
                  </.modal>
                  <.button phx-click={show_modal("#{@name}_#{key}")}>
                    Display <%= key %>
                  </.button>
                </td>
              <% true -> %>
                <td><%= @map[key] %></td>
            <% end %>
          </tr>
        <% end %>
      </tbody>
    </table>
    """
  end

  def render_list_as_table(assigns) do
    ~H"""
    <table class="config-table w-full">
      <thead>
        <tr>
          <th><%= ConfiguratorWeb.UtilsConfiguration.key_prettier(@name) %></th>
        </tr>
      </thead>
      <tbody>
        <%= for {value, index} <- Enum.with_index(@list) do %>
          <tr>
            <%= cond do %>
              <% is_map(value) -> %>
                <td>
                  <.modal id={"#{@name}_#{index}"}>
                    <.render_map_as_table map={value} name={"#{@name}_#{index}"} />
                  </.modal>
                  <.button phx-click={show_modal("#{@name}_#{index}")}>
                    Display <%= ConfiguratorWeb.UtilsConfiguration.key_prettier("#{@name}_#{index}") %>
                  </.button>
                </td>
              <% true -> %>
                <td><%= value %></td>
            <% end %>
          </tr>
        <% end %>
      </tbody>
    </table>
    """
  end
end
