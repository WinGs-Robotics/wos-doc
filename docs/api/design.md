---
sidebar_position: 2
title: 'WOS Design'
---

# WOS Design

The WOS (WinGs Operating Studio) is conceptualized as a Robot as a Service (RaaS) platform, designed to facilitate rapid prototyping and swift deployment of robotics projects tailored to end-user requirements. It serves a broad spectrum of stakeholders including hardware manufacturers, integrators, and researchers, offering a platform that is compatible with an array of computing infrastructures.

## Scope

WOS aims to democratize robotics development across diverse computing environments such as standard PCs, embedded systems, edge computing devices, and Android mobile devices. Notably, WOS is provisioned as a binary executable, enhancing security and streamlining integration processes for users. The platform's architecture separates the transport layer from the customer's application, allowing the adoption of any programming language that supports HTTP, WebSocket, or other endorsed protocols like MQTT.

## Design

Figure below depicts the node-based architecture of WOS, designed to streamline robotic application development and deployment. At its heart, WOS Core performs communication forwarding and Node lifecycle management. Components, serving as specialized Nodes, manage hardware, whereas Application Nodes handle non-hardware logic, such as algorithms. Functional Nodes connect to WOS Core via APIs to register Services, making them available to front-end GUIs or custom programs. This architecture ensures a scalable and modular approach to robotics, highlighting the efficient integration and management capabilities of WOS.

<div align="center">
  <img src={require("/img/WOSDesign.png").default} alt="WOSDesign" width="40%"/>
</div>

### Node

A node in WOS functions as the basic executable component, similar to a process in a computer operating system, with roles ranging from managing hardware to executing algorithms. Nodes are classified into several types:

- **CMD Node**: Standard host process mainly used for debugging.
- **Container Node**: Docker container process for encapsulating runtime environments.
- **Internal Node**: Built-in utilities of WOS, not customizable.
- **Macro Node**: Functions for executing simple operations.

Nodes handle inputs and outputs and are assigned critical information like a node ID and an access token. The node lifecycle includes states like starting, running, and ending, with capabilities for pausing and resuming operations.

### Service

WOS services are fundamental to the system’s communication framework, focusing on:

- **Topic**: Implements a publish/subscribe model for event-driven communication.
- **Request**: Manages direct interactions for specific operations or data retrieval.
- **Action**: Executes long-running tasks with mechanisms for feedback and cancellation.

### Component

Robotic components in WOS are virtual representations that simplify interaction with physical robotics elements like sensors and actuators. Components may consist of a handler for algorithm execution and a driver for hardware connectivity.

### Application

Applications in WOS are dynamic extensions that utilize nodes and other static assets to create complex functionalities tailored to specific tasks, presented through a Web UI.

## Communication Patterns

WOS’s API forms the core of its communication infrastructure, supporting:

- **Topics**: For publishing, subscribing, and unsubscribing.
- **Requests**: For sending operations and receiving responses.
- **Actions**: For initiating and managing long-running tasks.

## Transport

WOS accommodates various communication needs through:

- **Internal**: Direct interactions within the system through internal API calls.
- **External**: Use of protocols like HTTP, WebSocket, and MQTT for accessing WOS resources externally.

## Extensibility

WOS is highly extensible, allowing users to customize and integrate a wide range of functionalities:

- **Customized Node**: Developers can create bespoke nodes for specific functionalities.
- **External API Request**: Integration with external APIs is supported, allowing for flexible communication.

## Conclusion

WOS's robust architecture and flexible design philosophy make it an ideal platform for the diverse needs of modern robotics development, emphasizing efficiency, security, and broad applicability across various domains and computing environments.
