---
title: Western Digital
description: How to install ZeroTier on your Western Digital NAS
tags: [western-digital, nas, installation]
---

## Install

[Download latest ZeroTier package](http://download.zerotier.com/dist/wd/). These packages only support `My Cloud OS 5`. Compression is disabled for lower-powered devices such as `WDMyCloudEX2`.

## Enable SSH

If you've already [enabled SSH access on your NAS](https://support-en.wd.com/app/answers/detail/a_id/14460), log in. The default SSH username on WD devices is `sshd`, not `admin` or `root`:

```sh
ssh sshd@local-ip
```

## Usage

There is no GUI for the ZeroTier package, only a [CLI](./cli.md)

## Upgrading ZeroTier

To upgrade ZeroTier you will need to uninstall the current version of the package and install the desired version. If you wish to preserve your identity you should back up the `identity.secret` file located in `/var/lib/zerotier-one`.

:::info Next steps
Click [here](/start/) to create your network and start adding devices.
:::
