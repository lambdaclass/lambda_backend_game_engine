defmodule GameBackend.Quests.Quest do
  @moduledoc """
    Quest define objective that users need to accomplish by finish matches that
    creates a %GameBackend.Matches.ArenaMatchResult{} used to check if the user
    have completed  requirements in the :objective field
  """

  use GameBackend.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:description, :conditions, :objective]}
  schema "quests" do
    field(:description, :string)
    field(:type, :string)
    field(:objective, :map)
    field(:reward, :map)
    field(:config_id, :integer)
    field(:conditions, {:array, :map})

    timestamps()
  end

  @required [
    :description,
    :objective,
    :reward,
    :conditions,
    :type,
    :config_id
  ]

  @permitted [] ++ @required

  def changeset(changeset, attrs) do
    changeset
    |> cast(attrs, @permitted)
    |> validate_required(@required)
    |> validate_inclusion(:type, ["daily", "bounty", "weekly"])
  end
end
