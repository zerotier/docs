---
title: ZeroTierOne Service API
description: >
  Overview of the ZeroTierOne Service API
tags: [development, hub, api, service, controller]
---

The ZeroTierOne service provides an API which is used by the [ZeroTierOne CLI](/cli) and other clients to manage settings on your local instance of ZeroTier. This administration API is restricted to `localhost` by default, and requires authentication using an [API token](/tokens#zerotierone-service-token).

Once you have your local token, you can access [local node, network, and peer information](/api/service/v1/), as well as configuring a [standalone controller](/controller).
