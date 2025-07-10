---
title: Organizations
description: How to use ZeroTier Organizations
tags: [central, admin, tutorial, subscriber]
---

:::note
Multiple Admins are a paid feature available to Essential and Commercial subscribers. Details about what we charge for and how to manage your subscription are available on the [pricing](/pricing) guide.

For an overview of current pricing and terms including suggested use cases, please see the [Pricing](https://www.zerotier.com/pricing) page on our website.
:::

You can invite your teammates to help manage your ZeroTier network deployments on the [Central Account Page](https://my.zerotier.com/account).

Add them to your Organization by going to my.zerotier.com/account

Create an invite by typing in an email address

We will email them the link. You can also paste it into your company chat.

![org](./images/organizations-00.png)

Once they accept the invite, they can be added as Admins to individual networks.

![org](./images/organizations-01.png)

The invited User will see:

![org](./images/organizations-02.png)

![org](./images/organizations-03.png)

### Removing Admins from the Organization

You can click the "remove" button next to their name in the list of admins. They will lose Admin access to the organizations networks.

### Change the Organization owner

There is currently no straight-forward way to do this, and ZeroTier support can't change your organization owner via email/ticket because that would be insecure.

The secure way to do this is to change the login of the organization owner:

- Go to https://my.zerotier.com/account
- click Manage Account
- Click Personal Info
- Change the email address to the new organization owner's email
- Log out and back in
- You may want to change the password as well

Consider using a general email address like billing@example.com or zerotier@example.com when you sign up, or when you change org owners.

:::note
If the target email address already has an account at https://my.zerotier.com, that account must first be deleted.
:::

#### Can I move or transfer my network(s) to another user?

The only process that moves networks is joining an organization. When you join, the organization absorbs all your existing networks.

If your networks are small; It may be faster to start a new account and new networks.
