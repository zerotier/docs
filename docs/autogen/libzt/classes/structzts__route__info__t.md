---
title: zts_route_info_t

custom_edit_url: null
---

# zts_route_info_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> | **[target](/autogen/libzt/classes/structzts__route__info__t.md#variable-target)**  |
| struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> | **[via](/autogen/libzt/classes/structzts__route__info__t.md#variable-via)**  |
| uint16_t | **[flags](/autogen/libzt/classes/structzts__route__info__t.md#variable-flags)**  |
| uint16_t | **[metric](/autogen/libzt/classes/structzts__route__info__t.md#variable-metric)**  |

## Detailed Description

```cpp
struct zts_route_info_t;
```


A route to be pushed on a virtual network 

## Public Attributes Documentation

### variable target

```cpp
struct zts_sockaddr_storage target;
```


Target network / netmask bits (in port field) or NULL or 0.0.0.0/0 for default 


### variable via

```cpp
struct zts_sockaddr_storage via;
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

Updated on 19 May 2021 at 11:01:17 PDT