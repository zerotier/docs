---
title: Video Streaming with OBS
description: Use OBS to broadcast your screen over SMTP using a ZeroTier virtual network.
tags: [how-to, streaming, beginner]
---

OBS (Open Broadcaster Software) isn’t just for live streaming or recording — it can also be used to broadcast your screen locally. When paired with ZeroTier, this becomes a powerful screen-sharing tool across secure networks at any distance. This is ideal to relay live footage, such as security cameras, across multiple networks, or for businesses to control live feeds or billboards securely from any distance.

## Prerequisites

This guide assumes that you have:

- A ZeroTier network with 2 or more devices, per the [ZeroTier Quickstart Guide](/quickstart)
- [Open Broadcasting Studio](https://obsproject.com/) and a scene to stream on your streaming device
- [NGINX](https://nginx.org/) downloaded or another RTMP service like [MistServer](https://mistserver.org/download)

## 1: Configure NGINX/RTMP

:::note
This step can be done on any device, and will 'relay' your stream to be accessible anywhere on your ZeroTier network.

This step is optional if you have already configured an open RTMP server.
:::

After installing NGINX, and extracting it to an appropriate folder (Windows), navigate to `/<nginx directory>/conf` and open `nginx.conf`. If it is not there, create it.

Here is one example of a `nginx.conf` configured for network streaming on port `1935`.

```bash
worker_processes 1;
events { worker_connections 1024; }

rtmp {
    server {
        listen 1935;
        chunk_size 4096;

        application live {
            live on;
            record off;
        }
    }
}
```

After you have configured your `nginx.conf`, start `nginx` through an executable (Windows) or restart it in the CLI (Linux). Find more information in [NGINX's documentation](https://nginx.org/en/docs/) to configure your server to your specific use-case.

## 2: Set Up OBS for Local Streaming

Open OBS and go to **Settings -> Stream**. Change the service to **Custom** and for **Server**, enter:

```bash
rtmp://<your-ZeroTier-IP>:1935/live
```

Remember, you can find your ZeroTier IP from the Central WebUI or `zerotier-cli listnetworks` in your terminal.

Choose a **Stream Key** - this will be part of the address used by the viewer to connect to your stream, so we recommend making it short and significant.

## 3: Start the Stream and Watch

### On the Host

Click **Start Streaming** in OBS.

If this fails, it's likely that your NGINX server is not configured or running properly. Make sure both devices can reach eachother on their ZeroTier network, and that the IP entered in OBS settings is correct.

### On the Viewer

Open a media player like [VLC Media Player](https://www.videolan.org/vlc/) with network streaming capabilities. With VLC, go to **Media -> Open Network Stream** and enter:

```bash
rtmp://<host-ZeroTier-IP>:1935/live/myscreen
```

Press play. You should now see the host's screen in real time - or at least with OBS's configured delay!
