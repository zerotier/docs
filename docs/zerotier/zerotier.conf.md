---
title: ZeroTier Configuration File


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
custom_edit_url: null
---

ZeroTier One is a service that can run on laptops, desktops, servers,
virtual machines, and containers to provide virtual network connectivity
through a virtual network port much like a VPN client. It can also act
as a network controller and as a federated root server.

[Binary packages are available on the ZeroTier
site](https://www.zerotier.com/download.shtml) and source code is found
on [GitHub](https://github.com/zerotier/ZeroTierOne).

After the service is installed and started, networks can be joined using
their 16-digit network IDs. Each network appears as a virtual “tap”
network port on your system that behaves just like an ordinary Ethernet
port.

The ZeroTier One service keeps its configuration and state information
in its working directory. It’s found by default at the following
locations:

-   Windows: `C:\ProgramData\ZeroTier\One`
-   Macintosh: `/Library/Application Support/ZeroTier/One`
-   Linux: `/var/lib/zerotier-one`
-   FreeBSD/OpenBSD: `/var/db/zerotier-one`

### Local Configuration Options {#42localconfigurationoptionsaname4_2a}

A file called `local.conf` in the ZeroTier home folder contains
configuration options that apply to the local node. It can be used to
set up trusted paths, blacklist physical paths, set up physical path
hints for certain nodes, and define trusted upstream devices (federated
roots). In a large deployment it can be deployed using a tool like
Puppet, Chef, SaltStack, etc. to set a uniform configuration across
systems. It’s a JSON format file that can also be edited and rewritten
by ZeroTier One itself, so ensure that proper JSON formatting is used.

Settings available in `local.conf` (this is not valid JSON, and JSON
does not allow comments):

    {
        "physical": { /* Settings that apply to physical L2/L3 network paths. */
            "NETWORK/bits": { /* Network e.g. 10.0.0.0/24 or fd00::/32 */
                "blacklist": true|false, /* If true, blacklist this path for all ZeroTier traffic */
                "trustedPathId": 0|!0 /* If present and nonzero, define this as a trusted path (see below) */
            } /* ,... additional networks */
        },
        "virtual": { /* Settings applied to ZeroTier virtual network devices (VL1) */
            "##########": { /* 10-digit ZeroTier address */
                "try": [ "IP/port"/*,...*/ ], /* Hints on where to reach this peer if no upstreams/roots are online */
                "blacklist": [ "NETWORK/bits"/*,...*/ ] /* Blacklist a physical path for only this peer. */
            }
        },
        "settings": { /* Other global settings */
            "primaryPort": 0-65535, /* If set, override default port of 9993 and any command line port */
            "portMappingEnabled": true|false, /* If true (the default), try to use uPnP or NAT-PMP to map ports */
            "softwareUpdate": "apply"|"download"|"disable", /* Automatically apply updates, just download, or disable built-in software updates */
            "softwareUpdateChannel": "release"|"beta", /* Software update channel */
            "softwareUpdateDist": true|false, /* If true, distribute software updates (only really useful to ZeroTier, Inc. itself, default is false) */
            "interfacePrefixBlacklist": [ "XXX",... ], /* Array of interface name prefixes (e.g. eth for eth#) to blacklist for ZT traffic */
            "allowManagementFrom": "NETWORK/bits"|null, /* If non-NULL, allow JSON/HTTP management from this IP network. Default is 127.0.0.1 only. */
            "allowTcpFallbackRelay": true|false /* Allow or disallow establishment of TCP relay connections (true by default) */
        }
    }

-   **trustedPathId**: A trusted path is a physical network over which
    encryption and authentication are not required. This provides a
    performance boost but sacrifices all ZeroTier’s security features
    when communicating over this path. *Only use this feature if you
    know what you are doing and really need the performance!* To set up
    a trusted path, all devices on the same trusted physical network
    must have the same trusted path ID. Trusted path IDs are arbitrary
    unsigned 64-bit integers. These are not secrets. The security of a
    trusted path depends on its physical configuration. Take special
    care that any firewalls at its boundaries do not allow traffic in
    our out with IPs overlapping the trusted network range.

An example `local.conf`:

    {
        "physical": {
            "10.0.0.0/24": {
                "blacklist": true
            },
            "10.10.10.0/24": {
                "trustedPathId": 101010024
            },
        },
        "virtual": {
            "feedbeef12": {
                "role": "UPSTREAM",
                "try": [ "10.10.20.1/9993" ],
                "blacklist": [ "192.168.0.0/24" ]
            }
        },
        "settings": {
            "softwareUpdate": "apply",
            "softwareUpdateChannel": "release"
        }
    }
