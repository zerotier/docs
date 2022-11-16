---
title: OPNsense

---

OPNsense
=====

# OPNSense
[OPNsense](https://opnsense.org/) is an open source, easy-to-use and easy-to-build HardenedBSD based firewall and routing platform.
They maintain a ZeroTier [package](https://docs.opnsense.org/manual/how-tos/zerotier.html).

If you're using more than one OPNsense router with ZeroTier for a site-to-site style VPN. 
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
