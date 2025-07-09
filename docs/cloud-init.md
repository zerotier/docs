---
title: cloud-init
description: Easily start ZeroTier in your cloud instances
tags: [tutorial, developer]
category: Guide
---

## Set up ZeroTier using `cloud-init`

### What is `cloud-init`? {#whatisit}

cloud-init is a convenient and cross-platform way to initialize cloud instances. It is supported by all major cloud providers. You can use it to configure OS settings, install packages, or even start up specific instances of ZeroTier.

### How do you use it? {#how-do-you-use-it}

Typically a cloud-init file can be uploaded to a cloud provider or added as an additional payload via an API.

### Example {#example}

```yaml
#cloud-config

hostname: "devbox"
users:
  - name: wrankles

shell: /bin/bash

disable_root: 1
ssh_pwauth:   0
packages:
  - htop
  - tcpdump

runcmd:
  - apt-get update
  #- mkdir -p /var/lib/zerotier-one
  #- echo "1234567890:0:..." > /var/lib/zerotier-one/identity.secret
  #- echo "1234567890:0:..." > /var/lib/zerotier-one/identity.public
  - curl -s https://install.zerotier.com | bash
  - zerotier-cli join cfb8bf9836c2fc3a
  - systemctl restart ssh
```

### Pre-populate ZeroTier identities (optional) {#prepopulate-zt}

Uncomment the `runcmd` lines starting with `mkdir` and `echo` if you want to write known ZeroTier identities to disk before startup. This is useful if you've already authorized or scripted around a specific node ID and want it to start up the same each time.

:::caution
If you place your ZeroTier node's secret key in your cloud init file it is possible for someone to impersonate your node if they get ahold of this cloud-init file.
:::

### Password-less SSH (optional) {#passwordless}

It's usually recommended that you disable the `root` account and disable password-based ssh authentication and rely solely on key-based authentication. [Digital Ocean has some really great documentation on the subject](https://www.digitalocean.com/community/tutorials/how-to-use-cloud-config-for-your-initial-server-setup).

To make getting into your cloud instance as easy as possible you can add entries to `authorized_keys`:

```yaml
ssh-authorized-keys:
    - ssh-rsa AAAAB38fwi3756q238if75dh6awd476r3bg78f56ghfaa7fdh63qf5dq378f5632gha3875j3f498da7hfhjkfawejtfsktfr89ew4jftsjrf8t9rhg7tjser8tsre7yjgvased89rfdcsh67rewhg8tq7tsge546w4
```

To make getting into other instances *from this instance* easier, you can add a pre-generated private key to `ssh_keys`:

```yaml
ssh_deletekeys: false
ssh_keys:
    ed25519_private: |
        -----BEGIN OPENSSH PRIVATE KEY-----
        $#HYBES$Y%GW$Gfs9g8ES$Y%GW$Gfs9g867ZDI1NTE5AAAAIHQbjzWgsNOt/8gH+QI/Eob
        fs9g867q34tqGT$#HYBES$mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+867q34tqGT
        fs9g867q34ZDI1NTE5AAAAIHQbjzWgsNOt/8gH+QI/Eob6BES$Y%$#HYBES$Y%GW$Gfs9g
        fs9g867q34tqGT$#HYBES$YZDI1NTE5AAAAIHQbjzWgsNOt/8gH+QI/Eob6Z/8ZXbHHdGx
        fs9g867mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3s9g867q4g
        -----END OPENSSH PRIVATE KEY-----

    ed25519_public: ssh-ed25519 AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpqxiX1nKhXpHAZsMciLq8V6RjsHDTYW7hdI4 devbox
```

[Read more about SSH keys here](https://wiki.archlinux.org/title/SSH_keys)
