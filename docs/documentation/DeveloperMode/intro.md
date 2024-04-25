---
sidebar_position: 1
title: 'Developer Mode'
---

# Developer Page

## Access Developer Page

Gaining access to the Developer page in the WOS system involves a hidden easter egg approach that can be activated from the Settings menu. This feature is designed for developers looking to gain deeper insights into the system's operations or to enable advanced debugging features.

### Steps to Access the Developer Page

To access the Developer page, follow these instructions:

1. **Navigate to Settings**:

   - Go to the `Settings -> About` page within the WOS interface.

2. **Activate the Developer Mode**:

   - Find the WinGs Robotics logo on the About page. You will need to tap the logo six times in succession.

   <div align="center">
      <img src={require("/img/accessDebug.png").default} alt="Access Developer Mode" width="100%"/>
   </div>

3. **Accessing Developer Options**:

   - After the sixth tap, a small bug icon will appear in the upper right corner of the interface. This icon indicates that Developer mode has been activated.

   <div align="center">
      <img src={require("/img/debug.png").default} alt="Developer Mode Icon" width="20%"/>
   </div>

4. **Enter the Developer Page**:

   - Click on the newly appeared bug icon to enter the Developer page.

## Developer Page Functions

The Developer Page in the WOS system offers a variety of tools that enable developers to manage, monitor, and interact with the system's resources and processes more efficiently.

### Nodes Overview

Nodes in WOS are analogous to processes in a computer operating system. They represent the active elements running within the system, such as robot drivers or kinematic solvers.

<div align="center">
  <img src={require("/img/developerNodes.png").default} alt="Nodes in Developer Page" width="100%"/>
</div>

- **Functionality**: By clicking on the Node tab, you can view all currently running nodes within WOS. The number next to the icons at the top right indicates how many processes are active.

### Resource Management

The Resource tab is crucial for developers looking to control WOS resources via APIs.

<div align="center">
  <img src={require("/img/developerResource.png").default} alt="Resource in Developer Page" width="100%"/>
</div>

- **Access**: Click on the Resource tab to see resources associated with active components within WOS.
- **Details**: For instance, if you access a running robotic arm component's Resource, you can view the available topics, requests, and actions that can be executed on this component, each identified by name.

### Registry Insights

The Registry page provides detailed definitions of all nodes available in Graph, including their inputs and outputs.

<div align="center">
  <img src={require("/img/developerReg.png").default} alt="Registry in Developer Page" width="100%"/>
</div>

- **Example**: The displayed example shows how the 'Move in Sequence' node is defined between the frontend and backend communications within WOS.

### API Testing Tool

The API page includes a practical tool for quickly testing various APIs registered within WOS.

<div align="center">
  <img src={require("/img/developerRequest.png").default} alt="API Testing in Developer Page" width="100%"/>
</div>

- **Functionality**: This tool allows you to select a registered resource, choose an appropriate request, and submit a JSON payload to test the API.
- **Example**: Using the `list-graph` request, which requires an empty payload, will return information about all graphs currently in the system. This can include a graph named "Test" which was previously created using the frontend.

> **Note**: This tool is limited to testing requests only. Actions and topics cannot be tested with it.

### Conclusion

The Developer Page functions provide powerful tools for deep interaction with the WOS system, enabling advanced customization, monitoring, and testing. These features are designed to enhance the capabilities of developers and technical users within the WOS environment.

## Next Steps

Now that you have familiarized yourself with the Developer Page functionalities and how to utilize the advanced features of the WOS system, the next step is to delve deeper into the possibilities of integrating WOS with your own systems through our APIs.

Explore our [API documentation](../../api/intro.md) to gain a comprehensive understanding of the WOS design philosophy and discover how to utilize various practical APIs. This resource is essential for developers looking to seamlessly integrate WOS capabilities into their applications and solutions.
