---
title: Running ZeroTier in a Docker Container
---

Simple example using an interactive shell.

ZeroTier One makes ZeroTier virtual networks available as 'tap' virtual network ports. To do this inside a Docker container requires a few elevated permissions and access to the `/dev/net/tun` device.

Fortunately this is easy:

```sh
docker run -it --rm \
--cap-add=NET_ADMIN \
--cap-add=SYS_ADMIN \
--device=/dev/net/tun centos:7 [... command ...]
```

Where `[... command ...]` is an optional command, in the example below we'll provide `/bin/bash` to get an interactive shell.

:::info
`SYS_ADMIN` is needed because `NET_ADMIN` does not include the `ioctl()` required to put `/dev/net/tun` in tap mode. This appears to be a bug in Linux's capability model but it would have to be fixed upstream.
:::

Here's a transcript of an example session where we start a command prompt in a test container, install ZeroTier, start it (must be done manually here because the container does not run init or systemd), join a test network, and ping something.

Starting a container with an interactive shell:

```sh
docker run -it --rm \
--cap-add=NET_ADMIN \
--cap-add=SYS_ADMIN \
--device=/dev/net/tun centos:7 /bin/bash
```

Then, while inside the container we install ZeroTier:

```sh
[root@5b88595860bc /]# curl https://install.zerotier.com/ | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 12243  100 12243    0     0  18523      0 --:--:-- --:--:-- --:--:-- 18550

*** ZeroTier One Quick Install for Unix-like Systems

*** Supported targets for this script:
***    MacOS (10.7+) on x86_64 (just installs ZeroTier One.pkg)
***    Linux / Debian (wheezy or newer) on i386, x86_64, and armhf (Raspbian/jessie only)
***    Linux / Ubuntu (trusty or newer) on i386 and x86_64
***    Linux / SuSE (12+) on i386 and x86_64
***    Linux / CentOS (6+) on i386 and x86_64
***    Linux / Fedora (22+) on i386 and x86_64
***    Linux / Amazon (2016.03+) on x86_64

*** Please report problems to contact@zerotier.com and we will try to fix ASAP!

*** Detecting Linux Distribution

*** Found RHEL/CentOS, creating /etc/yum.repos.d/zerotier.repo

*** Installing zerotier-one package...
[ ... snipped a bunch of yum install output ...]

*** Enabling and starting zerotier-one service...
Created symlink from /etc/systemd/system/multi-user.target.wants/zerotier-one.service to /usr/lib/systemd/system/zerotier-one.service.
Failed to get D-Bus connection: Operation not permitted

*** Package installed but cannot start service! You may be in a Docker
*** container or using a non-standard init service.
```

Start ZeroTier and join a network:

```sh
[root@5b88595860bc /]# /usr/sbin/zerotier-one -d
[root@5b88595860bc /]# /usr/sbin/zerotier-cli join 8056c2e21c000001
200 join OK
[root@5b88595860bc /]# /usr/sbin/zerotier-cli listnetworks
200 listnetworks
200 listnetworks 8056c2e21c000001 - 02:e6:10:ab:69:33 REQUESTING_CONFIGURATION PRIVATE zt0 -
[root@5b88595860bc /]# /usr/sbin/zerotier-cli listnetworks
200 listnetworks
200 listnetworks 8056c2e21c000001 earth.zerotier.net 02:e6:10:ab:69:33 OK PUBLIC zt0 fd80:56c2:e21c:0000:0199:93e6:10b7:8bf1/88,28.183.140.10/7
```

Try pinging something:

```sh
[root@5b88595860bc /]# ping <some_other_zerotier_nodes_ip>
```

Exit

```sh
[root@5b88595860bc /]# exit
```
