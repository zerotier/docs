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
      items: ['wat', 'releases', 'start', 'cli', 'awesome', 'faq', 'troubleshooting'],
    },
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'generated-index',
        title: 'How ZeroTier Works',
        description: 'Our installable client service.',
        slug: '/zerotier',
      },
      items: ['protocol', 'faq-security', 'rules', 'config', 'what-is-a-controller'],
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
      items: ['start', 'faq-central', 'sso', 'authentication', 'organizations', 'central-admins', 'audit-logs', 'pricing', 'central-billing', 'central-hide-nodes', 'sso-add-seats'],
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
      items: [
        'docker',
        'dns',
        'exitnode',
        {
          type: 'category',
          label: 'Cloud Deployments',
          items: [
            'terraform',
            'cloud-init',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Networking',
          items: [
            'multipath', 'bridging', 'proxy', 'code-server', 'route-between-phys-and-virt', 'microsegmentation', 'nat', 'integrating-physical-networks',
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
          items: ['controller', 'roots'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      link: { type: 'doc', id: 'api/index', },
      items: [
        {
          type: 'category',
          label: 'Central API',
          link: { type: 'doc', id: 'api/central/index' },
          items: [
            {
              type: 'html',
              value: '<a href="/api/central/ref-v1" target="_new">API Reference (V1)</a>',
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
              value: '<a href="/api/service/ref-v1" target="_new">API Reference (V1)</a>',
              defaultStyle: true,
            },
          ],
        },
        {
          type: 'doc',
          id: 'api/tokens',
          label: 'Using API Tokens',
        },
        {
          type: 'doc',
          id: 'sockets',
          label: 'Sockets (libzt)'
        },
        {
          type: 'doc',
          id: 'webhooks',
          label: 'Web Hooks',
        }
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: ['security', 'faq-security']
    },
    {
      type: 'category',
      label: 'OS / Platform Notes',
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
          items: ['faq-windows', 'chocolatey', 'winget', 'windows-lan-game', 'windows-unknown-node-id', 'windows-service-unreachable']
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
          items: ['lbm', 'multithreading', 'compatibility', 'bridging', 'proxy', 'route-between-phys-and-virt'],
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
      ],
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
      items: ['faq-rules', 'sso', 'central-admins', 'audit-logs'],
    }
  ]
}
