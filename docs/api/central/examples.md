---
title: Central API Examples
description: "Code snippets and usage examples for the ZeroTier Central API"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In the examples below use the following placeholder variables to match commonly-needed parameters:

- `$ZT_TOKEN`: an API token associated with an active account on [Central](https://my.zerotier.com)
- `$NWID`: an active network ID

Please note, if you encounter an error, System.String and System.Collections.IDictionary when using curl within Powershell, be advised this is because of an _alias_ which lead to a less than obvious error message. `curl` in PowerShell is a wrapper for `Invoke-WebRequest` which has different parameter syntax than `curl` on non-windows operating systems.   As an alternative solution to using `Invoke-WebRequest`, use `curl.exe`.  This however may not be available on your system without first installing.   The _native_ approach on Microsoft Windows is to use `Invoke-WebRequest`.  Caveat emptor.

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
    {label: 'Network Members', value: 'list-members'},
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
    {label: 'Deauthorize Member', value: 'deauthorize-member'},
    {label: 'Clean up a node', value: 'clean-up-a-node'}
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

In addition to notifying Central with this API call, and in order to not require waiting until the current credentials expire, the ZeroTierOne service needs to be stopped and the authtoken.secret needs to be removed.   The API call in addition to the removal of the local secret file prevents incremental billing to increase unbounded in cases of repeat auth/deauth use cases.   Also note, the deauthorize is required per individual network within an organization the node is present.

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

<TabItem value="clean-up-a-node">

In addition to notifying Central with an API call, and in order to not require waiting until the current credentials expire, the ZeroTierOne service can to be stopped, authtoken.secret removed, and service restarted.   For example, on a device which is shared and requires each user to provide separate SSO credentials to access the network.  
This also prevents unbounded incremental billing in repeat auth/deauth use cases.   

NB: the deauthorize is required per individual network within an organization the node is present.

### logout immediately ( Python )

Here be dragons.

Below are additional steps which will cause a node to immediately no longer be on a network.  This is _only_ required when calling the Central API and waiting to let the change propagate to all nodes is not fast enough.   This is only required when network access needs to be halted immediately.

For more information, see Troubleshooting [reset-node-id](/troubleshooting#reset-node-id).

```code
import os
import requests
import subprocess
import time
import sys

def cleanup_zerotier_node(api_token, node_id, network_ids):
    """
    Comprehensive cleanup of a ZeroTier node:
    1. Deauthorize from each network
    2. Stop ZeroTier service
    3. Remove auth token
    4. Restart ZeroTier service
    """
    # Base URL for ZeroTier Central API
    base_url = "https://api.zerotier.com/api/v1"
    headers = {
        "Authorization": f"Bearer {api_token}"
    }

    # 1. Deauthorize from each network
    for network_id in network_ids:
        url = f"{base_url}/network/{network_id}/member/{node_id}"
        try:
            requests.delete(url, headers=headers)
            print(f"Deauthorized from network {network_id}")
        except Exception as e:
            print(f"Error deauthorizing from network {network_id}: {e}")

    # 2. Stop ZeroTier service
    try:
        if os.name == 'nt':  # Windows
            subprocess.run(['net', 'stop', 'ZeroTierOne'], check=True)
        else:  # Linux/MacOS
            subprocess.run(['sudo', 'systemctl', 'stop', 'zerotier-one'], check=True)
        print("ZeroTier service stopped")
    except Exception as e:
        print(f"Error stopping ZeroTier service: {e}")

    # 3. Remove authtoken.secret
    try:
        if os.name == 'nt':
            token_path = r'C:\ProgramData\ZeroTier\One\identity.secret'
        else:
            token_path = '/var/lib/zerotier-one/identity.secret'
        
        if os.path.exists(token_path):
            os.remove(token_path)
            print("Removed authtoken.secret")
    except Exception as e:
        print(f"Error removing authtoken.secret: {e}")

    # 4. Restart ZeroTier service
    try:
        time.sleep(2)  # Brief pause before restart
        if os.name == 'nt':  # Windows
            subprocess.run(['net', 'start', 'ZeroTierOne'], check=True)
        else:  # Linux/MacOS
            subprocess.run(['sudo', 'systemctl', 'start', 'zerotier-one'], check=True)
        print("ZeroTier service restarted")
    except Exception as e:
        print(f"Error restarting ZeroTier service: {e}")

# Example usage
if __name__ == "__main__":
    # Read required environment variables
    API_TOKEN = os.getenv('ZEROTIER_API_TOKEN')
    NODE_ID = os.getenv('ZEROTIER_NODE_ID')
    
    # Validate environment variables
    if not API_TOKEN:
        print("Error: ZEROTIER_API_TOKEN environment variable is not set")
        sys.exit(1)
    if not NODE_ID:
        print("Error: ZEROTIER_NODE_ID environment variable is not set")
        sys.exit(1)

    # Network IDs can be passed as command line arguments
    NETWORK_IDS = sys.argv[1:] if len(sys.argv) > 1 else []
    if not NETWORK_IDS:
        print("Warning: No network IDs provided. Please provide network IDs as command line arguments.")
        sys.exit(1)
    
    cleanup_zerotier_node(API_TOKEN, NODE_ID, NETWORK_IDS) 
```

</TabItem>

</Tabs>
