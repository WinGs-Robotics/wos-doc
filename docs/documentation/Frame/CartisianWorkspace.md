---
sidebar_position: 2
title: 'Cartesian Space Definition'
---

# Cartesian Space Definition

In WOS, all spatial coordinates are recorded in the format of x, y, z, roll, pitch, and yaw.

- **x, y, z** represent the three-dimensional translation movements. Unit is `meter`.
- **roll, pitch, yaw** are Euler angles that describe **intrinsic rotations** following the XYZ rotation order. Unit is `Radian`.

## Understanding Cartesian Coordinates and Euler Angles

### Translation Movements

The translation movements (**x, y, z**) involve moving an object along the X, Y, and Z axis in three-dimensional space.

- **X-axis**: Mark as Red
- **Y-axis**: Mark as Green
- **Z-axis**: Mark as Blue

More about [Translation Movements](<https://en.wikipedia.org/wiki/Translation_(geometry)>).

### Euler Angles

**Roll, pitch,** and **yaw** are types of orientation used in the field of aerospace, robotics, and other technical fields to describe the angular movement around the body axes. They are often used to describe the orientation of a vehicle or object in three-dimensional space.

- **Roll** is the rotation around the X-axis.
- **Pitch** is the rotation around the Y-axis.
- **Yaw** is the rotation around the Z-axis.

Each of these rotations follows a specific order, known as the XYZ rotation order, which is crucial for defining the object's orientation in space accurately.

Learn more about [Euler Angles](https://en.wikipedia.org/wiki/Euler_angles) and their applications.

# STR400 Example

<div align="center">
  <img src={require("/img/str400angledir.png").default} alt="STR400 Direction" width="60%"/>
</div>

As shown in the image above, the top-right corner displays the current Cartesian coordinates. This translation represents the transformation from the robot base's global coordinate to the coordinates of the end-effector.

<div align="center">
  <img src={require("/img/addstr400.png").default} alt="Adding STR400" width="60%"/>
</div>

However, notice that the end-effector's coordinates do not exactly align with the final joint of the robot arm. This is due to the EE Transform applied during the robot setup, adding a **0.05** meter offset along the z-axis. This EE Transform refers to a coordinate transformation from the end of the robot arm to the tip of the end-effector.

Once this transformation is configured during the robot setup stage in WOS, all operations—including real-time control and Cartesian space trajectory planning in Graph nodes—take the position of this end-effector as the reference standard. This ensures precise control and accurate movement execution tailored to the specific configuration of the STR400.
