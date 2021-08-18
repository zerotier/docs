---
title: Synology NAS

includes:
  - errors

search: true

code_clipboard: true
custom_edit_url: null
---

Synology NAS
=====

:::note DSM 7 Update

Synology's DSM 7 doesn't allow third-party applications to run as root. Therefore, we now recommend using Docker to run ZeroTier. While this is somewhat inconvenient at first it is undeniably a safer way to run third-party applications on your NAS. Once set up this configuration will be persistent across reboots and DSM upgrades.

The GUI for the Synology Docker package is unreliable at best so it is suggested that all operations performed on your container be done through the Docker CLI. If you choose to use the GUI you do so at your own peril.

If your NAS does not support Docker you can still use the [older packages for DSM 6](http://download.zerotier.com/RELEASES/1.4.6/dist/synology/) or follow our [bridging tutorial](https://zerotier.atlassian.net/wiki/spaces/SD/pages/193134593/Bridge+your+ZeroTier+and+local+network+with+a+RaspberryPi).

There are four steps that need to be performed only once:

:::

 - [Enable SSH access on your NAS](https://kb.synology.com/en-global/DSM/tutorial/How_to_login_to_DSM_with_root_permission_via_SSH_Telnet)
 - [Create a persistent TUN](#create-a-persistent-tun)
 - [Install Docker](#install-docker-on-your-nas)
 - [Set up container](#set-up-container)

## Create a persistent TUN

SSH into your NAS

```sh
ssh user@local-ip
```

The following setup steps must be run as root

```sh
sudo -i
```

Write script to `/usr/local/etc/rc.d/tun.sh` that will setup `/dev/net/tun` on startup

```sh
echo -e '#!/bin/sh -e \ninsmod /lib/modules/tun.ko' > /usr/local/etc/rc.d/tun.sh
```

Set executable permissions on script

```sh
chmod a+x /usr/local/etc/rc.d/tun.sh
```

Run script once to create a TUN

```sh
/usr/local/etc/rc.d/tun.sh
```

Check for the TUN

```sh
ls /dev/net/tun
/dev/net/tun
```

*If you experience trouble getting the TUN to work check out [Rui Marinho's guide](https://memoryleak.dev/post/fix-tun-tap-not-available-on-a-synology-nas/)*

## Install [docker](https://www.synology.com/en-us/dsm/packages/Docker) on your NAS

`Package Center -> Search "Docker" -> Install`

## Set up container

Make directory to store ZeroTier's identity and config

```sh
mkdir /var/lib/zerotier-one
```

:::caution

In the next step we bind mount to the host's `/var/lib/zerotier-one` created above in order to store ZeroTier's identity. This is not guaranteed to survive DSM updates. I would suggest placing this on an automatically-mounted volume where your other private user data resides. The location you choose to store your identities should be kept secure and never placed on a shared volume that others can access.

:::

Make Docker container called `zt` (Repo: [zerotier/zerotier-synology](https://github.com/zerotier/zerotier-synology))

```sh
docker run -d           \
  --name zt             \
  --restart=always      \
  --device=/dev/net/tun \
  --net=host            \
  --cap-add=NET_ADMIN   \
  --cap-add=SYS_ADMIN   \
  -v /var/lib/zerotier-one:/var/lib/zerotier-one zerotier/zerotier-synology:latest
```

## Usage

Previous versions of our package contained a GUI, however this is *no longer the case* and it is for the better. The CLI can be used as follows:

View node status

```sh
docker exec -it zt zerotier-cli status
```

Join your network

```sh
docker exec -it zt zerotier-cli join e5cd7a9e1cae134f
```

Authorize the NAS on your [network](https://my.zerotier.com). Then view the network status:

```sh
docker exec -it zt zerotier-cli listnetworks
```

Show running container (optional)

```sh
docker ps
```

Enter the container (optional)

```sh
docker exec -it zt bash
```

