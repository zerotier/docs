---
title: zts_sockaddr_storage

custom_edit_url: null
---

# zts_sockaddr_storage



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint8_t | **[s2_len](/autogen/libzt/classes/structzts__sockaddr__storage.md#variable-s2_len)**  |
| zts_sa_family_t | **[ss_family](/autogen/libzt/classes/structzts__sockaddr__storage.md#variable-ss_family)**  |
| char | **[s2_data1](/autogen/libzt/classes/structzts__sockaddr__storage.md#variable-s2_data1)**  |
| uint32_t | **[s2_data2](/autogen/libzt/classes/structzts__sockaddr__storage.md#variable-s2_data2)**  |
| uint32_t | **[s2_data3](/autogen/libzt/classes/structzts__sockaddr__storage.md#variable-s2_data3)**  |

## Detailed Description

```cpp
struct zts_sockaddr_storage;
```


Address structure large enough to hold IPv4 and IPv6 addresses 

## Public Attributes Documentation

### variable s2_len

```cpp
uint8_t s2_len;
```


### variable ss_family

```cpp
zts_sa_family_t ss_family;
```


### variable s2_data1

```cpp
char s2_data1;
```


### variable s2_data2

```cpp
uint32_t s2_data2;
```


### variable s2_data3

```cpp
uint32_t s2_data3;
```


-------------------------------

Updated on  2 September 2021 at 23:55:15 CEST