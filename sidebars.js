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
      items: ['protocol', 'rules', 'config', 'what-is-a-controller'],
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
      items: ['start', 'faq-central', 'sso', 'sso-add-seats', 'authentication', 'organizations', 'central-admins', 'pricing', 'central-billing', 'central-hide-nodes', 'webhooks'],
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
      items: ['dns', 'multipath', 'terraform', 'docker', 'exitnode', 'bridging', 'proxy', 'sockets', 'code-server', 'route-between-phys-and-virt', 'microsegmentation', 'selfhosting', 'cloud-init', 'cli', 'nat', 'integrating-physical-networks'],
    },
    {
      type: 'category',
      label: 'API',
      link: { type: 'doc', id: 'api/index', },
      items: [
        'api/tokens',
        //{ type: 'doc', id: 'api/tokens', },
        {
          type: 'category',
          label: 'Central API',
          link: { type: 'doc', id: 'api/central/index' },
          items: [
            {
              type: 'html',
              value: '<a href="/api/central/v1" target="_new">API Docs</a>',
              defaultStyle: true,
            },
            'api/central/examples',
          ],
        },
        {
          type: 'category',
          label: 'Service API',
          link: { type: 'doc', id: 'api/service/index' },
          items: [
            {
              type: 'html',
              value: '<a href="/api/service/v1" target="_new">API Docs</a>',
              defaultStyle: true,
            },
            'api/service/examples',
          ],
        },
      ],
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
      items: ['routertips', 'corporate-firewalls', 'teltonika-networks', 'mikrotik', 'openwrt', 'opnsense', 'ubiquiti', 'route-between-phys-and-virt'],
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
      items: ['lbm', 'compatibility', 'bridging', 'proxy', 'faq-security', 'route-between-phys-and-virt'],
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
        /* LINUX */
        {
          type: 'category',
          label: 'Linux',
          link: {
            type: 'generated-index',
            title: 'ZeroTier',
            description: 'ZeroTier on Linux',
            slug: '/linux',
          },
          items: ['faq-linux', 'snap', 'docker', 'bridging', 'aws-vpc-gateway', 'nat', 'docker-6plane', 'code-server', 'cloud-init', 'route-between-phys-and-virt']
        },
        /* MAC */
        {
          type: 'category',
          label: 'macOS',
          link: {
            type: 'generated-index',
            title: 'macOS',
            description: 'ZeroTier on macOS',
            slug: '/macos',
          },
          items: ['faq-macos']
        },
        /* FreeBSD */
        {
          type: 'category',
          label: 'FreeBSD',
          link: {
            type: 'generated-index',
            title: 'freebsd',
            description: 'ZeroTier on freeBSD',
            slug: '/freebsd',
          },
          items: ['faq-freebsd']
        },
        /* WINDOWS */
        {
          type: 'category',
          label: 'Windows',
          link: {
            type: 'generated-index',
            title: 'Windows',
            description: 'ZeroTier on Windows',
            slug: '/windows',
          },
          items: ['faq-windows', 'chocolatey', 'winget', 'windows-lan-game', 'windows-unknown-node-id']
        },
        /* ANDROID */
        {
          type: 'category',
          label: 'Android',
          link: {
            type: 'generated-index',
            title: 'Android',
            description: 'ZeroTier on Android',
            slug: '/android',
          },
          items: ['faq-android']
        },
        /* iOS */
        {
          type: 'category',
          label: 'iOS / iPadOS',
          link: {
            type: 'generated-index',
            title: 'iOS / iPadOS',
            description: 'ZeroTier on iOS or iPadOS',
            slug: '/ios',
          },
          items: ['faq-ios']
        }
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
      label: 'Remote Access',
      link: {
        type: 'generated-index',
        title: 'Remote Access',
        description: 'Ways to use ZeroTier to remotely access your resources',
        slug: '/remote',
      },
      items: ['code-server'],
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
      items: ['snap', 'chocolatey', 'winget'],
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
    }
  ]
};
