import type { CmsShopPageContent } from '@workspace/shared';

const shopBaseProducts = [
  {
    key: 'syltherine',
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    imageUrl: 'https://www.figma.com/api/mcp/asset/da0861f1-b465-4bcf-a211-e911d97dc556',
    priceLabel: 'Rp 2.500.000',
    originalPriceLabel: 'Rp 3.500.000',
    badgeLabel: '-30%',
    badgeTone: 'discount' as const,
  },
  {
    key: 'leviosa',
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    imageUrl: 'https://www.figma.com/api/mcp/asset/da0861f1-b465-4bcf-a211-e911d97dc556',
    priceLabel: 'Rp 2.500.000',
  },
  {
    key: 'lolito',
    name: 'Lolito',
    description: 'Luxury big sofa',
    imageUrl: 'https://www.figma.com/api/mcp/asset/2d45d749-6b33-4d5a-995b-281b0f9dc182',
    priceLabel: 'Rp 7.000.000',
    originalPriceLabel: 'Rp 14.000.000',
    badgeLabel: '-50%',
    badgeTone: 'discount' as const,
  },
  {
    key: 'respira',
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    imageUrl: 'https://www.figma.com/api/mcp/asset/f9fcd786-4a95-40c6-9127-940f5d9e5355',
    priceLabel: 'Rp 500.000',
    badgeLabel: 'New',
    badgeTone: 'new' as const,
  },
];

export const shopPageFallback: CmsShopPageContent = {
  slug: 'shop',
  title: 'Shop',
  headerContent: {
    brandName: 'Furniro',
    brandLogoUrl: 'https://www.figma.com/api/mcp/asset/a5d45715-cb0e-42b3-9dfb-5e2d48f9bbcd',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actionIcons: [
      {
        name: 'account',
        iconUrl: 'https://www.figma.com/api/mcp/asset/d48bec8e-d570-477a-abb6-1cfa29a81574',
      },
      {
        name: 'search',
        iconUrl: 'https://www.figma.com/api/mcp/asset/b132558e-3c73-496d-aa9a-118bf2e02e29',
      },
      {
        name: 'wishlist',
        iconUrl: 'https://www.figma.com/api/mcp/asset/9efe5ac4-fb39-414b-b9ef-1c6a3bcf58f2',
      },
      {
        name: 'cart',
        iconUrl: 'https://www.figma.com/api/mcp/asset/633a88c0-7bde-4cc0-a02c-d626a79dbffe',
      },
    ],
  },
  heroContent: {
    title: 'Shop',
    backgroundImageUrl: 'https://www.figma.com/api/mcp/asset/397ed3b6-d116-4dc4-b70e-0d937a97dd6a',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
    ],
  },
  toolbarContent: {
    filterLabel: 'Filter',
    filterIconUrl: 'https://www.figma.com/api/mcp/asset/03f8ed74-9934-42b7-bc31-15382167ea05',
    gridIconUrl: 'https://www.figma.com/api/mcp/asset/717eb4bd-df8f-4e43-aab2-c97eab8515a1',
    listIconUrl: 'https://www.figma.com/api/mcp/asset/c6b65d6c-9b79-44d9-a9cc-93804d6a6e23',
    resultsLabel: 'Showing 1-16 of 32 results',
    showLabel: 'Show',
    showValue: '16',
    sortLabel: 'Short by',
    sortValue: 'Default',
  },
  products: Array.from({ length: 16 }).map((_, index) => {
    const product = shopBaseProducts[index % shopBaseProducts.length];
    const row = Math.floor(index / 4) + 1;

    return {
      id: `${product.key}-${row}`,
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
      href: `/shop/${product.key}-${row}`,
      priceLabel: product.priceLabel,
      originalPriceLabel: product.originalPriceLabel,
      badgeLabel: product.badgeLabel,
      badgeTone: product.badgeTone,
      showOverlay: index === 1,
    };
  }),
  productOverlayActions: [
    {
      id: 'share',
      label: 'Share',
      iconUrl: 'https://www.figma.com/api/mcp/asset/4fd241e0-7908-4797-a6cd-fef8559fb341',
    },
    {
      id: 'compare',
      label: 'Compare',
      iconUrl: 'https://www.figma.com/api/mcp/asset/384b82fb-dd87-40e5-ab63-0ae38d80fb64',
    },
    {
      id: 'like',
      label: 'Like',
      iconUrl: 'https://www.figma.com/api/mcp/asset/16a10dd0-7d46-4484-9876-cf33d4b7e7f3',
    },
  ],
  addToCartLabel: 'Add to cart',
  pagination: {
    currentPage: 1,
    pages: [1, 2, 3],
    nextLabel: 'Next',
  },
  featureHighlights: [
    {
      id: 'quality',
      title: 'High Quality',
      subtitle: 'crafted from top materials',
      iconUrl: 'https://www.figma.com/api/mcp/asset/c138add6-2038-4361-929c-f45b950b6c0b',
    },
    {
      id: 'warranty',
      title: 'Warranty Protection',
      subtitle: 'Over 2 years',
      iconUrl: 'https://www.figma.com/api/mcp/asset/c1f89fe1-1c63-4cda-b5a3-fa5e14bd2e86',
    },
    {
      id: 'shipping',
      title: 'Free Shipping',
      subtitle: 'Order over 150 $',
      iconUrl: 'https://www.figma.com/api/mcp/asset/a4cdd4e2-428b-46ee-bcc5-dd40aff8d12e',
    },
    {
      id: 'support',
      title: '24 / 7 Support',
      subtitle: 'Dedicated support',
      iconUrl: 'https://www.figma.com/api/mcp/asset/2b77f937-e01f-4ceb-a243-5ae7c62c9c83',
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
