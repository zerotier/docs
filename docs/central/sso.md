---
title: SSO

---

OIDC Configuration
=====


## ZeroTier Central configuration

:::note

SSO is currently only supported on desktop operating systems such as macOS and Windows. Support for iOS and Android, and better support for authenticating via the command line is still to come.

:::

### Update clients
- Download and install ZeroTier 1.10.0 or greater on clients that will use SSO.

    https://www.zerotier.com/download/
    

### Configure SSO in ZeroTier Central 
Visit https://my.zerotier.com/account and complete the SSO configuration toward the bottom of the page. You will need your sso provider's Isssuer URL as well as a Client ID.

![SSO-Account-Setup](/img/sso-account-setup.png)

You can configure multiple OIDC clients for your organization, but only one may be used at a time on an individual network.

### Configure SSO on individual networks. 
If you enable this on an existing network, you may accidentally block existing users. Please practice on a test network.
![SSO-Network-Enable](/img/sso-network-enable.png)

There are three login modes for SSO enabled networks.

1. Standard - If the user can successfully authenticate to your OIDC provider, they weill be allowed access to the ZeroTier network
2. [Email Based Access](/central/sso#email-based-network-access) - The user is allowed to access the network if and only if their email address is in the email list provided by the network administrator.
3. [Group/Role Based Access](/central/sso#role-based-network-access) - The user is allowed to access the network if and only if they are assigned one of the  proper roles by the OIDC server.


### Exclude specific devices from SSO requirements
This is useful for routers, servers, embedded devices, etc…
You can do this from the wrench icon in the Members list.

![SSO-Member-Exclude](/img/sso-member-exclude.png)

## SSO provider configuration

* SSO Provider **must** support [PKCE](https://oauth.net/2/pkce/)
* Requires the following scopes:
  * `openid`
  * `profile`
  * `email`
  * `offline_access`
* Configure the callback URL to `http://localhost:9993/sso`


## Provider Specific Configuration Notes

### Auth0 
Please ensure the following fields are set on your Auth0 application config:
- Application Type:  Native
- Token Endpoint Authentication Method: None
- Allowed Callback URL: http://localhost:9993/sso
- Under Advanced Settings -> Grant Types, ensure Implicit, Authorization Code, and Refresh Token are selected.

:::note

The OIDC spec is picky about the Issuer URL you enter.  It must match what the server configuration metadata endpoint returns. 

In the case of Auth0 specifically, Your Issuer URL *MUST* end with a `/`.  For example, in Auth0's application configuration, show's just the fully qualified domain name.  What must be entered in the Issuer field in ZeroTier Central is: `https://your-domain-id.auth0.com/`

:::

### Authelia

[Authelia](https://www.authelia.com/) is a self hosted SSO solution. ZeroTier uses PKCE, so the field `secret` must be an empty string and `public` must be true.
    
:::note 

Use of Authelia requires ZeroTierOne version 1.10.1 or greater.  There is an incompatibility between the two in the 1.10.0 release.

:::

Example client configuration:

    clients:
        ## The ID is the OpenID Connect ClientID which is used to link an application to a configuration.
      - id: authelia-sso-client

        ## The description to show to users when they end up on the consent screen. Defaults to the ID above.
        description: zerotier

        ## The client secret is a shared secret between Authelia and the consumer of this client.
        secret: ""

        ## Sector Identifiers are occasionally used to generate pairwise subject identifiers. In most cases this is not
        ## necessary. Read the documentation for more information.
        ## The subject identifier must be the host component of a URL, which is a domain name with an optional port.
        # sector_identifier: example.com

        ## Sets the client to public. This should typically not be set, please see the documentation for usage.
        public: true

        ## The policy to require for this client; one_factor or two_factor.
        authorization_policy: one_factor

        ## By default users cannot remember pre-configured consents. Setting this value to a period of time using a
        ## duration notation will enable users to remember consent for this client. The time configured is the amount
        ## of time the pre-configured consent is valid for granting new authorizations to the user.
        # pre_configured_consent_duration:

        ## Audience this client is allowed to request.
        audience: [
          "authelia-test-client"
        ]

        ## Scopes this client is allowed to request.
        scopes:
          - openid
          - groups
          - email
          - profile
          - offline_access

        ## Redirect URI's specifies a list of valid case-sensitive callbacks for this client.
        redirect_uris:
          - http://localhost:9993/sso

        ## Grant Types configures which grants this client can obtain.
        ## It's not recommended to define this unless you know what you're doing.
        grant_types:
          - refresh_token
          - authorization_code

        ## Response Types configures which responses this client can be sent.
        ## It's not recommended to define this unless you know what you're doing.
        response_types:
          - code
          - id_token

        ## Response Modes configures which response modes this client supports.
        response_modes:
          - form_post
          - query
          - fragment

        ## The algorithm used to sign userinfo endpoint responses for this client, either none or RS256.
        userinfo_signing_algorithm: none

### Azure AD

Navigate to your directory in the Azure portal, and select "App Registrations" in the Manage column.

Click "New Registration"

Set the Name of the application. e.g. "ZeroTier Central SSO"

Under Redirect URI:

Platform: Public client/native (mobile & desktop)

Set the Redirect URI to `http://localhost:9993/sso`

### Google Workspace
Google OAuth2/OIDC is not supported as Google does not support PKCE clients at this time. You can, however, use [Keycloak as a SAML Identity Broker](http://localhost:3000/central/sso#keycloak-as-a-saml-identity-broker) with Google Workspace.

### Keycloak 

Log into your Keycloak administration console, go to the Client configuration and create a new client. Configuration is fairly straightforward, with the following requirements:

- Client Protocol: openid-conect
- Access Type: public
- Standard Flow Enabled: ON
- Root URL: https://my.zerotier.com
- Valid Redirect URLS
  - https://my.zerotier.com/*
  - http://localhost/sso
- Admin URL: https://my.zerotier.com
- Web Origins: *

See [here](https://www.keycloak.org/docs/latest/server_admin/index.html#assembly-managing-clients_server_administration_guide) for full documentation for configuring OpenID Connect clients with Keycloak.

#### Keycloak as a SAML Identity Broker

If you have a SAML provider, but not an OpenID Connect provider, [Keycloak](https://www.keycloak.org) can also be used to bridge the gap. On your keycloak Admin page, go to Identity Providers. From the dropdown, select `SAML v2.0` and create the connection to your SAML provider. Combined with the general Keycloak OIDC client settings above, you now have an OIDC server that authenticates against your SAML provider.

### Okta
- Application Type:  Native
- Token Endpoint Authentication Method: None
- Allowed Callback URL: http://localhost:9993/sso
- Under Advanced Settings -> Grant Types, ensure Implicit, Authorization Code, and Refresh Token are selected.

### OneIdentity
OneIdentity may require manual whitelisting of the following scopes: `openid`, `profile`, `email`, `offline_access`.

## Customizing the Final SSO Flow Page

If you wish, you can customize the final view of the sso login process. 
Create the file `$ZEROTIER_HOME/sso-auth.template.html`. 

Note: Any CSS or images must be hosted externaly, or placed within the single HTML page itself.

You may customize the page to look however you wish. At this time there
are only two template values set by zerotier:
- `networkId`
- `messageText`

Templates must be valid HTML, and the template values must be placed inside ``{{ ...  }}` blocks like so:

    {{ networkId }}
    {{ messageText }}

You may react to errors via the `isError` variable:

    {% if isError %}
    <span style="color: red;">{{ messageText }}</span>
    {% else %}
    {{ messageText }}
    {% endif %}
    
## Email Based Network Access

With Email based network access, a network administrator can limit access to the network to only users whose email addresses are present in the list specified by the network administrator.

![sso email list](/img/sso-email-access.png)

## Role Based Network Access

Configuring Role Based Access controls is different across all of the different OIDC providers available.  We'll give examples for many of the large ones. The one commonality between all of them is the name of the field the rolls must be mapped to:

`my.zerotier.com/roles`

Aside from that, role/group names are up to the network administrator.  Simply add one or more role name to your network configuration, and users will be required to have at least one of those roles assigned in order to acess the network.

### Auth0

Auth0 requires multple steps to configure.

#### Step 1: Create a Role

Log into your auth0.com management console.  Go to User Management and select roles.  Hit the `+ Create Role` button in the upper right corner.  Give your new role a name & description of your choosing.

![auth0 create role](/img/sso-auth0-create-role.png)

#### Step 2: Add users to Role

Once the new role is created, go to the Users tab.  There you will be able to add the users you wish to have access to the role.

#### Step 3: Attach Roles to ID and Access tokens

In order for ZeroTier to be able to read the roles a user has been assigned, they must be added to the ID and Access tokens, and mapped to the correct name.  In the Auth0.com dashboard, go to Actions, and select Flows. Click the Login flow. On the right side of the screen, hit the + next to  `Add Action` and select `Build Custom`.  Give the action a name such as "Attach ZeroTier Roles" with Trigger set to "Login/Post Login" and Runtime set to "Node 16" (or whatever the latest default is).

Next you will get a screen with a code editor.  Delete everything in the buffer and add the following:

    exports.onExecutePostLogin = async (event, api) => {
        if (event.authorization) {
            api.idToken.setCustomClaim(`my.zerotier.com/roles`, event.authorization.roles);
            api.accessToken.setCustomClaim(`my.zerotier.com/roles`, event.authorization.roles);
        }
    }

Once it is entered, hit `Deploy` on the upper right hand side of the screen.  

Hit the `<- Back to flow` link, which will take you back to the Login Flow graph.  Under Add Action, select Custom.  You'll find your new action listed there.  Drag it between `Start` and `Complete` in the login flow and click Apply. When finished, your flow will look something like this:

![auth0 login flow](/img/sso-auth0-login-flow.png)

Your users' assigned roles will now be attached to the tokens required to authorize a user on your ZeroTier networks. 

