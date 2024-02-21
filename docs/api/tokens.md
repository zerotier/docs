---
title: ZeroTier  API Tokens
description: "Creating, managing, and using Central API tokens"
---

# Using ZeroTier API Tokens

## Provision an API Token from ZeroTier Central

To use the Central API, you need an API token associated with your account. To create one, log into [my.zerotier.com](https://my.zerotier.com) and create a named token in the [Account](https://my.zerotier.com/account) tab. Pick a memorable name that shows the intended use of the token: for example, "Terraform automation token" or "internal dev key".

![token screenshot](https://i.imgur.com/WYM2jKl.png)

Each token you create is associated with your user account, so it will allow the same level of access to manage and query networks that you have when working in the Central UI.

:::caution
The token is displayed only once at the time you create it, so you should save it somewhere safe before clicking 'Done'.
:::

## Access API Tokens for the ZeroTierOne service

If you want to configure your local ZeroTierOne agent or run a [self-hosted controller](/controller), you can get the token value directly from one of the following paths:

...
