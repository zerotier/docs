---
title: Central API Examples
description: "Code snippets and usage examples for the ZeroTier Central API"
tags: [development, api, central, examples, tutorial]
category: Development
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In the examples below use the following placeholder variables to match commonly-needed parameters:

- `$ZT_TOKEN`: an API token associated with an active account on [Central](https://my.zerotier.com)
- `$NWID`: an active network ID

Please note, if you encounter an error, System.String and System.Collections.IDictionary when using curl within Powershell, be advised this is because of an _alias_ which can leads to a less than obvious error message. `curl` in PowerShell is a wrapper for `Invoke-WebRequest` which has different parameter syntax than `curl` on non-windows operating systems.   As an alternative solution to using `Invoke-WebRequest`, `curl.exe` could be used.  This however may not be available on your system without first installing.   The _native_ approach is to use `Invoke-WebRequest`.  Caveat emptor.

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

### List current networks ( shell curl )

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

### List current networks ( Powershell Invoke-WebRequest )

```code
$ZT_TOKEN = "your_zerotier_token_here"

$headers = @{
    "Authorization" = "token $ZT_TOKEN"
}

$response = Invoke-WebRequest -Uri "https://api.zerotier.com/api/v1/network" -Headers $headers

$networks = $response.Content | ConvertFrom-Json

$result = $networks | ForEach-Object {
    [PSCustomObject]@{
        id = $_.id
        name = $_.config.name
        description = $_.config.description
        totalMemberCount = $_.totalMemberCount
        creationTime = $_.config.creationTime
        ipRangeStart = $_.config.ipAssignmentPools[0].ipRangeStart
        ipRangeEnd = $_.config.ipAssignmentPools[0].ipRangeEnd
    }
} | ConvertTo-Csv -NoTypeInformation

$result | ForEach-Object { $_ -replace '"', '' }
```

</TabItem>

<TabItem value="list-members">

### List network members ( shell curl )

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

### List network members ( Powershell Invoke-WebRequest )

```code
$ZT_TOKEN = "your_zerotier_token_here"
$NWID = "your_network_id_here"

$headers = @{
    "Authorization" = "token $ZT_TOKEN"
}

$response = Invoke-WebRequest -Uri "https://api.zerotier.com/api/v1/network/$NWID/member" -Headers $headers

$members = $response.Content | ConvertFrom-Json

$result = $members | ForEach-Object {
    [PSCustomObject]@{
        id = $_.id
        lastSeen = $_.lastSeen
        physicalAddress = $_.physicalAddress
        ipAssignment = $_.ipAssignments[0]
        name = $_.name
    }
} | ConvertTo-Csv -NoTypeInformation

$result | ForEach-Object { $_ -replace '"', '' } 
```

If you want to save the output to a file, you can add `| Out-File -FilePath "output.csv"` at the end of the script.

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

### Authorize a network member ( shell curl )

```sh
curl -H "Authorization: token $ZT_TOKEN" -X POST \
  "https://api.zerotier.com/api/v1/network/$NWID/member/$MEMBER_ID" \
  --data '{"config": {"authorized": true}}'
```

### Authorize a network member ( Powershell Invoke-WebRequest )

```code
$ZT_TOKEN = "your_zerotier_token_here"
$NWID = "your_network_id_here"
$MEMBER_ID = "your_member_id_here"

$headers = @{
    "Authorization" = "token $ZT_TOKEN"
}

$body = @{
    config = @{
        authorized = $true
    }
} | ConvertTo-Json

Invoke-WebRequest -Uri "https://api.zerotier.com/api/v1/network/$NWID/member/$MEMBER_ID" `
    -Method Post -Headers $headers -Body $body -ContentType "application/json"
```

</TabItem>

<TabItem value="deauthorize-member">

### Deauthorize a network member ( shell curl )

```sh
curl -H "Authorization: token $ZT_TOKEN" -X POST \
  "https://api.zerotier.com/api/v1/network/$NWID/member/$MEMBER_ID" \
  --data '{"config": {"authorized": false}}'
```

### Deauthorize a network member ( Powershell Invoke-WebRequest )

```code
$ZT_TOKEN = "your_zerotier_token_here"
$NWID = "your_network_id_here"
$MEMBER_ID = "your_member_id_here"

$headers = @{
    "Authorization" = "token $ZT_TOKEN"
}

$body = @{
    config = @{
        authorized = $false
    }
} | ConvertTo-Json

Invoke-WebRequest -Uri "https://api.zerotier.com/api/v1/network/$NWID/member/$MEMBER_ID" `
    -Method Post -Headers $headers -Body $body -ContentType "application/json"
```

</TabItem>

</Tabs>
