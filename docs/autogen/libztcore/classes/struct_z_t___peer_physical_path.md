---
title: ZT_PeerPhysicalPath

custom_edit_url: null
---

# ZT_PeerPhysicalPath



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct sockaddr_storage | **[address](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-address)**  |
| uint64_t | **[lastSend](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-lastsend)**  |
| uint64_t | **[lastReceive](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-lastreceive)**  |
| uint64_t | **[trustedPathId](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-trustedpathid)**  |
| float | **[latencyMean](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-latencymean)**  |
| float | **[latencyMax](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-latencymax)**  |
| float | **[latencyVariance](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-latencyvariance)**  |
| float | **[packetLossRatio](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-packetlossratio)**  |
| float | **[packetErrorRatio](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-packeterrorratio)**  |
| uint64_t | **[throughputMean](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-throughputmean)**  |
| float | **[throughputMax](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-throughputmax)**  |
| float | **[throughputVariance](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-throughputvariance)**  |
| uint8_t | **[scope](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-scope)**  |
| float | **[allocation](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-allocation)**  |
| char | **[ifname](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-ifname)**  |
| uint64_t | **[localSocket](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-localsocket)**  |
| int | **[expired](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-expired)**  |
| int | **[preferred](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md#variable-preferred)**  |

## Detailed Description

```cpp
struct ZT_PeerPhysicalPath;
```


Physical network path to a peer 

## Public Attributes Documentation

### variable address

```cpp
struct sockaddr_storage address;
```


Address of endpoint 


### variable lastSend

```cpp
uint64_t lastSend;
```


Time of last send in milliseconds or 0 for never 


### variable lastReceive

```cpp
uint64_t lastReceive;
```


Time of last receive in milliseconds or 0 for never 


### variable trustedPathId

```cpp
uint64_t trustedPathId;
```


Is this a trusted path? If so this will be its nonzero ID. 


### variable latencyMean

```cpp
float latencyMean;
```


Mean latency 


### variable latencyMax

```cpp
float latencyMax;
```


Maximum observed latency 


### variable latencyVariance

```cpp
float latencyVariance;
```


Variance of latency 


### variable packetLossRatio

```cpp
float packetLossRatio;
```


Packet loss ratio 


### variable packetErrorRatio

```cpp
float packetErrorRatio;
```


Packet error ratio 


### variable throughputMean

```cpp
uint64_t throughputMean;
```


Mean throughput 


### variable throughputMax

```cpp
float throughputMax;
```


Maximum observed throughput 


### variable throughputVariance

```cpp
float throughputVariance;
```


Throughput variance 


### variable scope

```cpp
uint8_t scope;
```


Address scope 


### variable allocation

```cpp
float allocation;
```


Percentage of traffic allocated to this path 


### variable ifname

```cpp
char ifname;
```


Name of physical interface (for monitoring) 


### variable localSocket

```cpp
uint64_t localSocket;
```


### variable expired

```cpp
int expired;
```


Is path expired? 


### variable preferred

```cpp
int preferred;
```


Is path preferred? 


-------------------------------

Updated on  6 September 2021 at 19:54:51 CEST