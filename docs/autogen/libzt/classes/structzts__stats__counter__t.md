---
title: zts_stats_counter_t

custom_edit_url: null
---

# zts_stats_counter_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| uint32_t | **[link_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-link_tx)**  |
| uint32_t | **[link_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-link_rx)**  |
| uint32_t | **[link_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-link_drop)**  |
| uint32_t | **[link_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-link_err)**  |
| uint32_t | **[etharp_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-etharp_tx)**  |
| uint32_t | **[etharp_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-etharp_rx)**  |
| uint32_t | **[etharp_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-etharp_drop)**  |
| uint32_t | **[etharp_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-etharp_err)**  |
| uint32_t | **[ip4_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-ip4_tx)**  |
| uint32_t | **[ip4_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-ip4_rx)**  |
| uint32_t | **[ip4_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-ip4_drop)**  |
| uint32_t | **[ip4_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-ip4_err)**  |
| uint32_t | **[ip6_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-ip6_tx)**  |
| uint32_t | **[ip6_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-ip6_rx)**  |
| uint32_t | **[ip6_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-ip6_drop)**  |
| uint32_t | **[ip6_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-ip6_err)**  |
| uint32_t | **[icmp4_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-icmp4_tx)**  |
| uint32_t | **[icmp4_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-icmp4_rx)**  |
| uint32_t | **[icmp4_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-icmp4_drop)**  |
| uint32_t | **[icmp4_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-icmp4_err)**  |
| uint32_t | **[icmp6_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-icmp6_tx)**  |
| uint32_t | **[icmp6_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-icmp6_rx)**  |
| uint32_t | **[icmp6_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-icmp6_drop)**  |
| uint32_t | **[icmp6_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-icmp6_err)**  |
| uint32_t | **[udp_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-udp_tx)**  |
| uint32_t | **[udp_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-udp_rx)**  |
| uint32_t | **[udp_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-udp_drop)**  |
| uint32_t | **[udp_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-udp_err)**  |
| uint32_t | **[tcp_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-tcp_tx)**  |
| uint32_t | **[tcp_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-tcp_rx)**  |
| uint32_t | **[tcp_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-tcp_drop)**  |
| uint32_t | **[tcp_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-tcp_err)**  |
| uint32_t | **[nd6_tx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-nd6_tx)**  |
| uint32_t | **[nd6_rx](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-nd6_rx)**  |
| uint32_t | **[nd6_drop](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-nd6_drop)**  |
| uint32_t | **[nd6_err](/autogen/libzt/classes/structzts__stats__counter__t.md#variable-nd6_err)**  |

## Detailed Description

```cpp
struct zts_stats_counter_t;
```


Structure containing counters for various protocol statistics 

## Public Attributes Documentation

### variable link_tx

```cpp
uint32_t link_tx;
```


Number of link packets transmitted 


### variable link_rx

```cpp
uint32_t link_rx;
```


Number of link packets received 


### variable link_drop

```cpp
uint32_t link_drop;
```


Number of link packets dropped 


### variable link_err

```cpp
uint32_t link_err;
```


Aggregate number of link-level errors 


### variable etharp_tx

```cpp
uint32_t etharp_tx;
```


Number of etharp packets transmitted 


### variable etharp_rx

```cpp
uint32_t etharp_rx;
```


Number of etharp packets received 


### variable etharp_drop

```cpp
uint32_t etharp_drop;
```


Number of etharp packets dropped 


### variable etharp_err

```cpp
uint32_t etharp_err;
```


Aggregate number of etharp errors 


### variable ip4_tx

```cpp
uint32_t ip4_tx;
```


Number of IPv4 packets transmitted 


### variable ip4_rx

```cpp
uint32_t ip4_rx;
```


Number of IPv4 packets received 


### variable ip4_drop

```cpp
uint32_t ip4_drop;
```


Number of IPv4 packets dropped 


### variable ip4_err

```cpp
uint32_t ip4_err;
```


Aggregate number of IPv4 errors 


### variable ip6_tx

```cpp
uint32_t ip6_tx;
```


Number of IPv6 packets transmitted 


### variable ip6_rx

```cpp
uint32_t ip6_rx;
```


Number of IPv6 packets received 


### variable ip6_drop

```cpp
uint32_t ip6_drop;
```


Number of IPv6 packets dropped 


### variable ip6_err

```cpp
uint32_t ip6_err;
```


Aggregate number of IPv6 errors 


### variable icmp4_tx

```cpp
uint32_t icmp4_tx;
```


Number of ICMPv4 packets transmitted 


### variable icmp4_rx

```cpp
uint32_t icmp4_rx;
```


Number of ICMPv4 packets received 


### variable icmp4_drop

```cpp
uint32_t icmp4_drop;
```


Number of ICMPv4 packets dropped 


### variable icmp4_err

```cpp
uint32_t icmp4_err;
```


Aggregate number of ICMPv4 errors 


### variable icmp6_tx

```cpp
uint32_t icmp6_tx;
```


Number of ICMPv6 packets transmitted 


### variable icmp6_rx

```cpp
uint32_t icmp6_rx;
```


Number of ICMPv6 packets received 


### variable icmp6_drop

```cpp
uint32_t icmp6_drop;
```


Number of ICMPv6 packets dropped 


### variable icmp6_err

```cpp
uint32_t icmp6_err;
```


Aggregate number of ICMPv6 errors 


### variable udp_tx

```cpp
uint32_t udp_tx;
```


Number of UDP packets transmitted 


### variable udp_rx

```cpp
uint32_t udp_rx;
```


Number of UDP packets received 


### variable udp_drop

```cpp
uint32_t udp_drop;
```


Number of UDP packets dropped 


### variable udp_err

```cpp
uint32_t udp_err;
```


Aggregate number of UDP errors 


### variable tcp_tx

```cpp
uint32_t tcp_tx;
```


Number of TCP packets transmitted 


### variable tcp_rx

```cpp
uint32_t tcp_rx;
```


Number of TCP packets received 


### variable tcp_drop

```cpp
uint32_t tcp_drop;
```


Number of TCP packets dropped 


### variable tcp_err

```cpp
uint32_t tcp_err;
```


Aggregate number of TCP errors 


### variable nd6_tx

```cpp
uint32_t nd6_tx;
```


Number of ND6 packets transmitted 


### variable nd6_rx

```cpp
uint32_t nd6_rx;
```


Number of ND6 packets received 


### variable nd6_drop

```cpp
uint32_t nd6_drop;
```


Number of ND6 packets dropped 


### variable nd6_err

```cpp
uint32_t nd6_err;
```


Aggregate number of ND6 errors 


-------------------------------

Updated on  6 September 2021 at 19:54:51 CEST