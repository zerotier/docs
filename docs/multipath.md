---
title: Multipath
---

Combine multiple network links into one.

Multipath allows the simultaneous (or conditional) aggregation of multiple physical links into a *bond* for increased total throughput, load balancing, redundancy, and fault tolerance. There is a set of standard bonding policies available that can be used right out of the box with no configuration. These policies are inspired by [the policies offered by the Linux kernel](https://www.kernel.org/doc/Documentation/networking/bonding.txt). A bonding policy can be used easily without specifying any additional parameters. For example:

```json title="Example local.conf"
{ "settings": { "defaultBondingPolicy": "active-backup" } }
```

### Standard policies

- [active-backup](#active-backup): Use only one primary link at a time and failover to another designated link.
- [broadcast](#broadcast): Duplicate traffic across all available links at all times.
- [balance-rr](#balance-rr): Stripe *packets* across multiple links (not for use with TCP.)
- [balance-xor](#balance-xor): Hash *flows* to specific links.
- [balance-aware](#balance-aware): Auto-balance flows across links.

### Custom policies

To customize a bonding policy simply specify a standard policy as `basePolicy` and override its parameters. Note that a custom policy *cannot* have the same name as a standard policy. For example, to create a more rapid `active-backup` policy that will failover `1 second` after it detects a link failure:

```json title="local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "rapid-active-backup",
    "policies":
    {
      "rapid-active-backup":
      {
        "basePolicy": "active-backup",
        "failoverInterval": 1000
      }
    }
  }
}
```

You can only override parameters that are valid for the chosen `basePolicy`. The list below shows parameters that can apply to any policy. Parameters that are unique to a given policy type are described in that policy's section.

```json title="Example policy settings (not valid JSON)"
{
  "settings":
  {
    "defaultBondingPolicy": "rapid-active-backup",
    "policies":
    {
      "rapid-active-backup":
      {
        "basePolicy": "active-backup",
        "failoverInterval": 1000,
        "upDelay":0-65535,
        "downDelay":0-65535,
      }
    }
  }
}
```

### Physical interfaces

Bonds are composed of multiple links (known paths over system network interfaces). By default if no interfaces are specified ZeroTier will attempt to use all network interfaces, including your expensive wireless links. In order to avoid this you should tell ZeroTier which interfaces are okay to talk on and also under what conditions. If a set of links is defined, ZeroTier will use only those links and ignore everything else.

```json title="Example local.conf: To specify that ZeroTier should only use eth1 but then failover to eth2 and that it should prefer IPv4 over IPv6 except on eth2 where only IPv6 is allowed."
{
  "settings": {
    "defaultBondingPolicy": "rapid-active-backup",
    "policies": {
      "rapid-active-backup": {
        "basePolicy": "active-backup",
        "failoverInterval": 1000,
        "links":
        {
          "eth0":
          {
            "ipvPref": 46,
            "failoverTo": "eth1"
          },
          "eth1":
          {
            "ipvPref": 46,
            "failoverTo": "eth2"
          },
          "eth2":
          {
            "ipvPref": 6
          }
        }
      }
    }
  }
}
```

### Link settings

The behavior of links can be changed by setting various properties:

```javascript title="Customizable link parameters (not valid JSON)"
...

"links":
{
  "eth0": /* Network interface system name */
  {
    "ipvPref": [0,4,6,46,64], /* (optional) IP version preference for paths on a link. */
    "capacity": 0-1000000, /* (optional) Arbitrary units of link "capacity". Can be used to manually allocate traffic. */
    "failoverTo": "failoverInterfaceName", /* (optional) Which link should be used next after a failure of this link. */
    "mode": "primary"|"spare" /* (optional) Whether this link is used by default or only after all other links fail. */
  },
  ...
}

...
```

### Spare links

A warm spare is a link that is not actively used to process traffic until all other available links are down. Note however that some ambient probing traffic is still sent to guarantee its performance. Spare links are not available when using the `broadcast` policy. Cold spares are left as an exercise for the reader.

```json title="Example local.conf: To specify that traffic should be hashed over two links eth0 and eth1 and that expensive_lte0 should only be used when the other two are down."
{
  "settings": {
    "defaultBondingPolicy": "xor-with-a-spare",
    "policies": {
      "xor-with-a-spare": {
        "basePolicy": "balance-xor",
        "links":
        {
          "eth0":
          {
            "mode": "spare"
          },
          "eth1":
          {
            "mode": "spare"
          },
          "expensive_lte0":
          {
            "mode": "spare"
          }
        }
      }
    }
  }
}
```

### Peer-specific bonds

It is possible to use a policy for one peer and another policy for a different peer. For instance, if one were to want `active-backup` for all peers by default but for certain peers to be bonded with a custom load-balanced bond such as `my-custom-balance-xor` one could do the following:

```json title="Example local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "active-backup",
    "policies":
    {
      "my-custom-balance-xor":
      {
        "failoverInterval": 2000,
        "upDelay": 5000,
        "basePolicy": "balance-xor"
      }
    },
    "peerSpecificBonds":
    {
      "f6203a2db3":"my-custom-balance-xor",
      "45b0301da2":"my-custom-balance-xor",
      "a92cb526fa":"my-custom-balance-xor"
    }
  }
}
```

### active-backup

```json title="Example local.conf"
{ "settings": { "defaultBondingPolicy": "active-backup" } }
```

Traffic is sent on only *one* link at any time. A different link becomes active if the current link fails. This mode provides fault tolerance with a nearly immediate failover depending on the `failoverInterval` you set. This mode *does not* increase total throughput. If no `primary` and `spare` links are defined ZeroTier will attempt to pick the best one.

- `mode`: `primary|spare` Link option which specifies which link is the primary device. The specified device is intended to always be the active link while it is available. There are exceptions to this behavior when using different `linkSelectMethod` modes. There can only be one `primary` link in this bonding policy.

- `linkSelectMethod`: Specifies the selection policy for the active link during failure and/or recovery events. This is similar to the Linux Kernel's `primary_reselect` option but with a minor extension:
  - `optimize`: **(default if user provides no failover guidance)** The primary link can change periodically if a superior link is detected.
  - `always`: **(default when links are explicitly specified)**: Primary link regains status as active link whenever it comes back up.
  - `better`: Primary link regains status as active link when it comes back up and (if) it is better than the currently-active link.
  - `failure`: Primary link regains status as active link only if the currently-active link fails.

```json title="Example local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "custom-active-backup",
    "custom-active-backup":
    {
      "linkSelectMethod": "always",
      "failoverInterval": 5000,
      "links":
      {
        "eth0": { "failoverTo": "eth1", "mode": "primary" },
        "eth1": { "mode": "spare" },
        "eth2": { "mode": "spare" },
        "eth3": { "mode": "spare" }
      }
    }
  }
}
```

### broadcast

```json title="Example local.conf"
{ "settings": { "defaultBondingPolicy": "broadcast" } }
```

Traffic is sent on *all* available links simultaneously. This mode provides fault tolerance and effectively immediate failover due to transmission redundancy. This mode is a poor utilization of throughput resources and will **not** increase throughput but can prevent packet loss during a link failure.

### balance-rr

```json title="Example local.conf"
{ "settings": { "defaultBondingPolicy": "balance-rr" } }
```

Traffic is striped across multiple links. This mode offers partial fault tolerance immediately, full fault tolerance eventually. This policy is unaware of protocols and is primarily intended for use with protocols that are not sensitive to reordering delays. The only option available for this policy is `packetsPerLink` which specifies the number of packets to transmit via a link before moving to the next link in the round-robin sequence. When set to `0` a link is chosen at random for each outgoing packet (doing so would be inefficient). The default value is `64`, lower values can begin to add overhead to packet processing. This mode is **not** suitable for traffic that is sensitive to re-ordering such as TCP.

### balance-xor

```json title="Example local.conf"
{ "settings": { "defaultBondingPolicy": "balance-xor" } }
```

Traffic is categorized into *flows* based on *source port*, *destination port*, and *protocol type* these flows are then hashed onto available links where they will persist for the duration of their life. Traffic that does not have an assigned port (such as ICMP pings) will be randomly distributed across links. This mode offers partial fault tolerance immediately, full fault tolerance eventually. This mode is suitable for traffic that is sensitive to re-ordering such as TCP.

### balance-aware

```json title="Example local.conf"
{ "settings": { "defaultBondingPolicy": "balance-aware" } }
```

This mode operates similarly to `balance-xor` in that it hashes flows onto specific links. However, it may reassign flows mid-conversation and perform other types of optimizations. This mode may surprise you more often than `balance-xor` by causing re-ordering delays for certain flows but it should lead to a better total experience when all flows are considered. This policy allows you to specify not only [relative link capacities](#asymmetric-links) but also a [notion of quality](#link-quality) expressed as a weighted vector with a sum of `1.0`. See below:

```json title="Example local.conf: A maximum acceptable value for latency and  packet delay variance are given along with weights that tell ZeroTier how important that limit is. Additionally, link capacities are given as hints to enable proportional traffic allocation."
{
  "settings":
  {
    "defaultBondingPolicy": "custom-balance-aware",
    "policies":
    {
      "custom-balance-aware":
      {
        "basePolicy": "balance-aware",
        "failoverInterval": 5000,
        "linkQuality": {
          "lat_max" : 400.0,
          "pdv_max" : 20.0,
          "lat_weight" : 0.5,
          "pdv_weight" : 0.5
        },
        "links": {
          "wlan0": { "capacity": 250 },
          "eth0": { "capacity": 1000  }
        }
      }
    }
  }
}
```

In the above example if any links begin to show signs of saturation (for instance if latency increases beyond `400ms`) flows will be moved from it until it is no longer judged to be saturated.

### Link Quality

As seen in the [balance-aware](#balance-aware) example configuration, you can provide hints to ZeroTier as to when a link is no longer suitable for use. You can set limits on the following:

- `lat_max`: Maximum (mean) latency observed over many samples
- `pdv_max`: Maximum packet delay variance (similar to jitter)

Then, weights must also be provided to tell ZeroTier how important your limits are (as a reminder, the weights must sum to `1.0`):

```json
"linkQuality": {
  "lat_max" : 80.0,
  "pdv_max" : 20.0,
  "lat_weight" : 0.5,
  "pdv_weight" : 0.5
}
```

If any one of these limits are violated ZeroTier will attempt to avoid assigning new flows to the link in question as well as begin moving flows from that link to other higher quality links. ZeroTier will first try to find a link that doesn't violate any of your limits but if it is unable to do so it will pick the next best according to a quality ranking derived from your weights. There is no guarantee that links will be entirely avoided or that all of their flows will be moved if there are no better links to move to so these limits are merely strong suggestions to ZeroTier.

### Asymmetric links

Any set of physical links regardless of their relative performance may be combined using any of the policies. However if the relative performance among the links vary too wildly (for instance a fiber link and an LTE link) you may find that blindly striping or hashing traffic across them doesn't turn out so well. For these scenarios it is recommended that you use [balance-aware](#balance-aware) and provide `capacity` and/or `linkQuality` hints to ZeroTier.

#### Capacity

```json title="Example capacities (not a valid config by itself)"
"links": {
  "wlan0": { "capacity": 250 },
  "eth0": { "capacity": 1000  }
}
```

The term is meant to be a one-size-fits-all numerical value which represents the *diameter* of the pipe so to speak. That is, how much traffic it can process before it becomes clogged and congestion controls kick in. This will suggest to ZeroTier that it should assign traffic flows proportionally.

#### Quality

Providing [quality](#link-quality) hints to ZeroTier can be done in conjunction with the aforementioned `capacity` property without issue. See the [balance-aware](#balance-aware) section for an example of how to do this.

```json title="Example local.conf: How to use arbitrary (but relative) capacity values"
{
  "settings":
  {
    "defaultBondingPolicy": "custom-balance-aware",
    "policies":
    {
      "custom-balance-aware":
      {
        "basePolicy": "balance-aware",
        "links": {
          "eth0": { "capacity": 10000 },
          "eth1": { "capacity": 1000  },
          "eth2": { "capacity": 100   }
        }
      }
    }
  }
}
```

The above configuration will *roughly* result in the following allocation:

```sh
10000 + 1000 + 100 = 11100 total "capacity units" across all links

eth0 10000 / 11100 = ~0.900 %
eth1 1000  / 11100 = ~0.090 %
eth2 100   / 11100 = ~0.009 %
```

A good rule of thumb would be to express your known link speeds in units of `Mbit/s`. This isn't strictly necessary as long as the quantities make sense relative to each other.

### Using the CLI

Currently most configuration is handled via manual editing of each node's `local.conf`. There are only a few available CLI commands.

To view bonds to all peers:

```json title="zerotier-cli bond list"
    <peer>                        <bondtype>     <links>
2f33b459c1                       balance-xor         18/18
6af835ae71                     active-backup         2/2
77dcbe7120                     active-backup         5/5
cbae04eb89                     active-backup         5/5
bafe99feb9                     active-backup         3/3
```

:::tip
If you'd like to ingest this data into your own monitoring solution use `zerotier-cli -j bond list` to emit a JSON blob instead.
:::

To see the current state of a bond to a given peer:

```json title="zerotier-cli bond 77dcbe7120 show"
Peer                   : 77dcbe7120
Bond                   : balance-rr
Link Select Method     : 0
Links                  : 4/4
Failover Interval (ms) : 500
Up Delay (ms)          : 0
Down Delay (ms)        : 0
Packets Per Link       : 64

idx                  interface                                  path               socket
----------------------------------------------------------------------------------------------------
 0:                     enp5s0                                192.168.88.155/57605 000055e03aa4d5a0
 1:                     enp5s0                                192.168.88.155/57605 000055e03aa4dc80
 9:            wlxc07a002fb470                                192.168.88.155/57605 000055e03aa4d440
10:            wlxc07a002fb470                                192.168.88.155/57605 000055e03aa4db20


idx     lat      pdv     plr     per    speed  alloc      rx_age      tx_age  eligible  bonded
----------------------------------------------------------------------------------------------------
 0:     0.00     0.00  0.0000  0.0000    1000   0.07          62          66         1       1
 1:    10.00    21.00  0.0000  0.0000    1000   0.04          61          66         1       1
 9:     6.00     1.00  0.0000  0.0000    5000   0.06         227         567         1       1
10:     0.00     0.00  0.0000  0.0000    5000   0.07          60          48         1       1
```

The reported allocation percentages have an uncertainty value of `+/- 0.4%`.

To forcibly rotate to a different link in an `active-backup` bond:

```json title="zerotier-cli bond 77dcbe7120 rotate"
active link rotated from 000055c8aa8392f0-enp5s0/104.175.36.67/9993 to 000055c8aa838210-enp5s0/104.175.36.67/9993
```

To set a custom MTU for a bonded link:

```json title="zerotier-cli bond setmtu 1300 enp5s0 192.168.88.155"
200 setmtu OK
```
