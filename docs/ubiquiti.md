---
title: Ubiquiti
description: How to install ZeroTier on your Ubiquiti router
tags: [ubiquiti, router, installation]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Create directory to persist across firmware upgrades

```sh
mkdir -p /config/data/firstboot/install-packages/
```

### Download

<Tabs
  defaultValue="mips64"
  groupId="install-instructions"
  values={[
    { label: "MIPS64", value: "mips64", },
    { label: "ARM64", value: "arm64" },
    { label: "ARM32", value: "arm32" },
  ]}>

<TabItem value="mips64">

```sh title="ER-4, ER-6P, ER-12, ER-12P, ERLite-3, ERPoe-5, ER-8, ERPro-8, EP-R8, USG, USG-Pro, USG-XG-8"

curl https://download.zerotier.com/dist/ubiquiti/zerotier-one_mips64.deb \
--output /config/data/firstboot/install-packages/zerotier-one.deb

```

</TabItem>

<TabItem value="arm64">

```sh title="UniFi Dream Machine (all variants), UDM, UDM-Pro-SE, UXG-Pro, Cloud Key Gen2, UDR"

curl https://download.zerotier.com/dist/ubiquiti/zerotier-one_arm64.deb \
--output /config/data/firstboot/install-packages/zerotier-one.deb

```

</TabItem>

<TabItem value="arm32">

```sh title="EP-S16"

curl https://download.zerotier.com/dist/ubiquiti/zerotier-one_armhf.deb \
--output /config/data/firstboot/install-packages/zerotier-one.deb

```

</TabItem>

</Tabs>

*Note: The package must be placed and kept in `/config/data/firstboot/install-packages/` so that your device can automatically re-install ZeroTier upon firmware upgrade.*

### Install

```sh
sudo dpkg -i /config/data/firstboot/install-packages/zerotier-one.deb
```

### Starting and stopping

*Note: the service will start automatically on system boot.*

```sh
sudo systemctl status|start|stop zerotier-one.service
```

### Uninstall

```sh
sudo dpkg -r zerotier-one
sudo rm -rf /config/data/firstboot/install-packages/zerotier-one.deb
sudo rm -rf /config/zerotier-one
```

:::tip
Please report bugs or compatibility issues [here](https://github.com/zerotier/ZeroTierOne/issues).

More information about routing between physical and virtual ZeroTier networks can be found [here](https://zerotier.atlassian.net/wiki/spaces/SD/pages/224395274/Route+between+ZeroTier+and+Physical+Networks)
:::

:::info Next steps
Click [here](/start/) to create your network and start adding devices.
:::
