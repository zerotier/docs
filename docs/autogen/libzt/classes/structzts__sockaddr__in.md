---
title: zts_sockaddr_in

custom_edit_url: null
---

# zts_sockaddr_in



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint8_t | **[sin_len](/autogen/libzt/classes/structzts__sockaddr__in.md#variable-sin_len)**  |
| zts_sa_family_t | **[sin_family](/autogen/libzt/classes/structzts__sockaddr__in.md#variable-sin_family)**  |
| zts_in_port_t | **[sin_port](/autogen/libzt/classes/structzts__sockaddr__in.md#variable-sin_port)**  |
| struct zts_in_addr | **[sin_addr](/autogen/libzt/classes/structzts__sockaddr__in.md#variable-sin_addr)**  |
| char | **[sin_zero](/autogen/libzt/classes/structzts__sockaddr__in.md#variable-sin_zero)**  |

## Detailed Description

```cpp
struct zts_sockaddr_in;
```


Address structure to specify an IPv4 endpoint 

## Public Attributes Documentation

### variable sin_len

```cpp
uint8_t sin_len;
```


### variable sin_family

```cpp
zts_sa_family_t sin_family;
```


### variable sin_port

```cpp
zts_in_port_t sin_port;
```


### variable sin_addr

```cpp
struct zts_in_addr sin_addr;
```


### variable sin_zero

```cpp
char sin_zero;
```


-------------------------------

Updated on  2 September 2021 at 23:14:51 CEST