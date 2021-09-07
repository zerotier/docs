---
title: ZT_UserMessage

custom_edit_url: null
---

# ZT_UserMessage



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[origin](/autogen/libztcore/classes/struct_z_t___user_message.md#variable-origin)**  |
| uint64_t | **[typeId](/autogen/libztcore/classes/struct_z_t___user_message.md#variable-typeid)**  |
| const void * | **[data](/autogen/libztcore/classes/struct_z_t___user_message.md#variable-data)**  |
| unsigned int | **[length](/autogen/libztcore/classes/struct_z_t___user_message.md#variable-length)**  |

## Detailed Description

```cpp
struct ZT_UserMessage;
```


User message used with ZT_EVENT_USER_MESSAGE

These are direct VL1 P2P messages for application use. Encryption and authentication in the ZeroTier protocol will guarantee the origin address and message content, but you are responsible for any other levels of authentication or access control that are required. Any node in the world can send you a user message! (Unless your network is air gapped.) 

## Public Attributes Documentation

### variable origin

```cpp
uint64_t origin;
```


ZeroTier address of sender (least significant 40 bits) 


### variable typeId

```cpp
uint64_t typeId;
```


User message type ID 


### variable data

```cpp
const void * data;
```


User message data (not including type ID) 


### variable length

```cpp
unsigned int length;
```


Length of data in bytes 


-------------------------------

Updated on  8 September 2021 at 01:16:04 CEST