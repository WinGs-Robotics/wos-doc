---
sidebar_position: 3
---

# WOS API Docs

## 1 Understanding the WOS Service

WinGs Operating Studio organize all callable API as `WOS Service`. WOS by default will publish a sets of `WOS Service`, allowing consumer to interact with WOS programmatically. To see the available `WOS Service`. Checkout the **Resource** tab on the [Developer's Page](../documentation/DeveloperMode/intro.md).

Consumer can also host a `WOS Service` in WOS so other parts of your robot infrastructure can use WOS as a message broker.

### 1.1 Resource

Resource is the service identifier for `WOS Service`. It is used to route the service request to correct service owner. It should be a unique string in namespace

### 1.2 Service Type

For each `WOS Service`, there are three types of communication style

#### Topic

A `WOS Service` can claim a few topic. WOS API consumer can subscribe to the service and receive the message that is published to this topic.

Example topic: robot arm `joint-states`. WOS will publish the current joint state of a robotics arm to topic `joint-states` under resource `component/{component-id}`

#### Request

A `WOS Service` can claim a list of requests. WOS API consumer can call these request to get a response. Just like a typical HTTP request or rpc call

#### Action

A `WOS Service` can also claim a list of actions. WOS API consumer can call these actions and get a response. In addition to a typical request/response model. `action` will also provide intermediate feedback to indicate the progress of `action`. WOS use `action` to perform long running request like moving a robotics arm.

Each `action` request is guaranteed to be run as singleton request. Which means the old `action` will be cancelled if second `action` request is invoked.

API consumer can also cancel a running `action`

## 2 WOS Service Transport

API Consumer can interact with `WOS Service` via following transport

### 2.1 HTTP Request

#### Publish a message

```typescript
// POST /api/service/publish
// BODY
{
  "resource": string,
  "topic": string.
  "message: any
}
```

#### WOS Service Request

```typescript
// POST /api/service/request/{resource-name}
// BODY
{
  "action": string,
  "arguments": any
}
```

#### WOS Service Action

```typescript
// POST /api/service/action/{resource-name}
// BODY
{
  "action": string,
  "arguments": any
}
```

#### WOS Service Cancel Action

```typescript
// POST /api/service/cancel/{resource-name}
// BODY
{
  "action": string,
}
```

#### HTTP only endpoint

`GET /api/env` Will return a json for WOS runtime variable

`GET /resource/path/to/file` This http request will send the file in your WOS `workspace/resource`

`GET /log/{node-id}.log` This http request will return the node log

### 2.2 Websocket

To connect WOS via websocket, use this endpoint `/api/ws`

Websocket allows consumer to send json string to interact with `WOS Service`. See `WOS Service Message Format` for detail description

#### Publish Message

```typescript
// Publish a message
{
  op: "publish",
  resource: string // to which wos service
  data: {
    topic: string  // to which topic
    message: any   // the message payload
  }
}
```

#### Subscribe Resource

```typescript
{
  op: "subscribe",
  resource: string // wos service to subscribe
}
```

Note: Will always subscribe all available topic of a `WOS Service`

Once API consumer send this json via websocket. Following websocket message will be sent back via websocket when wos service publish new message

```typescript
// Receive a published message
{
  op: "publish",
  resource: string
  data: {
    topic: string
    message: any
  }
}
```

#### Unsubscribe Message

```typescript
{
  op: "unsubscribe",
  resource: string // subscribe
}

```

#### Make WOS Service Request

```typescript
{
  id: string // a user defined unique string, wos will send back api message with same id.
  op: "request",
  resource: string // resource name
  data: {
    action: string // the request name in this wos service
    arguments: any // request arguments
  }
}
```

WOS will send back request result as follow

```typescript
{
  id: string // the same id as request
  op: "result",
  resource: string // resource name
  data: {
    result: any, // the response result
    error: string // will be empty if no error
  }
}
```

#### Make WOS Service Action Request

```typescript
{
  id: string // a user defined unique string, wos will send back api message with same id.
  op: "action",
  resource: string // resource name
  data: {
    action: string // the action name in this wos service
    arguments: any // action arguments
  }
}
```

WOS will send action progress as follow

```typescript
{
  id: string // the same id as action request
  op: "feedback",
  resource: string // resource name
  data: {
    progress: number, // a float from 0 to 1
    status: string // the status in string
  }
}
```

WOS will send back action result as follow

```typescript
{
  id: string // the same id as action request
  op: "result",
  resource: string // resource name
  data: {
    result: any, // the response result
    error: string // will be empty if no error
  }
}
```

### 2.3 MQTT

To connect WOS via MQTT, please config the MQTT connection in setting -> config -> mqtt

#### WOS Service Message Subscription

Once MQTT connection established. ALL WOS Service topic will be **automatically** published to `/{mqtt-prefix}/topic/{resource}/{topic}` **without explicitly call subscribe**

#### WOS Service request & action request

WOS will subscribe to `/{mqtt-prefix}/client/{client-id}` to listen for service request. `{client-id}` is a string that API consumer decide.

WOS will publish the service result to `/{mqtt-prefix}/response/{client-id}`.

Example

Assume `mqtt-prefix` = `/wos`

**Make request**

```typescript
// API consumer publish to /wos/client/my-client-id
{
  id: string // a user defined unique string, wos will send back api message with same id.
  op: "request",
  resource: string // resource name
  data: {
    action: string // the request name in this wos service
    arguments: any // request arguments
  }
}

// WOS will handle the request and publish result to /wos/response/my-client-id
{
  id: string // the same id as request
  op: "result",
  resource: string // resource name
  data: {
    result: any, // the response result
    error: string // will be empty if no error
  }
}
```

**Make action request**

```typescript
// API consumer publish to /wos/client/my-client-id
{
  id: string // a user defined unique string, wos will send back api message with same id.
  op: "action",
  resource: string // resource name
  data: {
    action: string // the action name in this wos service
    arguments: any // action arguments
  }
}

// WOS will handle the action and publish feedback to /wos/response/my-client-id
{
  id: string // the same id as action request
  op: "feedback",
  resource: string // resource name
  data: {
    progress: number, // a float from 0 to 1
    status: string // the status in string
  }
}

// WOS will handle the action and publish result to /wos/response/my-client-id
{
  id: string // the same id as action request
  op: "result",
  resource: string // resource name
  data: {
    result: any, // the response result
    error: string // will be empty if no error
  }
}
```

## 3 Frequently use WOS Service

This section contains frequently use WOS Service request example

### 3.1 Run Graph

#### HTTP

```typescript
// POST /api/service/request/graph
{
  "action":"start-graph",
  "arguments": {
    "graphId": "xxxx-xxxx-xxxx" // the graph id
  }
}
```

#### MQTT or Websocket

```typescript
{
  "id": "any-id"
  "op":"request",
  "resource":"graph",
  "data": {
    "action":"start-graph",
    "arguments": {
      "graphId": "xxxx-xxxx-xxxx" // the graph id
    }
  }
}
```

### 3.2 Stop Graph

#### HTTP

```typescript
// POST /api/service/request/graph
{
  "action":"stop-graph",
  "arguments": {
    "graphId": "xxxx-xxxx-xxxx" // the graph id
  }
}
```

#### MQTT or Websocket

```typescript
{
  "id": "any-id"
  "op":"request",
  "resource":"graph",
  "data": {
    "action":"stop-graph",
    "arguments": {
      "graphId": "xxxx-xxxx-xxxx" // the graph id
    }
  }
}
```

### 3.3 Start Robot

#### HTTP

```typescript
// POST /api/service/request/robot
{
  "action":"start",
  "arguments": {
    "simulate": true | false // start simulation or real robot
  }
}
```

#### MQTT or Websocket

```typescript
{
  "id": "any-id"
  "op":"request",
  "resource":"robot",
  "data": {
    "action":"start",
    "arguments": {
      "simulate": true | false // start simulation or real robot
    }
  }
}
```

### 3.4 Stop Robot

#### HTTP

```typescript
// POST /api/service/request/robot
{
  "action":"stop",
  "arguments": {}
}
```

#### MQTT or Websocket

```typescript
{
  "id": "any-id"
  "op":"request",
  "resource":"robot",
  "data": {
    "action":"stop",
    "arguments": {}
  }
}
```

### 3.5 Robotics Arm Movement

User can get `{component-id}` in WOS UI

Move Robotics arm by wscript. Check out **Wscritp motion planning**

#### HTTP

```typescript
// POST /api/service/action/component/{component-id}
{
  "action":"run-wscript",
  "arguments": "YOUR WSCRIPT"
}
```

#### MQTT or Websocket

```typescript
{
  "id": "any-id"
  "op":"action",
  "resource":"component/{component-id}",
  "data": {
    "action":"run-wscript",
    "arguments": "YOUR WSCRIPT"
  }
}
```

### 3.6 Robotics Arm Realtime Control

Use realtime control ability to move robotics arm

#### HTTP

```typescript
// POST /api/service/request/component/{component-id}
{
  "action":"rt-keypad",
  "arguments": {
    "keypadValue": [x,y,z,roll,pitch,yaw] // the speed in cartesian space -1 to 1
    "isRelative": true | false // true: Move in TCP coordinate. false: Move in global coordinate
  }
}
```

#### MQTT or Websocket

```typescript
{
  "id": "any-id"
  "op":"request",
  "resource":"component/{component-id}",
  "data": {
    "action":"rt-keypad",
    "arguments": {
      "keypadValue": [x,y,z,roll,pitch,yaw] // the speed in cartesian space -1 to 1
      "isRelative": true | false // true: Move in TCP coordinate. false: Move in global coordinate
    }
  }
}
```
