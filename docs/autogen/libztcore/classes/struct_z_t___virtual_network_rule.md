---
title: ZT_VirtualNetworkRule

custom_edit_url: null
---

# ZT_VirtualNetworkRule



 [More...](#detailed-description)


`#include <ZeroTierOne.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint8_t | **[t](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-t)**  |
| uint8_t | **[ip](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-ip)**  |
| uint8_t | **[mask](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-mask)**  |
| struct ZT_VirtualNetworkRule::@0::@1 | **[ipv6](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-ipv6)**  |
| uint32_t | **[ip](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-ip)**  |
| struct ZT_VirtualNetworkRule::@0::@2 | **[ipv4](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-ipv4)**  |
| uint64_t | **[start](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-start)**  |
| uint32_t | **[end](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-end)**  |
| uint16_t | **[idx](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-idx)**  |
| uint8_t | **[format](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-format)**  |
| struct ZT_VirtualNetworkRule::@0::@3 | **[intRange](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-intrange)**  |
| uint64_t | **[characteristics](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-characteristics)**  |
| uint16_t | **[port](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-port)**  |
| uint64_t | **[zt](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-zt)**  |
| uint32_t | **[randomProbability](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-randomprobability)**  |
| uint8_t | **[mac](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-mac)**  |
| uint16_t | **[vlanId](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-vlanid)**  |
| uint8_t | **[vlanPcp](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-vlanpcp)**  |
| uint8_t | **[vlanDei](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-vlandei)**  |
| uint16_t | **[etherType](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-ethertype)**  |
| uint8_t | **[ipProtocol](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-ipprotocol)**  |
| uint8_t | **[value](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-value)**  |
| struct ZT_VirtualNetworkRule::@0::@4 | **[ipTos](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-iptos)**  |
| uint16_t | **[frameSize](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-framesize)**  |
| uint8_t | **[type](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-type)**  |
| uint8_t | **[code](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-code)**  |
| uint8_t | **[flags](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-flags)**  |
| struct ZT_VirtualNetworkRule::@0::@5 | **[icmp](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-icmp)**  |
| uint32_t | **[id](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-id)**  |
| uint32_t | **[value](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-value)**  |
| struct ZT_VirtualNetworkRule::@0::@6 | **[tag](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-tag)**  |
| uint64_t | **[address](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-address)**  |
| uint32_t | **[flags](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-flags)**  |
| uint16_t | **[length](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-length)**  |
| struct ZT_VirtualNetworkRule::@0::@7 | **[fwd](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-fwd)**  |
| uint8_t | **[qosBucket](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-qosbucket)**  |
| union ZT_VirtualNetworkRule::@0 | **[v](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md#variable-v)**  |

## Detailed Description

```cpp
struct ZT_VirtualNetworkRule;
```


Network flow rule

Rules are stored in a table in which one or more match entries is followed by an action. If more than one match precedes an action, the rule is the AND of all matches. An action with no match is always taken since it matches anything. If nothing matches, the default action is DROP.

This is designed to be a more memory-efficient way of storing rules than a wide table, yet still fast and simple to access in code. 

## Public Attributes Documentation

### variable t

```cpp
uint8_t t;
```


Type and flags

Bits are: NOTTTTTT

N - If true, sense of match is inverted (no effect on actions) O - If true, result is ORed with previous instead of ANDed (no effect on actions) T - Rule or action type

AND with 0x3f to get type, 0x80 to get NOT bit, and 0x40 to get OR bit. 


### variable ip

```cpp
uint8_t ip;
```


### variable mask

```cpp
uint8_t mask;
```


### variable ipv6

```cpp
struct ZT_VirtualNetworkRule::@0::@1 ipv6;
```


IPv6 address in big-endian / network byte order and netmask bits 


### variable ip

```cpp
uint32_t ip;
```


### variable ipv4

```cpp
struct ZT_VirtualNetworkRule::@0::@2 ipv4;
```


IPv4 address in big-endian / network byte order 


### variable start

```cpp
uint64_t start;
```


### variable end

```cpp
uint32_t end;
```


### variable idx

```cpp
uint16_t idx;
```


### variable format

```cpp
uint8_t format;
```


### variable intRange

```cpp
struct ZT_VirtualNetworkRule::@0::@3 intRange;
```


Integer range match in packet payload

This allows matching of ranges of integers up to 64 bits wide where the range is +/- INT32_MAX. It's packed this way so it fits in 16 bytes and doesn't enlarge the overall size of this union. 


### variable characteristics

```cpp
uint64_t characteristics;
```


Packet characteristic flags being matched 


### variable port

```cpp
uint16_t port;
```


IP port range &ndash; start-end inclusive &ndash; host byte order 


### variable zt

```cpp
uint64_t zt;
```


40-bit ZeroTier address (in least significant bits, host byte order) 


### variable randomProbability

```cpp
uint32_t randomProbability;
```


0 = never, UINT32_MAX = always 


### variable mac

```cpp
uint8_t mac;
```


48-bit Ethernet MAC address in big-endian order 


### variable vlanId

```cpp
uint16_t vlanId;
```


VLAN ID in host byte order 


### variable vlanPcp

```cpp
uint8_t vlanPcp;
```


VLAN PCP (least significant 3 bits) 


### variable vlanDei

```cpp
uint8_t vlanDei;
```


VLAN DEI (single bit / boolean) 


### variable etherType

```cpp
uint16_t etherType;
```


Ethernet type in host byte order 


### variable ipProtocol

```cpp
uint8_t ipProtocol;
```


IP protocol 


### variable value

```cpp
uint8_t value;
```


### variable ipTos

```cpp
struct ZT_VirtualNetworkRule::@0::@4 ipTos;
```


IP type of service a.k.a. DSCP field 


### variable frameSize

```cpp
uint16_t frameSize;
```


Ethernet packet size in host byte order (start-end, inclusive) 


### variable type

```cpp
uint8_t type;
```


### variable code

```cpp
uint8_t code;
```


### variable flags

```cpp
uint8_t flags;
```


### variable icmp

```cpp
struct ZT_VirtualNetworkRule::@0::@5 icmp;
```


ICMP type and code 


### variable id

```cpp
uint32_t id;
```


### variable value

```cpp
uint32_t value;
```


### variable tag

```cpp
struct ZT_VirtualNetworkRule::@0::@6 tag;
```


For tag-related rules 


### variable address

```cpp
uint64_t address;
```


### variable flags

```cpp
uint32_t flags;
```


### variable length

```cpp
uint16_t length;
```


### variable fwd

```cpp
struct ZT_VirtualNetworkRule::@0::@7 fwd;
```


Destinations for TEE and REDIRECT 


### variable qosBucket

```cpp
uint8_t qosBucket;
```


Quality of Service (QoS) bucket we want a frame to be placed in 


### variable v

```cpp
union ZT_VirtualNetworkRule::@0 v;
```


Union containing the value of this rule &ndash; which field is used depends on 't' 


-------------------------------

Updated on  3 September 2021 at 13:30:40 CEST