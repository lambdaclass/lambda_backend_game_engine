defmodule BotManager.Math.Vector do
  @moduledoc """
  Module to handle math operations with vectors
  """

  def sub(vector, value) when is_integer(value) or is_float(value) do
    %{
      x: vector.x - value,
      y: vector.y - value
    }
  end

  def sub(first_vector, second_vector) do
    %{
      x: first_vector.x - second_vector.x,
      y: first_vector.y - second_vector.y
    }
  end

  def mult(vector, value) when is_integer(value) or is_float(value) do
    %{
      x: vector.x * value,
      y: vector.y * value
    }
  end

  def mult(first_vector, second_vector) do
    %{
      x: first_vector.x * second_vector.x,
      y: first_vector.y * second_vector.y
    }
  end

  # Using the rotation matrix
  def rotate_by_degrees(%{x: x, y: y}, angle_in_degrees) do
    angle_in_radians = deg2rad(angle_in_degrees)
    x = x * :math.cos(angle_in_radians) - y * :math.sin(angle_in_radians)
    y = x * :math.sin(angle_in_radians) + y * :math.cos(angle_in_radians)

    %{
      x: x,
      y: y
    }
  end

  def normalize(%{x: x, y: y}) do
    distance = :math.sqrt(:math.pow(x, 2) + :math.pow(y, 2))

    %{
      x: x / distance,
      y: y / distance
    }
  end

  def deg2rad(deg) do
    deg * :math.pi() / 180
  end
end
