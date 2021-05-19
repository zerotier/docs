---
title: ZeroTier Sockets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Encrypted P2P connections for your app or service.

This multi-part guide explains how to use the ZeroTier SDK Socket API. It is meant to be read linearly and progresses from beginner topics to advanced topics. We will start by creating a simple [pingable node](#pingable-node-part-1) while skipping over most of the gritty details. Then we'll move on to a full [client-server socket application](#client-and-server-part-2) where we will take the occasional tangent to learn more about how all of this works. Source code for the examples can be found here: <a href="https://github.com/zerotier/libzt/tree/master/examples">libzt/examples</a>. For API reference documentation see the sidebar to the left.

:::note Latest news

In the coming weeks ahead of our webinar we will be making available a number of improvements to our SDK, these include:

 - Upgrade of libzt core version to `1.6.X` series
 - Improved and expanded C API
    - Easier creation and usage of custom root sets (formerly worlds/planets)
 - Rust bindings 🦀
 - New reference docs, guides, and examples (this page)
 - Updated `1.6.X` packages for Python, C# and Java
 - New Homebrew Tap: [zerotier/tap](https://github.com/zerotier/homebrew-tap)

:::

## Install

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```sh
brew install zerotier/tap/libzt
```

</TabItem>

<TabItem value="rust">

```sh
cargo install libzt
```

</TabItem>

<TabItem value="python">

```sh
pip install libzt
```

</TabItem>

<TabItem value="csharp">

```psh
Install-Package ZeroTier.Sockets
```

</TabItem>

<TabItem value="java">

```sh
./build.sh host-jar
```

</TabItem>

</Tabs>


Alternatively, build from source: [github.com/zerotier/libzt](https://www.github.com/zerotier/libzt#zerotier-sdk)

:::info

For the purposes of this guide it is recommended that you first [create an account](https://my.zerotier.com) and a private network to test on, but it is not strictly necessary if you're comfortable joining public networks or setting up your own network controller.

:::

## Usage

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

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

</TabItem>

<TabItem value="python">

```python
import libzt

n = libzt.ZeroTierNode()
n.node_start()
while not n.node_is_online():
    time.sleep(1)
n.net_join(net_id)
while not n.net_transport_is_ready(net_id):
    time.sleep(1)
client = libzt.socket(libzt.ZTS_AF_INET, libzt.ZTS_SOCK_STREAM, 0)
client.connect((remote_ip, remote_port))
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
using ZeroTier;

public class ExampleApp {
    static int Main(string[] args)
    {
        ZeroTier.Core.Node node = new ZeroTier.Core.Node();
        node.Start();
        while (! node.Online) {
            Thread.Sleep(50);
        }
        node.Join(networkId);

        // ...

        try {
            ZeroTier.Sockets.Socket sender = new ZeroTier.Sockets.Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                sender.Connect(remoteServerEndPoint);
        }

        // ...

        node.Stop();
    }
}

```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

## Pingable Node (Part 1)

To start things off we will:

  - Set up a node
  - Join it to your network
  - Assign it a globally-available static IPv4 and/or IPv6 address
  - Ping it

We'll be skipping over a lot of details in this first example, but we'll cover those in the [next example](#client-and-server-part-2). It's also worth noting that in this first example we will be using the sequential API for simplicity but there is an [event](#events) notification system that can be used as well.

### Starting a node

Starting a node is easy and if you provide no configuration it will generate a new `identity` automatically, but let's not worry about that yet:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
zts_node_start(); // No "node object" creation necessary in C
```

</TabItem>
<TabItem value="python">

```python
node = libzt.ZeroTierNode()
node.start()
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
ZeroTier.Core.Node node = new ZeroTier.Core.Node();
node.Start();
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

Before we can join any networks or use sockets we need to know when the node has successfully come online. We will use a rather crude wait loop but there are [event](#events)-based methods for accomplishing this that we will discuss later:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
while (! zts_node_is_online()) {
    zts_util_delay(1000);
}
```

</TabItem>
<TabItem value="python">

```python
while not node.is_online():
  time.sleep(1)
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
while (! node.Online) {
  Thread.Sleep(1000);
}
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>


Once we've broken from this loop we can be confident that the node has a valid identity and has made contact with at least one root server. At this point let's print our node's identity. This is the `public short form` of your identity that you can share with people, we will discuss how to get the `secret` portion later on:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
printf("node_id = %llx\n", (long long int)zts_node_get_id());
```

</TabItem>
<TabItem value="python">

```python
print(node.get_id())
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
Console.WriteLine("Id = " + node.Id.ToString("x16")); // (Or) node.IdString
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>


### Join a network

Now we're ready to join a network:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
if (zts_net_join(0x1234567890abcdef) != ZTS_ERR_OK) {
    return -1; // Failure
}
```

</TabItem>

<TabItem value="python">

```python
node.net_join(0x1234567890abcdef)
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
node.Join(0x1234567890abcdef);
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

The network join request will contact our network controllers (or yours!) and if the network is `public` your node will be allowed to join immediately. If however the network is `private` the node will not be allowed to join until the network owner authorizes the node.

A node is not assigned an IP address until it has successfully joined the network. This process usually takes a few seconds, thus your application must wait until the network config is received and it has been assigned an address:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
while (! zts_net_transport_is_ready(net_id)) {
    zts_util_delay(1000);
}
```

</TabItem>

<TabItem value="rustff">

```rust
// Coming soon
```

</TabItem>

<TabItem value="python">

```python
while not node.net_transport_is_ready(net_id):
  time.sleep(1)
```
</TabItem>

<TabItem value="csharp">

```csharp
while (! node.IsNetworkTransportReady(networkId)) {
  Thread.Sleep(1000);
}
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

The transport readiness check above essentially just makes sure we have been authorized on the network and that we also have an assigned address and a managed route.

Now we can check that an IP address of a specific family type (IPv4 or IPv6) was assigned. In our case we'll just check for an IPv4 address:

<Tabs defaultValue="c" groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
while (! (err = zts_addr_is_assigned(net_id, ZTS_AF_INET))) {
    zts_util_delay(1000);
}
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="python">

```python
while not node.addr_is_assigned(net_id, ZTS_AF_INET):
  time.sleep(1)
```
</TabItem>

<TabItem value="csharp">

```csharp
// Coming soon
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>






















### Getting your IP address

:::note

As of current, only one address of each family type may be assigned (per network) to a libzt node at any time. This is a technical limitation that will be removed in future versions.

:::

Now we can print the address assigned by this network and wait for incoming traffic:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
char ipstr[ZTS_IP_MAX_STR_LEN] = { 0 };
zts_addr_get_str(net_id, ZTS_AF_INET, ipstr, ZTS_IP_MAX_STR_LEN);
printf("Ping me on %llx at %s\n", net_id, ipstr);

// Do network stuff!
// zts_bsd_socket, zts_bsd_connect, etc

while (1) {
    zts_util_delay(500);   // Idle indefinitely
}
```

</TabItem>
<TabItem value="python">

```python
char ipstr[ZTS_IP_MAX_STR_LEN] = { 0 };
zts_addr_get_str(net_id, ZTS_AF_INET, ipstr, ZTS_IP_MAX_STR_LEN);
printf("Ping me at %s\n", net_id, ipstr);

// Do network stuff!
// zts_bsd_socket, zts_bsd_connect, etc

while (1) {
    zts_util_delay(500);   // Idle indefinitely
}
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
// Coming soon
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

From another machine (or the same machine, whatever you're into), use our regular client `zerotier-one` (or another libzt instance) to join the same network and ping the address displayed by your new node above. You should see some jittery initial responses as our transport-triggered link is established and then once a VL2 P2P connection is established the response time will stabilize.

Congratulations you've just done something cool I guess. Ready for something with sockets?













Oh crap, I forgot. We need to stop the node when we're done:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
zts_node_stop();
```

</TabItem>
<TabItem value="python">

```python
node.stop()
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
// Coming soon
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

Full example source code can be found here: <a href="https://github.com/zerotier/libzt/tree/master/examples">libzt/examples</a>

















## Sockets

Before we move onto the next section we need to quickly discuss how the socket API is structured. For each supported language ZeroTier provides a socket interface that *attempts* to be as idiomatic as possible so the following text about the `C API` may not apply to you. The following [Client and Server](#client-and-server-part-2) section will demonstrate how to use this interface.

:::note C API

ZeroTier sockets can be controlled via `zts_bsd_` functions that operate nearly identically to normal BSD-style sockets, and `zts_` functions that provide simplified arguments and reduce the need to use things like `struct sockaddr`. These functions can be used on the same socket interchangeably without issue.

For instance:

 - `zts_bsd_connect()` will behave in the same way as an ordinary `connect()` call (but over ZeroTier of course)
 - `zts_connect()` will perform a little magic behind the scenes to deal with transport-triggered link provisioning
 - `zts_tcp_client()` will wrap all of the common socket calls into a single call.

 You are allowed to use each type of call and mix their usage among sockets as you please, as long as what you're doing makes sense at the protocol level. For instance the following is legal:

```
int sock = zts_bsd_socket(ZTS_AF_INET, ZTS_SOCK_STREAM, 0);
zts_connect(sock, addr, addrlen);
zts_bsd_write(sock, buf, buflen);
```

:::

:::tip

If you're new to socket programming I *highly* recommend at least perusing [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/). This is the best reference material you'll find on the subject. It greatly helped in my own personal understanding. A portion of our C API is merely redirected calls to [lwIP's C API](https://savannah.nongnu.org/projects/lwip/) and is thus directly compatible with what you'll learn in his guide.

:::








## Client and Server (Part 2)

In this section we will:

  - Use knowledge gained in the previous section to set up a node
  - Set up a TCP server and client
  - Echo a simple messages between the two

To get us started we will use most of the same setup code as the [Pingable Node](#pingable-node-part-1) example:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
// Initialize and start node
if ((err = zts_init_from_storage(storage_path)) != ZTS_ERR_OK) {
    printf("Unable to initialize node (%d)\n", err);
    return -1;
}
if ((err = zts_node_start()) != ZTS_ERR_OK) {
    printf("Unable to start service (%d)\n", err);
    return -1;
}
while (! zts_node_is_online()) {
    zts_util_delay(50);
}
printf("Public identity (node ID) is %llx\n", zts_node_get_id());

// Join network
if (zts_net_join(net_id) != ZTS_ERR_OK) {
    printf("Unable to join network\n");
    return -1;
}
while (! zts_net_transport_is_ready(net_id)) {
    zts_util_delay(50);
}

// Wait for IPv4 address assignment
while (! (err = zts_addr_is_assigned(net_id, ZTS_AF_INET))) {
    zts_util_delay(50);
}
char ipstr[ZTS_IP_MAX_STR_LEN] = { 0 };
zts_addr_get_str(net_id, family, ipstr, ZTS_IP_MAX_STR_LEN);
printf("IP address on network %llx is %s\n", net_id, ipstr);
```

</TabItem>
<TabItem value="python">

```python
while not node.addr_is_assigned(net_id, ZTS_AF_INET):
  time.sleep(1)
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
// Coming soon
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

Notice that in the above code we use a new type of initialization function. In this case we are using a location on storage to retrieve and store our identities. We do this since we don't want to generate a unique identity for each application run.

### TCP Server

Before you begin this section please read the [Sockets](#sockets) section. It's short. And remember, full example source code can be found here: <a href="https://github.com/zerotier/libzt/tree/master/examples">libzt/examples</a>

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
char remote_addr[ZTS_INET6_ADDRSTRLEN] = { 0 };
int remote_port = 0;
int len = ZTS_INET6_ADDRSTRLEN;
if ((accfd = zts_tcp_server(local_addr, local_port, remote_addr, len, &remote_port)) < 0) {
    printf("Error (fd=%d, zts_errno=%d). Exiting.\n", accfd, zts_errno);
    exit(1);
}
printf("Accepted connection from %s:%d\n", remote_addr, remote_port);

// Data I/O

int bytes = 0;
char recvBuf[128] = { 0 };

printf("Reading message string from client...\n");
if ((bytes = zts_read(accfd, recvBuf, sizeof(recvBuf))) < 0) {
    printf("Error (fd=%d, ret=%d, zts_errno=%d). Exiting.\n", fd, bytes, zts_errno);
    exit(1);
}
printf("Read %d bytes: %s\n", bytes, recvBuf);
printf("Sending message string to client...\n");
if ((bytes = zts_write(accfd, recvBuf, bytes)) < 0) {
    printf("Error (fd=%d, ret=%d, zts_errno=%d). Exiting.\n", fd, bytes, zts_errno);
    exit(1);
}
printf("Sent %d bytes: %s\n", bytes, recvBuf);

// Close

printf("Closing sockets\n");
err = zts_close(accfd);
err = zts_close(fd);
return zts_node_stop();
```

</TabItem>
<TabItem value="python">

```python
# Coming soon
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
// Coming soon
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

### TCP Client

Before you begin this section please read the [Sockets](#sockets) section. It's short. And remember, full example source code can be found here: <a href="https://github.com/zerotier/libzt/tree/master/examples">libzt/examples</a>

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
  ]}>

<TabItem value="c">

```c
char* msgStr = (char*)"Welcome to the machine";
int bytes = 0, fd;
char recvBuf[128] = { 0 };
memset(recvBuf, 0, sizeof(recvBuf));

// Connect to remote host

// Can also use traditional: zts_bsd_socket(), zts_bsd_connect(), etc

printf("Attempting to connect...\n");
while ((fd = zts_tcp_client(remote_addr, remote_port)) < 0) {
    printf("Re-attempting to connect...\n");
}

// Data I/O

printf("Sending message string to server...\n");
if ((bytes = zts_write(fd, msgStr, strlen(msgStr))) < 0) {
    printf("Error (fd=%d, ret=%d, zts_errno=%d). Exiting.\n", fd, bytes, zts_errno);
    exit(1);
}
printf("Sent %d bytes: %s\n", bytes, msgStr);
printf("Reading message string from server...\n");
if ((bytes = zts_read(fd, recvBuf, sizeof(recvBuf))) < 0) {
    printf("Error (fd=%d, ret=%d, zts_errno=%d). Exiting.\n", fd, bytes, zts_errno);
    exit(1);
}
printf("Read %d bytes: %s\n", bytes, recvBuf);

// Close

printf("Closing sockets\n");
zts_close(fd);
return zts_node_stop();
```

</TabItem>
<TabItem value="python">

```python
# Coming soon
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
// Coming soon
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>




















## Identities

Every node needs an identity, it's a cryptographic address that you'll use when authorizing the node on your private network. Don't worry though, you'll still use an IP address to talk to your node once joined to a network. You have a few mutually exclusive options to choose from in order to generate or load an identity:


<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
    ]}>

<TabItem value="c">

```c
// Generate a new one
zts_init_new_identity();
// (or) Load from storage (will generate new identity if path is empty)
zts_init_from_storage("./node_path");
// (or) Load from memory
zts_init_from_memory(key, len);
```

</TabItem>
<TabItem value="python">

```python
# Generate a new identity
node.init_new_identity()
# (or) Load from storage (will generate new identity if path is empty)
node.init_from_storage("./node_path")
# (or) Load from memory
node.init_from_memory(key, len)
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
// Coming soon
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>


:::caution

You should keep your identity files safe and unique! If anyone gets a copy of these files they can impersonate your node. And if you run two nodes with the same identity simultaneously you will have a bad day.

:::


## Ports

In some cases it may be necessary to customize the ports (or ranges of ports) used by ZeroTier. The following functions allow you to do this. Be careful disabling things though, they're defaults for a reason.

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
    ]}>

<TabItem value="c">

```c
// Set ZeroTier's primary port
zts_init_set_port(int port);
// Set the range that random ports are chosen from
zts_init_set_random_port_range(start_port, end_port);
// Allow or disallow the usage of a backup port to get around buggy NAT
zts_init_allow_secondary_port(allowed);
// Allow or disallow port-mapping
zts_init_allow_port_mapping(allowed);

// ...

zts_node_start();
```

</TabItem>
<TabItem value="python">

```python
# Set ZeroTier's primary port
node.init_set_port(int port)
# Set the range that random ports are chosen from
node.init_set_random_port_range(start_port, end_port)
# Allow or disallow the usage of a backup port to get around buggy NAT
node.init_allow_secondary_port(allowed)
# Allow or disallow port-mapping
node.init_allow_port_mapping(allowed)

# ...

node.start()
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
// Set ZeroTier's primary port
node.InitSetPort(port);
// Set the range that random ports are chosen from
node.InitSetRandomPortRange(startPort, endPort);
// Allow or disallow the usage of a backup port to get around buggy NAT
node.InitSetAllowSecondaryPort(allowed);
// Allow or disallow port-mapping
node.InitSetAllowPortMapping(allowed);

// ...

node.Start();
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>















## Events

ZeroTier can send your application notifications when certain internal states are reached. Examples of this may be when the node comes online or when a new IP address is assigned by the network controller. This is set up during the initialization phase before starting your node:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
    ]}>

<TabItem value="c">

```c
void on_zts_event(void* msgPtr)
{
    zts_event_msg_t* msg = (zts_event_msg_t*)msgPtr;
    if (msg->event_code == ZTS_EVENT_NODE_ONLINE) {
        printf("Node ID is %llx\n", msg->node->node_id);
    }
}

int main() {
  zts_init_set_event_handler(&on_zt_event);
  ...
  zts_node_start();
  ...
}
```

</TabItem>

<TabItem value="python">

```python
socket.errno;
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
public void OnZeroTierEvent(ZeroTier.Core.Event e)
{
    if (e.Code == ZeroTier.Constants.EVENT_NODE_ONLINE) {
        Console.WriteLine("");
        Console.WriteLine("Node is online: Id = " + node.Id.ToString("x16"));
    }
    if (e.Code == ZeroTier.Constants.EVENT_NETWORK_OK) {
        Console.WriteLine("Network OK: Id = " + e.NetworkInfo.Id.ToString("x16"));
    }
}

static int Main(string[] args)
{
    ZeroTier.Core.Node node = new ZeroTier.Core.Node();
    node.InitSetEventHandler(OnZeroTierEvent);
    node.Start();
}

```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

:::note C API

In each message a pointer to a `zts_event_msg_t` object is provided. This structure contains pointers to yet more structures. Each event type has its own special structure with additional relevant data included. For instance, a network event will have a valid pointer set to `msg->network` that contains things like the network ID, its type, status, assigned addresses, multicast subscriptions, etc.

This additional information is not available in all language bindings and you may need to use the sequential-style functions to get the information you need.
:::



## Errors

**On success** a function typically will return `ZTS_ERR_OK` or a positive value (possibly indicating the number of bytes sent or received.) **On failure** a function typically will return a negative number or possibly a `NULL` pointer, though this may vary somewhat depending on the language binding you're using.

```c
ZTS_ERR_OK        =  0, // No error
ZTS_ERR_SOCKET    = -1, // Socket error, see zts_errno
ZTS_ERR_SERVICE   = -2, // The node service experienced a problem
ZTS_ERR_ARG       = -3, // Invalid argument
ZTS_ERR_NO_RESULT = -4, // No result (not necessarily an error)
ZTS_ERR_GENERAL   = -5  // Consider filing a bug report
```
In the event of a failure from a socket call `zts_errno` will be set to a value that offers additional context. These values are defined as `zts_errno_t` in [include/ZeroTierSockets.h](https://github.com/zerotier/libzt/blob/master/include/ZeroTierSockets.h). This is accessible via the following:

<Tabs
  defaultValue="c"
  groupId="language-examples"
  values={[
    { label: "C/C++", value: "c", },
    { label: "Rust", value: "rust" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" }
    ]}>

<TabItem value="c">

```c
zts_errno
```

</TabItem>

<TabItem value="python">

```python
socket.errno
```
</TabItem>

<TabItem value="rust">

```rust
// Coming soon
```

</TabItem>

<TabItem value="csharp">

```csharp
socket.ErrNo
```

</TabItem>

<TabItem value="java">

```java
// Coming soon
```

</TabItem>

</Tabs>

:::note

For Android/Java (or similar) which use JNI, the socket API's error codes are negative values encoded in the return values of function calls.

:::




## Central API

This section will show you how to use the built-in Central API to make calls to our hosted endpoints using your language of choice. It is not necessary to use these built in features but they are provided as a convenience.

:::note BETA

The Central API built into libzt is still `beta` and is not included in most builds by default. It is currently only available in `C` and can be enabled by commenting out `#define ZTS_DISABLE_CENTRAL_API 1` in `ZeroTierSockets.h`. You will need your system's edition of the `libcurl` development headers and libraries. This exercise is left to the reader for the time being.

You should try to use our API exposed here instead: <a href="https://apidocs.zerotier.com/">apidocs.zerotier.com</a>.
:::






## Common issues

- If you have started a node but have not received a `ZTS_EVENT_NODE_ONLINE`:
  - You may need to view our [Router Config Tips](https://zerotier.atlassian.net/wiki/spaces/SD/pages/6815768/Router+Configuration+Tips) knowledge base article. Sometimes this is due to firewall/NAT settings.

- If you have received a `ZTS_EVENT_NODE_ONLINE` event and attempted to join a network but do not see your node ID in the network panel on [my.zerotier.com](my.zerotier.com) after some time:
  - You may have typed in your network ID incorrectly.
  - Used an improper integer representation for your network ID (e.g. `int` instead of `uint64_t`).

- If you are unable to reliably connect to peers:
  - Review the knowledge base article [Router Config Tips](https://zerotier.atlassian.net/wiki/spaces/SD/pages/6815768/Router+Configuration+Tips). Sometimes this can be a transport-triggered link issue, and sometimes it can be a firewall/NAT issue.





## Debugging

If you're experiencing odd behavior or something that looks like a bug I would suggest first reading and understanding the following sections:

* [Common issues](#common-issues)
* [Thread model](#thread-model)

If the information in those sections hasn't helped, there are a couple of ways to get debug traces out of various parts of the library.

1) Build the library in debug mode with `./build.sh host "debug"`. This will prevent the stripping of debug symbols from the library and will enable basic output traces from libzt.

2) If you believe your problem is in the network stack you can manually enable debug traces for individual modules in `src/lwipopts.h`. Toggle the `*_DEBUG` types from `LWIP_DBG_OFF` to `LWIP_DBG_ON`. And then rebuild. This will come with a significant performance cost.

3) Viewing network stack statistics: See: [examples/c/statistics.c](https://github.com/zerotier/libzt/blob/master/examples/c/statistics.c)

4) There are a series of additional events which can signal whether the network stack or its virtual network interfaces have been set up properly. See `ZTS_EVENT_STACK_*` and `ZTS_EVENT_NETIF_*`.



## Self-hosting

Q: Can I run my own infrastructure independently from ZeroTier?

A: Yes

We expend considerable effort designing and maintaining a robust and globally available constellation of root servers and redundant network controllers but we understand that security practices may require you to function independently from our infrastructure. For this reason we try to make it as easy as possible to set up your own infrastructure: See [here](https://github.com/zerotier/ZeroTierOne/tree/master/controller) to learn more about how to set up your own network controller, and [here](https://www.zerotier.com/manual/#4_4) to learn more about setting up your own roots.


## Technical notes

### Thread model

Both the **socket** and **control** interfaces are thread-safe but are implemented differently. The socket interface is implemented using a relatively performant core locking mechanism in lwIP. This can be disabled if you know what you're doing. The control interface is implemented by a single coarse-grained lock. This lock is not a performance bottleneck since it only applies to functions that manipulate the ZeroTier service and are called infrequently. Callback events are generated by a separate thread and are independent from the rest of the API's internal locking mechanism. Not returning from a callback event won't impact the rest of the API but it will prevent your application from receiving future events so it is in your application's best interest to perform as little work as possible in the callback function and promptly return control back to ZeroTier.

:::note

Internally, `libzt` will spawn a number of threads for various purposes: a thread for the core service, a thread for the network stack, a low priority thread to process callback events, and a thread for each network joined. The vast majority of work is performed by the core service and stack threads.

:::

### Versioning

:::info

Each component of a libzt distribution uses [semantic versioning 2.0.0](https://semver.org).

:::

The [ZeroTier](https://github.com/zerotier/zerotierone) core, the libzt service, and any included language wrapper each have their own semantic versions that are loosely-coupled to each other in only one direction. libzt's `major` and `minor` version is only updated to match ZeroTier when the core version referenced via submodule is updated. Likewise, each language wrapper's version is only updated to match libzt when the version of libzt changes. Note, however that the version of libzt can change even when its core ZeroTier version does not and the same applies to libzt's wrappers! This versioning scheme is only enforced from `1.4.0` onward.

For instance:

 - When released, libzt `1.4.0` will be based on ZeroTier `1.4.X`, all language wrappers would also be brought to version `1.4.0`. If a language wrapper requires an update to fix some issue we may bump the wrapper version to `1.4.1` but both libzt and ZeroTier will remain at their respective current versions. Likewise for the dependency between libzt and ZeroTier. This method was chosen over using version suffixes like `1.4.0-r1` because some semantic versioning clients may handle that version as a pre-release and prefer to use `1.4.0`.
