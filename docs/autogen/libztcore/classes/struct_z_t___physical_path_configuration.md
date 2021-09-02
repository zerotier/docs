---
title: ZT_PhysicalPathConfiguration

custom_edit_url: null
---

# ZT_PhysicalPathConfiguration



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[trustedPathId](/autogen/libztcore/classes/struct_z_t___physical_path_configuration.md#variable-trustedpathid)**  |
| int | **[mtu](/autogen/libztcore/classes/struct_z_t___physical_path_configuration.md#variable-mtu)**  |

## Detailed Description

```cpp
struct ZT_PhysicalPathConfiguration;
```


Physical path configuration 

## Public Attributes Documentation

### variable trustedPathId

```cpp
uint64_t trustedPathId;
```


If non-zero set this physical network path to be trusted to disable encryption and authentication 


### variable mtu

```cpp
int mtu;
```


Physical path MTU from ZT_MIN_PHYSMTU and ZT_MAX_PHYSMTU or <= 0 to use default 


-------------------------------

Updated on  2 September 2021 at 23:24:57 CEST