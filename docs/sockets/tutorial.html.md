---
title: ZeroTier Sockets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Encrypted P2P connections for your app or service.

This guide explains how to use the ZeroTier SDK Socket API. It is meant to be read linearly and progresses from beginner topics to advanced topics. We will start by creating a simple [pingable node](#pingable-node-part-1) while skipping over most of the gritty details. Then we'll move on to a full [client-server socket application](#client-and-server-part-2) where we will take the occasional tangent to learn more about how all of this works. Source code for the examples can be found here: <a href="https://github.com/zerotier/libzt/tree/master/examples">libzt/examples</a>. For API reference documentation see the sidebar to the left. To read more more about how ZeroTier works in general, see our [manual](https://docs.zerotier.com/zerotier/manual). If you find an error on this page or you just need help getting something to work please open a [GitHub issue](https://github.com/zerotier/libzt/issues).

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

# See https://crates.io/crates/libzt

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

## Usage summary

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

// ...
zts_node_start();
zts_net_join(0x1234567890abcdef);
// ...
int s = zts_socket(ZTS_AF_INET, ZTS_SOCK_STREAM, 0);
zts_connect(s, in4, adddrlen);
// ...
zts_node_stop();


```

</TabItem>

<TabItem value="python">

```python
import libzt

# ...
n = libzt.ZeroTierNode()
n.node_start()
# ...
n.net_join(0x1234567890abcdef)
# ...
client = libzt.socket(libzt.ZTS_AF_INET, libzt.ZTS_SOCK_STREAM, 0)
client.connect((remote_ip, remote_port))


```
</TabItem>

<TabItem value="rust">

```rust
use libzt;
use libzt::tcp::{TcpListener, TcpStream};
// ...
let node = libzt::node::ZeroTierNode {};
node.start();
node.net_join(net_id);
// ...
TcpStream::connect(remote_addr);
// ...
node.stop();


```

</TabItem>

<TabItem value="csharp">

```csharp
using ZeroTier;
// ...
ZeroTier.Core.Node node = new ZeroTier.Core.Node();
node.Start();
// ...
node.Join(0x1234567890abcdef);
// ...
ZeroTier.Sockets.Socket sender = new ZeroTier.Sockets.Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
sender.Connect(remoteServerEndPoint);
// ...
node.Stop();

```

</TabItem>

<TabItem value="java">

```java
import com.zerotier.sockets.*;

// ...
ZeroTierNode node = new ZeroTierNode();
node.start();
// ...
node.join(0x1234567890abcdef);
// ...
ZeroTierSocket socket = new ZeroTierSocket(remoteAddr, port);



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

Starting a node is easy and if you don't provide a configuration ZeroTier will generate a new `identity` automatically, but don't worry about that yet:

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
// No "node object" creation necessary in C
zts_node_start();
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
let node = libzt::node::ZeroTierNode {};
node.start();
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
ZeroTierNode node = new ZeroTierNode();
node.start();
```

</TabItem>

</Tabs>

Before we can join any networks or use sockets we need to know when the node has successfully come online. We will use a rather crude wait loop but as mentioned before, there are [event](#events)-based methods for accomplishing this that we will discuss later:

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
while !node.is_online() {
    node.delay(1000);
}
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
while (! node.isOnline()) {
  ZeroTierNative.zts_util_delay(1000);
}
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
printf("%llx\n", (long long int)zts_node_get_id());
```

</TabItem>
<TabItem value="python">

```python
print(node.get_id())
```
</TabItem>

<TabItem value="rust">

```rust
println!("{:#06x}", node.id());
```

</TabItem>

<TabItem value="csharp">

```csharp
Console.WriteLine(node.Id.ToString("x16"));
```

</TabItem>

<TabItem value="java">

```java
System.out.println(Long.toHexString(node.getId()));
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
zts_net_join(0x1234567890abcdef)
```

</TabItem>

<TabItem value="python">

```python
node.net_join(0x1234567890abcdef)
```
</TabItem>

<TabItem value="rust">

```rust
node.net_join(0x1234567890abcdef);
```

</TabItem>

<TabItem value="csharp">

```csharp
node.Join(0x1234567890abcdef);
```

</TabItem>

<TabItem value="java">

```java
node.join(0x1234567890abcdef);
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

<TabItem value="rust">

```rust
while !node.net_transport_is_ready(net_id) {
    node.delay(1000);
}
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
while (! node.isNetworkTransportReady(networkId)) {
  ZeroTierNative.zts_util_delay(1000);
}
```

</TabItem>

</Tabs>

The transport readiness check above essentially just makes sure we have been authorized on the network and that we also have an assigned address and a managed route.

### Getting your IP address

:::note

As of current, only one address of each family type may be assigned (per network) to a libzt node at any time. That means one `IPv4` and one `IPv6` address. This is a technical limitation that will be removed in future versions.

:::

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
char ipstr[ZTS_IP_MAX_STR_LEN] = { 0 };
zts_addr_get_str(net_id, ZTS_AF_INET, ipstr, ZTS_IP_MAX_STR_LEN)
printf("%s\n", ipstr);
```
</TabItem>

<TabItem value="rust">

```rust
let addr = node.addr_get(net_id).unwrap();
println!("{}", addr);

```

</TabItem>

<TabItem value="python">

```python
print(n.addr_get_ipv4(net_id))
print(n.addr_get_ipv6(net_id))

```
</TabItem>

<TabItem value="csharp">

```csharp
foreach (IPAddress addr in node.GetNetworkAddresses(networkId)) {
  Console.WriteLine(addr);
}
```

</TabItem>

<TabItem value="java">

```java
System.out.println(node.getIPv4Address(networkId).getHostAddress());
System.out.println(node.getIPv6Address(networkId).getHostAddress());

```

</TabItem>

</Tabs>








From another machine (or the same machine, whatever you're into), use our regular client [zerotier-one](https://www.zerotier.com/download/) (or another libzt instance) to join the same network and ping the address displayed by your new node above. You should see some jittery initial responses as our transport-triggered link is established and then once a VL2 P2P link is established the response time will stabilize.

🎉 Congratulations you've just done something cool, I guess. Ready for something with sockets?

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
node.stop();
```

</TabItem>

<TabItem value="csharp">

```csharp
node.Stop()
```

</TabItem>

<TabItem value="java">

```java
node.stop()
```

</TabItem>

</Tabs>

Full example source code can be found here: <a href="https://github.com/zerotier/libzt/tree/master/examples">libzt/examples</a>

















## Sockets

:::tip

If you're new to socket programming I *highly* recommend at least perusing [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/). This is the best reference material you'll find on the subject. It greatly helped in my own personal understanding. A portion of our C API is merely redirected calls to [lwIP's C API](https://savannah.nongnu.org/projects/lwip/) and is thus directly compatible with what you'll learn in his guide.

:::

Before we move onto the next section we need to quickly discuss how the socket API is structured. For each supported language ZeroTier provides a socket interface that *attempts* to be as idiomatic as possible. If you are using one of these non-C bindings the following text about the `C API` may not apply to you, but it's still good to know. [I don't care about this](#client-and-server-part-2)

ZeroTier sockets can be controlled via `zts_bsd_` functions that operate nearly identically to normal BSD-style sockets, and `zts_` functions that provide simplified arguments and reduce the need to use things like `struct sockaddr`. These functions can be used on the same socket interchangeably without issue.

For instance:

 - `zts_bsd_connect()` will behave in the same way as an ordinary `connect()` call (but over ZeroTier of course)
 - `zts_connect()` will perform a little magic behind the scenes to deal with transport-triggered link provisioning. (i.e. re-attempting for you)
 - `zts_tcp_client()` will wrap all of the common socket calls (including a `zts_connect()`) into a single call.

You are allowed to use each type of call and mix their usage among sockets as you please, as long as what you're doing makes sense at the protocol level. For instance the following is legal:

```
int sock = zts_bsd_socket(ZTS_AF_INET, ZTS_SOCK_STREAM, 0);
zts_connect(sock, addr, addrlen);
zts_bsd_write(sock, buf, buflen);
```








## Client and Server (Part 2)

In this section we will:

  - Use most of the same setup code as the [Pingable Node](#pingable-node-part-1) example
  - Set up a TCP server and client
  - Send a short message between the two

To see full source code of the following with proper error and exception handling, see [libzt/examples](https://github.com/zerotier/libzt/tree/master/examples) and [libzt/test](https://github.com/zerotier/libzt/tree/master/test).

Let's start our node:

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
zts_init_from_storage(storage_path);

zts_node_start();

while (! zts_node_is_online()) {
  zts_util_delay(1000);
}

printf("Node ID: %llx\n", zts_node_get_id());

zts_net_join(net_id);

while (! zts_net_transport_is_ready(net_id)) {
  zts_util_delay(1000);
}

char ipstr[ZTS_IP_MAX_STR_LEN] = { 0 };
zts_addr_get_str(net_id, family, ipstr, ZTS_IP_MAX_STR_LEN);
printf("IP address: %s\n", net_id, ipstr);

```

</TabItem>
<TabItem value="python">

```python
n = libzt.ZeroTierNode()
n.init_from_storage(storage_path)

n.node_start()

while not n.node_is_online():
  time.sleep(1)

print("Node ID:" + node.node_id())

n.net_join(net_id)

while not n.net_transport_is_ready(net_id):
  time.sleep(1)

print("IP address: ", n.addr_get_ipv4(net_id))




```

</TabItem>

<TabItem value="rust">

```rust
let node = libzt::node::ZeroTierNode {};
node.init_from_storage(&storage_path);

node.start();

while !node.is_online() {
    node.delay(1000);
}

println!("Node ID = {:#06x}", node.id());

node.net_join(net_id);

while !node.net_transport_is_ready(net_id) {
    node.delay(1000);
}
let addr = node.addr_get(net_id).unwrap();
println!("IP address: {}", addr);


```

</TabItem>

<TabItem value="csharp">

```csharp
node = new ZeroTier.Core.Node();
node.InitFromStorage(configFilePath);

node.Start();

while (! node.Online) {
  Thread.Sleep(1000);
}

Console.WriteLine("Node ID:" + node.Id)

node.Join(networkId);

while (! node.IsNetworkTransportReady(networkId)) {
  Thread.Sleep(1000);
}

foreach (IPAddress addr in node.GetNetworkAddresses(networkId)) {
  Console.WriteLine("IP address: " + addr);
}
```

</TabItem>

<TabItem value="java">

```java
ZeroTierNode node = new ZeroTierNode();
node.initFromStorage(storagePath);

node.start();

while (! node.isOnline()) {
  ZeroTierNative.zts_util_delay(1000);
}

System.out.println("Node ID: " + Long.toHexString(node.getId()));

node.join(networkId);

while (! node.isNetworkTransportReady(networkId)) {
  ZeroTierNative.zts_util_delay(1000);
}

System.out.println("IP address: " + node.getIPv4Address(networkId).getHostAddress());


```

</TabItem>

</Tabs>

Notice that in the above code we use a new type of initialization function. In this case we are using a location on storage to retrieve and store our identities. We do this since we don't want to generate a unique identity for each application run. It's computationally-expensive and wasteful, think of the tardigrades.

### TCP Server

Below is a simple blocking server that will open a listening socket, wait for a message and print what it receives. To see full source code of the following with proper error and exception handling, see [libzt/examples](https://github.com/zerotier/libzt/tree/master/examples) and [libzt/test](https://github.com/zerotier/libzt/tree/master/test).

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

// Set up listen socket
// Note: We could also use standard zts_bsd_socket, zts_bsd_bind, etc
int fd = zts_tcp_server(local_addr, 8000, remote_addr, len, &remote_port)
printf("Accepted connection from %s:%d\n", remote_addr, remote_port);

// RX
char recvBuf[128] = { 0 };
zts_read(fd, recvBuf, sizeof(recvBuf));
printf("RX: %s\n", recvBuf);

// Cleanup
zts_close(fd);
zts_node_stop();



```

</TabItem>
<TabItem value="python">

```python
# Set up listen socket
serv = libzt.socket(libzt.ZTS_AF_INET, libzt.ZTS_SOCK_STREAM, 0)
serv.bind(("0.0.0.0", 8000))
serv.listen(1)
conn, addr = serv.accept()
print("Accepted connection from: ", addr)

# RX
data = conn.recv(128)
print("RX: ", data)

# Cleanup
conn.close()
node.node_stop()






```

</TabItem>

<TabItem value="rust">

```rust
// Set up listen socket
let listener = TcpListener::bind("0.0.0.0:8000").unwrap();
for stream in listener.incoming() {
    match stream {
        Ok(stream) => {
            println!("Accepted connection from: {}", stream.peer_addr().unwrap());
            thread::spawn(move || {
                handle_client(stream)
            });
        }
        Err(e) => {
            println!("Error: {}", e);
        }
    }
}
drop(listener);




```

</TabItem>

<TabItem value="csharp">

```csharp
// Set up listen socket
ZeroTier.Sockets.Socket listener =
  new ZeroTier.Sockets.Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
listener.Bind(localEndPoint);
listener.Listen(1);
ZeroTier.Sockets.Socket handler;
handler = listener.Accept();
Console.WriteLine("Accepted connection from: " + handler.RemoteEndPoint.ToString());

// RX
string data = null;
byte[] bytes = new Byte[128];
int bytesReceived = handler.Receive(bytes);
data = Encoding.ASCII.GetString(bytes, 0, bytesReceived);
Console.WriteLine("RX: " + data);

// Cleanup
handler.Shutdown(SocketShutdown.Both);
handler.Close();
node.Stop();
```

</TabItem>

<TabItem value="java">

```java
// Set up listen socket
ZeroTierServerSocket listener = new ZeroTierServerSocket(port);
ZeroTierSocket conn = listener.accept();
ZeroTierInputStream inputStream = conn.getInputStream();
DataInputStream dataInputStream = new DataInputStream(inputStream);

// RX
String message = dataInputStream.readUTF();
System.out.println("RX: " + message);

// Cleanup
listener.close();
conn.close();
node.stop();






```

</TabItem>

</Tabs>

### TCP Client

Below is a simple client that will connect to a remote host and send a message. To see full source code of the following with proper error and exception handling, see [libzt/examples](https://github.com/zerotier/libzt/tree/master/examples) and [libzt/test](https://github.com/zerotier/libzt/tree/master/test).

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
char* msgStr = (char*)"Hello, network!";
int bytes = 0, fd;

// Set up connection socket
// Note: We could also use standard zts_bsd_socket, zts_bsd_connect, etc
fd = zts_tcp_client(remote_addr, remote_port);

// TX
zts_write(fd, msgStr, strlen(msgStr))

// Cleanup
zts_close(fd);
zts_node_stop();

```

</TabItem>
<TabItem value="python">

```python
# Set up connection socket
client = libzt.socket(libzt.ZTS_AF_INET, libzt.ZTS_SOCK_STREAM, 0)
client.connect((remote_ip, remote_port))

# TX
data = "Hello, network!"
client.send(data.encode("utf-8"))

# Cleanup
client.close()
node.node_stop()



```

</TabItem>

<TabItem value="rust">

```rust
// Set up connection socket
match TcpStream::connect(remote_addr) {
    Ok(mut stream) => {
        // TX
        let msg = b"Hello, network!";
        stream.write(msg).unwrap();
    }
    Err(e) => {
        // Failed to connect
    }
}



```

</TabItem>

<TabItem value="csharp">

```csharp
// Set up connection socket
byte[] bytes = new byte[128];
ZeroTier.Sockets.Socket sender =
  new ZeroTier.Sockets.Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
sender.Connect(remoteServerEndPoint);

// TX
byte[] msg = Encoding.ASCII.GetBytes("Hello, network!");
int bytesSent = sender.Send(msg);

// Cleanup
sender.Shutdown(SocketShutdown.Both);
sender.Close();
node.Stop();
```

</TabItem>

<TabItem value="java">

```java
// Set up connection socket
ZeroTierSocket socket = new ZeroTierSocket(remoteAddr, port);
ZeroTierOutputStream outputStream = socket.getOutputStream();
DataOutputStream dataOutputStream = new DataOutputStream(outputStream);

// TX
dataOutputStream.writeUTF("Hello, network!");

// Cleanup
socket.close();
node.stop();



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
// Generate a new identity
node.init_new_identity()
// (or) Load from storage (will generate new identity if path is empty)
node.init_from_storage("./node_path")
// (or) Load from memory
node.init_from_memory(key, len)
```

</TabItem>

<TabItem value="csharp">

```csharp
// Generate a new identity
node.InitNewIdentity() // Not available yet
// (or) Load from storage (will generate new identity if path is empty)
node.InitFromStorage("./node_path")
// (or) Load from memory
node.InitFromMemory() // Not available yet
```

</TabItem>

<TabItem value="java">

```java
// Generate a new identity
node.initNewIdentity() // Not available yet
// (or) Load from storage (will generate new identity if path is empty)
node.initFromStorage("./node_path")
// (or) Load from memory
node.initFromMemory() // Not available yet
```

</TabItem>

</Tabs>


:::caution

You should keep your identity files safe and unique! If anyone gets a copy of these files they can impersonate your node. And if you run two nodes with the same identity simultaneously you will have a bad day.

:::










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
  // ...
  zts_node_start();
  // ...
}



```

</TabItem>

<TabItem value="python">

```python
def on_zerotier_event(event_code, id):
  if event_code == libzt.ZTS_EVENT_NODE_ONLINE:
    print("ZTS_EVENT_NODE_ONLINE: " + hex(id))

def main():
  n = libzt.ZeroTierNode()
  n.init_set_event_handler(on_zerotier_event)
  n.node_start()









```
</TabItem>

<TabItem value="rust">

```rust
fn user_event_handler(event_code: i16) -> () {
    println!("user_event {}", event_code);
}

fn main() {
  node.init_set_event_handler(user_event_handler);
}










```

</TabItem>

<TabItem value="csharp">

```csharp
public void OnZeroTierEvent(ZeroTier.Core.Event e)
{
  if (e.Code == ZeroTier.Constants.EVENT_NODE_ONLINE) {
    Console.WriteLine("EVENT_NODE_ONLINE: " + node.Id.ToString("x16"));
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
class MyZeroTierEventListener implements ZeroTierEventListener {
  public void onZeroTierEvent(long id, int eventCode)
  {
    if (eventCode == ZeroTierNative.ZTS_EVENT_NODE_ONLINE) {
      System.out.println("EVENT_NODE_ONLINE: " + Long.toHexString(id));
    }
  }
}

public class selftest {
  public static void main(String[] args)
  {
    ZeroTierNode node = new ZeroTierNode();
    node.initSetEventHandler(new MyZeroTierEventListener());
    node.start();
  }
}
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



## Central API

This section will show you how to use the built-in Central API to make calls to our hosted endpoints using your language of choice. It is not necessary to use these built in features but they are provided as a convenience.

:::note BETA

The Central API built into libzt is still `beta` and is not included in most builds by default. It is currently only available in `C` and can be enabled by commenting out `#define ZTS_DISABLE_CENTRAL_API 1` in `ZeroTierSockets.h`. You will need your system's edition of the `libcurl` development headers and libraries. This exercise is left to the reader for the time being.

You should try to use our API exposed here instead: <a href="https://apidocs.zerotier.com/">apidocs.zerotier.com</a>.
:::






## Common issues

- If you have started a node but have not received a `ZTS_EVENT_NODE_ONLINE`:
  - You may need to view our [Router Config Tips](https://zerotier.atlassian.net/wiki/spaces/SD/pages/6815768/Router+Configuration+Tips) knowledge base article. Sometimes this is due to firewall/NAT settings.

- If you have received a `ZTS_EVENT_NODE_ONLINE` event and attempted to join a network but do not see your node ID in the network panel on [my.zerotier.com](https://my.zerotier.com) after some time:
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
