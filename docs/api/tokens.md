---
title: ZeroTier  API Tokens
description: "Creating, managing, and using Central API tokens"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Using ZeroTier API Tokens

Access to the ZeroTier APIs requires an authentication token. This guide describes the methods and tools needed to create and manage these tokens.

### ZeroTier Central Token

To use the Central API, you need a token associated with your account. To create one, log into [my.zerotier.com](https://my.zerotier.com) and create a named token in the [Account](https://my.zerotier.com/account) tab. Pick a memorable name that shows the intended use of the token: for example, "Terraform automation token" or "internal dev key".

![token screenshot](https://i.imgur.com/WYM2jKl.png)

Each token you create is associated with your user account, so it will allow the same level of access to manage and query networks that you have when working in the Central UI.

:::caution
The token is displayed only once at the time you create it, so you should save it somewhere safe before clicking 'Done'.
:::

### ZeroTierOne Service Token

The local service API token is store in the `authtoken.secret` file in the ZeroTier service state directory. You'll need it to make API calls to the local service.

:::note
ZeroTier generates the token at random the first time it starts. If you delete the file and restart the ZeroTierOne service a new token will be created, and the existing token will no longer be usable to access the API.
:::

You can store the current auth token value in an environment variable for use in scripting and local development using the following terminal commands:

<Tabs
    groupId="operating-systems"
    defaultValue="linux"
    values={[
    {label: 'Linux', value: 'linux'},
    {label: 'macOS', value: 'macos'},
    {label: 'Windows', value: 'windows'},
]}>
<TabItem value="linux">

```sh
TOKEN=$(sudo cat /var/lib/zerotier-one/authtoken.secret)
```

</TabItem>
<TabItem value="macos">

```sh
TOKEN=$(sudo cat "/Library/Application Support/ZeroTier/One/authtoken.secret")
```

</TabItem>
<TabItem value="windows">

```powershell
$env.TOKEN = Get-Content C:\ProgramData\ZeroTier\One\authtoken.secret
```

</TabItem>
</Tabs>

See our [sample code](service/examples) for examples of how to use this token for local administration tasks.
