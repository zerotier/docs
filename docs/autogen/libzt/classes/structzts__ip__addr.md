---
title: zts_ip_addr

custom_edit_url: null
---

# zts_ip_addr



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct <a href="/autogen/libzt/classes/structzts__ip6__addr.md">zts_ip6_addr</a> | **[ip6](/autogen/libzt/classes/structzts__ip__addr.md#variable-ip6)**  |
| struct zts_ip4_addr | **[ip4](/autogen/libzt/classes/structzts__ip__addr.md#variable-ip4)**  |
| union zts_ip_addr::@1 | **[u_addr](/autogen/libzt/classes/structzts__ip__addr.md#variable-u_addr)**  |
| uint8_t | **[type](/autogen/libzt/classes/structzts__ip__addr.md#variable-type)**  |

## Detailed Description

```cpp
struct zts_ip_addr;
```


A union struct for both IP version's addresses. ATTENTION: watch out for its size when adding IPv6 address scope! 

## Public Attributes Documentation

### variable ip6

```cpp
struct zts_ip6_addr ip6;
```


### variable ip4

```cpp
struct zts_ip4_addr ip4;
```


### variable u_addr

```cpp
union zts_ip_addr::@1 u_addr;
```


### variable type

```cpp
uint8_t type;
```


-------------------------------

Updated on  3 July 2021 at 00:01:41 UTC