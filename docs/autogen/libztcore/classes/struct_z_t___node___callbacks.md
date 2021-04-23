---
title: ZT_Node_Callbacks

custom_edit_url: null
---

# ZT_Node_Callbacks



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| long | **[version](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-version)**  |
| ZT_StatePutFunction | **[statePutFunction](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-stateputfunction)**  |
| ZT_StateGetFunction | **[stateGetFunction](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-stategetfunction)**  |
| ZT_WirePacketSendFunction | **[wirePacketSendFunction](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-wirepacketsendfunction)**  |
| ZT_VirtualNetworkFrameFunction | **[virtualNetworkFrameFunction](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-virtualnetworkframefunction)**  |
| ZT_VirtualNetworkConfigFunction | **[virtualNetworkConfigFunction](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-virtualnetworkconfigfunction)**  |
| ZT_EventCallback | **[eventCallback](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-eventcallback)**  |
| ZT_PathCheckFunction | **[pathCheckFunction](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-pathcheckfunction)**  |
| ZT_PathLookupFunction | **[pathLookupFunction](/autogen/libztcore/classes/struct_z_t___node___callbacks.md#variable-pathlookupfunction)**  |

## Detailed Description

```cpp
struct ZT_Node_Callbacks;
```


Structure for configuring ZeroTier core callback functions 

## Public Attributes Documentation

### variable version

```cpp
long version;
```


Struct version &ndash; must currently be 0 


### variable statePutFunction

```cpp
ZT_StatePutFunction statePutFunction;
```


REQUIRED: Function to store and/or replicate state objects 


### variable stateGetFunction

```cpp
ZT_StateGetFunction stateGetFunction;
```


REQUIRED: Function to retrieve state objects from an object store 


### variable wirePacketSendFunction

```cpp
ZT_WirePacketSendFunction wirePacketSendFunction;
```


REQUIRED: Function to send packets over the physical wire 


### variable virtualNetworkFrameFunction

```cpp
ZT_VirtualNetworkFrameFunction virtualNetworkFrameFunction;
```


REQUIRED: Function to inject frames into a virtual network's TAP 


### variable virtualNetworkConfigFunction

```cpp
ZT_VirtualNetworkConfigFunction virtualNetworkConfigFunction;
```


REQUIRED: Function to be called when virtual networks are configured or changed 


### variable eventCallback

```cpp
ZT_EventCallback eventCallback;
```


REQUIRED: Function to be called to notify external code of important events 


### variable pathCheckFunction

```cpp
ZT_PathCheckFunction pathCheckFunction;
```


OPTIONAL: Function to check whether a given physical path should be used 


### variable pathLookupFunction

```cpp
ZT_PathLookupFunction pathLookupFunction;
```


OPTIONAL: Function to get hints to physical paths to ZeroTier addresses 


-------------------------------

Updated on 23 April 2021 at 08:55:11 PDT