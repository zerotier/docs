/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ZeroTier Documentation',
  tagline: 'Because documentation makes things more good',
  url: 'https://docs.zerotier.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zerotier', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    separateCss: true,
    navbar: {
      title: 'ZeroTier Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ZeroTierIcon.png',
      },
      items: [
        // {
        //   label: "Central API",
        //   items: [
        //     {
        //       label: "Latest",
        //       to: "centralv1/"
        //     },
        //     {
        //       label: "V1",
        //       to: "centralv1/"
        //     }
        //   ]
        // },
        // {
        //   label: "Service API",
        //   items: [
        //     {
        //       label: "Latest",
        //       to: "servicev1/"
        //     },
        //     {
        //       label: "V1",
        //       to: "servicev1/"
        //     }
        //   ]
        // }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'ZeroTier',
              to: '/zerotier/ztintro',
            },
            {
              label: 'libzt SDK',
              to: '/libzt/manual.html'
            },
            {
              label: 'Central API',
              to: '/centralv1'
            },
            {
              label: 'Service API',
              to: '/servicev1'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'ZeroTier Discussions',
              href: 'https://discuss.zerotier.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zerotier/ZeroTierOne',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZeroTier, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/zerotier/docs',
            routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            routePath: '/centralv1',
            spec: './openapi/centralv1.json',
          },
          {
            routePath: '/servicev1',
            spec: './openapi/servicev1.json',
          },
        ]
      },
    ],
  ],
};
