defmodule GameBackend.Quests.UserQuest do
  @moduledoc """
    Relation between users and quests, will determine if a quest is completed or no
  """

  use GameBackend.Schema
  import Ecto.Changeset

  alias GameBackend.Quests.Quest
  alias GameBackend.Users.User

  @derive {Jason.Encoder, only: [:quest, :status, :progress, :goal]}
  schema "user_quests" do
    field(:completed_at, :utc_datetime)
    field(:status, :string)
    belongs_to(:quest, Quest)
    belongs_to(:user, User)

    field(:progress, :integer, virtual: true)
    field(:goal, :integer, virtual: true)

    timestamps()
  end

  @required [
    :quest_id,
    :user_id,
    :status
  ]

  @permitted [:completed_at] ++ @required

  def changeset(changeset, attrs) do
    changeset
    |> cast(attrs, @permitted)
    |> validate_required(@required)
    |> validate_inclusion(:status, ["available", "completed", "rerolled", "failed"])
  end
end
