/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require("path");

const appUrl = process.env.POSTHOG_API_HOST
const apiKey = process.env.POSTHOG_PROJECT_KEY  || "-"

module.exports = {
  trailingSlash: true,
  title: "ZeroTier Documentation",
  tagline: "Because documentation makes things more good",
  url: "https://docs.zerotier.com",
  baseUrl: "",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",
  organizationName: "zerotier", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      "posthog-docusaurus",
      {
        apiKey: apiKey,
        appUrl: appUrl,
        enableInDevelopment: false,
        disable_session_recording: true,
      },
    ],
  ],
  future: {
    experimental_faster: {
      rspackBundler: true,
      rspackPersistentCache: true,
    }
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
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
        }
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
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          //editUrl: "https://github.com/zerotier/docs/edit/main/",
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
        openapi: {
          path: "openapi",
        },
        specs: [
          {
            spec: "./static/openapi/central/v1.json",
            route: "/api/central/v1/",
          },
          {
            spec: "./static/openapi/service/v1.json",
            route: "/api/service/v1/",
          },
        ],
        theme: {
          primaryColor: "#FFB441",
          redocOptions: {
            hideDownloadButton: false,
          },
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
    ]
  ],
};
