export type CmsHealth = {
  ok: boolean;
  message: string;
  timestamp: string;
};

export type CmsHeaderContent = {
  brandName: string;
  brandLogoUrl: string;
  navItems: Array<{
    label: string;
    href: string;
  }>;
  actionIcons: Array<{
    name: string;
    iconUrl: string;
  }>;
};

export type CmsHeroContent = {
  title: string;
  backgroundImageUrl: string;
  logoImageUrl: string;
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;
};

export type CmsContactDetail = {
  id: string;
  title: string;
  lines: string[];
  iconUrl: string;
};

export type CmsContactFormContent = {
  fields: Array<{
    id: string;
    label: string;
    placeholder?: string;
    type: 'text' | 'email' | 'textarea';
    required?: boolean;
  }>;
  submitLabel: string;
};

export type CmsFeatureHighlight = {
  id: string;
  title: string;
  subtitle: string;
  iconUrl: string;
};

export type CmsFooterContent = {
  address: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
  helpLinks: Array<{
    label: string;
    href: string;
  }>;
  newsletterPlaceholder: string;
  newsletterActionLabel: string;
  copyright: string;
};

export type CmsContactPageContent = {
  slug: string;
  title: string;
  introTitle: string;
  introDescription: string;
  headerContent: CmsHeaderContent;
  heroContent: CmsHeroContent;
  contactDetails: CmsContactDetail[];
  contactFormContent: CmsContactFormContent;
  featureHighlights: CmsFeatureHighlight[];
  footerContent: CmsFooterContent;
};

export type CmsCollectionEntity<T> = {
  id: number;
  attributes?: T;
} & Partial<T>;

export type CmsCollectionResponse<T> = {
  data: CmsCollectionEntity<T>[];
};

export type CmsBlogPostMeta = {
  author: string;
  date: string;
  category: string;
};

export type CmsBlogPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  readMoreHref: string;
  meta: CmsBlogPostMeta;
};

export type CmsBlogSidebarCategory = {
  label: string;
  count: number;
};

export type CmsBlogRecentPost = {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
};

export type CmsBlogPageContent = {
  slug: string;
  title: string;
  headerContent: CmsHeaderContent;
  heroContent: CmsHeroContent;
  posts: CmsBlogPost[];
  categories: CmsBlogSidebarCategory[];
  recentPosts: CmsBlogRecentPost[];
  featureHighlights: CmsFeatureHighlight[];
  footerContent: CmsFooterContent;
  pagination: {
    currentPage: number;
    pages: number[];
    nextLabel: string;
  };
};

export type CmsHomeHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImageUrl: string;
};

export type CmsHomeRangeItem = {
  id: string;
  title: string;
  imageUrl: string;
  href: string;
};

export type CmsHomeProductAction = {
  id: string;
  label: string;
  iconUrl: string;
};

export type CmsHomeProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  priceLabel: string;
  originalPriceLabel?: string;
  badgeLabel?: string;
  badgeTone?: 'discount' | 'new';
  showOverlay?: boolean;
};

export type CmsHomeInspirationContent = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  activeSlideLabel: string;
  activeSlideCategory: string;
  activeSlideTitle: string;
  primaryImageUrl: string;
  secondaryImageUrl: string;
  tertiaryImageUrl: string;
  primaryActionIconUrl: string;
  navigationIconUrl: string;
};

export type CmsHomeShareTile = {
  id: string;
  imageUrl: string;
  alt: string;
  area: string;
};

export type CmsHomeShareContent = {
  subtitle: string;
  title: string;
  tiles: CmsHomeShareTile[];
};

export type CmsHomePageContent = {
  slug: string;
  title: string;
  headerContent: CmsHeaderContent;
  heroContent: CmsHomeHeroContent;
  rangeSectionTitle: string;
  rangeSectionDescription: string;
  rangeItems: CmsHomeRangeItem[];
  productsSectionTitle: string;
  showMoreLabel: string;
  showMoreHref: string;
  products: CmsHomeProduct[];
  productOverlayActions: CmsHomeProductAction[];
  addToCartLabel: string;
  inspirationContent: CmsHomeInspirationContent;
  shareContent: CmsHomeShareContent;
  footerContent: CmsFooterContent;
};

export type CmsShopHeroContent = {
  title: string;
  backgroundImageUrl: string;
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;
};

export type CmsShopToolbarContent = {
  filterLabel: string;
  filterIconUrl: string;
  gridIconUrl: string;
  listIconUrl: string;
  resultsLabel: string;
  showLabel: string;
  showValue: string;
  sortLabel: string;
  sortValue: string;
};

export type CmsShopPageContent = {
  slug: string;
  title: string;
  headerContent: CmsHeaderContent;
  heroContent: CmsShopHeroContent;
  toolbarContent: CmsShopToolbarContent;
  products: CmsHomeProduct[];
  productOverlayActions: CmsHomeProductAction[];
  addToCartLabel: string;
  pagination: {
    currentPage: number;
    pages: number[];
    nextLabel: string;
  };
  featureHighlights: CmsFeatureHighlight[];
  footerContent: CmsFooterContent;
};
