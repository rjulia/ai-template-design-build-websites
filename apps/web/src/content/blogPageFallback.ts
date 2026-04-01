import type { CmsBlogPageContent } from '@workspace/shared';

export const blogPageFallback: CmsBlogPageContent = {
  slug: 'blog',
  title: 'Blog',
  headerContent: {
    brandName: 'Furniro',
    brandLogoUrl: 'https://www.figma.com/api/mcp/asset/41807420-babe-4db7-a2e4-4fe9c80fe0cf',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
    actionIcons: [
      {
        name: 'account',
        iconUrl: 'https://www.figma.com/api/mcp/asset/3d16840c-3373-4c94-8ef1-fedb10d07a42',
      },
      {
        name: 'search',
        iconUrl: 'https://www.figma.com/api/mcp/asset/c5668eb2-fdfe-4e12-bb87-629e3ba048ac',
      },
      {
        name: 'wishlist',
        iconUrl: 'https://www.figma.com/api/mcp/asset/678dc210-0ed7-4d58-91d9-a6215fcb7994',
      },
      {
        name: 'cart',
        iconUrl: 'https://www.figma.com/api/mcp/asset/ab4ac0c6-eb13-44fd-9d99-45524a651f87',
      },
    ],
  },
  heroContent: {
    title: 'Blog',
    backgroundImageUrl: 'https://www.figma.com/api/mcp/asset/e5625c3a-18dd-4dca-a1e8-97557eaa4046',
    logoImageUrl: 'https://www.figma.com/api/mcp/asset/41807420-babe-4db7-a2e4-4fe9c80fe0cf',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  posts: [
    {
      id: 'post-millennial-design',
      title: 'Going all-in with millennial design',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.',
      imageUrl: 'https://www.figma.com/api/mcp/asset/aef5572b-58ed-4790-bd11-e600a2cf0c75',
      readMoreHref: '/blog/millennial-design',
      meta: {
        author: 'Admin',
        date: '14 Oct 2022',
        category: 'Wood',
      },
    },
    {
      id: 'post-decorating-ways',
      title: 'Exploring new ways of decorating',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.',
      imageUrl: 'https://www.figma.com/api/mcp/asset/ba56eea6-b69d-4b05-bc97-e70cec8224f3',
      readMoreHref: '/blog/decorating-ways',
      meta: {
        author: 'Admin',
        date: '14 Oct 2022',
        category: 'Handmade',
      },
    },
    {
      id: 'post-handmade-pieces',
      title: 'Handmade pieces that took time to make',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.',
      imageUrl: 'https://www.figma.com/api/mcp/asset/852c30c2-0921-483c-a1ff-0a04382c8ce8',
      readMoreHref: '/blog/handmade-pieces',
      meta: {
        author: 'Admin',
        date: '14 Oct 2022',
        category: 'Wood',
      },
    },
  ],
  categories: [
    { label: 'Crafts', count: 2 },
    { label: 'Design', count: 8 },
    { label: 'Handmade', count: 7 },
    { label: 'Interior', count: 1 },
    { label: 'Wood', count: 6 },
  ],
  recentPosts: [
    {
      id: 'recent-1',
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
      imageUrl: 'https://www.figma.com/api/mcp/asset/8c60fc61-2250-4f2b-91ac-8d89fc7bc2f5',
    },
    {
      id: 'recent-2',
      title: 'Exploring new ways of decorating',
      date: '03 Aug 2022',
      imageUrl: 'https://www.figma.com/api/mcp/asset/68b47d78-1957-483f-9122-2fae6b0e1fc2',
    },
    {
      id: 'recent-3',
      title: 'Handmade pieces that took time to make',
      date: '03 Aug 2022',
      imageUrl: 'https://www.figma.com/api/mcp/asset/20504f65-b635-4bab-b194-ecfd4e9b1f5b',
    },
    {
      id: 'recent-4',
      title: 'Modern home in Milan',
      date: '03 Aug 2022',
      imageUrl: 'https://www.figma.com/api/mcp/asset/f811ad2a-df6f-482f-8518-4c3c1f34b6ea',
    },
    {
      id: 'recent-5',
      title: 'Colorful office redesign',
      date: '03 Aug 2022',
      imageUrl: 'https://www.figma.com/api/mcp/asset/21147c84-c351-4907-b873-ca9ac11825f7',
    },
  ],
  featureHighlights: [
    {
      id: 'quality',
      title: 'High Quality',
      subtitle: 'crafted from top materials',
      iconUrl: 'https://www.figma.com/api/mcp/asset/4de71915-6682-4b29-a2a6-82d45267937e',
    },
    {
      id: 'warranty',
      title: 'Warranty Protection',
      subtitle: 'Over 2 years',
      iconUrl: 'https://www.figma.com/api/mcp/asset/759771be-e445-4358-84ec-d91239f6139c',
    },
    {
      id: 'shipping',
      title: 'Free Shipping',
      subtitle: 'Order over 150 $',
      iconUrl: 'https://www.figma.com/api/mcp/asset/017d2f04-f3f4-4e93-86f3-e844a44c3462',
    },
    {
      id: 'support',
      title: '24 / 7 Support',
      subtitle: 'Dedicated support',
      iconUrl: 'https://www.figma.com/api/mcp/asset/8e9fcea0-f59f-45c6-a675-367af1eee4c9',
    },
  ],
  footerContent: {
    address: ['400 University Drive Suite 200 Coral Gables, FL 33134 USA'],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    helpLinks: [
      { label: 'Payment Options', href: '/payment-options' },
      { label: 'Returns', href: '/returns' },
      { label: 'Privacy Policies', href: '/privacy' },
    ],
    newsletterPlaceholder: 'Enter Your Email Address',
    newsletterActionLabel: 'SUBSCRIBE',
    copyright: '2023 furino. All rights reverved',
  },
  pagination: {
    currentPage: 1,
    pages: [1, 2, 3],
    nextLabel: 'Next',
  },
};
