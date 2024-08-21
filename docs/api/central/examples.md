---
title: Central API Examples
description: "Code snippets and usage examples for the ZeroTier Central API"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In the examples below use the following placeholder variables to match commonly-needed parameters:

- `$ZT_TOKEN`: an API token associated with an active account on [Central](https://my.zerotier.com)
- `$NWID`: an active network ID

:::info
See the [Central API Tokens](/api/tokens) guide for an explanation of how to create and manage API tokens.
:::

## Exporting Data from the Central API

The examples below are intended to run in a system terminal, and require the following command-line tools:

- [curl](https://curl.so)
- [jq](https://jqlang.github.io/jq/)

Each of them will fetch network information and produce CSV as output. You can then import that CSV into your choice of database, spreadsheet, or configuration-management tool(s).

<Tabs
  groupId="central-api-tasks"
  defaultValue="list-networks"
  values={[
    {label: 'Networks', value: 'list-networks'},
    {label: 'Network Members', value: 'list-members'}
  ]}>

<TabItem value="list-networks">

### List current networks

```sh
curl -s -H "Authorization: token $ZT_TOKEN" \
  "https://api.zerotier.com/api/v1/network" \
  | jq '.[] | [
    .id,
    .config.name,
    .config.description,
    .totalMemberCount,
    .config.creationTime,
    .config.ipAssignmentPools[0].ipRangeStart,
    .config.ipAssignmentPools[0].ipRangeEnd
  ]' \
  | jq -rs '.[] | @csv'
```

</TabItem>

<TabItem value="list-members">

### List network members

```sh
curl -H "Authorization: token $ZT_TOKEN" \
  "https://api.zerotier.com/api/v1/network/$NWID/member" \
  | jq '.[] | [
    .id,
    .lastSeen,
    .physicalAddress,
    .ipAssignments[0],
    .name
  ]' \
  | jq -rs '.[] | @csv
```

</TabItem>

</Tabs>

## Authorize and Deauthorize Network Members

<Tabs
  groupId="central-api-tasks-auth"
  defaultValue="authorize-member"
  values={[
    {label: 'Authorize Member', value: 'authorize-member'},
    {label: 'Deauthorize Member', value: 'deauthorize-member'}
  ]}>

<TabItem value="authorize-member">

### Authorize a network member

```sh
curl -H "Authorization: token $ZT_TOKEN" -X POST \
  "https://api.zerotier.com/api/v1/network/$NWID/member/$MEMBER_ID" \
  --data '{"config": {"authorized": true}}'
```

</TabItem>

<TabItem value="deauthorize-member">

### Deauthorize a network member

```sh
curl -H "Authorization: token $ZT_TOKEN" -X POST \
  "https://api.zerotier.com/api/v1/network/$NWID/member/$MEMBER_ID" \
  --data '{"config": {"authorized": false}}'
```

</TabItem>

</Tabs>
