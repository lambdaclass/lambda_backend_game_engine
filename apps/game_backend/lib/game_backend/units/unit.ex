defmodule GameBackend.Units.Unit do
  @moduledoc """
  Units are instances of characters tied to a user.
  """

  use GameBackend.Schema
  import Ecto.Changeset
  alias GameBackend.Campaigns.Level
  alias GameBackend.Items.Item
  alias GameBackend.Units.Characters.Character
  alias GameBackend.Users.User

  @derive {Jason.Encoder,
           only: [:id, :unit_level, :tier, :selected, :slot, :level_id, :user_id, :character]}
  schema "units" do
    field(:unit_level, :integer)
    field(:tier, :integer)
    # field(:rank, :integer)
    field(:selected, :boolean)
    field(:slot, :integer)

    belongs_to(:level, Level)
    belongs_to(:user, User)
    belongs_to(:character, Character)

    has_many(:items, Item)

    timestamps()
  end

  @doc false
  def changeset(unit, attrs) do
    unit
    |> cast(attrs, [:unit_level, :tier, :selected, :slot, :character_id, :user_id, :level_id])
    |> validate_required([:unit_level, :tier, :selected, :character_id])
  end

  @doc """
  Changeset for when selecting or unselecting a unit.
  """
  def selected_changeset(unit, attrs), do: cast(unit, attrs, [:selected, :slot])

  @doc """
  Changeset for when leveling up a unit.
  """
  def level_up_changeset(unit, attrs), do: cast(unit, attrs, [:unit_level])
end
