---
sidebar_position: 3
title: 'Gripper'
---

# Gripper

In WOS Graph, gripper operations are managed through two primary node types: **Component Action Node** and **Gripper Action Node**. Each type caters to different functionalities and types of grippers.

## Gripper Action Node

The Gripper Action Node is designed for standard single-degree-of-freedom grippers. It supports three basic actions:

- **Home**: Resets the gripper to its initial position.
- **Open**: Opens the gripper to its maximum extent.
- **Close**: Closes the gripper to grasp an object.

### Adjustable Parameters

Many grippers come with configurable options such as speed, gripping force, and open/close range. These settings vary by gripper model and can be adjusted in WOS during the component configuration phase.

## Component Action Node

The Component Action Node is utilized for grippers or robotic arms with special functionalities. For example:

- **Franka Emika Research 3**: The hardware driver is integrated with its gripper, making it possible to control through a Component Action Node after setting up the FR3 component with its gripper.
- **Jodell ERG Gripper**: Features two degrees of freedom, one for rotation and another for standard gripping. This allows for control via both the Gripper Action Node for basic actions and the Component Action Node for accessing special functionalities.

## Example Usage

Here, we illustrate using the Jodell EPG and Jodell ERG grippers:

<div align="center">
  <img src={require("/img/grippers.png").default} alt="Jodell Grippers" width="100%"/>
</div>

First, add these gripper models under Setting -> Robot as shown. Once activated, they become available for use within the Graph through the appropriate action nodes.

- **Using the Gripper Action Node with Jodell EPG**:
  - Select the Jodell EPG as the component in the node editing interface. You will then see options to select actions like open, close, and home.

<div align="center">
  <img src={require("/img/gripperAction.png").default} alt="Gripper Action Node" width="50%"/>
</div>

- **Using the Component Action Node with Jodell ERG**:
  - Enter the Component Action Node editor and select Jodell ERG. You'll have access to specific actions such as Absolute Rotate and Relative Rotate, which correspond to the unique capabilities provided by the hardware manufacturer.

<div align="center">
  <img src={require("/img/componentAction.png").default} alt="Component Action Node" width="50%"/>
</div>

### Additional Considerations

It is essential to adjust the settings based on the specific capabilities and limitations of each gripper model. Ensure that you are familiar with the hardware specifications to optimize the use of these nodes in your projects.

## Conclusion

Understanding how to utilize both the Gripper Action Node and Component Action Node in WOS Graph allows for flexible and precise control over a variety of grippers, enhancing the automation capabilities of your robotic systems.
