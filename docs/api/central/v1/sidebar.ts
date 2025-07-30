import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/central/v1/zerotier-central-api",
    },
    {
      type: "category",
      label: "network",
      items: [
        {
          type: "doc",
          id: "api/central/v1/get-network-list",
          label: "Returns a list of Networks you have access to.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/new-network",
          label: "Create a new network.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/central/v1/get-network-by-id",
          label: "Get network by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/update-network",
          label: "update network configuration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/central/v1/delete-network",
          label: "delete network",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "network-member",
      items: [
        {
          type: "doc",
          id: "api/central/v1/get-network-member-list",
          label: "Returns a list of Members on the network.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/get-network-member",
          label: "Return an individual member on a network",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/update-network-member",
          label: "Modify a network member",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/central/v1/delete-network-member",
          label: "Delete a network member",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      items: [
        {
          type: "doc",
          id: "api/central/v1/get-user-by-id",
          label: "Get user record",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/update-user-by-id",
          label: "Update user record (SMS number or Display Name only)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/central/v1/delete-user-by-id",
          label: "Delete user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/central/v1/add-api-token",
          label: "Add an API token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/central/v1/delete-api-token",
          label: "Delete API Token",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "organizations",
      items: [
        {
          type: "doc",
          id: "api/central/v1/get-organization",
          label: "Get the current user's organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/get-organization-by-id",
          label: "Get organization by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/get-organization-members",
          label: "Get list of organization members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/get-organization-invitation-list",
          label: "Get list of organization invitations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/invite-user-by-email",
          label: "Invite a user to your organization by email",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/central/v1/get-invitation-by-id",
          label: "Get organization invitation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/accept-invitation",
          label: "Accept organization invitation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/central/v1/decline-invitation",
          label: "Decline organization invitation",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "util",
      items: [
        {
          type: "doc",
          id: "api/central/v1/get-status",
          label: "Obtain the overall status of the account tied to the API token in use.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/central/v1/get-random-token",
          label: "Get a random 32 character token",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
