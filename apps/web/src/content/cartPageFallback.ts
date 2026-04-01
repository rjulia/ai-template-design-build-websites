import type { CmsCartPageContent } from '@workspace/shared';

export const cartPageFallback: CmsCartPageContent = {
  slug: 'cart',
  title: 'Cart',
  headerContent: {
    brandName: 'Furniro',
    brandLogoUrl: 'https://www.figma.com/api/mcp/asset/4e7a0820-1d34-478a-824d-67da42ef718f',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actionIcons: [
      {
        name: 'account',
        iconUrl: 'https://www.figma.com/api/mcp/asset/886f7a55-190d-4d23-84b9-529f0585b5d7',
      },
      {
        name: 'search',
        iconUrl: 'https://www.figma.com/api/mcp/asset/8ecffee8-3a0d-4d1b-92a2-64b5ddacb357',
      },
      {
        name: 'wishlist',
        iconUrl: 'https://www.figma.com/api/mcp/asset/b91e19a9-a1e5-4b15-b497-63b5e8bf5d85',
      },
      {
        name: 'cart',
        iconUrl: 'https://www.figma.com/api/mcp/asset/efd2efcd-c890-4a18-bcfd-911de0484317',
      },
    ],
  },
  heroContent: {
    title: 'Cart',
    backgroundImageUrl: 'https://www.figma.com/api/mcp/asset/3349dee4-4c98-4cf2-b764-00282321ac81',
    logoImageUrl: 'https://www.figma.com/api/mcp/asset/4e7a0820-1d34-478a-824d-67da42ef718f',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Cart', href: '/cart' },
    ],
  },
  breadcrumbSeparatorIconUrl: 'https://www.figma.com/api/mcp/asset/e19ed522-c31d-41d9-a861-18e3de5a1cce',
  cartTable: {
    headers: {
      product: 'Product',
      price: 'Price',
      quantity: 'Quantity',
      subtotal: 'Subtotal',
    },
    removeIconUrl: 'https://www.figma.com/api/mcp/asset/cca9cb62-c323-4aeb-b639-fa380cf9d4da',
    removeActionLabel: 'Remove',
    items: [
      {
        id: 'asgaard-sofa',
        name: 'Asgaard sofa',
        imageUrl: 'https://www.figma.com/api/mcp/asset/261297c2-6263-413c-bdf7-adf98c6b7e00',
        imageAlt: 'Asgaard sofa',
        priceLabel: 'Rs. 250,000.00',
        quantity: 1,
        subtotalLabel: 'Rs. 250,000.00',
      },
    ],
  },
  totals: {
    title: 'Cart Totals',
    subtotalLabel: 'Subtotal',
    subtotalValue: 'Rs. 250,000.00',
    totalLabel: 'Total',
    totalValue: 'Rs. 250,000.00',
    checkoutLabel: 'Check Out',
  },
  featureHighlights: [
    {
      id: 'quality',
      title: 'High Quality',
      subtitle: 'crafted from top materials',
      iconUrl: 'https://www.figma.com/api/mcp/asset/7674c7c4-6bb6-4915-98ec-52102234e853',
    },
    {
      id: 'warranty',
      title: 'Warranty Protection',
      subtitle: 'Over 2 years',
      iconUrl: 'https://www.figma.com/api/mcp/asset/b4720d99-fbf1-4cab-ab31-6f898099d801',
    },
    {
      id: 'shipping',
      title: 'Free Shipping',
      subtitle: 'Order over 150 $',
      iconUrl: 'https://www.figma.com/api/mcp/asset/3d1cccab-1dce-408f-807a-5550cbca2b49',
    },
    {
      id: 'support',
      title: '24 / 7 Support',
      subtitle: 'Dedicated support',
      iconUrl: 'https://www.figma.com/api/mcp/asset/c5aa498d-5703-438e-a063-a33da949fd71',
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
};
