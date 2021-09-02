---
title: zts_sockaddr_in6

custom_edit_url: null
---

# zts_sockaddr_in6



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint8_t | **[sin6_len](/autogen/libzt/classes/structzts__sockaddr__in6.md#variable-sin6_len)**  |
| zts_sa_family_t | **[sin6_family](/autogen/libzt/classes/structzts__sockaddr__in6.md#variable-sin6_family)**  |
| zts_in_port_t | **[sin6_port](/autogen/libzt/classes/structzts__sockaddr__in6.md#variable-sin6_port)**  |
| uint32_t | **[sin6_flowinfo](/autogen/libzt/classes/structzts__sockaddr__in6.md#variable-sin6_flowinfo)**  |
| struct zts_in6_addr | **[sin6_addr](/autogen/libzt/classes/structzts__sockaddr__in6.md#variable-sin6_addr)**  |
| uint32_t | **[sin6_scope_id](/autogen/libzt/classes/structzts__sockaddr__in6.md#variable-sin6_scope_id)**  |

## Detailed Description

```cpp
struct zts_sockaddr_in6;
```


Address structure to specify an IPv6 endpoint 

## Public Attributes Documentation

### variable sin6_len

```cpp
uint8_t sin6_len;
```


### variable sin6_family

```cpp
zts_sa_family_t sin6_family;
```


### variable sin6_port

```cpp
zts_in_port_t sin6_port;
```


### variable sin6_flowinfo

```cpp
uint32_t sin6_flowinfo;
```


### variable sin6_addr

```cpp
struct zts_in6_addr sin6_addr;
```


### variable sin6_scope_id

```cpp
uint32_t sin6_scope_id;
```


-------------------------------

Updated on  2 September 2021 at 23:52:51 CEST