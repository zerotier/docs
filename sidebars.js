 module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started with ZeroTier',
        description: 'ZeroTier securely connects all of your devices and services with each other, anywhere.',
        slug: '/',
      },
      items: ['wat', 'start', 'faq', 'troubleshooting', 'awesome', 'source', 'releases'],
    },
    {
      type: 'category',
      label: 'ZeroTier',
      link: {
        type: 'generated-index',
        title: 'How ZeroTier Works',
        description: 'Our installable client service.',
        slug: '/zerotier',
      },
      items: ['protocol', 'rules', 'config'],
    },
    {
      type: 'category',
      label: 'Central',
      link: {
        type: 'generated-index',
        title: 'Central',
        description: 'Our hosted offering for managing your networks.',
        slug: '/central',
      },
      items: ['start', 'sso', 'faq-central'],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Guides',
        description: 'How-to guides for common ZeroTier use cases.',
        slug: '/guides',
      },
      items: ['dns', 'multipath', 'terraform', 'exitnode', 'bridging', 'proxy', 'sockets', 'microsegmentation', 'selfhosting'],
    },
    {
      type: "category",
      label: "API",
      items: [
        {
          type: "category",
          label: "REST APIs",
          items: [
            {
              type: "category",
              label: "Central",
              items: [
                {
                  type: "link",
                  label: "V1",
                  href: "/central/v1",
                },
              ],
            },
            {
              type: "category",
              label: "Service",
              items: [
                {
                  type: "link",
                  label: "V1",
                  href: "/service/v1",
                },
              ],
            },
          ],
        }
      ]
    },
    {
      type: 'category',
      label: 'Self-Hosting',
      link: {
        type: 'generated-index',
        title: 'Self-Hosting',
        description: 'Take control by self-hosting your own ZeroTier infrastructure.',
        slug: '/selfhost',
      },
      items: ['roots', 'controller'],
    },
    {
      type: 'category',
      label: 'Routers',
      link: {
        type: 'generated-index',
        title: 'Routers',
        description: 'If it has a chip, you can probably install ZeroTier on it.',
        slug: '/routers',
      },
      items: ['teltonika-networks', 'mikrotik', 'openwrt', 'opnsense', 'ubiquiti'],
    },
    {
      type: 'category',
      label: 'NAS',
      link: {
        type: 'generated-index',
        title: 'Network Attached Storage',
        description: 'If it has a chip, you can probably install ZeroTier on it.',
        slug: '/nas',
      },
      items: ['freenas', 'asustor', 'qnap', 'synology', 'wd'],
    },
    {
      type: 'category',
      label: 'IoT',
      link: {
        type: 'generated-index',
        title: 'IoT',
        description: 'ZeroTier is designed to operate on resource constrained devices and under 16MB of memory.',
        slug: '/iot',
      },
      items: ['lbm', 'compatibility', 'bridging', 'proxy', 'faq-security'],
    },
    {
      type: 'category',
      label: 'OS / Platforms',
      link: {
        type: 'generated-index',
        title: 'OS / Platforms',
        description: 'ZeroTier on your operating system of choice',
        slug: '/platforms',
      },
      items: [
        {
          type: 'category',
          label: 'Linux',
          link: {
            type: 'generated-index',
            title: 'ZeroTier',
            description: 'ZeroTier on Linux',
            slug: '/linux',
          },
          items: ['faq-linux', 'snap', 'flatpak', 'docker', 'bridging', 'aws-vpc-gateway', 'nat', 'docker-6plane']
        },
        'faq-macos',
        'faq-freebsd',
        'faq-windows',
      ],
    },
    {
      type: 'category',
      label: 'Community Articles',
      link: {
        type: 'generated-index',
        title: 'Community Articles',
        description: 'Articles written by fans and users of ZeroTier',
        slug: '/community',
      },
      items: ['awesome'],
    },
    {
      type: 'category',
      label: 'Security',
      link: {
        type: 'generated-index',
        title: 'Security',
        description: 'ZeroTier uses state of the art cryptographic methods.',
        slug: '/security',
      },
      items: ['faq-security'],
    },
    {
      type: 'category',
      label: 'Packages',
      link: {
        type: 'generated-index',
        title: 'Packages',
        description: 'Ways to get ZeroTier',
        slug: '/packages',
      },
      items: ['snap', 'flatpak'],
    },
    {
      type: 'category',
      label: 'Service Providers',
      link: {
        type: 'generated-index',
        title: 'Service Providers',
        description: 'Guides for Managed Service Providers',
        slug: '/service-providers',
      },
      items: ['faq-rules', 'faq-security', 'sso'],
    },
    {
      type: 'category',
      label: 'Draft',
      link: {
        type: 'generated-index',
        title: 'Draft',
        description: 'Draft',
        slug: '/draft',
      },
      items: ['faq', 'routertips', 'cli', 'edge', 'whitelist', 'docker', 'nat', 'what-is-a-controller', 'route-between-phys-and-virt', 'cloud-init'],
    }
  ]
};
