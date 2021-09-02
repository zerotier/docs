---
title: ZT_Peer

custom_edit_url: null
---

# ZT_Peer



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[address](/autogen/libztcore/classes/struct_z_t___peer.md#variable-address)**  |
| int | **[versionMajor](/autogen/libztcore/classes/struct_z_t___peer.md#variable-versionmajor)**  |
| int | **[versionMinor](/autogen/libztcore/classes/struct_z_t___peer.md#variable-versionminor)**  |
| int | **[versionRev](/autogen/libztcore/classes/struct_z_t___peer.md#variable-versionrev)**  |
| int | **[latency](/autogen/libztcore/classes/struct_z_t___peer.md#variable-latency)**  |
| enum ZT_PeerRole | **[role](/autogen/libztcore/classes/struct_z_t___peer.md#variable-role)**  |
| bool | **[isBonded](/autogen/libztcore/classes/struct_z_t___peer.md#variable-isbonded)**  |
| int | **[bondingPolicy](/autogen/libztcore/classes/struct_z_t___peer.md#variable-bondingpolicy)**  |
| bool | **[isHealthy](/autogen/libztcore/classes/struct_z_t___peer.md#variable-ishealthy)**  |
| int | **[numAliveLinks](/autogen/libztcore/classes/struct_z_t___peer.md#variable-numalivelinks)**  |
| int | **[numTotalLinks](/autogen/libztcore/classes/struct_z_t___peer.md#variable-numtotallinks)**  |
| char | **[customBondName](/autogen/libztcore/classes/struct_z_t___peer.md#variable-custombondname)**  |
| unsigned int | **[pathCount](/autogen/libztcore/classes/struct_z_t___peer.md#variable-pathcount)**  |
| [ZT_PeerPhysicalPath](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md) | **[paths](/autogen/libztcore/classes/struct_z_t___peer.md#variable-paths)**  |

## Detailed Description

```cpp
struct ZT_Peer;
```


Peer status result buffer 

## Public Attributes Documentation

### variable address

```cpp
uint64_t address;
```


ZeroTier address (40 bits) 


### variable versionMajor

```cpp
int versionMajor;
```


Remote major version or -1 if not known 


### variable versionMinor

```cpp
int versionMinor;
```


Remote minor version or -1 if not known 


### variable versionRev

```cpp
int versionRev;
```


Remote revision or -1 if not known 


### variable latency

```cpp
int latency;
```


Last measured latency in milliseconds or -1 if unknown 


### variable role

```cpp
enum ZT_PeerRole role;
```


What trust hierarchy role does this device have? 


### variable isBonded

```cpp
bool isBonded;
```


Whether a multi-link bond has formed 


### variable bondingPolicy

```cpp
int bondingPolicy;
```


The bonding policy used to bond to this peer 


### variable isHealthy

```cpp
bool isHealthy;
```


The health status of the bond to this peer 


### variable numAliveLinks

```cpp
int numAliveLinks;
```


The number of links that comprise the bond to this peer that are considered alive 


### variable numTotalLinks

```cpp
int numTotalLinks;
```


The number of links that comprise the bond to this peer 


### variable customBondName

```cpp
char customBondName;
```


The user-specified bond template name 


### variable pathCount

```cpp
unsigned int pathCount;
```


Number of paths (size of paths[]) 


### variable paths

```cpp
ZT_PeerPhysicalPath paths;
```


Known network paths to peer 


-------------------------------

Updated on  2 September 2021 at 23:14:50 CEST