---
title: ZT_VirtualNetworkRoute

custom_edit_url: null
---

# ZT_VirtualNetworkRoute



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct sockaddr_storage | **[target](/autogen/libztcore/classes/struct_z_t___virtual_network_route.md#variable-target)**  |
| struct sockaddr_storage | **[via](/autogen/libztcore/classes/struct_z_t___virtual_network_route.md#variable-via)**  |
| uint16_t | **[flags](/autogen/libztcore/classes/struct_z_t___virtual_network_route.md#variable-flags)**  |
| uint16_t | **[metric](/autogen/libztcore/classes/struct_z_t___virtual_network_route.md#variable-metric)**  |

## Detailed Description

```cpp
struct ZT_VirtualNetworkRoute;
```


A route to be pushed on a virtual network 

## Public Attributes Documentation

### variable target

```cpp
struct sockaddr_storage target;
```


Target network / netmask bits (in port field) or NULL or 0.0.0.0/0 for default 


### variable via

```cpp
struct sockaddr_storage via;
```


Gateway IP address (port ignored) or NULL (family == 0) for LAN-local (no gateway) 


### variable flags

```cpp
uint16_t flags;
```


Route flags 


### variable metric

```cpp
uint16_t metric;
```


Route metric (not currently used) 


-------------------------------

Updated on 23 April 2021 at 08:55:11 PDT