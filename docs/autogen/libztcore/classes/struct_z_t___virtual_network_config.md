---
title: ZT_VirtualNetworkConfig

custom_edit_url: null
---

# ZT_VirtualNetworkConfig



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[nwid](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-nwid)**  |
| uint64_t | **[mac](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-mac)**  |
| char | **[name](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-name)**  |
| enum ZT_VirtualNetworkStatus | **[status](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-status)**  |
| enum ZT_VirtualNetworkType | **[type](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-type)**  |
| unsigned int | **[mtu](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-mtu)**  |
| int | **[dhcp](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-dhcp)**  |
| int | **[bridge](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-bridge)**  |
| int | **[broadcastEnabled](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-broadcastenabled)**  |
| int | **[portError](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-porterror)**  |
| unsigned long | **[netconfRevision](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-netconfrevision)**  |
| unsigned int | **[assignedAddressCount](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-assignedaddresscount)**  |
| struct sockaddr_storage | **[assignedAddresses](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-assignedaddresses)**  |
| unsigned int | **[routeCount](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-routecount)**  |
| [ZT_VirtualNetworkRoute](/autogen/libztcore/classes/struct_z_t___virtual_network_route.md) | **[routes](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-routes)**  |
| unsigned int | **[multicastSubscriptionCount](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-multicastsubscriptioncount)**  |
| uint32_t | **[adi](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-adi)**  |
| struct ZT_VirtualNetworkConfig::@8 | **[multicastSubscriptions](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-multicastsubscriptions)**  |
| [ZT_VirtualNetworkDNS](/autogen/libztcore/classes/struct_z_t___virtual_network_d_n_s.md) | **[dns](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md#variable-dns)**  |

## Detailed Description

```cpp
struct ZT_VirtualNetworkConfig;
```


Virtual network configuration 

## Public Attributes Documentation

### variable nwid

```cpp
uint64_t nwid;
```


64-bit ZeroTier network ID 


### variable mac

```cpp
uint64_t mac;
```


Ethernet MAC (48 bits) that should be assigned to port 


### variable name

```cpp
char name;
```


Network name (from network configuration master) 


### variable status

```cpp
enum ZT_VirtualNetworkStatus status;
```


Network configuration request status 


### variable type

```cpp
enum ZT_VirtualNetworkType type;
```


Network type 


### variable mtu

```cpp
unsigned int mtu;
```


Maximum interface MTU 


### variable dhcp

```cpp
int dhcp;
```


If nonzero, the network this port belongs to indicates DHCP availability

This is a suggestion. The underlying implementation is free to ignore it for security or other reasons. This is simply a netconf parameter that means 'DHCP is available on this network.' 


### variable bridge

```cpp
int bridge;
```


If nonzero, this port is allowed to bridge to other networks

This is informational. If this is false (0), bridged packets will simply be dropped and bridging won't work. 


### variable broadcastEnabled

```cpp
int broadcastEnabled;
```


If nonzero, this network supports and allows broadcast (ff:ff:ff:ff:ff:ff) traffic 


### variable portError

```cpp
int portError;
```


If the network is in PORT_ERROR state, this is the (negative) error code most recently reported 


### variable netconfRevision

```cpp
unsigned long netconfRevision;
```


Revision number as reported by controller or 0 if still waiting for config 


### variable assignedAddressCount

```cpp
unsigned int assignedAddressCount;
```


Number of assigned addresses 


### variable assignedAddresses

```cpp
struct sockaddr_storage assignedAddresses;
```


ZeroTier-assigned addresses (in sockaddr_storage structures)

For IP, the port number of the sockaddr_XX structure contains the number of bits in the address netmask. Only the IP address and port are used. Other fields like interface number can be ignored.

This is only used for ZeroTier-managed address assignments sent by the virtual network's configuration master. 


### variable routeCount

```cpp
unsigned int routeCount;
```


Number of ZT-pushed routes 


### variable routes

```cpp
ZT_VirtualNetworkRoute routes;
```


Routes (excluding those implied by assigned addresses and their masks) 


### variable multicastSubscriptionCount

```cpp
unsigned int multicastSubscriptionCount;
```


Number of multicast groups subscribed 


### variable adi

```cpp
uint32_t adi;
```


### variable multicastSubscriptions

```cpp
struct ZT_VirtualNetworkConfig::@8 multicastSubscriptions;
```


Multicast groups to which this network's device is subscribed 


### variable dns

```cpp
ZT_VirtualNetworkDNS dns;
```


Network specific DNS configuration 


-------------------------------

Updated on  7 September 2021 at 23:14:48 CEST