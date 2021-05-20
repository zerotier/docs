---
title: zts_node_info_t

custom_edit_url: null
---

# zts_node_info_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[node_id](/autogen/libzt/classes/structzts__node__info__t.md#variable-node_id)**  |
| uint16_t | **[port_primary](/autogen/libzt/classes/structzts__node__info__t.md#variable-port_primary)**  |
| uint16_t | **[port_secondary](/autogen/libzt/classes/structzts__node__info__t.md#variable-port_secondary)**  |
| uint16_t | **[port_tertiary](/autogen/libzt/classes/structzts__node__info__t.md#variable-port_tertiary)**  |
| uint8_t | **[ver_major](/autogen/libzt/classes/structzts__node__info__t.md#variable-ver_major)**  |
| uint8_t | **[ver_minor](/autogen/libzt/classes/structzts__node__info__t.md#variable-ver_minor)**  |
| uint8_t | **[ver_rev](/autogen/libzt/classes/structzts__node__info__t.md#variable-ver_rev)**  |

## Detailed Description

```cpp
struct zts_node_info_t;
```


Runtime details about the current node 

## Public Attributes Documentation

### variable node_id

```cpp
uint64_t node_id;
```


Node ID 


### variable port_primary

```cpp
uint16_t port_primary;
```


Port used by ZeroTier to send and receive traffic 


### variable port_secondary

```cpp
uint16_t port_secondary;
```


Port used by ZeroTier to send and receive traffic 


### variable port_tertiary

```cpp
uint16_t port_tertiary;
```


Port used by ZeroTier to send and receive traffic 


### variable ver_major

```cpp
uint8_t ver_major;
```


ZT Major version 


### variable ver_minor

```cpp
uint8_t ver_minor;
```


ZT Minor version 


### variable ver_rev

```cpp
uint8_t ver_rev;
```


ZT Patch revision 


-------------------------------

Updated on 20 May 2021 at 14:25:52 PDT