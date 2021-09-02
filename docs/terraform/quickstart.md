# Terraform Quickstart

<p align="center">
<img src="https://avatars.githubusercontent.com/u/4173285?s=200&v=4" alt="ZeroNSD" /><br/>
<b><i>
I think I am<br/>
Therefore, I am<br/>
I think<br/>
</i></b>
</p>

# Welcome!

Managing large numbers of setting in a webUI can be a total
bummer. It'd be much nicer if we could describe our ZeroTier networks
and membership settings as code! That would let us keep them in
version control, and integrate them into our software delivery
pipelines.

Now we can!

HashiCorp Terraform allows us to talk to the ZeroTier Central API and
describe our network infrastruture, as code. This turorial will walk
you though how to get started.

To follow along step by step, you will need:

- A [Github](https://github.com) account,
- A [ZeroTier Central](https://my.zerotier.com) account,
- A [Terraform Cloud](https://app.terraform.io) account.

It should take you about 10 minutes to through this turorial. It will
be done *in browser* without touching the command line at all.

## Fork the Github repo

Fork the [ZeroTier Terraform Quickstart Github repo](https://github.com/zerotier/terraform-quickstart). If
you're new to Github, I will point you at the little "fork" button on the upper right hand side of the page. This will create a copy of the
quickstart repo in your personal namspace. We will hook this up to a Terraform runner on [Terraform Cloud](https://app.terraform.io).

<p align="center">
<img src="https://i.imgur.com/zZRIO8a.png" alt="fork on Github" /><br/>
</p>

After that, we will use Github's in-browser editing feature to drive the tutorial.

## Create a Terraform Workspace

Create an account on [Terraform Cloud](https://app.terraform.io), and
follow the prompts to create an organization and a workspace. Follow
the prompts, and create a "Version Controlled Workflow". Add your
repository fork to the workspace. When you're done, you will see
something simillar to this.

<p align="center">
<img src="https://i.imgur.com/pCm7ike.png" "Create workspace" /><br/>
</p>

## Create a Central API Token

Next, we create an API token that Terraform will use to drive the ZeroTier Central API. Navigate to `Account` -> `API Access Tokens`.

<p align="center">
<img src="https://i.imgur.com/3GDoBaF.png" alt="Provision a ZeroTier Central Token" /><br/>
</p>

## Add token as a Workspace Environment Variable

Add the token as an Environment Variable to our workspace. This will let the
[ZeroTier Terraform Provider](https://github.com/zerotier/terraform-provider-zerotier)
authenticate to the API. The variable must be named
`ZEROTIER_CENTRAL_TOKEN`. Be sure to check the `Sensitive` box.

<p align="center">
<img src="https://i.imgur.com/cZxQNdU.png" "Add Environmet Variables" /><br/>
</p>

# Hello World

This example is probably the simplest thing you can do with
ZeroTier. It creates a single network, then joins two members. The
`member_id` settings are made up, so feel free to replace them with
real device ids.

<p align="center">
<img src="https://i.imgur.com/q6kQPI4.png" alt="uncomment resources" /><br/>
</p>

On Github, click on `hello.tf`. There will be a little "edit" icon
around the section with the code. Uncomment the Terraform resources
and click the green "commit changes" button.

```hcl
resource "zerotier_network" "hello" {
  name        = "hello"
  description = "Hello World"
  assignment_pool {
    start = "192.168.42.1"
    end   = "192.168.42.254"
  }
  route {
    target = "192.168.42.0/24"
  }
}

resource "zerotier_member" "alice" {
  name        = "alice"
  member_id   = "a11c3411ce"
  description = "Alice's laptop"
  network_id  = zerotier_network.hello.id
}

resource "zerotier_member" "bob" {
  name        = "bob"
  member_id   = "b0bd0bb0bb"
  description = "Bob's laptop"
  network_id  = zerotier_network.hello.id
}
```

Queue a plan then "Confim and Apply".

<p align="center">
<img src="https://i.imgur.com/y3alCUp.png" alt="queue the plan" /><br/>
</p>

After Terraform applies the plan, check out the ZeroTier Cental webui
to confirm it was created.

<p align="center">
<img src="https://i.imgur.com/P0C0U5J.png" alt="hello zerotier" /><br/>
</p>

# Bridging Networks

The next example manipulates the `allow_ethernet_bridging` settings on
the Member objects. When running on machines with multiple physical
ethernet interfaces, ZeroTier can be configured to pass layer2
traffic such as  ARP, NDP, multicast, mDNS, etc.

To make this work, you'll need to go into your router's OS and
configure a bridge between a physical interface and the ZeroTier
interface.

The [ZeroTier Network](https://registry.terraform.io/modules/zerotier/network/zerotier/)
Terraform module provides a slightly nicer interface, letting us use
CIDRs for our subnets.

Repeat the steps from "Hello World" with `bridging.tf`

```hcl
module "bridgenet" {
  source      = "zerotier/network/zerotier"
  version     = "1.0.0"
  name        = "bridgenet"
  description = "bridging example"
  subnets     = ["10.10.0.0/16"]
  flow_rules  = "accept;"
}

resource "zerotier_member" "router1" {
  name                    = "router1"
  member_id               = "71c71c71c1"
  description             = "Alice's router"
  ip_assignments          = ["10.10.1.1"]
  allow_ethernet_bridging = true
  network_id              = module.bridgenet.id
}

resource "zerotier_member" "router2" {
  name                    = "router2"
  member_id               = "71c71c71c2"
  description             = "Bob's router"
  ip_assignments          = ["10.10.2.1"]
  allow_ethernet_bridging = true
  network_id              = module.bridgenet.id
}
```

<p align="center">
<img src="https://i.imgur.com/U0wwQtN.png" alt="queue the plan" /><br/>
</p>

After Terraform applies the plan, check out the ZeroTier Cental webui
to confirm it was created.

<p align="center">
<img src="https://i.imgur.com/S61AHzN.png" alt="hello zerotier" /><br/>
</p>

# Network Segmentation

The next example creates the networks, `red`, `green`, and
`yellow`. We define two groups. The red team gets access to the `red`
network, and the green team gets access to the `green` network. Red
and green make `yellow`.

Repeat the steps from "Hello World" with `groups.tf`

```hcl
variable "segments" {
  default = {
    red = {
      description = "red"
      subnets     = ["10.1.0.0/16"]
      flow_rules  = "accept;"
    }
    green = {
      description = "green"
      subnets     = ["10.2.0.0/16"]
      flow_rules  = "accept;"
    }
    yellow = {
      description = "yellow"
      subnets     = ["10.3.0.0/16"]
      flow_rules  = "accept;"
    }
  }
}

variable "members" {
  default = {
    red = {
      eve = {
        description = "Eve's Laptop"
        member_id   = "34b34b34b3"
      }
      steve = {
        description = "Steve's Laptop"
        member_id   = "573b3573b3"
      }
    }
    green = {
      cletus = {
        description = "Cletus' Laptop"
        member_id   = "c133715b0b"
      }
      brandie = {
        description = "Brandie's Laptop"
        member_id   = "b33fb33fff"
      }
    }
  }
}

module "segments" {
  for_each    = var.segments
  source      = "zerotier/network/zerotier"
  version     = "1.0.0"
  name        = each.key
  description = each.value.description
  subnets     = each.value.subnets
  flow_rules  = each.value.flow_rules
}

resource "zerotier_member" "red" {
  for_each   = { for k, v in var.members.red : (k) => v }
  name       = each.key
  member_id  = each.value.member_id
  network_id = module.segments["red"].id
}

resource "zerotier_member" "green" {
  for_each   = { for k, v in var.members.green : (k) => v }
  name       = each.key
  member_id  = each.value.member_id
  network_id = module.segments["green"].id
}

resource "zerotier_member" "yellow" {
  for_each   = { for k, v in merge(var.members.red, var.members.green) : (k) => v }
  name       = each.key
  member_id  = each.value.member_id
  network_id = module.segments["yellow"].id
}
```

<p align="center">
<img src="https://i.imgur.com/Lf5AgFn.png" alt="queue the plan" /><br/>
</p>

After Terraform applies the plan, check out the ZeroTier Cental webui
to confirm it was created.

<p align="center">
<img src="https://i.imgur.com/qT2Im1f.png" alt="hello zerotier" /><br/>
</p>

# Many to Many

In the last example, show how to assign many members to many
networks. This example used the Terraform
[setproduct](https://www.terraform.io/docs/language/functions/setproduct.html)
function to find all possible combinations of two sets.

The `zerotier_identity` resource is a distant cousin of the Terraform [tls_private_key](https://registry.terraform.io/providers/hashicorp/tls/latest/docs/resources/private_key)
resource. This resource would normally be used to inject secrets into
cloud instances via `cloudinit`. We encourage you to use the HashiCorp
[Terraform Cloud](https://app.terraform.io/) to keep your Terraform state safe.

Repeat the steps from "Hello World" with `many2many.tf`

```hcl
variable "letters" {
  default = ["alfa", "bravo", "charlie"]
}

variable "shapes" {
  default = ["circle", "square", "diamond" ]
}

resource "zerotier_identity" "letters" {
  for_each = { for i in var.letters : i => i }
}

module "shapes" {
  for_each    = { for i, k in var.shapes : (k) => i }
  source      = "zerotier/network/zerotier"
  version     = "1.0.0"
  name        = each.key
  description = each.key
  subnets     = [cidrsubnet("10.11.0.0/16", 8, each.value)]
  flow_rules  = "accept;"
}

resource "zerotier_member" "shape-letters" {
  for_each    = { for i in setproduct(var.letters, keys(module.shapes)) : join("-", flatten(i)) => i }
  name        = each.key
  member_id   = zerotier_identity.letters[each.value[0]].id
  description = module.shapes[each.value[1]].description
  network_id  = module.shapes[each.value[1]].id
}
```

<p align="center">
<img src="https://i.imgur.com/lPGOwhs.png" alt="queue the plan" /><br/>
</p>

After Terraform applies the plan, check out the ZeroTier Cental webui
to confirm it was created.

<p align="center">
<img src="https://i.imgur.com/l5vqsfz.png" alt="hello zerotier" /><br/>
</p>

# Cleaning up

When you're done experimenting with ZeroTier and Terraform, clean up
by deleting all the networks. Look under your workspace's settings
menu for "Destruction and Deletion"

<p align="center">
<img src="https://i.imgur.com/gZuqacO.png" "Create workspace" /><br/>
</p>

Queue the destroy plan to tear everything down.

# That's all folks!

If you like this tutorial, check out the [ZeroTier Multicloud Terraform Quickstart](https://docs.zerotier.com/terraform/multicloud-quickstart) next!

-s
