import type { CmsCollectionResponse, CmsSingleProductPageContent } from '@workspace/shared';
import { Link, useParams } from 'react-router-dom';
import './SingleProductPage.css';

import {
  FurniroFooter,
  FurniroHeader,
  HomeProductCard,
  SingleProductBreadcrumb,
  SingleProductDescriptionSection,
  SingleProductGallery,
  SingleProductInfo,
} from '../components/ui';
import { singleProductPageFallback } from '../content/singleProductPageFallback';
import { useGetSingleProductPageBySlugQuery } from '../services/cmsApi';

function normalizeCollectionEntry<T>(response: CmsCollectionResponse<T> | undefined): T | undefined {
  const entry = response?.data?.[0];

  if (!entry) {
    return undefined;
  }

  if (entry.attributes) {
    return entry.attributes;
  }

  return entry as T;
}

function getSingleProductPageContent(
  data: CmsCollectionResponse<CmsSingleProductPageContent> | undefined,
): CmsSingleProductPageContent {
  const normalized = normalizeCollectionEntry<CmsSingleProductPageContent>(data);

  if (!normalized) {
    return singleProductPageFallback;
  }

  return {
    ...singleProductPageFallback,
    ...normalized,
    headerContent: {
      ...singleProductPageFallback.headerContent,
      ...normalized.headerContent,
      navItems: normalized.headerContent?.navItems ?? singleProductPageFallback.headerContent.navItems,
      actionIcons: normalized.headerContent?.actionIcons ?? singleProductPageFallback.headerContent.actionIcons,
    },
    breadcrumbContent: {
      ...singleProductPageFallback.breadcrumbContent,
      ...normalized.breadcrumbContent,
      items: normalized.breadcrumbContent?.items ?? singleProductPageFallback.breadcrumbContent.items,
    },
    productContent: {
      ...singleProductPageFallback.productContent,
      ...normalized.productContent,
      rating: {
        ...singleProductPageFallback.productContent.rating,
        ...normalized.productContent?.rating,
      },
      gallery: {
        ...singleProductPageFallback.productContent.gallery,
        ...normalized.productContent?.gallery,
        thumbnails:
          normalized.productContent?.gallery?.thumbnails ?? singleProductPageFallback.productContent.gallery.thumbnails,
      },
      sizes: normalized.productContent?.sizes ?? singleProductPageFallback.productContent.sizes,
      colors: normalized.productContent?.colors ?? singleProductPageFallback.productContent.colors,
      shareIcons: normalized.productContent?.shareIcons ?? singleProductPageFallback.productContent.shareIcons,
    },
    descriptionContent: {
      ...singleProductPageFallback.descriptionContent,
      ...normalized.descriptionContent,
      tabs: normalized.descriptionContent?.tabs ?? singleProductPageFallback.descriptionContent.tabs,
      descriptionParagraphs:
        normalized.descriptionContent?.descriptionParagraphs ?? singleProductPageFallback.descriptionContent.descriptionParagraphs,
      additionalInformationParagraphs:
        normalized.descriptionContent?.additionalInformationParagraphs ??
        singleProductPageFallback.descriptionContent.additionalInformationParagraphs,
      galleryImages:
        normalized.descriptionContent?.galleryImages ?? singleProductPageFallback.descriptionContent.galleryImages,
    },
    relatedProductsContent: {
      ...singleProductPageFallback.relatedProductsContent,
      ...normalized.relatedProductsContent,
      products: normalized.relatedProductsContent?.products ?? singleProductPageFallback.relatedProductsContent.products,
    },
    footerContent: {
      ...singleProductPageFallback.footerContent,
      ...normalized.footerContent,
    },
  };
}

export function SingleProductPage() {
  const { productSlug } = useParams();
  const slug = productSlug ?? singleProductPageFallback.slug;
  const { data } = useGetSingleProductPageBySlugQuery(slug);
  const content = getSingleProductPageContent(data);

  return (
    <div className="single-product-page">
      <FurniroHeader content={content.headerContent} />
      <SingleProductBreadcrumb content={content.breadcrumbContent} />

      <main>
        <section className="single-product-overview">
          <SingleProductGallery gallery={content.productContent.gallery} />
          <SingleProductInfo content={content.productContent} />
        </section>

        <SingleProductDescriptionSection content={content.descriptionContent} />

        <section className="single-product-related" aria-label="Related products">
          <h2>{content.relatedProductsContent.title}</h2>
          <div className="single-product-related-grid">
            {content.relatedProductsContent.products.map((product) => (
              <HomeProductCard
                key={product.id}
                product={{ ...product, showOverlay: false }}
                addToCartLabel={content.relatedProductsContent.addToCartLabel}
                overlayActions={[]}
              />
            ))}
          </div>
          <Link to={content.relatedProductsContent.showMoreHref} className="single-product-related-show-more">
            {content.relatedProductsContent.showMoreLabel}
          </Link>
        </section>
      </main>

      <FurniroFooter brandName={content.headerContent.brandName} content={content.footerContent} />
    </div>
  );
}
