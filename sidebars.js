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
      items: ['quickstart', 'what', 'compatibility', 'awesome'],
    },
    {
      type: 'category',
      label: 'This is ZeroTier',
      link: {
        type: 'generated-index',
        title: 'How ZeroTier Works',
        description: 'Our installable client service.',
        slug: '/zerotier',
      },
      items: ['protocol', 'security', 'rules', 'config', 'what-is-a-controller', 'whitelist'],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'doc',
        id: 'guides',
      },
      items: [
        'start',
        'cli',
        'central-hide-nodes',
        {
          type: 'category',
          label: 'Account',
          items: [
            'faq-central',
            'organizations',
            'central-admins',
            'audit-logs',
            'pricing',
            'central-billing',
          ],
        },
        {
          type: 'category',
          label: 'Home & Office',
          items: [
            'remotedesktop',
            'filesharing',
            'website',
            'screenstreaming',
            'usbsharing',
            'pihole',
          ],
        },
        {
          type: 'category',
          label: 'Networking',
          items: [
            'dns',
            'exitnode',
            'nat',
            'selfhosting',
            'controller',
            'integrating-physical-networks',
            'route-between-phys-and-virt',
            'bridging',
            'proxy',
            'relay',
          ],
        },
        {
          type: 'category',
          label: 'Enterprise',
          items: [
            'multipath',
            'microsegmentation',
            'roots',
            'cloud-init',
            'sso',
            'dns-management',
            'faq-rules',
          ],
        },
        {
          type: 'category',
          label: 'Developer Tools',
          link: { type: 'doc', id: 'api/index' },
          items: [
              {
              type: 'category',
              label: 'Central API',
              link: { type: 'doc', id: 'api/central/index' },
              items: [
                {
                  type: 'html',
                  value: '<a href="/api/central/v1/" target="_new">API Reference (V1)</a>',
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
                  value: '<a href="/api/service/v1/" target="_new">API Reference (V1)</a>',
                  defaultStyle: true,
                },
              ],
            },
            'docker',
            'code-server',
            'terraform',

            'api/tokens',
            'sockets',
            'webhooks',
          ],
        },
      ],
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
      items: ['releases', 
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
          items: ['faq-windows', 'chocolatey', 'winget', 'windows-unknown-node-id']
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
          items: ['lbm', 'multithreading', 'bridging', 'proxy', 'route-between-phys-and-virt'],
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
    'faq',
    'troubleshooting',
    'glossary',
  ]
}
