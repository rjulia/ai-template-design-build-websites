import type { CmsCheckoutPageContent } from '@workspace/shared';

export const checkoutPageFallback: CmsCheckoutPageContent = {
  slug: 'checkout',
  title: 'Checkout',
  headerContent: {
    brandName: 'Furniro',
    brandLogoUrl: 'https://www.figma.com/api/mcp/asset/f48c72fa-83fe-4f5e-94ba-62a17fac14d0',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actionIcons: [
      {
        name: 'account',
        iconUrl: 'https://www.figma.com/api/mcp/asset/1596aa5b-4df0-43e4-b104-bc010b2574e1',
      },
      {
        name: 'search',
        iconUrl: 'https://www.figma.com/api/mcp/asset/93f8c052-767a-43a5-bef1-a109cd40d9f0',
      },
      {
        name: 'wishlist',
        iconUrl: 'https://www.figma.com/api/mcp/asset/d581d637-8adf-4f38-bca7-f53bab3104b6',
      },
      {
        name: 'cart',
        iconUrl: 'https://www.figma.com/api/mcp/asset/1a672724-e073-4d33-bcf2-db66024a2210',
      },
    ],
  },
  heroContent: {
    title: 'Checkout',
    backgroundImageUrl: 'https://www.figma.com/api/mcp/asset/66bb0273-95e6-4833-ac32-b5ecd050b86b',
    logoImageUrl: 'https://www.figma.com/api/mcp/asset/f48c72fa-83fe-4f5e-94ba-62a17fac14d0',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Checkout', href: '/checkout' },
    ],
  },
  breadcrumbSeparatorIconUrl: 'https://www.figma.com/api/mcp/asset/dcc530de-1191-4b01-8e16-b0de208e9a8e',
  billingTitle: 'Billing details',
  billingFields: [
    { id: 'first-name', label: 'First Name', type: 'text', required: true, halfWidth: true },
    { id: 'last-name', label: 'Last Name', type: 'text', required: true, halfWidth: true },
    { id: 'company', label: 'Company Name (Optional)', type: 'text' },
    {
      id: 'country-region',
      label: 'Country / Region',
      type: 'select',
      defaultValue: 'Sri Lanka',
      options: ['Sri Lanka'],
      required: true,
    },
    { id: 'street-address', label: 'Street address', type: 'text', required: true },
    { id: 'town-city', label: 'Town / City', type: 'text', required: true },
    {
      id: 'province',
      label: 'Province',
      type: 'select',
      defaultValue: 'Western Province',
      options: ['Western Province'],
      required: true,
    },
    { id: 'zip-code', label: 'ZIP code', type: 'text', required: true },
    { id: 'phone', label: 'Phone', type: 'tel', required: true },
    { id: 'email', label: 'Email address', type: 'email', required: true },
    { id: 'additional-information', label: 'Additional information', type: 'textarea', placeholder: 'Additional information' },
  ],
  summaryContent: {
    productHeading: 'Product',
    subtotalHeading: 'Subtotal',
    subtotalLabel: 'Subtotal',
    totalLabel: 'Total',
    placeOrderLabel: 'Place order',
    privacyNotice:
      'Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.',
    privacyPolicyLabel: 'privacy policy',
    paymentMethods: [
      {
        id: 'direct-bank-transfer',
        label: 'Direct Bank Transfer',
        description:
          'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
        isSelected: true,
      },
      {
        id: 'direct-bank-transfer-2',
        label: 'Direct Bank Transfer',
      },
      {
        id: 'cash-on-delivery',
        label: 'Cash On Delivery',
      },
    ],
    fallbackItems: [
      {
        id: 'asgaard-sofa',
        name: 'Asgaard sofa',
        quantity: 1,
        priceLabel: 'Rs. 250,000.00',
      },
    ],
  },
  featureHighlights: [
    {
      id: 'quality',
      title: 'High Quality',
      subtitle: 'crafted from top materials',
      iconUrl: 'https://www.figma.com/api/mcp/asset/75ec623a-4815-4053-a49a-00333bad6d4a',
    },
    {
      id: 'warranty',
      title: 'Warranty Protection',
      subtitle: 'Over 2 years',
      iconUrl: 'https://www.figma.com/api/mcp/asset/84fd9fe9-6b80-4d39-8323-4f18b6549480',
    },
    {
      id: 'shipping',
      title: 'Free Shipping',
      subtitle: 'Order over 150 $',
      iconUrl: 'https://www.figma.com/api/mcp/asset/3d149305-c247-4436-baff-031b8e1943a1',
    },
    {
      id: 'support',
      title: '24 / 7 Support',
      subtitle: 'Dedicated support',
      iconUrl: 'https://www.figma.com/api/mcp/asset/bbcd0037-98ee-4dbe-90c2-8ae04e2d7b52',
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
