import type { CmsContactPageContent } from '@workspace/shared';

export const contactPageFallback: CmsContactPageContent = {
  slug: 'contact',
  title: 'Contact',
  introTitle: 'Get In Touch With Us',
  introDescription:
    'For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!',
  headerContent: {
    brandName: 'Furniro',
    brandLogoUrl: 'https://www.figma.com/api/mcp/asset/b9d6dc68-6d17-4513-9ec0-fde540dc13ca',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actionIcons: [
      {
        name: 'account',
        iconUrl: 'https://www.figma.com/api/mcp/asset/6e31d482-80e2-4db7-b6d7-b629e30d8948',
      },
      {
        name: 'search',
        iconUrl: 'https://www.figma.com/api/mcp/asset/e0e71bdb-a8ba-4828-b03b-8c1afecd7957',
      },
      {
        name: 'wishlist',
        iconUrl: 'https://www.figma.com/api/mcp/asset/36205809-1d28-4b6d-88af-7dcd16be25d7',
      },
      {
        name: 'cart',
        iconUrl: 'https://www.figma.com/api/mcp/asset/33f0ceb0-f290-404f-a362-b55e114a8671',
      },
    ],
  },
  heroContent: {
    title: 'Contact',
    backgroundImageUrl: 'https://www.figma.com/api/mcp/asset/e222365e-5650-4b24-9ec3-2268dad13838',
    logoImageUrl: 'https://www.figma.com/api/mcp/asset/b9d6dc68-6d17-4513-9ec0-fde540dc13ca',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  contactDetails: [
    {
      id: 'address',
      title: 'Address',
      iconUrl: 'https://www.figma.com/api/mcp/asset/05b79655-b2e8-41b5-b637-e5fc24f18928',
      lines: ['236 5th SE Avenue, New York NY10000, United States'],
    },
    {
      id: 'phone',
      title: 'Phone',
      iconUrl: 'https://www.figma.com/api/mcp/asset/2ca9a61f-bb18-4b01-8322-451c7d0725b8',
      lines: ['Mobile: +(84) 546-6789', 'Hotline: +(84) 456-6789'],
    },
    {
      id: 'working-time',
      title: 'Working Time',
      iconUrl: 'https://www.figma.com/api/mcp/asset/34513988-27c2-4985-9dec-cf1a8287e650',
      lines: ['Monday-Friday: 9:00 - 22:00', 'Saturday-Sunday: 9:00 - 21:00'],
    },
  ],
  contactFormContent: {
    fields: [
      {
        id: 'name',
        label: 'Your name',
        placeholder: 'Abc',
        type: 'text',
        required: true,
      },
      {
        id: 'email',
        label: 'Email address',
        placeholder: 'Abc@def.com',
        type: 'email',
        required: true,
      },
      {
        id: 'subject',
        label: 'Subject',
        placeholder: 'This is an optional',
        type: 'text',
      },
      {
        id: 'message',
        label: 'Message',
        placeholder: "Hi! i'd like to ask about",
        type: 'textarea',
      },
    ],
    submitLabel: 'Submit',
  },
  featureHighlights: [
    {
      id: 'quality',
      title: 'High Quality',
      subtitle: 'crafted from top materials',
      iconUrl: 'https://www.figma.com/api/mcp/asset/ab1d03cd-ae0c-4016-8ab1-c51d753f72d9',
    },
    {
      id: 'warranty',
      title: 'Warranty Protection',
      subtitle: 'Over 2 years',
      iconUrl: 'https://www.figma.com/api/mcp/asset/86417483-284a-4283-a532-1fc1e5d02cf1',
    },
    {
      id: 'shipping',
      title: 'Free Shipping',
      subtitle: 'Order over 150 $',
      iconUrl: 'https://www.figma.com/api/mcp/asset/455916ab-6319-467b-87ed-7d8a2b892c69',
    },
    {
      id: 'support',
      title: '24 / 7 Support',
      subtitle: 'Dedicated support',
      iconUrl: 'https://www.figma.com/api/mcp/asset/747403b8-b636-4ce4-bba6-0af68391cb5f',
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
