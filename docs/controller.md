---
title: Network Controller
description: Host your own network controllers
---

:::info
[Network Controller Reference Documentation](/what-is-a-controller.md)
:::

## Tutorial

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

First, skim the [README](https://github.com/zerotier/ZeroTierOne/tree/master/controller).

We're going to use `curl` to set up an example ZeroTier network. An easy way to get `curl` in Windows is to install [the latest version of Git](https://git-scm.com/downloads), which comes with bash, curl, and other tools.

:::info OpenAPI
The setup described here uses the local [ZeroTierOne service API](/api/service) to provision and manage networks. You can [browse](/api/service/v1/#tag/Controller) the OpenAPI docs for the local controller API for more detail on this interface.
:::

This is a low tech way to setup a controller for example purposes. You'd likely build yourself something fancier around this API.

### Authtoken

You'll need to find the current local auth token on your system using the instructions in the [API Tokens](/api/tokens#zerotierone-service-token) guide.

### Get your Node ID

:::note
Network IDs are based on the Node ID of the Controller. Controllers are nodes! When you join a network, your node finds the controller like it does with other nodes: by its Node ID.
:::

#### with zerotier-cli

(may need sudo)

```sh
zerotier-cli info
```

#### with curl

```sh
curl "http://localhost:9993/status" -H "X-ZT1-AUTH: ${TOKEN}"
```

It's the "Address" in the above's output.

Let's save the Node ID to an environment variable too:

```sh
NODEID=your-node-id
```

or try:

```sh
NODEID=$(zerotier-cli info | cut -d " " -f 3)
```

### Create a Network

```sh
curl -X POST "http://localhost:9993/controller/network/${NODEID}______" -H "X-ZT1-AUTH: ${TOKEN}" -d {}
```

This should return JSON for a fresh network.

:::note
When you post to `/network/${NODEID}______` the controller generates a random Network ID for you.
See the "id" of your newly created network.
:::

Let's save the new Network ID to an environment variable

```sh
NWID=your-network-id
```

### List Networks

```sh
curl "http://localhost:9993/controller/network" -H "X-ZT1-AUTH: ${TOKEN}"
```

This returns a list of Network IDs. It should include the ID returned by the create command we did in the previous step.

### Get Network Info

```sh
curl "http://localhost:9993/controller/network/${NWID}" -H "X-ZT1-AUTH: ${TOKEN}"
```

### List Network Members

You'll need another node to join your network first, or this will be empty.
You can use a phone, or another PC, or a VM, or a VPS...

```sh
curl "http://localhost:9993/controller/network/${NWID}/member" -H "X-ZT1-AUTH: ${TOKEN}"
```

I guess you could join the controller node to its own network, for demonstration purposes.

Save the Node ID of one of your Network _Members_ in an env var

```sh
MEMID=a-member's-node-id
```

### Get Member Info

```sh
curl "http://localhost:9993/controller/network/${NWID}/member/${MEMID}" -H "X-ZT1-AUTH: ${TOKEN}"
```

### Configure the Network

For Nodes to talk, we need to add a Managed Route and IP Auto-Assign Range on the network.
Let's make it a Private network too. Prefer Private networks.

```sh
curl -X POST "http://localhost:9993/controller/network/${NWID}" -H "X-ZT1-AUTH: ${TOKEN}" \
    -d '{"ipAssignmentPools": [{"ipRangeStart": "192.168.192.1", "ipRangeEnd": "192.168.192.254"}], "routes": [{"target": "192.168.192.0/24", "via": null}], "v4AssignMode": "zt", "private": true }'
```

### Authorize a member

```sh
curl -X POST "http://localhost:9993/controller/network/${NWID}/member/${MEMID}" -H "X-ZT1-AUTH: ${TOKEN}" -d '{"authorized": true}'
```

### Network Info Again

```sh
curl "http://localhost:9993/controller/network/${NWID}" -H "X-ZT1-AUTH: ${TOKEN}"
```

### Member Info Again

```sh
curl "http://localhost:9993/controller/network/${NWID}/member/${MEMID}" -H "X-ZT1-AUTH: ${TOKEN}"
```

### Confirm from your nodes

```sh
sudo zerotier-cli listnetworks
```

It should say "OK PRIVATE" and have an IP address.

### Deauthorize Member

```sh
curl -X POST "http://localhost:9993/controller/network/${NWID}/member/${MEMID}" -H "X-ZT1-AUTH: ${TOKEN}" -d '{"authorized": false}'
```

### Delete Member

```sh
curl -X DELETE "http://localhost:9993/controller/network/${NWID}/member/${MEMID}" -H "X-ZT1-AUTH: ${TOKEN}"
```

:::caution
You can "delete" a member, but they will show up in the output of "list member" again if the node is still online and trying to join. You should make sure to deauthorize before deleting.
:::

### Backup your controller

If you want to keep these networks, copy the ZeroTier Home directory somewhere.
Most importantly, the identity.secret and the controller.d directory.

### Clean up networks

You may want to delete these networks now that you're done testing.
You could use the API to delete every network.

Or you can delete the controller.d directory.

<Tabs
groupId="operating-systems"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'macOS', value: 'macos'},
]}>
<TabItem value="linux">

stop zerotier (If you're ssh'd in over zerotier, this will break your connection):

```sh
systemctl stop zerotier-one
```

delete controller configs:

```sh
cd /var/lib/zerotier-one/
# rm -rf ./controller.d/
```

start zerotier:

```sh
systemctl start zerotier-one
```

</TabItem>
<TabItem value="macos">

stop zerotier:

```sh
sudo launchctl unload /Library/LaunchDaemons/com.zerotier.one.plist
```

delete controller configs:

```sh
cd "/Library/Application Support/ZeroTier/One"
# sudo rm -rf ./controller.d
```

start zerotier:

```sh
sudo launchctl load /Library/LaunchDaemons/com.zerotier.one.plist
```

</TabItem>
</Tabs>
