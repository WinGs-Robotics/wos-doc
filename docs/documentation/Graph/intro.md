---
sidebar_position: 1
title: "Graph Basics"
---

# Graph Basics

In this chapter, we will delve into the fundamental concepts of the Graph and explore some commonly used nodes that manage the logic of Graph operations in the WOS.

## Concept

Graph represents a unique human-machine interaction mode exclusively developed for controlling robots within WOS. Several planned features have already been implemented, with many more innovative functions set to be introduced in the future.

Graph does not require users to have coding experience. It enables precise choreography of actions for multiple robotic arms and grippers through a no-code approach, and users can visually track the workflow of robotic arms on the user interface, which facilitates optimization.

### Starting a Graph Project

A Graph project begins with a `Start` node. The green play and stop buttons located at the bottom of the interface control the start and stop of the process, or it ends automatically once all programmed operations are completed.

<div align="center">
  <img src="/img/basicGraph.png" alt="Basic Graph" width="100%"/>
</div>

### Workflow and Execution

The project workflow initiates from the Start node, moving to the first connected node. In this example, the first node to execute would be a `Repeat` node, followed by a `Wait` node. After the Wait node completes its cycle, subsequent nodes like `Concurrent` and others follow in sequence.

It is important to note that nodes not directly or indirectly connected to the Start node, even if present on the interface, will not be executed. This ensures that the Graph runs efficiently and only activates relevant parts of the workflow.

### Nodes and Their Roles

Here’s a brief overview of some nodes used in Graph:

- **Repeat Node**: Allows repeating a sequence of actions multiple times linked by this node.
- **Wait Node**: Delays the execution flow for a specified duration in Second.
- **Concurrent Node**: Enables simultaneous execution of multiple actions. User can press **+** to add one more branch or click on trach bin icon to delete this branch. One special branch is followed by the **End**, this branch execute after all other branches is completed.
- **Notification Node**: This Node will pop up a massage on the top of the UI.
- **Run Graph Node**: This Node can link to other graphs in your graph workspace, to implement **_graph in graph_** functionality.
- **Move Joints**: This is a robot node, that controls a robot in its joint space.

Each node plays a pivotal role in defining the flow and functionality of the Graph, providing users with powerful tools to automate and optimize complex robotic operations.

### Future Developments

The ongoing development of Graph will introduce more dynamic and flexible nodes, enhancing the capabilities and efficiency of robot programming within WOS, such as **_if condition_**, **_variables_**.

Stay tuned as we continue to expand the features and functionalities of Graph, making it even more robust and user-friendly for all levels of users.
