---
title: Service API Examples
description: >
  Code snippets and usage examples for the ZeroTier Service API
---

In the examples below use the following placeholder variables to match commonly-needed parameters:

- `$ZT_TOKEN`: an API token associated with an active account on [Central](https://my.zerotier.com)

:::info
See the [API Tokens](/api/tokens) guide for an explanation of how to create and manage API tokens.
:::

# Accessing the Local Service API

The examples below are intended to run in a system terminal, and require the following command-line tools:

- [curl](https://curl.so)
- [jq](https://jqlang.github.io/jq/)

Each of them will fetch network information and produce CSV as output. You can then import that CSV into your choice of database, spreadsheet, or configuration-management tool(s).

## List current networks

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

## List network members

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

:::info

See the <a href="/controller">standalone controller guide</a> for a more advanced example of service API integration.

:::
