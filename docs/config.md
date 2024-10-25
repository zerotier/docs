---
title: Client Configuration
description: How to configure the desktop client
---

ZeroTier One is a service that can run on laptops, desktops, servers,
virtual machines, and containers to provide virtual network connectivity
through a virtual network port much like a VPN client. It can also act
as a network controller and as a federated root server.

[Binary packages are available on the ZeroTier
site](https://www.zerotier.com/download.shtml) and source code is found
on [GitHub](https://github.com/zerotier/ZeroTierOne).

After the service is installed and started, networks can be joined using
their 16-digit network IDs. Each network appears as a virtual "tap"
network port on your system that behaves just like an ordinary Ethernet
port.

## ZeroTier runs as Admin

There are two separate ZeroTier apps on PCs.

There is a ZeroTier system service. It runs as Admin. It does all the networking.
There is a user interface tray app. It does not run as Admin. It talks to the service to join and leave networks.

For the app to talk to the service, it needs access to the secret token.
If the user running the UI app can't access the token, it can't talk the service, so they can't leave or join networks or change other settings.

During install, the token is copied to a location that the installing user can access.

## Configuration Files

### System

The ZeroTier One service keeps its configuration and state information
in its working directory. The working directory location is:

- Windows: `C:\ProgramData\ZeroTier\One`
- macOS: `/Library/Application Support/ZeroTier/One`
- Linux: `/var/lib/zerotier-one`
- FreeBSD/OpenBSD: `/var/db/zerotier-one`

#### Network Specific Configuration

See `$WORKING/networks.d` in the working directory

#### `<network-id>.conf` is a binary file. You can't edit it by hand

If you place an empty file named `<network-id>.conf` in `networks.d`, ZeroTier will join that network when it starts.

#### `<network-id>.local.conf` text file with the network's settings

The contents look like this:

```sh
allowManaged=1
allowGlobal=0
allowDefault=0
allowDNS=0
```

These settings apply to the specific ZeroTier network.

Here is a summary of their meanings:

- Allow Managed. Default Yes. Allow ZeroTier to set IP Addresses and Routes ( [local/private](https://en.wikipedia.org/wiki/Private_network) ranges only)
- Allow Global. Default No. Allow ZeroTier to set Global/Public/Not-Private range IPs and Routes.
- Allow Default. Default No. Allow ZeroTier to set the Default Route on the system. See [Full Tunnel Mode](https://zerotier.atlassian.net/wiki/spaces/SD/pages/7110693/Overriding+Default+Route+Full+Tunnel+Mode).
- Allow DNS. Default No. Allow ZeroTier to set DNS servers.

ZeroTier will use these settings when it starts. If you change these settings from the UI or zerotier-cli, the file will update. If you edit the file directly, you need to restart the service.

### User

Some user specific settings may be stored in the user's path:

- `C:\Users\<User>\AppData\Local\ZeroTier` (Windows)
- `~/Library/Application\ Support/ZeroTier` (macOS)

## Local Configuration Options

A file called `local.conf` in the ZeroTier home folder contains
configuration options that apply to the local node. It can be used to
set up trusted paths, blacklist physical paths, set up physical path
hints for certain nodes, and define trusted upstream devices (federated
roots). Most of the time, you don't need to change any of these settings.

In a large deployment it can be deployed using a tool like
Puppet, Chef, SaltStack, etc. to set a uniform configuration across
systems.

`local.conf` is a JSON format file that can also be edited and rewritten
by ZeroTier One itself, so ensure that proper JSON formatting is used. Paste your JSON into a JSON tool before saving your configuration file.

Settings available in `local.conf` (this is not valid JSON, and JSON
does not allow comments):

```json
{
    "physical": { /* Settings that apply to physical L2/L3 network paths. */
        "NETWORK/bits": { /* Network e.g. 10.0.0.0/24 or fd00::/32 */
            "blacklist": true|false, /* If true, blacklist this path for all ZeroTier traffic */
            "trustedPathId": 0|!0 /* If present and nonzero, define this as a trusted path (see below) */
        } /* ,... additional networks */
    },
    "virtual": { /* Settings applied to ZeroTier virtual network devices (VL1) */
        "##########": { /* 10-digit ZeroTier address */
            "try": [ "IP/port"/*,...*/ ], /* Hints on where to reach this peer if no upstream/roots are online */
            "blacklist": [ "NETWORK/bits"/*,...*/ ] /* Blacklist a physical path for only this peer. */
        }
    },
    "settings": { /* Other global settings */
        "primaryPort": 0-65535, /* If set, override default port of 9993 and any command line port */
        "portMappingEnabled": true|false, /* If true (the default), try to use uPnP or NAT-PMP to map ports */
        "interfacePrefixBlacklist": [ "XXX",... ], /* Array of interface name prefixes (e.g. eth for eth#) to blacklist for ZT traffic */
        "allowManagementFrom": [ "NETWORK/bits" ]|null, /* If non-NULL, allow JSON/HTTP management from this IP network. Default is 127.0.0.1 only. */
        "allowTcpFallbackRelay": true|false /* Allow or disallow establishment of TCP relay connections (true by default) */
    }
}
```

- **trustedPathId**: A trusted path is a physical network over which
    encryption and authentication are not required. This provides a
    performance boost but sacrifices all ZeroTier's security features
    when communicating over this path. *Only use this feature if you
    know what you are doing and really need the performance!* To set up
    a trusted path, all devices on the same trusted physical network
    must have the same trusted path ID. Trusted path IDs are arbitrary
    unsigned 64-bit integers. These are not secrets. The security of a
    trusted path depends on its physical configuration. Take special
    care that any firewalls at its boundaries do not allow traffic in
    our out with IPs overlapping the trusted network range.

An example `local.conf`:

```json
{
    "physical": {
        "10.0.0.0/24": {
            "blacklist": true
        }
    },
    "virtual": {
        "feedbeef12": {
            "role": "UPSTREAM",
            "try": [ "10.10.20.1/9993" ],
            "blacklist": [ "192.168.0.0/24" ]
        }
    },
    "settings": {
    }
}
```

## `authtoken` location

The installer copies `authtoken.secret` to the installing user's [path](#user).

To control the ZeroTier system service, you need the token. If you don't have the token, you can't leave or join networks, for example. The UI app uses the token to control the system service. The cli, `zerotier-cli`, uses it also.

The token is called `authtoken.secret` and it is stored in the ZeroTier working directory. You need to be Admin to access the working  directory.

The user's copy of `authtoken.secret` is in:

- `C:\Users\<User>\AppData\Local\ZeroTier` (Windows)
- `~/Library/Application\ Support/ZeroTier` (macOS)

If you don't want a user to control ZeroTier, don't give them this file and don't give them access to the working directory.
