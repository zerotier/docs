/** @type {import("@docusaurus/types").DocusaurusConfig} */ 

const path = require("path");

const POSTHOG = {
  appUrl: process.env.POSTHOG_API_HOST || "https://us.i.posthog.com",
  apiKey: process.env.POSTHOG_PROJECT_KEY || "",
};

const ALGOLIA = {
  apiKey: process.env.ALGOLIA_API_KEY || "",
  appId: process.env.ALGOLIA_APP_ID || "",
  indexName: process.env.ALGOLIA_INDEX_NAME || "",
};

module.exports = {
  trailingSlash: true,
  title: "ZeroTier Documentation",
  tagline:
    "Instantly create secure, private networks that connect your devices directly to each other.",
  url: "https://docs.zerotier.com",
  baseUrl: "",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",
  organizationName: "zerotier",
  projectName: "docs",
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: POSTHOG.apiKey,
        appUrl: POSTHOG.appUrl,
        enableInDevelopment: false,
        disable_session_recording: true,
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          central: {
            specPath: "static/openapi/central/v1.json",
            outputDir: "docs/api/central/v1",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
            hideSendButton: true,
          },
          service: {
            specPath: "static/openapi/service/v1.json",
            outputDir: "docs/api/service/v1",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
            hideSendButton: true,
          },
        }
      },
    ]
  ],
  future: {
    experimental_faster: {
      rspackBundler: true,
      rspackPersistentCache: true,
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-openapi-docs"
  ],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
    prism: {
      additionalLanguages: [
        "rust",
        "powershell",
        "csharp",
        "python",
        "java",
        "scala",
      ],
    },

    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    algolia: {
      ...ALGOLIA,
      contextualSearch: true,
    },

    separateCss: true,

    navbar: {
      title: "ZeroTier Documentation",
      logo: {
        alt: "ZeroTier Logo",
        src: "img/ZeroTierIcon.png",
      },
      items: [
        {
          to: "https://www.zerotier.com",
          label: "Home",
        },
        {
          to: "https://www.zerotier.com/download",
          label: "Install",
        },
        {
          to: "https://my.zerotier.com/",
          label: "Manage Networks",
        },
        {
          to: "https://discuss.zerotier.com/",
          label: "Community",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Product",
          items: [
            {
              label: "Download",
              href: "https://www.zerotier.com/download/",
            },
            {
              label: "ZeroTier Central",
              href: "https://my.zerotier.com",
            },
            {
              label: "Pricing",
              to: "pricing",
            },
            {
              label: "Security",
              to: "security",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/quickstart",
            },
            {
              label: "This is ZeroTier",
              to: "/zerotier",
            },
            {
              label: "Guides",
              to: "/guides",
            },
            {
              label: "FAQ",
              to: "/faq",
            },
          ],
        },
        {
          title: "Community & Support",
          items: [
            {
              label: "Discussion Forum",
              href: "https://discuss.zerotier.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/zerotier",
            },
            {
              label: "Contact Support",
              href: "https://www.zerotier.com/contact/",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "https://www.zerotier.com/company/",
            },
            {
              label: "Blog",
              href: "https://www.zerotier.com/blog/",
            },
            {
              label: "Careers",
              href: "https://www.zerotier.com/careers/",
            },
            {
              label: "Privacy Policy",
              href: "https://www.zerotier.com/privacy/",
            },
          ],
        },
      ],
      copyright: `
        <div style="text-align: center; padding-top: 2rem;">
          <div style="margin-bottom: 1rem;">
            <strong>ZeroTier Documentation</strong>
          </div>
          <div>
            Copyright © ${new Date().getFullYear()} ZeroTier, Inc. All rights reserved.
          </div>
        </div>
      `,
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          //editUrl: "https://github.com/zerotier/docs/edit/main/",
          routeBasePath: "/",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/api/central/ref-v1",
            to: "/api/central/v1/",
          },
          {
            from: "/api/service/ref-v1",
            to: "/api/service/v1/",
          },
        ],
      },
    ],
  ],
};
