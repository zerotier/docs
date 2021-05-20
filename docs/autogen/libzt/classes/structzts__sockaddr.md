---
title: zts_sockaddr

custom_edit_url: null
---

# zts_sockaddr



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint8_t | **[sa_len](/autogen/libzt/classes/structzts__sockaddr.md#variable-sa_len)**  |
| zts_sa_family_t | **[sa_family](/autogen/libzt/classes/structzts__sockaddr.md#variable-sa_family)**  |
| char | **[sa_data](/autogen/libzt/classes/structzts__sockaddr.md#variable-sa_data)**  |

## Detailed Description

```cpp
struct zts_sockaddr;
```


Pointers to socket address structures are often cast to this type 

## Public Attributes Documentation

### variable sa_len

```cpp
uint8_t sa_len;
```


### variable sa_family

```cpp
zts_sa_family_t sa_family;
```


### variable sa_data

```cpp
char sa_data;
```


-------------------------------

Updated on 20 May 2021 at 14:25:52 PDT