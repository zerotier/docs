---
title: zts_addr_info_t

custom_edit_url: null
---

# zts_addr_info_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[net_id](/autogen/libzt/classes/structzts__addr__info__t.md#variable-net_id)**  |
| struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> | **[addr](/autogen/libzt/classes/structzts__addr__info__t.md#variable-addr)**  |

## Detailed Description

```cpp
struct zts_addr_info_t;
```


Details about an assigned address that was added or removed 

## Public Attributes Documentation

### variable net_id

```cpp
uint64_t net_id;
```


### variable addr

```cpp
struct zts_sockaddr_storage addr;
```


-------------------------------

Updated on 19 May 2021 at 11:01:17 PDT