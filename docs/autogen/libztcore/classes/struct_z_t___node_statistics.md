---
title: ZT_NodeStatistics

custom_edit_url: null
---

# ZT_NodeStatistics



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[inVerbCounts](/autogen/libztcore/classes/struct_z_t___node_statistics.md#variable-inverbcounts)**  |
| uint64_t | **[inVerbBytes](/autogen/libztcore/classes/struct_z_t___node_statistics.md#variable-inverbbytes)**  |

## Detailed Description

```cpp
struct ZT_NodeStatistics;
```


Internal node statistics

This structure is subject to change between versions. 

## Public Attributes Documentation

### variable inVerbCounts

```cpp
uint64_t inVerbCounts;
```


Number of each protocol verb (possible verbs 0..31) received 


### variable inVerbBytes

```cpp
uint64_t inVerbBytes;
```


Number of bytes for each protocol verb received 


-------------------------------

Updated on  3 September 2021 at 13:34:19 CEST