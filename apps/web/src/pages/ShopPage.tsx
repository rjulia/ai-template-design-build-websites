import type { CmsCollectionResponse, CmsShopPageContent } from '@workspace/shared';
import { Link } from 'react-router-dom';
import './ShopPage.css';

import { useAppDispatch } from '../app/hooks';
import { FeatureHighlights, FurniroFooter, FurniroHeader, HomeProductCard, ShopPagination, ShopToolbar } from '../components/ui';
import { shopPageFallback } from '../content/shopPageFallback';
import { mapHomeProductToCartEntry } from '../features/cart/cartMappers';
import { addItem, openCart } from '../features/cart/cartSlice';
import { useGetShopPageBySlugQuery } from '../services/cmsApi';

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

function getShopPageContent(data: CmsCollectionResponse<CmsShopPageContent> | undefined): CmsShopPageContent {
  const normalized = normalizeCollectionEntry<CmsShopPageContent>(data);

  if (!normalized) {
    return shopPageFallback;
  }

  return {
    ...shopPageFallback,
    ...normalized,
    headerContent: {
      ...shopPageFallback.headerContent,
      ...normalized.headerContent,
    },
    heroContent: {
      ...shopPageFallback.heroContent,
      ...normalized.heroContent,
    },
    toolbarContent: {
      ...shopPageFallback.toolbarContent,
      ...normalized.toolbarContent,
    },
    products: normalized.products ?? shopPageFallback.products,
    productOverlayActions: normalized.productOverlayActions ?? shopPageFallback.productOverlayActions,
    pagination: {
      ...shopPageFallback.pagination,
      ...normalized.pagination,
    },
    featureHighlights: normalized.featureHighlights ?? shopPageFallback.featureHighlights,
    footerContent: {
      ...shopPageFallback.footerContent,
      ...normalized.footerContent,
    },
  };
}

export function ShopPage() {
  const dispatch = useAppDispatch();
  const { data } = useGetShopPageBySlugQuery('shop');
  const content = getShopPageContent(data);

  const handleHeaderActionClick = (actionName: string) => {
    if (actionName === 'cart') {
      dispatch(openCart());
    }
  };

  const handleAddToCart = (product: CmsShopPageContent['products'][number]) => {
    dispatch(addItem(mapHomeProductToCartEntry(product)));
  };

  return (
    <div className="shop-page">
      <FurniroHeader content={content.headerContent} onActionClick={handleHeaderActionClick} />

      <section
        className="shop-hero"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.68), rgba(255,255,255,0.68)), url(${content.heroContent.backgroundImageUrl})` }}
      >
        <h1>{content.heroContent.title}</h1>
        <nav aria-label="Breadcrumb" className="shop-breadcrumb">
          {content.heroContent.breadcrumbs.map((crumb, index) => (
            <span key={crumb.label}>
              <Link to={crumb.href}>{crumb.label}</Link>
              {index < content.heroContent.breadcrumbs.length - 1 ? <span className="shop-breadcrumb-separator">&gt;</span> : null}
            </span>
          ))}
        </nav>
      </section>

      <main className="shop-main">
        <ShopToolbar content={content.toolbarContent} />

        <section className="shop-products-grid" aria-label="Shop products">
          {content.products.map((product) => (
            <HomeProductCard
              key={product.id}
              product={{ ...product, showOverlay: false }}
              addToCartLabel={content.addToCartLabel}
              overlayActions={content.productOverlayActions}
              onAddToCart={handleAddToCart}
            />
          ))}
        </section>

        <ShopPagination
          currentPage={content.pagination.currentPage}
          pages={content.pagination.pages}
          nextLabel={content.pagination.nextLabel}
        />
      </main>

      <FeatureHighlights items={content.featureHighlights} />
      <FurniroFooter brandName={content.headerContent.brandName} content={content.footerContent} />
    </div>
  );
}
