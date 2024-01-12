# Player attributes

## Non-changeable attributes

- `id`: unique identifier for the player
- `character`: character player is using
- `status`: represents the player state (e.g. alive, dead, etc)
- `kill_count`: number of kills by the player
- `death_count`: number of times a player has died
- `effects`: List of effects affecting the player
- `position`: Current position
- `direction`: angle where the player is facing
- `actions`: List of action taken by the player with their remaining duration
- `inventory`: List of loots that the player is holding and can activate

## Changeable attributes

- `health`: current health of the player
- `cooldowns`: Map containing the remaining cooldown for each skill, if skill is not present it has no pending cooldown. To change this attribute you can either say `cooldown` to affect all of them or use `.` syntax to target a specific key (e.g `cooldown.1` to target skill `1`)
- `size`: Size for the player model and collision math
