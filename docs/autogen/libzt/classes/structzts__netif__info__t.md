---
title: zts_netif_info_t

custom_edit_url: null
---

# zts_netif_info_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[net_id](/autogen/libzt/classes/structzts__netif__info__t.md#variable-net_id)**  |
| uint64_t | **[mac](/autogen/libzt/classes/structzts__netif__info__t.md#variable-mac)**  |
| int | **[mtu](/autogen/libzt/classes/structzts__netif__info__t.md#variable-mtu)**  |

## Detailed Description

```cpp
struct zts_netif_info_t;
```


Structure used to convey information about a virtual network interface (netif) to a user application. 

## Public Attributes Documentation

### variable net_id

```cpp
uint64_t net_id;
```


The virtual network that this interface was created for 


### variable mac

```cpp
uint64_t mac;
```


The hardware address assigned to this interface 


### variable mtu

```cpp
int mtu;
```


The MTU for this interface 


-------------------------------

Updated on  6 September 2021 at 19:54:51 CEST