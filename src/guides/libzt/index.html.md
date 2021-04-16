---
title: ZeroTier SDK

language_tabs: # must be one of https://git.io/vQNgJ
  - c
  - rust
  - python
  - csharp
  - java

toc_footers:
  - <a href='https://www.zerotier.com'>ZeroTier Homepage</a>
  - <a href='#'>Sign Up for Central API Key</a>
  - <a href='https://github.com/zerotier/libzt'>GitHub</a>

includes:
  - errors

search: true

code_clipboard: true
---

# Getting Started

*Programmatically join, create, and administer secure, globally-available virtual private networks of unlimited size.*

This is a multi-part tutorial on how to use the ZeroTier SDK. It generally progresses from beginner topics to advanced topics and is meant to be read linearly. For the purposes of this tutorial it is recommended that you first [create an account](https://my.zerotier.com) and a private network to test on, but it is not strictly necessary if you're comfortable joining public networks.

> tl;dr

```c
#include <ZeroTierSockets.h>

int main() {
  zts_node_start();
  zts_net_join(0x1234567890abcdef);
  // ...
  int s = zts_socket(ZTS_AF_INET, ZTS_SOCK_STREAM, 0);
  zts_connect(s, in4, adddrlen);
  // ...
  return zts_node_stop();
}
```

```python

  import libzt

  print("Starting ZeroTier...")
  event_callback = MyEventCallbackClass()
  libzt.start(key_file_path, event_callback, zt_service_port)
  print("Waiting for node to come online...")
  while not is_online:
      time.sleep(1)
  print("Joining network:", hex(network_id))
  libzt.join(network_id)
  while not is_joined:
      time.sleep(1)
  print("Joined network")
```

<aside class="success">
Full example source code: <a href="https://github.com/zerotier/libzt/tree/master/examples">libzt/examples</a>
</aside>

For API reference documentation see the following:

 - [C/C++ (Doxygen)]()
 - [C# (Doxygen)]()
 - [Java (javadoc)]()
 - [Python (pydoc)]()

# Part 1. Ping-able Node

In this part we will initialize a node, start it and join our public `earth` network. Once joined you can also join a desktop client and ping your new globally static IPv4 (or IPv6) address.

<aside class="warning">
Security note: Since <code>earth</code> is a public network it is recommended that you create an account and a private network of your own to test on.
</aside>

## Initializing a node

Before you start a node you should consider the following initialization options.


`zts_init_*` functions should be called before starting your node. They don't do much except instruct your node how to operate after you call `zts_node_start()`. Every node needs an `identity`. You have a few options:

Generate a new one:

```c
zts_init_new_identity()
```

Load from storage (will generate new identity if path is empty or does not exist):
```c
zts_init_from_storage("./node_path")
```
Load from memory:

```c
zts_init_from_memory(key, len)
```

*An identity is a verifiable address that networks and other nodes can use to talk to your node at a low level.*

## Additional initialization options

There are a few other initialization functions to customize the behavior of your node which must be called before `zts_node_start()`:

```c
zts_init_port(int port); // Bind to specific port
zts_init_callback(&my_event_handler); // Set callback function
zts_start();
...
```

## Starting a node

A ZeroTier node needs an `identity`. . When you start a node for the first time it will generate a new identity automatically. That is, unless you told it where to find an identity that you already have. We'll get to that in a moment.

Here's a minimal pingable IPv4 program:

```c
zts_init_from_storage("./node_identity_files");
zts_node_start();
```
This method will first check the directory for an identity file:
 - If it is found it will load it and use that identity.
 - If the directory is empty the node will generate a new identity and write it to files `identity.secret` and `identity.public`.
 - Will automatically take care of all peer, network and planet caching.

*You should keep your identity files safe and unique! If anyone gets ahold of these files they can impersonate your node. And if you run two nodes with the same identities you will have a bad day.*

## No storage option

If instead you have an identity in memory that you'd like to use, you can do the following:

```c
zts_init_from_memory(identity, len);
zts_node_start();
```

If you use the above option, nothing will be read from or written to storage. If you are interested in caching things like peer connectivity hints, network config, etc., you will need to do that manually via the callback system discussed later.



## Getting information about your node

After your node is

## Stopping a node

> If you're done using ZeroTier and want to stop the node, call:

```c
zts_node_stop();
```

It is possible re-start the node just by calling `zts_node_start()`. No re-initialization is necessary.

```c
zts_node_restart();
```

If however you are absolutely certain you are done and want all threads to cease operation and for resources to be completely freed, call:

```c
zts_node_free();
```

> tl;dr

```c
#include <stdio.h>
#include "ZeroTierSockets.h"

int main() {
    printf("Starting node...\n");
    zts_node_start();

    printf("Waiting for node to come online\n");
    while (!zts_node_is_online())
        zts_delay_ms(50);

    printf("Node identity is: %llx\n", zts_node_get_id());

    printf("Joining network\n");
    uint64_t network = 0x8286ac0e47a6f241;
    zts_net_join(network);

    printf("Waiting for join to complete. Did you authorize it?\n");
    while (zts_net_count() < 1)
        zts_delay_ms(50);

    printf("Waiting for address assignment\n");
    int err = 0;
    while (! (err = zts_addr_is_assigned(network, ZTS_AF_INET))) {
        printf("err = %d\n", err);
        zts_delay_ms(500);
    }
    char ipstr[ZTS_INET6_ADDRSTRLEN] = { 0 };
    zts_addr_get_str(network, ZTS_AF_INET, ipstr, ZTS_INET6_ADDRSTRLEN);
    printf("Ping me at %s\n", ipstr);

    // Do network stuff!

    zts_delay_ms(120000);

    printf("Stopping node\n");
    return zts_node_stop();
}
```

Program output

```
Starting node...
Waiting for node to come online
Node identity is: 123456abcd
Joining network
Waiting for join to complete. Did you authorize it?
Waiting for address assignment
Ping me at 172.22.22.1
Stopping node
```

# Part 2. Sockets

ZeroTier provides a socket interface that idiomatic to each supported language.




# Part 3. Central API

This section will show you how to use the built-in Central API to make calls to our hosted endpoints using your language of choice. It is not necessary to use these built in features but they are provided as a convenience.

<aside class="notice">
The Central client functionality built into libzt is a lagging subset of what is available at <a href="https://apidocs.zerotier.com/">apidocs.zerotier.com</a>. That being said, it should provide for most of your needs.
</aside>

## Generating an API token

## Creating a network

## Authorizing a node

## Changing network settings



























# Starting ZeroTier

The next few sections explain how to use the network control interface portion of the API. These functions are non-blocking and will return an error code specified in the [Error Handling](#error-handling) section and will result in the generation of callback events detailed in the [Event Handling](#event-handling) section. It is your responsibility to handle these events.

To start the service, simply call:

```c
zts_start(const char *path, void (*callback)(void *), uint16_t port);
zts_callback_msg*), int port)`
```

At this stage, if a cryptographic identity for this node does not already exist on your local storage medium, it will generate a new one and store it, the node's address (commonly referred to as `nodeId`) will be derived from this identity and will be presented to you upon receiving the `ZTS_EVENT_NODE_ONLINE` shown below. The first argument `path` is a path where you will direct ZeroTier to store its automatically-generated cryptographic identity files (`identity.public` and `identity.secret`), these files are your keys to communicating on the network. Keep them safe and keep them unique. If any two nodes are online using the same identities you will have a bad time. The second argument `userCallbackFunc` is a function that you specify to handle all generated events for the life of your program, see below:

```c
#include "ZeroTierSockets.h"

...

bool networkReady = false;

void on_zts_event(struct zts_callback_msg *msg)
{
    if (msg->eventCode == ZTS_EVENT_NODE_ONLINE) {
        printf("ZTS_EVENT_NODE_ONLINE, nodeId=%llx\n", msg->node->address);
        networkReady = true;
    }
    ...
}

int main()
{
    zts_start("configPath", &on_zts_event, 9994);
    uint64_t nwid = 0x0123456789abcdef;
    while (!networkReady) { sleep(1); }
    zts_join(nwid);
    int fd = zts_socket(ZTS_AF_INET, ZTS_SOCK_STREAM, 0);
    ...
    return 0;
}

```

For more complete examples see `./examples/`

After calling `zts_start()` you will receive one or more events specified in the [Node Events](#node-events) section. After receiving `ZTS_EVENT_NODE_ONLINE` you will be allowed to join or leave networks. You must authorize the node ID provided by the this callback event to join your network. This can be done manually or via our [Web API](https://my.zerotier.com/help/api). Note however that if you are using an Ad-hoc network, it has no controller and therefore requires no authorization.

At the end of your program or when no more network activity is anticipated, the user application can shut down the service with `zts_stop()`. However, it is safe to leave the service running in the background indefinitely as it doesn't consume much memory or CPU while at idle. `zts_stop()` is a non-blocking call and will itself issue a series of events indicating that various aspects of the ZeroTier service have successfully shut down.

It is worth noting that while `zts_stop()` will stop the service, the user-space network stack will continue operating in a headless hibernation mode. This is intended behavior due to the fact that the network stack we've chosen doesn't currently support the notion of shutdown since it was initially designed for embedded applications that are simply switched off. If you do need a way to shut everything down and free all resources you can call `zts_free()`, but please note that calling this function will prevent all subsequent `zts_start()` calls from succeeding and will require a full application restart if you want to run the service again. The events `ZTS_EVENT_NODE_ONLINE` and `ZTS_EVENT_NODE_OFFLINE` can be seen periodically throughout the lifetime of your application depending on the reliability of your underlying network link, these events are lagging indicators and are typically only triggered every thirty (30) seconds.

Lastly, the function `zts_restart()` is provided as a way to restart the ZeroTier service along with all of its virtual interfaces. The network stack will remain online and undisturbed during this call. Note that this call will temporarily block until the service has fully shut down, then will return and you may then watch for the appropriate startup callbacks mentioned above.

# Joining a network

Joining a ZeroTier virtual network is as easy as calling `zts_join(uint64_t networkId)`. Similarly there is a `zts_leave(uint64_t networkId)`. Note that `zts_start()` must be called and a `ZTS_EVENT_NODE_ONLINE` event must have been received before these calls will succeed. After calling `zts_join()` any one of the events detailed in the [Network Events](#network-events) section may be generated.

# Connecting to peers

Creating a standard socket connection generally works the same as it would using an ordinary socket interface, however with ZeroTier there is a subtle difference in how connections are established which may cause confusion. Since ZeroTier employs transport-triggered link provisioning a direct connection between peers will not exist until contact has been attempted by at least one peer. During this time before a direct link is available traffic will be handled via our free relay service. The provisioning of this direct link usually only takes a couple of seconds but it is important to understand that if you attempt something like s `zts_connect(...)` call during this time it may fail due to packet loss. Therefore it is advised to repeatedly call `zts_connect(...)` until it succeeds and to wait to send additional traffic until `ZTS_EVENT_PEER_DIRECT` has been received for the peer you are attempting to communicate with. All of the above is optional, but it will improve your experience.

`tl;dr: Try a few times and wait a few seconds`

As a mitigation for the above behavior, ZeroTier will by default cache details about how to contact a peer in the `peers.d` subdirectory of the config path you passed to `zts_start(...)`. In scenarios where paths do not often change, this can almost completely eliminate the issue and will make connections nearly instantaneous. If however you do not wish to cache these details you can disable it via `zts_set_peer_caching(false)`.

# Event handling

As mentioned in previous sections, the control API works by use of non-blocking calls and the generation of a few dozen different event types. Depending on the type of event there may be additional contextual information attached to the `zts_callback_msg` object that you can use. This contextual information will be housed in one of the following structures which are defined in `include/ZeroTierSockets.h`:

```c
struct zts_callback_msg
{
    int eventCode;
    struct zts_node_details *node;
    struct zts_network_details *network;
    struct zts_netif_details *netif;
    struct zts_virtual_network_route *route;
    struct zts_peer_details *peer;
    struct zts_addr_details *addr;
};
```

Here's an example of a callback function:

```c
void on_zts_event(struct zts_callback_msg *msg)
{
    if (msg->eventCode == ZTS_EVENT_NODE_ONLINE) {
        printf("ZTS_EVENT_NODE_ONLINE, node=%llx\n", msg->node->address);
        // You can join networks now!
    }
}
```

In this callback function you can perform additional non-blocking API calls or other work. While not returning control to the service isn't forbidden (the event messages are generated by a separate thread) it is recommended that you return control as soon as possible as not returning will prevent the user application from receiving additional callback event messages which may be time-sensitive.

A typical ordering of messages may look like the following:

```c
...
ZTS_EVENT_NODE_ONLINE       // Your node is ready to be used.
ZTS_EVENT_ADDR_ADDED_IP4    // Your node received an IP address assignment on a given network.
ZTS_EVENT_NETWORK_UPDATE    // Something about a network changed.
ZTS_EVENT_NETWORK_READY_IP4 // Your node has joined a network, has an address, and can send/receive traffic.
ZTS_EVENT_PEER_RELAY        // A peer was discovered but no direct path exists (yet.)
...
ZTS_EVENT_PEER_DIRECT       // One or more direct paths to a peer were discovered.
```

## Node Events

Accessible via `msg->node` as a `zts_node_details` object, this message type will contain information about the status of your node. *Possible values of `msg->eventCode`:*

```c
ZTS_EVENT_NODE_OFFLINE             // Your node is offline.
ZTS_EVENT_NODE_ONLINE              // Your node is online and ready to communicate!
ZTS_EVENT_NODE_DOWN                // The node is down (for any reason.)
ZTS_EVENT_NODE_IDENTITY_COLLISION  // There is another node with the same identity causing a conflict.
ZTS_EVENT_NODE_UNRECOVERABLE_ERROR // Something went wrong internally.
ZTS_EVENT_NODE_NORMAL_TERMINATION  // Your node has terminated.
```

*Example contents of `msg->node`:*

```
id            : f746d550dd
version       : 1.4.6
primaryPort   : 9995
secondaryPort : 0
```

## Network Events

Accessible via `msg->network` as a `zts_network_details` object, this message type will contain information about the status of a particular network your node has joined. *Possible values of `msg->eventCode`:*

```c
ZTS_EVENT_NETWORK_NOT_FOUND      // The network does not exist. The provided networkID may be incorrect.
ZTS_EVENT_NETWORK_CLIENT_TOO_OLD // This client is too old.
ZTS_EVENT_NETWORK_REQ_CONFIG     // Waiting for network config, this might take a few seconds.
ZTS_EVENT_NETWORK_OK             // Node successfully joined.
ZTS_EVENT_NETWORK_ACCESS_DENIED  // The network is private. Your node requires authorization.
ZTS_EVENT_NETWORK_READY_IP4      // Your node successfully received an IPv4 address.
ZTS_EVENT_NETWORK_READY_IP6      // Your node successfully received an IPv6 address.
ZTS_EVENT_NETWORK_DOWN           // For some reason the network is no longer available.
ZTS_EVENT_NETWORK_UPDATE         // The network's config has changed: mtu, name, managed route, etc.
```

*Example contents of `msg->network`:*

```
nwid                       : 8bd712bf36bdae5f
mac                        : ae53fa031fcf
name                       : cranky_hayes
type                       : 0
mtu                        : 2800
dhcp                       : 0
bridge                     : 0
broadcastEnabled           : 1
portError                  : 0
netconfRevision            : 34
routeCount                 : 1
multicastSubscriptionCount : 1
- mac=ffffffffffff, adi=ac1b2561
addresses:
- FC5D:69B6:E0F7:46D5:50DD::1
- 172.27.37.97
routes:
- target : 172.27.0.0
- via    : 0.0.0.0
  - flags  : 0
  - metric : 0
```


## Peer Events

Accessible via `msg->peer` as a `zts_peer_details` object, this message type will contain information about a peer that was discovered by your node. These events are triggered when the reachability status of a peer has changed. *Possible values of `msg->eventCode`:*

```c
ZTS_EVENT_PEER_DIRECT          // At least one direct path to this peer is known.
ZTS_EVENT_PEER_RELAY           // No direct path to this peer is known. It will be relayed, (high packet loss and jitter.)
ZTS_EVENT_PEER_UNREACHABLE     // Peer is not reachable by any means.
ZTS_EVENT_PEER_PATH_DISCOVERED // A new direct path to this peer has been discovered.
ZTS_EVENT_PEER_PATH_DEAD       // A direct path to this peer has expired.
```

*Example contents of `msg->peer`:*

```
peer      : a747d5502d
role      : 0
latency   : 4
version   : 1.4.6
pathCount : 2
 - 172.27.37.97
 - F75D:69B6:E0C7:47D5:51DB::1
```

## Address Events

Accessible via `msg->addr` as a `zts_addr_details` object, this message type will contain information about addresses assign to your node on a particular network. The information contained in these events is also available via `ZTS_EVENT_NETWORK_UPDATE` events. *Possible values of `msg->eventCode`:*

```c
ZTS_EVENT_ADDR_ADDED_IP4   // A new IPv4 address was assigned to your node on the indicated network.
ZTS_EVENT_ADDR_REMOVED_IP4 // An IPv4 address assignment to your node was removed on the indicated network.
ZTS_EVENT_ADDR_ADDED_IP6   // A new IPv6 address was assigned to your node on the indicated network.
ZTS_EVENT_ADDR_REMOVED_IP6 // An IPv6 address assignment to your node was removed on the indicated network.
```

*Example contents of `msg->addr`:*

```
nwid : a747d5502d
addr : 172.27.37.97
```


















































# Error handling

Calling a `zts_*` function will result in one of the following return codes. Additionally, `zts_errno` will be set after each socket call. Its values closely mirror those used in standard socket interfaces and are defined in [include/ZeroTierSockets.h]().

```c
enum ZTS_Error {
  ZTS_ERR_OK        =  0, // No error
  ZTS_ERR_SOCKET    = -1, // Socket error, see zts_errno
  ZTS_ERR_SERVICE   = -2, // The node service experienced a problem
  ZTS_ERR_ARG       = -3, // Invalid argument
  ZTS_ERR_NO_RESULT = -4, // No result (not necessarily an error)
  ZTS_ERR_GENERAL   = -5  // Consider filing a bug report
};
```

<aside class="notice">
For Android/Java (or similar) which use JNI, the socket API's error codes are negative values encoded in the return values of function calls.
</aside>

<aside class="notice">
For protocol-level errors (such as dropped packets) or internal network stack errors, see the section `Statistics`
</aside>

# Common pitfalls

- If you have started a node but have not received a `ZTS_EVENT_NODE_ONLINE`:
  - You may need to view our [Router Config Tips](https://zerotier.atlassian.net/wiki/spaces/SD/pages/6815768/Router+Configuration+Tips) knowledge base article. Sometimes this is due to firewall/NAT settings.

- If you have received a `ZTS_EVENT_NODE_ONLINE` event and attempted to join a network but do not see your node ID in the network panel on [my.zerotier.com](my.zerotier.com) after some time:
  - You may have typed in your network ID incorrectly.
  - Used an improper integer representation for your network ID (e.g. `int` instead of `uint64_t`).

- If you are unable to reliably connect to peers:
  - You should first read the section on [Connecting and communicating with peers](#connecting-and-communicating-with-peers).
  - If the previous step doesn't help move onto our knowledge base article [Router Config Tips](https://zerotier.atlassian.net/wiki/spaces/SD/pages/6815768/Router+Configuration+Tips). Sometimes this can be a transport-triggered link issue, and sometimes it can be a firewall/NAT issue.

- API calls seem to fail in nonsensical ways and you're tearing your hair out:
  - Be sure to read and understand the [API compatibility with host OS](#api-compatibility-with-host-os) section.
  - See the [Debugging](#debugging) section for more advice.

- Since libzt re-implements a socket interface likely very similar to your host OS's own interface it may be tempting to mix and match host OS structures and functions with those of libzt. This may work on occasion, but you are tempting fate. Here are a few important guidelines:

> If you are calling a `zts_*` function, use the appropriate `ZTS_*` constants:

```c
zts_socket(ZTS_AF_INET6, ZTS_SOCK_DGRAM, 0); // CORRECT
zts_socket(AF_INET6, SOCK_DGRAM, 0);         // INCORRECT
```

> If you are calling a `zts_*` function, use the appropriate `zts_*` structure:

```c
struct zts_sockaddr_in in4;  // Note the zts_ prefix
zts_bind(fd, (struct sockaddr *)&in4, sizeof(struct zts_sockaddr_in)) < 0);
```

> If you are calling a host OS function, use your host OS's constants (and structures!):

```c
inet_ntop(AF_INET6, &(in6->sin6_addr), ...);         // CORRECT
inet_ntop(ZTS_AF_INET6, &(in6->sin6_addr), ...);     // INCORRECT
zts_inet_ntop(ZTS_AF_INET6, &(in6->sin6_addr), ...); // CORRECT
```

>If you are calling a host OS function but passing a `zts_*` structure, this can work sometimes but you should take care to pass the correct host OS constants:

```c
struct zts_sockaddr_in6 in6;
    ...
inet_ntop(AF_INET6, &(in6->sin6_addr), dstStr, INET6_ADDRSTRLEN);
```


# Thread model

Both the **socket** and **control** interfaces are thread-safe but are implemented differently. The socket interface is implemented using a relatively performant core locking mechanism in lwIP. This can be disabled if you know what you're doing. The control interface is implemented by a single coarse-grained lock. This lock is not a performance bottleneck since it only applies to functions that manipulate the ZeroTier service and are called seldomly. Callback events are generated by a separate thread and are independent from the rest of the API's internal locking mechanism. Not returning from a callback event won't impact the rest of the API but it will prevent your application from receiving future events so it is in your application's best interest to perform as little work as possible in the callback function and promptly return control back to ZeroTier.


<aside class="notice">
Internally, `libzt` will spawn a number of threads for various purposes: a thread for the core service, a thread for the network stack, a low priority thread to process callback events, and a thread for each network joined. The vast majority of work is performed by the core service and stack threads.
</aside>


# Debugging

If you're experiencing odd behavior or something that looks like a bug I would suggest first reading and understanding the following sections:

* [Common pitfalls](#common-pitfalls)
* [API compatibility with host OS](#api-compatibility-with-host-os)
* [Thread model](#thread-model)

If the information in those sections hasn't helped, there are a couple of ways to get debug traces out of various parts of the library.

1) Build the library in debug mode with `make host_debug`. This will prevent the stripping of debug symbols from the library and will enable basic output traces from libzt.

2) If you believe your problem is in the network stack you can manually enable debug traces for individual modules in [src/lwipopts.h](). Toggle the `*_DEBUG` types from `LWIP_DBG_OFF` to `LWIP_DBG_ON`. And then rebuild. This will come with a significant performance cost.

3) Enabling network stack statistics. This is useful if you want to monitor the stack's receipt and handling of traffic as well as internal things like memory allocations and cache hits. Protocol and service statistics are available in debug builds of `libzt`. These statistics are detailed fully in the section of `include/ZeroTierSockets.h` that is guarded by `LWIP_STATS`.

```c
struct zts_stats_proto stats;
if (zts_get_protocol_stats(ZTS_STATS_PROTOCOL_ICMP, &stats) == ZTS_ERR_OK) {
    printf("icmp.recv=%d\n", stats.recv); // Count of received pings
}
if (zts_get_protocol_stats(ZTS_STATS_PROTOCOL_TCP, &stats) == ZTS_ERR_OK) {
    printf("tcp.drop=%d\n", stats.drop); // Count of dropped TCP packets
}
```

4) There are a series of additional events which can signal whether the network stack or its virtual network interfaces have been set up properly. See `ZTS_EVENT_STACK_*` and `ZTS_EVENT_NETIF_*`.


# API Design Philosophy

ZeroTier is written in C++ but exposes two C APIs at different abstraction levels for different purposes. First, there is the [Core API]() which allows you to control a raw node that can securely move Ethernet frames. The core API is for those who need transport options below the socket layer. Second, there is a [Socket API]() (this document). The socket API provides a familiar socket interface and a suite of convenient control functions. This API is recommended for most applications.

































> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here" \
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens" \
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2" \
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

## Delete a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.delete(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.delete(2)
```

```shell
curl "http://example.com/api/kittens/2" \
  -X DELETE \
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.delete(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "deleted" : ":("
}
```

This endpoint deletes a specific kitten.

### HTTP Request

`DELETE http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to delete

