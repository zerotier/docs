---
title: Private Root Servers


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

### Creating Your Own Roots (a.k.a. Moons) {#44creatingyourownrootsakamoonsaname4_4a}

All ZeroTier nodes
on a planet effectively inhabit a single data center. This makes it easy
to directly connect devices anywhere, but it has the disadvantage of not
working without an Internet connection. Network connections are far from
perfectly reliable, and sometimes for security reasons a user may wish
to “air gap” a set of nodes from the rest of the Internet entirely.

In 1.2.0 we introduced the ability to add your own user-defined roots.
Since the data center we inhabit is the planet, a user-defined set of
roots is called a **moon**. When a node “orbits” a moon, it adds the
moon’s roots to its root server set. Nodes orbiting moons will still use
planetary roots, but they’ll use the moon’s roots if they look faster or
if nothing else is available.

The first step in creating a moon is to deploy a set of root servers. In
most cases we recommend two. These are regular ZeroTier nodes, but ones
that are always on and have static (physical) IP addresses. These static
IPs could be global Internet IPs or physical intranet IPs that are only
reachable internally. In the latter case your moon’s roots won’t work
outside your office, but that doesn’t matter. Roaming nodes will just
use planetary roots instead.

We recommend that root servers do not act as network controllers, join
networks, or perform any other overlapping functions. They need good
reliable network connections but otherwise require very little RAM,
storage, or CPU. A root could be a small VM, VPS, or cloud instance, or
a small device like a [Raspberry Pi](https://www.raspberrypi.org/). If
you provision your roots as VMs, take care that they do not all reside
on the same physical hardware. This would defeat the purpose of having
two.

The next step is to create a world definition using `zerotier-idtool`.
You will need the `identity.public` files from each of your root
servers. Pick one root (doesn’t matter which) and run
`zerotier-idtool initmoon <identity.public of one root> >>moon.json`.
The `zerotier-idtool`command will output a JSON version of your world
definition to *stdout*, so we redirect it to `moon.json`.

Examine this file. It will contain something like:

```json

    {
      "id": "deadbeef00",
      "objtype": "world",
      "roots": [
        {
          "identity": "deadbeef00:0:34031483094...",
          "stableEndpoints": []
        }
      ],
      "signingKey": "b324d84cec708d1b51d5ac03e75afba501a12e2124705ec34a614bf8f9b2c800f44d9824ad3ab2e3da1ac52ecb39ac052ce3f54e58d8944b52632eb6d671d0e0",
      "signingKey_SECRET": "ffc5dd0b2baf1c9b220d1c9cb39633f9e2151cf350a6d0e67c913f8952bafaf3671d2226388e1406e7670dc645851bf7d3643da701fd4599fedb9914c3918db3",
      "updatesMustBeSignedBy": "b324d84cec708d1b51d5ac03e75afba501a12e2124705ec34a614bf8f9b2c800f44d9824ad3ab2e3da1ac52ecb39ac052ce3f54e58d8944b52632eb6d671d0e0",
      "worldType": "moon"
    }
```

The world ID is technically arbitrary and could be any random 64-bit
value. By convention we use the address of one of the roots.

The world definition JSON file **contains secrets**, so it’s important
to keep it in a safe place. The `signingKey_SECRET` is what will allow
you to update your world definition automatically in the future.

Now add your other root(s) and define their stable endpoints. You’ll end
up with something that looks like:

```json
    {
      "id": "deadbeef00",
      "objtype": "world",
      "roots": [
        {
          "identity": "deadbeef00:0:34031483094...",
          "stableEndpoints": [ "10.0.0.2/9993","2001:abcd:abcd::1/9993" ]
        },
        {
          "identity": "feedbeef11:0:83588158384...",
          "stableEndpoints": [ "10.0.0.3/9993","2001:abcd:abcd::3/9993" ]
        }
      ],
      "signingKey": "b324d84cec708d1b51d5ac03e75afba501a12e2124705ec34a614bf8f9b2c800f44d9824ad3ab2e3da1ac52ecb39ac052ce3f54e58d8944b52632eb6d671d0e0",
      "signingKey_SECRET": "ffc5dd0b2baf1c9b220d1c9cb39633f9e2151cf350a6d0e67c913f8952bafaf3671d2226388e1406e7670dc645851bf7d3643da701fd4599fedb9914c3918db3",
      "updatesMustBeSignedBy": "b324d84cec708d1b51d5ac03e75afba501a12e2124705ec34a614bf8f9b2c800f44d9824ad3ab2e3da1ac52ecb39ac052ce3f54e58d8944b52632eb6d671d0e0",
      "worldType": "moon"
    }
```

The static IP addresses you use must be reachable from all the places
you want these roots to serve. If you’re deploying these for use at a
physical location, use internal IPs. If you want them to be usable
off-site, use public IPs from your DMZ or host them at a cloud provider
with a data center presence close to you. Low-cost cloud hosts that
provide simple static direct IP addressing and dual-stack IPv4/IPv6
support like [Digital Ocean](https://digitalocean.com/),
[Vultr](https://vultr.com/), and [Linode](https://linode.com/) make
ideal places to host roots. The lowest priced instances at these
providers are more than sufficient in most cases.

The third step is to generate the actual signed world with
`zerotier-idtool genmoon moon.json`. In this case this will generate a
file called `000000deadbeef00.moon`. This does not contain secret keys
but is signed by the secret from the JSON file.

Now go to your roots, create (if it does not exist) a subdirectory of
their working directories (usually `/var/lib/zerotier-one` on Linux)
called `moons.d`, and copy the signed moon file there. Now restart the
roots and they should be ready.

You can add these roots to regular nodes in one of two ways: by placing
the same world definition file in their `moons.d` directories or by
using the `zerotier-cli orbit` command:
`zerotier-cli orbit deadbeef00 deadbeef00`. The first argument is the
world ID (which we can shorten by removing the two leading zeroes) and
the second is the address of any of its roots. This will contact the
root and obtain the full world definition from it if it’s online and
reachable.

Once you’ve “orbited” your moon, try `zerotier-cli listpeers`. You
should see the roots you’ve created listed as `MOON` instead of `LEAF`.
They will now be used as alternative root servers.
