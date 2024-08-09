defmodule GameBackend.CurseOfMirra.GameConfiguration do
  @moduledoc """
  GameConfiguration schema
  """
  use GameBackend.Schema
  import Ecto.Changeset

  alias GameBackend.Configuration.Version

  @required [
    :tick_rate_ms,
    :bounty_pick_time_ms,
    :start_game_time_ms,
    :end_game_interval_ms,
    :shutdown_game_wait_ms,
    :natural_healing_interval_ms,
    :zone_shrink_start_ms,
    :zone_shrink_radius_by,
    :zone_shrink_interval,
    :zone_stop_interval_ms,
    :zone_start_interval_ms,
    :zone_damage_interval_ms,
    :zone_damage,
    :item_spawn_interval_ms,
    :bots_enabled,
    :zone_enabled,
    :bounties_options_amount,
    :match_timeout_ms,
    :field_of_view_inside_bush,
    :time_visible_in_bush_after_skill,
    :mode,
    :version_id
  ]

  @permitted @required ++ [:respawn_time_ms, :match_duration_ms]

  @derive {Jason.Encoder, only: @permitted}
  schema "game_configurations" do
    field(:tick_rate_ms, :integer)
    field(:bounty_pick_time_ms, :integer)
    field(:start_game_time_ms, :integer)
    field(:end_game_interval_ms, :integer)
    field(:shutdown_game_wait_ms, :integer)
    field(:natural_healing_interval_ms, :integer)
    field(:zone_shrink_start_ms, :integer)
    field(:zone_shrink_radius_by, :integer)
    field(:zone_shrink_interval, :integer)
    field(:zone_stop_interval_ms, :integer)
    field(:zone_start_interval_ms, :integer)
    field(:zone_damage_interval_ms, :integer)
    field(:zone_damage, :integer)
    field(:item_spawn_interval_ms, :integer)
    field(:bots_enabled, :boolean)
    field(:zone_enabled, :boolean)
    field(:bounties_options_amount, :integer)
    field(:match_timeout_ms, :integer)
    field(:field_of_view_inside_bush, :integer)
    field(:time_visible_in_bush_after_skill, :integer)
    field(:mode, Ecto.Enum, values: [:battle_royale, :solo_deathmatch])
    field(:respawn_time_ms, :integer)
    field(:match_duration_ms, :integer)

    belongs_to(:version, Version)

    timestamps()
  end

  @doc false
  def changeset(game_configuration, attrs) do
    game_configuration
    |> cast(attrs, @permitted)
    |> validate_required(@required)
    |> validate_mode()
  end

  def validate_mode(changeset) do
    case get_field(changeset, :mode) do
      :battle_royale ->
        changeset
      :solo_deathmatch ->
        validate_required(changeset, [:respawn_time_ms, :match_duration_ms])
        |> validate_number(:respawn_time_ms, greater_than: 0)
        |> validate_number(:match_duration_ms, greater_than: 0)
      _ ->
        changeset
    end
  end
end
