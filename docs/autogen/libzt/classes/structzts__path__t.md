---
title: zts_path_t

custom_edit_url: null
---

# zts_path_t



 [More...](#detailed-description)


`#include <ZeroTierSockets.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> | **[address](/autogen/libzt/classes/structzts__path__t.md#variable-address)**  |
| uint64_t | **[last_tx](/autogen/libzt/classes/structzts__path__t.md#variable-last_tx)**  |
| uint64_t | **[last_rx](/autogen/libzt/classes/structzts__path__t.md#variable-last_rx)**  |
| uint64_t | **[trusted_path_id](/autogen/libzt/classes/structzts__path__t.md#variable-trusted_path_id)**  |
| float | **[latency](/autogen/libzt/classes/structzts__path__t.md#variable-latency)**  |
| float | **[unused_0](/autogen/libzt/classes/structzts__path__t.md#variable-unused_0)**  |
| float | **[unused_1](/autogen/libzt/classes/structzts__path__t.md#variable-unused_1)**  |
| float | **[unused_2](/autogen/libzt/classes/structzts__path__t.md#variable-unused_2)**  |
| float | **[unused_3](/autogen/libzt/classes/structzts__path__t.md#variable-unused_3)**  |
| float | **[unused_4](/autogen/libzt/classes/structzts__path__t.md#variable-unused_4)**  |
| uint64_t | **[unused_5](/autogen/libzt/classes/structzts__path__t.md#variable-unused_5)**  |
| uint64_t | **[unused_6](/autogen/libzt/classes/structzts__path__t.md#variable-unused_6)**  |
| float | **[unused_7](/autogen/libzt/classes/structzts__path__t.md#variable-unused_7)**  |
| char * | **[ifname](/autogen/libzt/classes/structzts__path__t.md#variable-ifname)**  |
| int | **[expired](/autogen/libzt/classes/structzts__path__t.md#variable-expired)**  |
| int | **[preferred](/autogen/libzt/classes/structzts__path__t.md#variable-preferred)**  |

## Detailed Description

```cpp
struct zts_path_t;
```


Physical network path to a peer 

## Public Attributes Documentation

### variable address

```cpp
struct zts_sockaddr_storage address;
```


Address of endpoint 


### variable last_tx

```cpp
uint64_t last_tx;
```


Time of last send in milliseconds or 0 for never 


### variable last_rx

```cpp
uint64_t last_rx;
```


Time of last receive in milliseconds or 0 for never 


### variable trusted_path_id

```cpp
uint64_t trusted_path_id;
```


Is this a trusted path? If so this will be its nonzero ID. 


### variable latency

```cpp
float latency;
```


One-way latency 


### variable unused_0

```cpp
float unused_0;
```


### variable unused_1

```cpp
float unused_1;
```


### variable unused_2

```cpp
float unused_2;
```


### variable unused_3

```cpp
float unused_3;
```


### variable unused_4

```cpp
float unused_4;
```


### variable unused_5

```cpp
uint64_t unused_5;
```


### variable unused_6

```cpp
uint64_t unused_6;
```


### variable unused_7

```cpp
float unused_7;
```


### variable ifname

```cpp
char * ifname;
```


Name of physical interface (for monitoring) 


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

Updated on  7 September 2021 at 23:14:48 CEST