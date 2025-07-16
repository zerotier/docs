---
title: TCP Relay
description: how to 
tags: [tutorial, router, linux, troubleshooting]
---

## Intro

Out of box and for best results, ZeroTier makes direct, peer to peer connections over UDP.
But sometimes your on a network that doesn't allow NAT hole punching or UDP at all.

ZeroTier Inc. runs a TCP relay service that the ZeroTierOne agent will fall back to if it can't make UDP connections.
This relay service is slow for various reasons. You can host your own TCP relay service for better results.

It's generally better to adjust your router if at all possible. The second choice is [route between zerotier and physical networks](/route-between-phys-and-virt.md).
If neither of those is possible, consider TCP relay.

This will be a rough, test set up. Once it's verified working, your Ops and Firewall teams can set it up for production.

## Set up TCP relay

The easiest to set up version of a TCP relay service is the `reflect` mode of [pylon](https://github.com/zerotier/pylon)

Lets set up one of those.

### Create a Linux VM on your preferred hosting provider

Use a datacenter/region as close to your physical location as possible. We don't provide instructions here because there are so many different ways to do create a VM in the cloud.

### Run the pylon docker container

Once [docker](https://docs.docker.com/desktop/install/linux-install/) up and running you can run this one command:

```sh
export TCP_PORT=443
export UDP_PORT=9993
docker run --init -p $TCP_PORT:$TCP_PORT -p $UDP_PORT:9993/udp zerotier/pylon:latest reflect
```

### Configure your ZeroTierOne agent to use the TCP relay

Use the zerotier-one configuration file to configure it for a custom tcp relay.

See [Service docs](https://github.com/zerotier/ZeroTierOne/blob/e0acccc3c918b59678033e585b31eb000c68fdf2/service/README.md) for more info on local.conf

The contents should look something like this:

`{ "settings": { "tcpFallbackRelay": "$PYLON_IP/$TCP_PORT", "forceTcpRelay": true  } }`

Example:

`{ "settings": { "tcpFallbackRelay": "1.2.3.4/443", "forceTcpRelay": true  } }`

In this example, `forceTcpRelay` is enabled. This is helpful for testing or if you know you'll need tcp relay. It takes a few minutes for zerotier-one to realize it needs to relay otherwise.

### Verify

On your zerotier client

```sh
zerotier-cli peers | grep "PLANET\|NOTE"
```

```sh
62f865ae71 -      PLANET   199 RELAY 18512    195709   50.7.252.138/9993
778cde7190 -      PLANET    76 RELAY 18512    3211     103.195.103.66/9993
cafe04eba9 -      PLANET   183 RELAY 18512    195725   84.17.53.155/9993
cafe9efeb9 -      PLANET    22 RELAY 3219     3219     104.194.8.134/9993
NOTE: Currently tunneling through a TCP relay. Ensure that UDP is not blocked.
```

```sh
zerotier-cli info
```

```sh
200 info 4625123456 1.12.2 TUNNELED
```

```sh
zerotier-cli info -j
```

Look for

```json
"tcpFallbackRelay": "$PYLON_IP/$TCP_PORT",
...
"forceTcpRelay": true,
```

To verify your local.conf is correct.

Try to ping something on your ZeroTier network. It might take a second or two to start working and there will be more latency than a UDP connection.

Your pylon service should start outputting a stream of IP address logs.

## Troubleshooting

Sometimes UFW is enabled by default. This conflicts with docker's firewall handling. Pylon might be blocked from the internet.

Run:
`systemctl stop ufw`

Before restarting the pylon docker container. Docker should enable `$TCP_PORT` and `$UDP_PORT` automatically.
