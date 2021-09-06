---
title: ZT_NodeStatus

custom_edit_url: null
---

# ZT_NodeStatus



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[address](/autogen/libztcore/classes/struct_z_t___node_status.md#variable-address)**  |
| const char * | **[publicIdentity](/autogen/libztcore/classes/struct_z_t___node_status.md#variable-publicidentity)**  |
| const char * | **[secretIdentity](/autogen/libztcore/classes/struct_z_t___node_status.md#variable-secretidentity)**  |
| int | **[online](/autogen/libztcore/classes/struct_z_t___node_status.md#variable-online)**  |

## Detailed Description

```cpp
struct ZT_NodeStatus;
```


Current node status 

## Public Attributes Documentation

### variable address

```cpp
uint64_t address;
```


40-bit ZeroTier address of this node 


### variable publicIdentity

```cpp
const char * publicIdentity;
```


Public identity in string-serialized form (safe to send to others)

This pointer will remain valid as long as the node exists. 


### variable secretIdentity

```cpp
const char * secretIdentity;
```


Full identity including secret key in string-serialized form

This pointer will remain valid as long as the node exists. 


### variable online

```cpp
int online;
```


True if some kind of connectivity appears available 


-------------------------------

Updated on  6 September 2021 at 19:54:51 CEST