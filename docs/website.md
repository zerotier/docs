---
title: Host a Website with ZeroTier
description: Serve a local website to anyone on your ZeroTier network.
tags: [beginner, tutorial]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ZeroTier enables private networking between devices, allowing you to host a website locally and serve it securely to peers on the same ZeroTier network.

## Prerequisites

- A working ZeroTier network with 2 or more devices, per the [ZeroTier Quickstart Guide](/quickstart)

## Step 1: Run a Local Web Server

Choose your platform and follow the steps to start a simple web server:

<Tabs
  defaultValue="win"
  groupId="hostwebsite"
  values={[
    { label: "Windows", value: "win" },
    { label: "MacOS", value: "mac" },
    { label: "Linux", value: "linux" }
  ]}>

<TabItem value="win">

:::note Python
[This step requires Python](https://www.python.org/downloads/).
:::

Open PowerShell in your website folder and start the built-in server (Python required):

```powershell
python -m http.server 8080
```

Ensure Windows Firewall allows inbound traffic on port `8080`. To check, you can use Powershell in administrator mode:

```powershell
netstat -a -n -o | findstr :8080
```

If you see an address `LISTENIING`, a service is bound to it.

</TabItem>

<TabItem value="mac">

Open Terminal in your site directory and run:

```bash
python3 -m http.server 8080
```

If prompted, allow the connection through the firewall.

</TabItem>

<TabItem value="linux">

Open a terminal in your website folder. Then, use Python or any other HTTP server (e.g., NGINX, Apache):

```bash
python3 -m http.server 8080
```

Ensure `ufw` or your firewall allows port `8080`:

```bash
sudo ufw allow 8080
```

</TabItem>
</Tabs>

## Step 2: Access the Website

On another device in your ZeroTier network:

- Open a browser.
- Navigate to:  
  `http://<ZeroTier IP of host>:8080`

## Next Steps

By default, Python searches for a file `index.html` in the directory you are running the website from to act as a homepage. To customize your site, create and modify this file. Find out more about [Python HTTP Servers](https://docs.python.org/3/library/http.server.html).

Other options for self-hosted HTTP sites include:

- [Apache HTTP](https://httpd.apache.org/) (`sudo apt install apache2`)
- [Nginx](https://nginx.org/en/docs/beginners_guide.html) (`sudo apt install nginx`)
- Node.js-based servers

Just configure them to listen on your ZeroTier IP or all interfaces (`0.0.0.0`).
