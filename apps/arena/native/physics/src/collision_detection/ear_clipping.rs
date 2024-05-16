use crate::map::{Entity, Position};

pub(crate) fn maybe_triangulate_polygon(mut polygon: Entity) -> Vec<Entity> {
    clean_extra_vertices(&mut polygon);
    if is_polygon_convex(&polygon) {
        return vec![polygon.clone()];
    }

    triangulate_polygon(&polygon)
}

fn clean_extra_vertices(polygon: &mut Entity) {
    let mut cleaned_vertices = vec![];
    for current_vertex_index in 0..polygon.vertices.len() {
        let previous_vertex_index =
            get_previous_cyclic_index(current_vertex_index, &polygon.vertices);
        let next_vertex_index = get_next_cyclic_index(current_vertex_index, &polygon.vertices);

        let previous_vertex = polygon.vertices[previous_vertex_index];
        let current_vertex = polygon.vertices[current_vertex_index];
        let next_vertex = polygon.vertices[next_vertex_index];

        if !is_vertex_consecutive(&previous_vertex, &current_vertex, &next_vertex) {
            cleaned_vertices.push(current_vertex);
        }
    }

    polygon.vertices = cleaned_vertices;
}

fn is_vertex_consecutive(
    previous_vertex: &Position,
    current_vertex: &Position,
    next_vertex: &Position,
) -> bool {
    let first_vector = Position::sub(&previous_vertex, &current_vertex);
    let second_vector = Position::sub(&next_vertex, &current_vertex);

    get_cross_product_scalar(&first_vector, &second_vector) == 0.0
}

fn triangulate_polygon(polygon: &Entity) -> Vec<Entity> {
    let mut result: Vec<Entity> = vec![];
    let mut positions = polygon.vertices.clone();

    while positions.len() > 3 {
        for current_vertex_index in 0..positions.len() {
            let previous_vertex_index = get_previous_cyclic_index(current_vertex_index, &positions);
            let next_vertex_index = get_next_cyclic_index(current_vertex_index, &positions);

            let previous_vertex = positions[previous_vertex_index];
            let current_vertex = positions[current_vertex_index];
            let next_vertex = positions[next_vertex_index];

            if is_position_ear(current_vertex, previous_vertex, next_vertex, &positions) {
                let triangle_vertex = vec![current_vertex, next_vertex, previous_vertex];
                let candidate_triangle = Entity::new_polygon(1, triangle_vertex);
                result.push(candidate_triangle);
                positions.retain(|pos| pos != &current_vertex);
                break;
            }
        }
    }
    let previous_vertex = positions[0];
    let current_vertex = positions[1];
    let next_vertex = positions[2];

    let triangle_vertex = vec![current_vertex, next_vertex, previous_vertex];
    let candidate_triangle = Entity::new_polygon(1, triangle_vertex);
    result.push(candidate_triangle);

    // This algorithm should always result n - 2 triangles where n is the amount of vertex
    // in the polygon
    if result.len() != polygon.vertices.len() - 2 {
        panic!("Wrong triangulation result")
    }

    result
}

fn is_position_ear(
    current_vertex: Position,
    previous_vertex: Position,
    next_vertex: Position,
    vertices: &Vec<Position>,
) -> bool {
    let triangle_vertex = vec![previous_vertex, current_vertex, next_vertex];

    let candidate_triangle = Entity::new_polygon(1, triangle_vertex);

    let first_vector = Position::sub(&previous_vertex, &current_vertex);
    let second_vector = Position::sub(&next_vertex, &current_vertex);

    let triangle_has_point_inside = triangle_has_point_inside(&candidate_triangle, &vertices);

    get_cross_product_scalar(&first_vector, &second_vector) > 0.0 && !triangle_has_point_inside
}

fn triangle_has_point_inside(triangle: &Entity, vertex: &Vec<Position>) -> bool {
    let vector_from_a_to_b = Position::sub(&triangle.vertices[1], &triangle.vertices[0]);
    let vector_from_b_to_c = Position::sub(&triangle.vertices[2], &triangle.vertices[1]);
    let vector_from_c_to_a = Position::sub(&triangle.vertices[0], &triangle.vertices[2]);

    let mut result = false;
    for v in vertex {
        if triangle.vertices.contains(v) {
            continue;
        }

        let vector_a_to_v = Position::sub(v, &triangle.vertices[0]);
        let vector_b_to_v = Position::sub(v, &triangle.vertices[1]);
        let vector_c_to_v = Position::sub(v, &triangle.vertices[2]);

        let first_cross_product = get_cross_product_scalar(&vector_from_a_to_b, &vector_a_to_v);
        let second_cross_product = get_cross_product_scalar(&vector_from_b_to_c, &vector_b_to_v);
        let third_cross_product = get_cross_product_scalar(&vector_from_c_to_a, &vector_c_to_v);

        result = result
            || (first_cross_product < 0.0
                && second_cross_product < 0.0
                && third_cross_product < 0.0);
    }

    result
}

// Usually cross product results in another vector but since this is a two dimensional vector and
// We just wanna use the value from this result we're going to return a numerical value
fn get_cross_product_scalar(first_vector: &Position, second_vector: &Position) -> f32 {
    first_vector.x * second_vector.y - first_vector.y * second_vector.x
}

// A polygon convex means that every
fn is_polygon_convex(polygon: &Entity) -> bool {
    let mut result = true;
    for current_vertex_index in 0..polygon.vertices.len() {
        let previous_vertex_index =
            get_previous_cyclic_index(current_vertex_index, &polygon.vertices);
        let next_vertex_index = get_next_cyclic_index(current_vertex_index, &polygon.vertices);

        let previous_vertex = polygon.vertices[previous_vertex_index];
        let current_vertex = polygon.vertices[current_vertex_index];
        let next_vertex = polygon.vertices[next_vertex_index];

        let first_vector = Position::sub(&previous_vertex, &current_vertex);
        let second_vector = Position::sub(&next_vertex, &current_vertex);

        result = result && get_cross_product_scalar(&first_vector, &second_vector) >= 0.0
    }

    result
}

fn get_previous_cyclic_index(index: usize, vector: &Vec<Position>) -> usize {
    if index == 0 {
        vector.len() - 1
    } else {
        index - 1
    }
}

fn get_next_cyclic_index(index: usize, vector: &Vec<Position>) -> usize {
    if index == vector.len() - 1 {
        0
    } else {
        index + 1
    }
}