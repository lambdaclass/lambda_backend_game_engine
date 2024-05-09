defmodule GameBackend.Matches do
  @moduledoc """
  Matches
  """
  alias Ecto.Multi
  alias GameBackend.Matches.ArenaMatchResult
  alias GameBackend.Repo

  def create_arena_match_results(match_id, results) do
    transaction = Multi.new()

    transaction =
      Enum.reduce(results, transaction, fn result, transaction_acc ->
        attrs = Map.put(result, "match_id", match_id)
        changeset = ArenaMatchResult.changeset(%ArenaMatchResult{}, attrs)
        transaction_acc = Multi.insert(transaction_acc, {:insert, attrs["user_id"]}, changeset)
        transaction_acc
      end)

    Repo.transaction(transaction)
  end
end
