/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require("path");

module.exports = {
  title: "ZeroTier Documentation",
  tagline: "Because documentation makes things more good",
  url: "https://docs.zerotier.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",
  organizationName: "zerotier", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  plugins: [path.resolve(__dirname, "matomo-plugin")],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',

      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',

      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    // for some reason if python or java are enabled here, the OpenAPI docs go boom :(
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
    matomo: {
      matomoUrl: "https://matomo.zerotier.com/",
      siteId: "4",
    },

    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'This banner is here to inform you that we have a new banner',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },

    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
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
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "ZeroTier",
          items: [
            {
              label: "Home",
              href: "https://www.zerotier.com",
            },
            {
              label: "Downloads",
              href: "https://www.zerotier.com/download/",
            },
            {
              label: "Blog",
              href: "https://www.zerotier.com/blog/",
            },
            {
              label: "ZeroTier Central",
              href: "https://my.zerotier.com",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "ZeroTier",
              to: "https://docs.zerotier.com",
            },
            {
              label: "SDK",
              to: "sockets",
            },
            {
              label: "Central REST API",
              to: "/central/v1",
            },
            {
              label: "Service REST API",
              to: "/service/v1",
            },
            {
              label: "DNS",
              to: "dns",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://discuss.zerotier.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/zerotier",
            },
            {
              label: "GitHub",
              href: "https://github.com/zerotier",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZeroTier, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/zerotier/docs/edit/main/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            route: "/central/v1",
            spec: "./static/openapi/centralv1.json",
          },
          {
            route: "/service/v1",
            spec: "./static/openapi/servicev1.json",
          },
        ],
        theme: {
          primaryColor: "#FFB354",
          redocOptions: {
            hideDownloadButton: false,
          },
        },
      },
    ],
  ],
};
