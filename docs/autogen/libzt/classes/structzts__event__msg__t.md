---
title: zts_event_msg_t

custom_edit_url: null
---

# zts_event_msg_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int16_t | **[event_code](/autogen/libzt/classes/structzts__event__msg__t.md#variable-event_code)**  |
| <a href="/autogen/libzt/classes/structzts__node__info__t.md">zts_node_info_t</a> * | **[node](/autogen/libzt/classes/structzts__event__msg__t.md#variable-node)**  |
| <a href="/autogen/libzt/classes/structzts__net__info__t.md">zts_net_info_t</a> * | **[network](/autogen/libzt/classes/structzts__event__msg__t.md#variable-network)**  |
| <a href="/autogen/libzt/classes/structzts__netif__info__t.md">zts_netif_info_t</a> * | **[netif](/autogen/libzt/classes/structzts__event__msg__t.md#variable-netif)**  |
| <a href="/autogen/libzt/classes/structzts__route__info__t.md">zts_route_info_t</a> * | **[route](/autogen/libzt/classes/structzts__event__msg__t.md#variable-route)**  |
| <a href="/autogen/libzt/classes/structzts__peer__info__t.md">zts_peer_info_t</a> * | **[peer](/autogen/libzt/classes/structzts__event__msg__t.md#variable-peer)**  |
| <a href="/autogen/libzt/classes/structzts__addr__info__t.md">zts_addr_info_t</a> * | **[addr](/autogen/libzt/classes/structzts__event__msg__t.md#variable-addr)**  |
| void * | **[cache](/autogen/libzt/classes/structzts__event__msg__t.md#variable-cache)**  |
| int | **[len](/autogen/libzt/classes/structzts__event__msg__t.md#variable-len)**  |

## Detailed Description

```cpp
struct zts_event_msg_t;
```


Callback message 

## Public Attributes Documentation

### variable event_code

```cpp
int16_t event_code;
```


Event identifier 


### variable node

```cpp
zts_node_info_t * node;
```


Node status 


### variable network

```cpp
zts_net_info_t * network;
```


Network information 


### variable netif

```cpp
zts_netif_info_t * netif;
```


Netif status 


### variable route

```cpp
zts_route_info_t * route;
```


Managed routes 


### variable peer

```cpp
zts_peer_info_t * peer;
```


Peer info 


### variable addr

```cpp
zts_addr_info_t * addr;
```


Assigned address 


### variable cache

```cpp
void * cache;
```


Binary data (identities, planets, network configs, peer hints, etc) 


### variable len

```cpp
int len;
```


Length of data message or structure 


-------------------------------

Updated on 20 May 2021 at 14:25:52 PDT