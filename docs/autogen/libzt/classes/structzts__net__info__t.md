---
title: zts_net_info_t

custom_edit_url: null
---

# zts_net_info_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint64_t | **[net_id](/autogen/libzt/classes/structzts__net__info__t.md#variable-net_id)**  |
| uint64_t | **[mac](/autogen/libzt/classes/structzts__net__info__t.md#variable-mac)**  |
| char | **[name](/autogen/libzt/classes/structzts__net__info__t.md#variable-name)**  |
| <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_network_status_t">zts_network_status_t</a> | **[status](/autogen/libzt/classes/structzts__net__info__t.md#variable-status)**  |
| <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_net_info_type_t">zts_net_info_type_t</a> | **[type](/autogen/libzt/classes/structzts__net__info__t.md#variable-type)**  |
| unsigned int | **[mtu](/autogen/libzt/classes/structzts__net__info__t.md#variable-mtu)**  |
| int | **[dhcp](/autogen/libzt/classes/structzts__net__info__t.md#variable-dhcp)**  |
| int | **[bridge](/autogen/libzt/classes/structzts__net__info__t.md#variable-bridge)**  |
| int | **[broadcast_enabled](/autogen/libzt/classes/structzts__net__info__t.md#variable-broadcast_enabled)**  |
| int | **[port_error](/autogen/libzt/classes/structzts__net__info__t.md#variable-port_error)**  |
| unsigned long | **[netconf_rev](/autogen/libzt/classes/structzts__net__info__t.md#variable-netconf_rev)**  |
| unsigned int | **[assigned_addr_count](/autogen/libzt/classes/structzts__net__info__t.md#variable-assigned_addr_count)**  |
| struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> | **[assigned_addrs](/autogen/libzt/classes/structzts__net__info__t.md#variable-assigned_addrs)**  |
| unsigned int | **[route_count](/autogen/libzt/classes/structzts__net__info__t.md#variable-route_count)**  |
| <a href="/autogen/libzt/classes/structzts__route__info__t.md">zts_route_info_t</a> | **[routes](/autogen/libzt/classes/structzts__net__info__t.md#variable-routes)**  |
| unsigned int | **[multicast_sub_count](/autogen/libzt/classes/structzts__net__info__t.md#variable-multicast_sub_count)**  |
| uint32_t | **[adi](/autogen/libzt/classes/structzts__net__info__t.md#variable-adi)**  |
| struct zts_net_info_t::@0 | **[multicast_subs](/autogen/libzt/classes/structzts__net__info__t.md#variable-multicast_subs)**  |

## Detailed Description

```cpp
struct zts_net_info_t;
```


Virtual network configuration 

## Public Attributes Documentation

### variable net_id

```cpp
uint64_t net_id;
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
zts_network_status_t status;
```


Network configuration request status 


### variable type

```cpp
zts_net_info_type_t type;
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


### variable broadcast_enabled

```cpp
int broadcast_enabled;
```


If nonzero, this network supports and allows broadcast (ff:ff:ff:ff:ff:ff) traffic 


### variable port_error

```cpp
int port_error;
```


If the network is in PORT_ERROR state, this is the (negative) error code most recently reported 


### variable netconf_rev

```cpp
unsigned long netconf_rev;
```


Revision number as reported by controller or 0 if still waiting for config 


### variable assigned_addr_count

```cpp
unsigned int assigned_addr_count;
```


Number of assigned addresses 


### variable assigned_addrs

```cpp
struct zts_sockaddr_storage assigned_addrs;
```


ZeroTier-assigned addresses (in sockaddr_storage structures)

For IP, the port number of the sockaddr_XX structure contains the number of bits in the address netmask. Only the IP address and port are used. Other fields like interface number can be ignored.

This is only used for ZeroTier-managed address assignments sent by the virtual network's configuration master. 


### variable route_count

```cpp
unsigned int route_count;
```


Number of ZT-pushed routes 


### variable routes

```cpp
zts_route_info_t routes;
```


Routes (excluding those implied by assigned addresses and their masks) 


### variable multicast_sub_count

```cpp
unsigned int multicast_sub_count;
```


Number of multicast groups subscribed 


### variable adi

```cpp
uint32_t adi;
```


### variable multicast_subs

```cpp
struct zts_net_info_t::@0 multicast_subs;
```


Multicast groups to which this network's device is subscribed 


-------------------------------

Updated on 19 May 2021 at 11:01:17 PDT