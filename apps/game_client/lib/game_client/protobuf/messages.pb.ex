defmodule GameClient.Protobuf.GameStatusPB do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:PREPARING, 0)
  field(:RUNNING, 1)
  field(:ENDED, 2)
  field(:SELECTING_BOUNTY, 3)
end

defmodule GameClient.Protobuf.ProjectileStatusPB do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:ACTIVE, 0)
  field(:EXPLODED, 1)
  field(:CONSUMED, 2)
end

defmodule GameClient.Protobuf.CrateStatusPB do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:FINE, 0)
  field(:DESTROYED, 1)
end

defmodule GameClient.Protobuf.PowerUpstatusPB do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:AVAILABLE, 0)
  field(:TAKEN, 1)
  field(:UNAVAILABLE, 2)
end

defmodule GameClient.Protobuf.PlayerActionTypePB do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:MOVING, 0)
  field(:STARTING_SKILL_1, 1)
  field(:STARTING_SKILL_2, 2)
  field(:EXECUTING_SKILL_1, 3)
  field(:EXECUTING_SKILL_2, 4)
  field(:EXECUTING_SKILL_3, 5)
end

defmodule GameClient.Protobuf.TrapStatusPB do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:PENDING, 0)
  field(:PREPARED, 1)
  field(:TRIGGERED, 2)
  field(:USED, 3)
end

defmodule GameClient.Protobuf.PoolStatusPB do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:WAITING, 0)
  field(:READY, 1)
end

defmodule GameClient.Protobuf.DirectionPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:x, 1, type: :float)
  field(:y, 2, type: :float)
end

defmodule GameClient.Protobuf.PositionPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:x, 1, type: :float)
  field(:y, 2, type: :float)
end

defmodule GameClient.Protobuf.LobbyEventPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  oneof(:event, 0)

  field(:leave, 1, type: GameClient.Protobuf.LeaveLobbyPB, oneof: 0)
  field(:left, 2, type: GameClient.Protobuf.LeftLobbyPB, oneof: 0)
  field(:joined, 3, type: GameClient.Protobuf.JoinedLobbyPB, oneof: 0)
  field(:game, 4, type: GameClient.Protobuf.GameStatePB, oneof: 0)
end

defmodule GameClient.Protobuf.LeaveLobbyPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"
end

defmodule GameClient.Protobuf.LeftLobbyPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"
end

defmodule GameClient.Protobuf.JoinedLobbyPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"
end

defmodule GameClient.Protobuf.GameEventPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  oneof(:event, 0)

  field(:joined, 1, type: GameClient.Protobuf.GameJoinedPB, oneof: 0)
  field(:update, 2, type: GameClient.Protobuf.GameStatePB, oneof: 0)
  field(:finished, 3, type: GameClient.Protobuf.GameFinishedPB, oneof: 0)
  field(:ping, 4, type: GameClient.Protobuf.PingUpdatePB, oneof: 0)
  field(:toggle_bots, 5, type: GameClient.Protobuf.ToggleBotsPB, json_name: "toggleBots", oneof: 0)
end

defmodule GameClient.Protobuf.GameFinishedPB.PlayersEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameFinishedPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:winner, 1, type: GameClient.Protobuf.EntityPB)

  field(:players, 2,
    repeated: true,
    type: GameClient.Protobuf.GameFinishedPB.PlayersEntry,
    map: true
  )
end

defmodule GameClient.Protobuf.PingUpdatePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:latency, 1, type: :uint64)
end

defmodule GameClient.Protobuf.GameJoinedPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:player_id, 1, type: :uint64, json_name: "playerId")
  field(:config, 2, type: GameClient.Protobuf.ConfigurationPB)
  field(:bounties, 3, repeated: true, type: GameClient.Protobuf.BountyInfoPB)
end

defmodule GameClient.Protobuf.ConfigurationPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:game, 1, type: GameClient.Protobuf.ConfigGamePB)
  field(:map, 2, type: GameClient.Protobuf.ConfigMapPB)
  field(:characters, 3, repeated: true, type: GameClient.Protobuf.ConfigCharacterPB)
  field(:client_config, 4, type: GameClient.Protobuf.ClientConfigPB, json_name: "clientConfig")
end

defmodule GameClient.Protobuf.ConfigGamePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:tick_rate_ms, 1, type: :float, json_name: "tickRateMs")
  field(:bounty_pick_time_ms, 2, type: :float, json_name: "bountyPickTimeMs")
  field(:start_game_time_ms, 3, type: :float, json_name: "startGameTimeMs")
end

defmodule GameClient.Protobuf.ConfigMapPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:radius, 1, type: :float)
end

defmodule GameClient.Protobuf.ConfigCharacterPB.SkillsEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :string)
  field(:value, 2, type: GameClient.Protobuf.ConfigSkillPB)
end

defmodule GameClient.Protobuf.ConfigCharacterPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:name, 1, type: :string)
  field(:active, 2, type: :bool)
  field(:base_speed, 3, type: :float, json_name: "baseSpeed")
  field(:base_size, 4, type: :float, json_name: "baseSize")
  field(:base_health, 5, type: :uint64, json_name: "baseHealth")
  field(:max_inventory_size, 6, type: :uint64, json_name: "maxInventorySize")

  field(:skills, 7,
    repeated: true,
    type: GameClient.Protobuf.ConfigCharacterPB.SkillsEntry,
    map: true
  )
end

defmodule GameClient.Protobuf.ClientConfigPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:server_update, 1,
    type: GameClient.Protobuf.ConfigServerUpdatePB,
    json_name: "serverUpdate"
  )
end

defmodule GameClient.Protobuf.ConfigServerUpdatePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:timestamp_difference_samples_to_check_warning, 1,
    type: :uint64,
    json_name: "timestampDifferenceSamplesToCheckWarning"
  )

  field(:timestamp_differences_samples_max_length, 2,
    type: :uint64,
    json_name: "timestampDifferencesSamplesMaxLength"
  )

  field(:show_warning_threshold, 3, type: :uint64, json_name: "showWarningThreshold")
  field(:stop_warning_threshold, 4, type: :uint64, json_name: "stopWarningThreshold")
  field(:ms_without_update_show_warning, 5, type: :uint64, json_name: "msWithoutUpdateShowWarning")
  field(:ms_without_update_disconnect, 6, type: :uint64, json_name: "msWithoutUpdateDisconnect")
end

defmodule GameClient.Protobuf.ConfigSkillPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:name, 1, type: :string)
  field(:cooldown_ms, 2, type: :uint64, json_name: "cooldownMs")
  field(:execution_duration_ms, 3, type: :uint64, json_name: "executionDurationMs")
  field(:targetting_radius, 4, type: :float, json_name: "targettingRadius")
  field(:targetting_angle, 5, type: :float, json_name: "targettingAngle")
  field(:targetting_range, 6, type: :float, json_name: "targettingRange")
  field(:stamina_cost, 7, type: :uint64, json_name: "staminaCost")
  field(:targetting_offset, 8, type: :float, json_name: "targettingOffset")
end

defmodule GameClient.Protobuf.GameStatePB.PlayersEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB.ProjectilesEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB.PlayerTimestampsEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: :int64)
end

defmodule GameClient.Protobuf.GameStatePB.DamageTakenEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: :uint64)
end

defmodule GameClient.Protobuf.GameStatePB.DamageDoneEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: :uint64)
end

defmodule GameClient.Protobuf.GameStatePB.PowerUpsEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB.ItemsEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB.ObstaclesEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB.PoolsEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB.CratesEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB.BushesEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB.TrapsEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :uint64)
  field(:value, 2, type: GameClient.Protobuf.EntityPB)
end

defmodule GameClient.Protobuf.GameStatePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:game_id, 1, type: :string, json_name: "gameId")
  field(:players, 2, repeated: true, type: GameClient.Protobuf.GameStatePB.PlayersEntry, map: true)

  field(:projectiles, 3,
    repeated: true,
    type: GameClient.Protobuf.GameStatePB.ProjectilesEntry,
    map: true
  )

  field(:player_timestamps, 4,
    repeated: true,
    type: GameClient.Protobuf.GameStatePB.PlayerTimestampsEntry,
    json_name: "playerTimestamps",
    map: true
  )

  field(:server_timestamp, 5, type: :int64, json_name: "serverTimestamp")
  field(:zone, 6, type: GameClient.Protobuf.ZonePB)
  field(:killfeed, 7, repeated: true, type: GameClient.Protobuf.KillEntryPB)

  field(:damage_taken, 8,
    repeated: true,
    type: GameClient.Protobuf.GameStatePB.DamageTakenEntry,
    json_name: "damageTaken",
    map: true
  )

  field(:damage_done, 9,
    repeated: true,
    type: GameClient.Protobuf.GameStatePB.DamageDoneEntry,
    json_name: "damageDone",
    map: true
  )

  field(:power_ups, 10,
    repeated: true,
    type: GameClient.Protobuf.GameStatePB.PowerUpsEntry,
    json_name: "powerUps",
    map: true
  )

  field(:status, 11, type: GameClient.Protobuf.GameStatusPB, enum: true)
  field(:start_game_timestamp, 12, type: :int64, json_name: "startGameTimestamp")
  field(:items, 13, repeated: true, type: GameClient.Protobuf.GameStatePB.ItemsEntry, map: true)

  field(:obstacles, 14,
    repeated: true,
    type: GameClient.Protobuf.GameStatePB.ObstaclesEntry,
    map: true
  )

  field(:pools, 15, repeated: true, type: GameClient.Protobuf.GameStatePB.PoolsEntry, map: true)
  field(:crates, 16, repeated: true, type: GameClient.Protobuf.GameStatePB.CratesEntry, map: true)
  field(:bushes, 17, repeated: true, type: GameClient.Protobuf.GameStatePB.BushesEntry, map: true)
  field(:traps, 18, repeated: true, type: GameClient.Protobuf.GameStatePB.TrapsEntry, map: true)
end

defmodule GameClient.Protobuf.EntityPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  oneof(:aditional_info, 0)

  field(:id, 1, type: :uint64)
  field(:category, 2, type: :string)
  field(:shape, 3, type: :string)
  field(:name, 4, type: :string)
  field(:position, 5, type: GameClient.Protobuf.PositionPB)
  field(:radius, 6, type: :float)
  field(:vertices, 7, repeated: true, type: GameClient.Protobuf.PositionPB)
  field(:collides_with, 8, repeated: true, type: :uint64, json_name: "collidesWith")
  field(:speed, 9, type: :float)
  field(:direction, 10, type: GameClient.Protobuf.DirectionPB)
  field(:is_moving, 11, type: :bool, json_name: "isMoving")
  field(:player, 12, type: GameClient.Protobuf.PlayerPB, oneof: 0)
  field(:projectile, 13, type: GameClient.Protobuf.ProjectilePB, oneof: 0)
  field(:obstacle, 14, type: GameClient.Protobuf.ObstaclePB, oneof: 0)
  field(:power_up, 15, type: GameClient.Protobuf.PowerUpPB, json_name: "powerUp", oneof: 0)
  field(:item, 16, type: GameClient.Protobuf.ItemPB, oneof: 0)
  field(:pool, 17, type: GameClient.Protobuf.PoolPB, oneof: 0)
  field(:crate, 18, type: GameClient.Protobuf.CratePB, oneof: 0)
  field(:bush, 19, type: GameClient.Protobuf.BushPB, oneof: 0)
  field(:trap, 20, type: GameClient.Protobuf.TrapPB, oneof: 0)
end

defmodule GameClient.Protobuf.PlayerPB.CooldownsEntry do
  @moduledoc false

  use Protobuf, map: true, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:key, 1, type: :string)
  field(:value, 2, type: :uint64)
end

defmodule GameClient.Protobuf.PlayerPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:health, 1, type: :uint64)
  field(:kill_count, 2, type: :uint64, json_name: "killCount")

  field(:current_actions, 3,
    repeated: true,
    type: GameClient.Protobuf.PlayerActionPB,
    json_name: "currentActions"
  )

  field(:available_stamina, 4, type: :uint64, json_name: "availableStamina")
  field(:max_stamina, 5, type: :uint64, json_name: "maxStamina")
  field(:stamina_interval, 6, type: :uint64, json_name: "staminaInterval")
  field(:recharging_stamina, 7, type: :bool, json_name: "rechargingStamina")
  field(:character_name, 8, type: :string, json_name: "characterName")
  field(:power_ups, 9, type: :uint64, json_name: "powerUps")
  field(:effects, 10, repeated: true, type: GameClient.Protobuf.EffectPB)
  field(:inventory, 11, type: GameClient.Protobuf.ItemPB)

  field(:cooldowns, 12,
    repeated: true,
    type: GameClient.Protobuf.PlayerPB.CooldownsEntry,
    map: true
  )

  field(:visible_players, 13, repeated: true, type: :uint64, json_name: "visiblePlayers")
  field(:on_bush, 14, type: :bool, json_name: "onBush")
  field(:forced_movement, 15, type: :bool, json_name: "forcedMovement")
  field(:bounty_completed, 16, type: :bool, json_name: "bountyCompleted")
end

defmodule GameClient.Protobuf.EffectPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:name, 1, type: :string)
  field(:duration_ms, 2, type: :uint32, json_name: "durationMs")
  field(:id, 3, type: :uint64)
end

defmodule GameClient.Protobuf.ItemPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:name, 2, type: :string)
end

defmodule GameClient.Protobuf.ProjectilePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:damage, 1, type: :uint64)
  field(:owner_id, 2, type: :uint64, json_name: "ownerId")
  field(:status, 3, type: GameClient.Protobuf.ProjectileStatusPB, enum: true)
  field(:skill_key, 4, type: :string, json_name: "skillKey")
end

defmodule GameClient.Protobuf.ObstaclePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:color, 1, type: :string)
  field(:collisionable, 2, type: :bool)
  field(:status, 3, type: :string)
end

defmodule GameClient.Protobuf.PowerUpPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:owner_id, 1, type: :uint64, json_name: "ownerId")
  field(:status, 2, type: GameClient.Protobuf.PowerUpstatusPB, enum: true)
end

defmodule GameClient.Protobuf.CratePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:health, 1, type: :uint64)
  field(:amount_of_power_ups, 2, type: :uint64, json_name: "amountOfPowerUps")
  field(:status, 3, type: GameClient.Protobuf.CrateStatusPB, enum: true)
end

defmodule GameClient.Protobuf.PoolPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:owner_id, 1, type: :uint64, json_name: "ownerId")
  field(:status, 2, type: GameClient.Protobuf.PoolStatusPB, enum: true)
  field(:effects, 3, repeated: true, type: GameClient.Protobuf.EffectPB)
  field(:skill_key, 4, type: :string, json_name: "skillKey")
end

defmodule GameClient.Protobuf.BushPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"
end

defmodule GameClient.Protobuf.TrapPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:owner_id, 1, type: :uint64, json_name: "ownerId")
  field(:name, 2, type: :string)
  field(:status, 3, type: GameClient.Protobuf.TrapStatusPB, enum: true)
end

defmodule GameClient.Protobuf.PlayerActionPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:action, 1, type: GameClient.Protobuf.PlayerActionTypePB, enum: true)
  field(:duration, 2, type: :uint64)
  field(:destination, 3, type: GameClient.Protobuf.PositionPB)
  field(:direction, 4, type: GameClient.Protobuf.PositionPB)
end

defmodule GameClient.Protobuf.MovePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:direction, 1, type: GameClient.Protobuf.DirectionPB)
end

defmodule GameClient.Protobuf.AttackPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:skill, 1, type: :string)
  field(:parameters, 2, type: GameClient.Protobuf.AttackParametersPB)
end

defmodule GameClient.Protobuf.AttackParametersPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:target, 1, type: GameClient.Protobuf.DirectionPB)
end

defmodule GameClient.Protobuf.UseItemPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:item, 1, type: :uint64)
end

defmodule GameClient.Protobuf.SelectBountyPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:bounty_quest_id, 1, type: :string, json_name: "bountyQuestId")
end

defmodule GameClient.Protobuf.ToggleZonePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:active, 1, type: :bool)
end

defmodule GameClient.Protobuf.ToggleBotsPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:active, 1, type: :bool)
end

defmodule GameClient.Protobuf.ChangeTickratePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:tickrate, 1, type: :int64)
end

defmodule GameClient.Protobuf.GameActionPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  oneof(:action_type, 0)

  field(:move, 1, type: GameClient.Protobuf.MovePB, oneof: 0)
  field(:attack, 2, type: GameClient.Protobuf.AttackPB, oneof: 0)
  field(:use_item, 4, type: GameClient.Protobuf.UseItemPB, json_name: "useItem", oneof: 0)

  field(:select_bounty, 5,
    type: GameClient.Protobuf.SelectBountyPB,
    json_name: "selectBounty",
    oneof: 0
  )

  field(:toggle_zone, 6, type: GameClient.Protobuf.ToggleZonePB, json_name: "toggleZone", oneof: 0)
  field(:toggle_bots, 7, type: GameClient.Protobuf.ToggleBotsPB, json_name: "toggleBots", oneof: 0)

  field(:change_tickrate, 8,
    type: GameClient.Protobuf.ChangeTickratePB,
    json_name: "changeTickrate",
    oneof: 0
  )

  field(:timestamp, 3, type: :int64)
end

defmodule GameClient.Protobuf.ZonePB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:radius, 1, type: :float)
  field(:enabled, 2, type: :bool)
  field(:next_zone_change_timestamp, 3, type: :int64, json_name: "nextZoneChangeTimestamp")
  field(:shrinking, 4, type: :bool)
end

defmodule GameClient.Protobuf.KillEntryPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:killer_id, 1, type: :uint64, json_name: "killerId")
  field(:victim_id, 2, type: :uint64, json_name: "victimId")
end

defmodule GameClient.Protobuf.BountyInfoPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:id, 1, type: :string)
  field(:description, 2, type: :string)
  field(:quest_type, 3, type: :string, json_name: "questType")
  field(:reward, 4, type: GameClient.Protobuf.CurrencyRewardPB)
end

defmodule GameClient.Protobuf.CurrencyRewardPB do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.12.0"

  field(:currency, 1, type: :string)
  field(:amount, 2, type: :int64)
end
