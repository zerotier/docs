---
title: ZT_RemoteTrace

custom_edit_url: null
---

# ZT_RemoteTrace



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[origin](/autogen/libztcore/classes/struct_z_t___remote_trace.md#variable-origin)**  |
| char * | **[data](/autogen/libztcore/classes/struct_z_t___remote_trace.md#variable-data)**  |
| unsigned int | **[len](/autogen/libztcore/classes/struct_z_t___remote_trace.md#variable-len)**  |

## Detailed Description

```cpp
struct ZT_RemoteTrace;
```


Payload of REMOTE_TRACE event 

## Public Attributes Documentation

### variable origin

```cpp
uint64_t origin;
```


ZeroTier address of sender 


### variable data

```cpp
char * data;
```


Null-terminated Dictionary containing key/value pairs sent by origin

This _should_ be a dictionary, but the implementation only checks that it is a valid non-empty C-style null-terminated string. Be very careful to use a well-tested parser to parse this as it represents data received from a potentially un-trusted peer on the network. Invalid payloads should be dropped.

The contents of data[] may be modified. 


### variable len

```cpp
unsigned int len;
```


Length of dict[] in bytes, including terminating null 


-------------------------------

Updated on 22 April 2021 at 15:16:44 PDT