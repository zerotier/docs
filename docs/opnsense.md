---
title: OPNsense
description: How to install ZeroTier on your OPNSense router
---

OPNSense

[OPNsense](https://opnsense.org/) is an open source, easy-to-use and easy-to-build FreeBSD based firewall and routing platform.
They maintain a ZeroTier [package](https://docs.opnsense.org/manual/how-tos/zerotier.html).

If you're using more than one OPNsense router with ZeroTier for a site-to-site style VPN, you will run in to a "ZeroTier over ZeroTier" issue. This causes high CPU usage and dropped packets.
The work-around is to paste this into the local.conf text box in the opnsense UI:

```json
{
  "physical": {
    "10.0.0.0/8": {
      "blacklist": true
    },
    "172.16.0.0/12": {
      "blacklist": true
    },
    "192.168.0.0/16": {
      "blacklist": true
    }
  }
}
```

This prevents zerotier from sending zerotier traffic over zerotier.

See this [discussion](https://github.com/zerotier/ZeroTierOne/issues/779#issuecomment-767198156) for more information.

Some more settings you may find helpful for your firewall rules:

```json
{
  "physical": {
    "10.0.0.0/8": {
      "blacklist": true
    },
    "172.16.0.0/12": {
      "blacklist": true
    },
    "192.168.0.0/16": {
      "blacklist": true
    }
  },
  "settings": {
    "primaryPort": 9993,
    "portMappingEnabled": false,
    "allowSecondaryPort": false,
    "allowTcpFallbackRelay": false
  }
}
```

This prevents ZeroTier from binding to multiple ports.

## ZeroTier clients behind OPNsense

If you have computers behind an OPNsense router, they probably won't be able to make make direct, peer to peer ZeroTier connections.
`pf` based routers use Symmetric NAT otherwise known as Endpoint Dependent NAT. This is unfriendly to any peer to peer protocol.

Here are some options:

### Run ZeroTier on the Router

Described above

### UPnP/NAT-PMP

ZeroTier will use UPnP or NAT-PMP if they are available.

### Static Port

If you have a small number of ZeroTier clients (and a small number of UDP services in general), enabling Static Port can help.

Firewall -> NAT -> Outbound -> Static Port option. See also the Source Address setting. Each instance of ZeroTier binds to a random source port (in addition to 9993.)

https://docs.opnsense.org/manual/nat.html#outbound

If you have many computers on your network, two services will choose the same port eventually. Then there will be a conflict in the Static NAT and something won't work and you won't remember why.

:::info Next steps
Click [here](/start/) to create your network and start adding devices.
:::
