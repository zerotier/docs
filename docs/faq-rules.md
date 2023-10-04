---
title: Rules FAQ
description: Rules for common use cases
---

:::info
Check [the manual](./rules.md) for theory about how rules work.
:::

### Client Isolation

Do you have a couple server or admin nodes, but you don’t want members to be able to talk to each other?

```sh
tag server
  id 2
  enum 0 No
  enum 1 Yes
  default No;

# if neither member is a "server", break
break not tor server 1;

# This is required because the default action is 'drop'.
accept;
See the "Tags Matrix" in the section below after saving the rules. Set your servers to “Yes”
```

### Block all traffic on ZeroTier network

Add the following to the beginning of your rules code:


```sh
drop;
```

This will only block traffic on the ZeroTier overlay network, not your phyiscal network.