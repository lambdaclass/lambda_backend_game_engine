defmodule Gateway.Repo.Migrations.CreateUnitsUsersAndCharacters do
  use Ecto.Migration

  def change do

    create table(:currencies) do
      add :game_id, :integer, null: false
      add :name, :string, null: false
      timestamps()
    end

    create table(:users) do
      add :game_id, :integer, null: false
      add :username, :string, null: false
      timestamps()
    end

    create table(:user_currencies) do
      add :user_id, references(:users, on_delete: :delete_all)
      add :currency_id, references(:currencies, on_delete: :delete_all)
      add :amount, :integer
      timestamps()
    end

    create table(:characters) do
      add :game_id, :integer, null: false
      add :active, :boolean, null: false
      add :name, :string, null: false
      add :faction, :string, null: false
      add :rarity, :string
      timestamps()
    end

    create table(:levels) do
      add :game_id, :integer, null: false
      add :level_number, :integer
      add :campaign, :integer
      timestamps()
    end

    create table(:units) do
      add :unit_level, :integer
      add :tier, :integer
      add :selected, :boolean, null: false
      add :slot, :integer
      add :user_id, references(:users, on_delete: :delete_all)
      add :level_id, references(:levels, on_delete: :delete_all)
      add :character_id, references(:characters, on_delete: :delete_all), null: false
      timestamps()
    end

    create table(:item_templates) do
      add :game_id, :integer, null: false
      add :name, :string
      add :type, :string
      timestamps()
    end

    create table(:items) do
      add :level, :integer
      add :template_id, references(:item_templates, on_delete: :delete_all)
      add :user_id, references(:users, on_delete: :delete_all)
      add :unit_id, references(:units, on_delete: :delete_all)
      timestamps()
    end

    create unique_index(:currencies, [:name, :game_id])
    create unique_index(:item_templates, [:name, :game_id])
    create unique_index(:characters, [:name, :game_id])
    create unique_index(:users, [:username, :game_id])
    create unique_index(:levels, [:level_number, :campaign, :game_id])
  end
end
