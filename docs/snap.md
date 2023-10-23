---
title: Snap Package
description: How to install the ZeroTier Snap package
---

*"Snaps are containerised software packages that are simple to create and install. They auto-update and are safe to run. And because they bundle their dependencies, they work on all major Linux systems without modification."* - snapcraft.io

## Installation

The official [ZeroTier Snap package](https://snapcraft.io/zerotier) supports `amd64`, `arm64`, `armhf`, `s390x` `ppc64el`, and `i386`. It's generally pretty easy to install:

```sh
sudo snap install zerotier
sudo zerotier status
sudo zerotier join <nwid>
```

## Channels

By default Snap will install packages from the `stable` channel. You can optionally install from other channels if you want a feature that hasn't made it into `stable` yet:

```sh
snap install zerotier --channel=latest/beta
```

- `edge`, `beta`, and `candidate` will immediately track each new tagged version
- `stable` will only track versions that have been out for some time without known issues.

## Troubleshooting

If you see the following:

```sh
authtoken.secret not found or readable in /var/lib/zerotier-one (try again as root)
```

Try re-issuing the command with `sudo`. If that doesn't work try using the interactive form `sudo -i` and then re-attempt:

```sh
user@host$ sudo -i
root@host# zerotier status
root@host# exit
user@host$
```

On some Raspbian systems you may see the following:

```sh
ERROR: ld.so: object '/usr/lib/arm-linux-gnueabihf/libarmmem-v7l.so' from \
/etc/ld.so.preload cannot be preloaded (cannot open shared object file): ignored.
```

This can safely be ignored. This is unrelated to the ZeroTier snap package. See this [Snapcraft forum post](https://forum.snapcraft.io/t/ld-so-error-on-debian-on-raspberry-pi/13887) for more context.

## Special Thanks

Special thanks goes to the open source community for initially developing and maintaining this package.
