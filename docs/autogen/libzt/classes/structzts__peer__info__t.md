---
title: zts_peer_info_t

custom_edit_url: null
---

# zts_peer_info_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[peer_id](/autogen/libzt/classes/structzts__peer__info__t.md#variable-peer_id)**  |
| int | **[ver_major](/autogen/libzt/classes/structzts__peer__info__t.md#variable-ver_major)**  |
| int | **[ver_minor](/autogen/libzt/classes/structzts__peer__info__t.md#variable-ver_minor)**  |
| int | **[ver_rev](/autogen/libzt/classes/structzts__peer__info__t.md#variable-ver_rev)**  |
| int | **[latency](/autogen/libzt/classes/structzts__peer__info__t.md#variable-latency)**  |
| <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_peer_role_t">zts_peer_role_t</a> | **[role](/autogen/libzt/classes/structzts__peer__info__t.md#variable-role)**  |
| unsigned int | **[path_count](/autogen/libzt/classes/structzts__peer__info__t.md#variable-path_count)**  |
| int | **[unused_0](/autogen/libzt/classes/structzts__peer__info__t.md#variable-unused_0)**  |
| <a href="/autogen/libzt/classes/structzts__path__t.md">zts_path_t</a> | **[paths](/autogen/libzt/classes/structzts__peer__info__t.md#variable-paths)**  |

## Detailed Description

```cpp
struct zts_peer_info_t;
```


Peer status result buffer 

## Public Attributes Documentation

### variable peer_id

```cpp
uint64_t peer_id;
```


ZeroTier address (40 bits) 


### variable ver_major

```cpp
int ver_major;
```


Remote major version or -1 if not known 


### variable ver_minor

```cpp
int ver_minor;
```


Remote minor version or -1 if not known 


### variable ver_rev

```cpp
int ver_rev;
```


Remote revision or -1 if not known 


### variable latency

```cpp
int latency;
```


Last measured latency in milliseconds or -1 if unknown 


### variable role

```cpp
zts_peer_role_t role;
```


What trust hierarchy role does this device have? 


### variable path_count

```cpp
unsigned int path_count;
```


Number of paths (size of paths[]) 


### variable unused_0

```cpp
int unused_0;
```


Whether this peer was ever reachable via an aggregate link 


### variable paths

```cpp
zts_path_t paths;
```


Known network paths to peer 


-------------------------------

Updated on  2 September 2021 at 23:55:15 CEST