---
title: Layer 5 Proxy
description: Make a SOCKS5 Proxy with ZeroTier
---

Proxy layer 5 traffic from your apps to and from your ZeroTier virtual network without installing ZeroTier and without bringing up any new network interfaces.

:::info Note
This topic is related to but different from [Bridging](bridging). Proxy mode is useful if you're unable to install our normal client on your devices.
:::

Pylon can be run as one of two personalities that can work alone or together depending on your needs:

| Name  | What do | Is this a ZeroTier Node? |
| ------------- | ------------- | - |
| `pylon refract`  | This bridges traffic to and from your LAN | Yes |
| `pylon reflect` | This relays traffic over `TCP/443`  | No |

In many cases a single `refract` instance is enough to bridge devices onto your ZeroTier network. However, if you're behind some tricky NAT you might need to set up a `reflect` instance on a machine with a static IP for your `refract` instance to use.

### Set identity

Set environment variable to hold your ZeroTier secret identity:

```sh
export ZT_PYLON_SECRET_KEY=$(sudo cat identity.secret)
```

### Specify an (optional) UDP port for ZeroTier to use

By default Pylon will chose a random port to send ZeroTier traffic over, but If you need it to only send traffic over a whitelisted port you can specify one like so:

```sh
export ZT_PYLON_WHITELISTED_PORT=4545
```

### Run `refract` instance

Run proxy service to listen for app traffic locally on `127.0.0.1:1080`:

```sh
./pylon refract b84ac5c40a2339c9 --listen-addr 0.0.0.0 --listen-port 1080
```

You can also listen on `0.0.0.0`.

### Run `reflect` instance

If you have a tricky NAT situation and can allow `TCP/443`, you can specify a relay on a machine with a static IP like so:

```sh
./pylon reflect
```

Then tell your pylon instances to use that to proxy traffic:

```sh
./pylon refract b84ac5c40a2339c9 --listen-addr 0.0.0.0 --listen-port 1080 --relay-addr 0.0.0.0 --relay-port 443
```

## Example

Set up remote resource:

```sh
mkdir serveme && cd serveme && echo "served data" > served.txt && \
python -m http.server -b 0.0.0.0 8000
```

Attempt a proxied HTTP GET:

```sh
curl --verbose --output output.txt 172.28.128.86:8000 --proxy socks5://127.0.0.1:1080
```
