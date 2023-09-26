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
      items: ['wat', 'start', 'faq', 'troubleshooting'],
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
      items: ['start', 'sso'],
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
      items: ['lbm', 'compatibility', 'bridging', 'proxy', 'audit'],
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
      items: ['audit'],
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
      type: 'category',
      label: 'Draft',
      link: {
        type: 'generated-index',
        title: 'Draft',
        description: 'Draft',
        slug: '/draft',
      },
      items: ['faq', 'routertips', 'cli', 'edge', 'whitelist', 'docker', 'nat', 'what-is-a-controller', 'route-between-phys-and-virt', 'cloud-init'],
    },
    {
      type: 'category',
      label: 'Linux',
      link: {
        type: 'generated-index',
        title: 'Linux',
        description: 'ZeroTier on Linux',
        slug: '/linux',
      },
      items: ['faq-linux'],
    },
    {
      type: 'category',
      label: 'macOS',
      link: {
        type: 'generated-index',
        title: 'macOS',
        description: 'ZeroTier on macOS',
        slug: '/macos',
      },
      items: ['faq-macos'],
    },
    {
      type: 'category',
      label: 'Windows',
      link: {
        type: 'generated-index',
        title: 'Windows',
        description: 'ZeroTier on Windows',
        slug: '/windows',
      },
      items: ['faq-windows'],
    },
    {
      type: 'category',
      label: 'FreeBSD',
      link: {
        type: 'generated-index',
        title: 'FreeBSD',
        description: 'ZeroTier on FreeBSD',
        slug: '/freebsd',
      },
      items: ['faq-freebsd'],
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
      items: ['awesome', 'faq-community'],
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
  }
  ]
};
