defmodule DarkWorldsServer.Config.Characters.Character do
  use Ecto.Schema
  import Ecto.Changeset

  alias DarkWorldsServer.Config.Characters.CharacterSkill
  alias DarkWorldsServer.Config.Characters.Skill

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "characters" do
    field(:active, :boolean, default: false)
    field(:name, :string)
    field(:base_speed, :integer)
    field(:base_size, :integer)
    field(:base_health, :integer)
    field(:max_inventory_size, :integer)

    many_to_many(:character_skills, Skill, join_through: CharacterSkill)

    timestamps()
  end

  @doc false
  def changeset(character, attrs) do
    character
    |> cast(attrs, [:name, :active, :base_speed, :base_size, :base_health, :max_inventory_size])
    |> validate_required([:name, :active, :base_speed, :base_size, :base_health, :max_inventory_size])
  end
end
