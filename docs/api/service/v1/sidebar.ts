import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/service/v1/zerotierone-service-api",
    },
    {
      type: "category",
      label: "status",
      items: [
        {
          type: "doc",
          id: "api/service/v1/get-status",
          label: "Node status and addressing info.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "network",
      items: [
        {
          type: "doc",
          id: "api/service/v1/get-networks",
          label: "Get all network memberships.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/service/v1/get-network",
          label: "Get a joined Network membership configuration by Network ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/service/v1/update-network",
          label: "Join a network or update its configuration by Network ID.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/service/v1/delete-network",
          label: "Leave a network.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "peer",
      items: [
        {
          type: "doc",
          id: "api/service/v1/get-peers",
          label: "Get all peers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/service/v1/get-peer",
          label: "Get information about a specific peer by Node ID.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "controller",
      items: [
        {
          type: "doc",
          id: "api/service/v1/get-controller-status",
          label: "Get Controller Status.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/service/v1/get-controller-networks",
          label: "List Networks.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/service/v1/get-controller-network",
          label: "Get Network by ID.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/service/v1/set-controller-network",
          label: "Create or Update a Network.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/service/v1/generate-controller-network",
          label: "Generate Random Network ID.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/service/v1/get-controller-network-members",
          label: "List Network Members.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/service/v1/get-controller-network-member",
          label: "Get Network Member Details by ID.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
