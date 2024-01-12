#![allow(non_snake_case)] // rustler macros generate non snake case names and dont use this allow themselves

mod collision_detection;
mod game_state;
mod map;

use std::collections::HashMap;

use crate::game_state::GameState;
use crate::map::{Direction, Entity, Position};

#[rustler::nif()]
fn add(a: i64, b: i64) -> i64 {
    a + b
}

#[rustler::nif()]
fn new_game(game_id: String) -> GameState {
    GameState::new(game_id)
}

#[rustler::nif()]
fn add_player(game_state: GameState, _player_id: u64) -> GameState {
    let mut game_state: GameState = game_state;
    // Check here if the player doesn't exist.
    // If it does, it resets it to [0,0] position.
    let player = Entity::new_circle(
        game_state.next_id(),
        Position { x: 0.0, y: 0.0 },
        40.0,
        15.0,
        map::Category::Player,
    );
    game_state.entities.insert(player.id, player);
    game_state
}

#[rustler::nif()]
fn add_projectile(
    game_state: GameState,
    position: Position,
    size: f64,
    speed: f64,
    _direction: Direction,
) -> GameState {
    let mut game_state: GameState = game_state;
    // Check here if the player doesn't exist.
    // If it does, it resets it to [0,0] position.
    let mut projectile = Entity::new_circle(
        game_state.next_id(),
        position,
        size,
        speed,
        map::Category::Projectile,
    );
    projectile.set_direction(1., 0.);
    game_state.entities.insert(projectile.id, projectile);
    game_state
}

#[rustler::nif()]
fn move_player(game_state: GameState, player_id: u64, x: f64, y: f64) -> GameState {
    let mut game_state: GameState = game_state;
    let entity = game_state.entities.get_mut(&player_id).unwrap();
    entity.set_direction(x, y);
    game_state
}

#[rustler::nif()]
fn move_entities(game_state: GameState) -> GameState {
    let mut game_state: GameState = game_state;

    for entity in game_state.entities.values_mut() {
        entity.move_entity();
    }

    game_state
}

#[rustler::nif()]
/// Check players inside the player_id radius
/// Return a list of the players id inside the radius Vec<player_id>
fn check_collisions(entity: Entity, entities: HashMap<u64, Entity>) -> bool {
    let mut entity: Entity = entity;
    let ent = entities.into_values().collect();

    if entity.shape == map::Shape::Circle {
        return !entity.collides_with(ent).is_empty();
    }

    false
}

#[rustler::nif()]
fn add_polygon(game_state: GameState) -> GameState {
    let mut game_state: GameState = game_state;

    let polygon = Entity::new_polygon(
        game_state.next_id(),
        vec![
            Position { x: 200.0, y: 200.0 },
            Position { x: 400.0, y: 200.0 },
            Position { x: 450.0, y: 300.0 },
            Position { x: 300.0, y: 400.0 },
            Position { x: 100.0, y: 300.0 },
        ],
        map::Category::Obstacle,
    );
    game_state.entities.insert(polygon.id, polygon);
    game_state
}

rustler::init!(
    "Elixir.Physics",
    [
        add,
        move_player,
        new_game,
        add_player,
        add_projectile,
        check_collisions,
        add_polygon,
        move_entities
    ]
);
