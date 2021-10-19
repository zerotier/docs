---
title: Multipath

toc_footers:
  - <a href='https://www.zerotier.com'>ZeroTier Homepage</a>
  - <a href='#'>Sign Up for Central API Key</a>
  - <a href='https://github.com/zerotier/zerotierone'>GitHub</a>

includes:
  - errors

search: true

code_clipboard: true
custom_edit_url: null
---

# Multipath / Bonding

Link aggregation allows the simultaneous (or conditional) use of multiple physical links to enable `increased total throughput`, `load balancing`, `redundancy`, and `fault tolerance`. There are a variety of standard policies available that can be used right out of the box with little to no configuration. These policies are directly inspired by [the policies offered by the Linux kernel](https://www.kernel.org/doc/Documentation/networking/bonding.txt) but are now offered in user-space and are available on all platforms that ZeroTier supports.

## Standard policies

| Policy name        | Fault tolerance       | Min. failover (sec.) | Default Failover (sec.)| Balancing             | Aggregation efficiency | Redundancy | Sequence Reordering |
|--------------------|:---------------------:|---------------------:|-----------------------:|----------------------:|-----------------------:|-----------:|--------------------:|
| `none`             | None                  | `60+`                | `60+`                  | none                  | `none`                 |1           | No
| `active-backup`    | Brief interruption    | `0.25`               | `10`                   | none                  | `low`                  |1           | Only during failover
| `broadcast`        | Fully tolerant        | `N/A`                | `N/A`                  | none                  | `very low`             |N           | Often
| `balance-rr`       | Self-healing          | `0.25`               | `10`                   | packet-based          | `high`                 |1           | Often
| `balance-xor`      | Self-healing          | `0.25`               | `10`                   | flow-based            | `very high`            |1           | Only during failover
| `balance-aware`    | Self-healing          | `0.25`               | `10`                   | *adaptive* flow-based | `very high`            |1           | Only during failover and re-balance

A policy can be used easily without specifying any additional parameters:

```json title="local.conf"
{
    "settings": {
        "defaultBondingPolicy": "active-backup"
    }
}
```

## Custom policies

To customize a bonding policy for your use-case simply specify a `basePolicy` and override chosen parameters. For example, to create a more aggressive `active-backup` policy that will failover `1` second after it detects a link failure, one could do the following:

```json title="local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "aggressive-active-backup",
    "policies":
    {
      "aggressive-active-backup":
      {
        "failoverInterval": 1000,
        "basePolicy": "active-backup"
      }
    }
  }
}
```

## Specifying links

Bonds are composed of multiple links. Different sets of links can be constructed for different bonding policies and used simultaneously. One can specify the links that ZeroTier should use in any given bonding policy simply by providing an array of links with names corresponding to system interface names. If a user doesn't specify a set of interfaces to use, **ZeroTier will assume every system interface is available for use**. However, if the user **does** specify a set of interfaces, ZeroTier will only use what is specified. The same applies to failover rules, if none are specified, ZeroTier will failover to any operational link. On the other hand, if the user does specify failover rules and there is ever a situation where a link is available for usage but does not fit within the rules specified by the user, it will go unused.

To specify that ZeroTier should only use `eth0` and `eth1` as primary links, and `eth2` as a backup spare and that it should prefer IPv4 over IPv6 except on `eth2` where only IPv6 is allowed:

```json title="local.conf"
{
  "settings": {
    "defaultBondingPolicy": "aggressive-active-backup",
    "policies": {
      "aggressive-active-backup": {
        "links": {
          "eth0": {
            "ipvPref": 46,
            "failoverTo": "eth2",
            "mode": "primary"
          },
          "eth1": {
            "ipvPref": 46,
            "failoverTo": "eth2",
            "mode": "primary"
          },
          "eth2": {
            "ipvPref": 6,
            "mode": "spare"
          }
        }
      }
    }
  }
}
```

```javascript title="Customizable link parameters (snippet)"
...

"links":
{
  "interfaceName": /* Network interface system name */
  {
    "ipvPref": [0,4,6,46,64], /* (optional) IP version preference for detected paths on a link. */
    "speed": 0-1000000, /* (optional) How fast this link is (in arbitrary units). This is a useful way to manually allocate a bond. */
    "alloc": 0-255, /* (optional) A relative value representing a desired allocation. */
    "failoverTo": "spareInterfaceName", /* (optional) Which link should be used next after a failure of this link. */
    "mode": "primary"|"spare" /* (optional) Whether this link is used by default or only after failover events. */
  }
}

...
```

```json title="Customizable bond parameters (snippet)"
...

"defaultBondingPolicy": "my-custom-policy",
"policies":
{
  "my-custom-policy" : {
    "upDelay": 0-65535, /* (optional) How long after a path becomes alive before it is added to the bond. */
    "downDelay": 0-65535, /* (optional) How long after a path fails before it is removed from the bond. */
  }
}

...
```

## Peer-specific bonds

It is possible to direct ZeroTier to form a certain type of bond with specific peers of your choice. For instance, if one were to want `active-backup` by default but for certain peers to be bonded with a custom load-balanced bond such as `my-custom-balance-aware` one could do the following:

```json title="local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "active-backup",
    "policies":
    {
      "my-custom-balance-aware":
      {
        "failoverInterval": 2000,
        "basePolicy": "balance-aware"
      }
    },
    "peerSpecificBonds":
    {
      "f6203a2db3":"my-custom-balance-aware",
      "45b0301da2":"my-custom-balance-aware",
      "a92cb526fa":"my-custom-balance-aware"
    }
  }
}
```

## Active backup (`active-backup`)

Traffic is sent only on `one` path at any given time. A different path becomes active if the current path fails. This mode provides fault tolerance with a nearly immediate fail-over. This mode **does not** increase total throughput.

 - `mode`: `primary, spare` Link option which specifies which link is the primary device. The specified device is intended to always be the active link while it is available. There are exceptions to this behavior when using different `linkSelectMethod` modes. There can only be one `primary` link in this bonding policy.

 - `linkSelectMethod`: Specifies the selection policy for the active link during failure and/or recovery events. This is similar to the Linux Kernel's `primary_reselect` option but with a minor extension:
     - `optimize`: **(default if user provides no failover guidance)** The primary link can change periodically if a superior path is detected.
     - `always`: **(default when links are explicitly specified)**: Primary link regains status as active link whenever it comes back up.
     - `better`: Primary link regains status as active link when it comes back up and (if) it is better than the currently-active link.
     - `failure`: Primary link regains status as active link only if the currently-active link fails.

```json title="local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "active-backup",
    "active-backup":
    {
      "linkSelectMethod": "always",
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

## Broadcast (`broadcast`)

Traffic is sent on (all) available paths simultaneously. This mode provides fault tolerance and effectively immediate failover due to transmission redundancy. This mode is a poor utilization of throughput resources and will **not** increase throughput but can prevent packet loss during a link failure. The only option available is `dedup` which will de-duplicate all packets on the receiving end if set to `true`.

## Balance round robin (`balance-rr`)

Traffic is striped across multiple paths. Offers partial fault tolerance immediately, full fault tolerance eventually. This policy is unaware of protocols and is primarily intended for use with protocols that are not sensitive to reordering delays. The only option available for this policy is `packetsPerLink` which specifies the number of packets to transmit via a path before moving to the next in the RR sequence. When set to `0` a path is chosen at random for each outgoing packet. The default value is `8`, low values can begin to add overhead to packet processing.

## Balance XOR (`balance-xor`)

Similar to the Linux kernel's `balance-xor`. Traffic is categorized into *flows* based on *source port*, *destination port*, and *protocol type* these flows are then hashed onto available links. Each flow will persist on its assigned link interface for its entire life-cycle. Traffic that does not have an assigned port (such as ICMP pings) will be randomly distributed across links. The hash function is simply: `src_port ^ dst_port ^ proto`.

## Balance aware (`balance-aware`)

Similar to the Linux kernel's `balance-*lb`. Traffic is dynamically allocated and balanced across multiple links simultaneously according to the target allocation. Options allow for *packet* or *flow-based* processing, and active-flow reassignment. Flows mediated over a recently failed links will be reassigned in a manner that respects the target allocation of the bond. An optional `balancePolicy` can be specified with the following effects: `flow-dynamic` (default) will hash flows onto links according to target allocation and may perform periodic re-assignments in order to preserve balance. `flow-static`, will hash flows onto links according to target allocation but will not re-assign flows unless a failure occurs or the link is no longer operating within acceptable parameters. And lastly `packet` which simply load balances packets across links according to target allocation but with no concern for sequence reordering.

```json title="local.conf"
{
    "settings":
    {
        "defaultBondingPolicy": "balance-aware",
        "balance-aware": {
            "balancePolicy": "flow-dynamic"|"flow-static"|"packet"
        }
    }
}
```

## Link quality

ZeroTier measures various properties of a link (such as latency, throughput, jitter, packet loss ratio, etc) in order to arrive at a quality estimate. This estimate is used by bonding policies to make allocation and failover decisions:

| Policy name    | How measurements are used                                                                                           |
|:---------------|:--------------------------------------------------------------------------------------------------------------------|
|`active-backup` | Determines the order of the failover queue. And if `activeReselect=optimize` whether a new active link is selected. |
|`broadcast`     | Does not use quality measurements.                                                                                  |
|`balance-rr`    | May trigger removal of link from bond.                                                                              |
|`balance-xor`   | May trigger removal of link from bond.                                                                              |
|`balance-aware` | Informs flow assignments and (re-)assignments. May trigger removal of link from bond.                               |

A link's eligibility for being included in a bond is dependent on more than perceived quality. If a path on a link begins to exhibit disruptive behavior such as extremely high packet loss, corruption, or periodic inability to process traffic it will be removed from the bond, its traffic will be appropriately reallocated and it will be punished. Punishments gradually fade and a link can be readmitted to the bond over time. However, punishments increase exponentially if applied more than once within a given window of time.

## Asymmetric links

In cases where it is necessary to bond physical links that vary radically in terms of cost, throughput, latency, and or reliability, there are a couple of ways to automatically (or manually) allocate traffic among them. Traffic distribution and balancing can be either `packet` or `flow` based. Where packet-based is suitable for protocols not susceptible to reordering penalties and flow-based is suitable for protocols such as TCP where it is desirable to keep a conversation on a single link unless we can't avoid having to re-assign it. Additionally, a *target allocation* of traffic used by the bonding policy can be derived/specified in the following ways:


By specifying `relative link speeds`:

```json title="local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "balance-aware",
    "policies":
    {
      "balance-aware":
      {
        "basePolicy": "balance-aware",
        "links": {
          "eth0": { "speed": 10000 },
          "eth1": { "speed": 1000 },
          "eth2": { "speed": 100 }
        }
      }
    }
  }
}
```

Or, specifying allocation percentages (totaling `1.0`):

```json title="local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "balance-aware",
    "policies":
    {
      "balance-aware":
      {
        "basePolicy": "balance-aware",
        "links": {
          "eth0": { "alloc": 0.50 },
          "eth1": { "alloc": 0.25 },
          "eth2": { "alloc": 0.25 }
        }
      }
    }
  }
}
```

Automatic sensing:

In the absence of user guidance ZeroTier will attempt to form an understanding of each link's speed and capacity but this value can be inaccurate if the links are not routinely saturated in a fair manner. Therefore we reccomend the above methods.

The bonding layer measures and senses the link properties and determines a target allocation based on perceived quality and capacity. Weaker, less reliable links will have less traffic allocated to them over time and stronger, more reliable links will have more traffic allocated to them over time. Optionally, the user can specify a set of weights (totaling `1.0`) to inform the bonding layer how important certain link properties are. For instance, one may primarily be concerned with latency and jitter:


```json title="local.conf"
{
  "settings":
  {
    "defaultBondingPolicy": "balance-aware",
    "policies":
    {
      "balance-aware": {
        "quality": {
            "lat": 0.3, /* Moving average of latency in milliseconds */
            "ltm": 0.2, /* Maximum observed latency in milliseconds */
            "pdv": 0.3, /* Packet delay variance in milliseconds. Similar to jitter */
            "plr": 0.1, /* Packet loss ratio */
            "per": 0.1, /* Packet error ratio */
            "avl": 0.0, /* Availability (ratio of observed offline to online states) */
        }
      }
    }
  }
}

```
