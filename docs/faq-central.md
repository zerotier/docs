---
title: Central FAQ
description: Commonly asked questions about Central
---

### Can I move or transfer my network(s) to another user? {#transfer-network}

When you join an [Organization](./organizations.md), all of your networks are transferred to the Organization.

Other than that, there is no way to transfer individual networks between accounts.

#### To change your Organization Owner {#change-org-owner}

What you can do is change the email address of your account to a different address. From the account page, select "Manage Account" then "Personal Info".  From there you can change the email address. After changing, please log out and log back in.

Note: This email address must not already have a ZeroTier Central account.

Many users prefer to use something like "billing" or "admin" `@example.com` for their organization owner email account and then invite `alice@example.com` and `bob@example.com` as network admins.

:::tip
[See our main FAQ for more topics](./faq.md)
:::

## Can I make my subnet bigger?

Yes. Your network's existing members will keep their existing IPs.

1. Create a new, larger Managed Route.
1. Delete the old, smaller Managed Route.
1. Change IPv4 Auto-Assign from Easy to Advanced
1. Delete the existing range
1. Add the new, bigger range

For example, if your network was on the Easy Mode `192.168.195.*` (/24)

- Change the managed route to 192.168.194.0/**23**
- Change the auto assign range to:  192.168.194.1 to 192.168.**195**.254

If you change to a completely different, non-overlapping subnet, your network's members will get new IPs in the new range, and keep their old IPs. You will have to delete the old IPs from each member if you don't like to see them in the list.

For example, if you change from `192.168.195.*` to `10.244.*.*`, then the member nodes will have IPs in both ranges, like: 192.16.195.1 and 10.244.1.1

IPs don't actually get applied on the operating system unless the network has a matching managed route.

## How are nodes counted against my subscription?

If the same node is a member of multiple networks, it is counted only once.

Only authorized nodes are counted. You don't need to hide or delete nodes for billing purposes. De-authorized nodes aren't counted.
