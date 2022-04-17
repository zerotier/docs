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

:::tip DSM 6

Synology's DSM 6 will enter EOL status sometime in 2023. ZeroTier will support the latest patched versions of DSM 6.2 until that point. If you are on DSM 6 you can skip all of the below steps and simply: [Download DSM 6 packages](http://download.zerotier.com/dist/synology/). Please note that the latest packages will *delete* your existing identities upon install. Back up these identities if you wish to preserve them.

:::

:::note DSM 7

Synology's DSM 7 doesn't allow third-party applications to run as root. Therefore, we now recommend using Docker to run ZeroTier. While this is somewhat inconvenient at first it is undeniably a safer way to run third-party applications on your NAS. Once set up this configuration will be persistent across reboots and DSM upgrades.

The GUI for the Synology Docker package is unreliable at best so it is suggested that all operations performed on your container be done through the Docker CLI. If you choose to use the GUI you do so at your own peril. If you have any issues or questions come join us over at [discuss.zerotier.com](https://discuss.zerotier.com) and we'll try to help out.

If your NAS does not support Docker or if you wish to [downgrade to DSM 6](https://www.blackvoid.club/dsm-7-to-dsm-6-downgrade/
) you can still use the [older DSM 6 packages](http://download.zerotier.com/dist/synology/) or follow our [bridging tutorial](https://zerotier.atlassian.net/wiki/spaces/SD/pages/193134593/Bridge+your+ZeroTier+and+local+network+with+a+RaspberryPi).

:::

To install via Docker there are four steps that need to be performed only once:

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

## Upgrading ZeroTier

To upgrade ZeroTier you'll need to stop and remove the container, then pull latest and start a new container:

```
docker ps
```

Example output:

```
CONTAINER ID   IMAGE                               COMMAND          CREATED       STATUS      PORTS     NAMES
52c7cb58a1dd   zerotier/zerotier-synology:latest   "zerotier-one"   5 weeks ago   Up 9 days             zt
```

Stop the container

```
docker stop 52c7cb58a1dd
```

Remove the container

```
docker container rm 52c7cb58a1dd
```

Pull latest updates

```
docker pull zerotier/zerotier-synology:latest
```

Now, re-run the commands from the [Set up container](#set-up-container) section.

