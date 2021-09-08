---
title: Ubiquiti

includes:
  - errors

search: true

code_clipboard: true
custom_edit_url: null
---

Ubiquiti
=====

 - [Download latest package](https://download.zerotier.com/RELEASES/1.4.6/dist/ubiquiti)
 
 - Copy package to: `/config/data/firstboot/install-packages/`

 - Install:

```
sudo dpkg -i /config/data/firstboot/install-packages/zerotier-one_1.4.6_ubiquiti_mips.deb
```

:::note

This package was tested on an `EdgeRouter 4` but it should work on other Ubiquiti offerings such as their `UniFi Security Gateway`. Please report bugs or compatibility issues [here](https://github.com/zerotier/ZeroTierOne/issues). Your router's ZeroTier identities and configuration will be stored in `/config/zerotier-one` which persists across firmware upgrades. However, when you upgrade firmware the ZeroTier package will be automatically reinstalled and started from `/config/data/firstboot/install-packages/`

:::

:::tip

More information about routing between physical and virtual ZeroTier networks can be found [here](https://zerotier.atlassian.net/wiki/spaces/SD/pages/224395274/Route+between+ZeroTier+and+Physical+Networks)

:::