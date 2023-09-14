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
      items: ['wat', 'start', 'faq'],
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
      label: 'my.zerotier.com',
      link: {
        type: 'generated-index',
        title: 'Central',
        description: 'Our hosted offering for managing your networks.',
        slug: '/central',
      },
      items: ['my', 'sso'],
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
      label: 'Devices',
      link: {
        type: 'generated-index',
        title: 'Devices',
        description: 'If it has a chip, you can probably install ZeroTier on it.',
        slug: '/devices',
      },
      items: ['teltonika-networks', 'mikrotik', 'asustor', 'freenas', 'qnap', 'synology', 'ubiquiti', 'wd'],
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
