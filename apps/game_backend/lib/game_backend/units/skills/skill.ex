defmodule GameBackend.Units.Skills.Skill do
  @moduledoc false

  use GameBackend.Schema
  import Ecto.Changeset

  alias GameBackend.Units.Skills.Mechanic

  schema "skills" do
    field(:name, :string)
    has_many(:mechanics, Mechanic)
    field(:cooldown, :integer)
    field(:energy_regen, :integer)
    field(:animation_duration, :integer)

    timestamps()
  end

  @doc false
  def changeset(skill, attrs \\ %{}) do
    skill
    |> cast(attrs, [:name, :cooldown, :energy_regen, :animation_duration])
    |> cast_assoc(:mechanics)
  end
end
