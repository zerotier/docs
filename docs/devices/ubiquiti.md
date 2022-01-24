---
title: Ubiquiti

includes:
  - errors

search: true

code_clipboard: true
custom_edit_url: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ubiquiti
=====

## Download

Currently only the `EdgeRouter` line has been tested. Most devices have either a MIP64 or MIPS32 processor. The package below *should* work for both. Please report bugs or compatibility issues [here](https://github.com/zerotier/ZeroTierOne/issues).

```sh

curl https://download.zerotier.com/RELEASES/1.8.4/dist/ubiquiti/zerotier-one_1.8.4_mips.deb \
--output /config/data/firstboot/install-packages/zerotier-one.deb

```

*Note: The package must be placed and kept in `/config/data/firstboot/install-packages/` so that your device can automatically re-install ZeroTier upon firmware upgrade.*


## Install

```
sudo dpkg -i /config/data/firstboot/install-packages/zerotier-one.deb
```

## Starting and stopping

*Note: the service will start automatically on system boot.*

```sh
sudo systemctl status|start|stop zerotier-one.service
```

## Uninstall

```sh
sudo dpkg -r zerotier-one
sudo rm -rf /config/data/firstboot/install-packages/zerotier-one.deb
sudo rm -rf /config/zerotier-one
```

:::tip

More information about routing between physical and virtual ZeroTier networks can be found [here](https://zerotier.atlassian.net/wiki/spaces/SD/pages/224395274/Route+between+ZeroTier+and+Physical+Networks)

:::
