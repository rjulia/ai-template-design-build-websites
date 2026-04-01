import type { CmsSingleProductPageContent } from '@workspace/shared';

export const singleProductPageFallback: CmsSingleProductPageContent = {
  slug: 'asgaard-sofa',
  title: 'Asgaard sofa',
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
  breadcrumbContent: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
    ],
    currentLabel: 'Asgaard sofa',
    separatorIconUrl: 'https://www.figma.com/api/mcp/asset/f225de0a-ceed-4b62-abc8-4da5a35d4ae3',
  },
  productContent: {
    title: 'Asgaard sofa',
    priceLabel: 'Rs. 250,000.00',
    rating: {
      fullStars: 4,
      hasHalfStar: true,
      fullStarIconUrl: 'https://www.figma.com/api/mcp/asset/fa92bb1d-ca4b-4b26-b3f5-61b29d79c818',
      halfStarIconUrl: 'https://www.figma.com/api/mcp/asset/74565386-e2f1-417b-8d65-43280aa2220f',
      reviewLabel: '5 Customer Review',
    },
    shortDescription:
      'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    gallery: {
      thumbnails: [
        {
          id: 'thumb-1',
          imageUrl: 'https://www.figma.com/api/mcp/asset/b51bda74-cf5d-4fff-a1a4-b8c3488b34b4',
          alt: 'Asgaard sofa side view',
        },
        {
          id: 'thumb-2',
          imageUrl: 'https://www.figma.com/api/mcp/asset/fc4d580e-dfd0-4ffc-a64a-55179015dc11',
          alt: 'Asgaard sofa top angle',
        },
        {
          id: 'thumb-3',
          imageUrl: 'https://www.figma.com/api/mcp/asset/6d9c9fdb-29c1-47e1-b499-bc9099f24a47',
          alt: 'Asgaard sofa front view',
        },
        {
          id: 'thumb-4',
          imageUrl: 'https://www.figma.com/api/mcp/asset/30434ffe-e41b-4fe6-a3c6-df4080e8ce16',
          alt: 'Asgaard sofa detail',
        },
      ],
      mainImageUrl: 'https://www.figma.com/api/mcp/asset/9fb6339e-48e0-47b9-a23a-33ae1d4ee9d5',
      mainImageAlt: 'Asgaard sofa',
    },
    sizes: [
      { id: 'l', label: 'L', isSelected: true },
      { id: 'xl', label: 'XL' },
      { id: 'xs', label: 'XS' },
    ],
    colors: [
      { id: 'purple', label: 'Purple', hex: '#816DFA', isSelected: true },
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'gold', label: 'Gold', hex: '#B88E2F' },
    ],
    quantityDefault: 1,
    addToCartLabel: 'Add To Cart',
    compareLabel: 'Compare',
    sku: 'SS001',
    category: 'Sofas',
    tags: 'Sofa, Chair, Home, Shop',
    shareIcons: [
      {
        id: 'facebook',
        iconUrl: 'https://www.figma.com/api/mcp/asset/a18a0471-8172-4ea7-9224-5a36ce676aae',
        href: 'https://facebook.com',
        label: 'Share on Facebook',
      },
      {
        id: 'linkedin',
        iconUrl: 'https://www.figma.com/api/mcp/asset/e62e79b2-185b-412d-8239-bc436b887323',
        href: 'https://linkedin.com',
        label: 'Share on LinkedIn',
      },
      {
        id: 'twitter',
        iconUrl: 'https://www.figma.com/api/mcp/asset/a8695ad9-f87a-44df-a573-1d0ec1cdeba2',
        href: 'https://x.com',
        label: 'Share on X',
      },
    ],
  },
  descriptionContent: {
    tabs: [
      { id: 'description', label: 'Description' },
      { id: 'additional-information', label: 'Additional Information' },
      { id: 'reviews', label: 'Reviews [5]' },
    ],
    descriptionParagraphs: [
      'Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.',
      'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.',
    ],
    additionalInformationParagraphs: [
      'Frame material: kiln-dried hardwood',
      'Upholstery: premium woven fabric',
      'Dimensions: 250 cm x 90 cm x 85 cm',
    ],
    reviewsSummary: 'Rated 4.5 out of 5 from 5 customer reviews.',
    galleryImages: [
      {
        id: 'description-image-1',
        imageUrl: 'https://www.figma.com/api/mcp/asset/5c571413-2395-4443-80e1-3706aaf9d08e',
        alt: 'Asgaard sofa lifestyle image 1',
      },
      {
        id: 'description-image-2',
        imageUrl: 'https://www.figma.com/api/mcp/asset/66b5e613-5f1a-443d-9c27-ffb5b18f1e8b',
        alt: 'Asgaard sofa lifestyle image 2',
      },
    ],
  },
  relatedProductsContent: {
    title: 'Related Products',
    addToCartLabel: 'Add to cart',
    showMoreLabel: 'Show More',
    showMoreHref: '/shop',
    products: [
      {
        id: 'related-syltherine',
        name: 'Syltherine',
        description: 'Stylish cafe chair',
        imageUrl: 'https://www.figma.com/api/mcp/asset/62e34efa-b7e3-45ba-bc02-dfd7d6162e94',
        href: '/shop/syltherine',
        priceLabel: 'Rp 2.500.000',
        originalPriceLabel: 'Rp 3.500.000',
        badgeLabel: '-30%',
        badgeTone: 'discount',
      },
      {
        id: 'related-leviosa',
        name: 'Leviosa',
        description: 'Stylish cafe chair',
        imageUrl: 'https://www.figma.com/api/mcp/asset/a2a599e0-06ca-4472-be19-30050077295c',
        href: '/shop/leviosa',
        priceLabel: 'Rp 2.500.000',
      },
      {
        id: 'related-lolito',
        name: 'Lolito',
        description: 'Luxury big sofa',
        imageUrl: 'https://www.figma.com/api/mcp/asset/c7d7ab4b-c5af-46ae-ad02-882d5e6f3838',
        href: '/shop/lolito',
        priceLabel: 'Rp 7.000.000',
        originalPriceLabel: 'Rp 14.000.000',
        badgeLabel: '-50%',
        badgeTone: 'discount',
      },
      {
        id: 'related-respira',
        name: 'Respira',
        description: 'Outdoor bar table and stool',
        imageUrl: 'https://www.figma.com/api/mcp/asset/ed880258-e613-412a-ae8f-7569c60f4af8',
        href: '/shop/respira',
        priceLabel: 'Rp 500.000',
        badgeLabel: 'New',
        badgeTone: 'new',
      },
    ],
  },
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
