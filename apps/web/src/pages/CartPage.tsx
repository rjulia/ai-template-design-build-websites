import type { CmsCartPageContent, CmsCollectionResponse } from '@workspace/shared';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { CartTable, CartTotalsCard, FeatureHighlights, FurniroFooter, FurniroHeader } from '../components/ui';
import { cartPageFallback } from '../content/cartPageFallback';
import { decreaseItemQuantity, increaseItemQuantity, openCart, removeItem, selectCartItems, selectCartSubtotalLabel } from '../features/cart/cartSlice';
import { useGetCartPageBySlugQuery } from '../services/cmsApi';
import './CartPage.css';

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

function getCartPageContent(data: CmsCollectionResponse<CmsCartPageContent> | undefined): CmsCartPageContent {
  const normalized = normalizeCollectionEntry<CmsCartPageContent>(data);

  if (!normalized) {
    return cartPageFallback;
  }

  return {
    ...cartPageFallback,
    ...normalized,
    headerContent: {
      ...cartPageFallback.headerContent,
      ...normalized.headerContent,
      navItems: normalized.headerContent?.navItems ?? cartPageFallback.headerContent.navItems,
      actionIcons: normalized.headerContent?.actionIcons ?? cartPageFallback.headerContent.actionIcons,
    },
    heroContent: {
      ...cartPageFallback.heroContent,
      ...normalized.heroContent,
      breadcrumbs: normalized.heroContent?.breadcrumbs ?? cartPageFallback.heroContent.breadcrumbs,
    },
    breadcrumbSeparatorIconUrl: normalized.breadcrumbSeparatorIconUrl ?? cartPageFallback.breadcrumbSeparatorIconUrl,
    cartTable: {
      ...cartPageFallback.cartTable,
      ...normalized.cartTable,
      headers: {
        ...cartPageFallback.cartTable.headers,
        ...normalized.cartTable?.headers,
      },
      items: normalized.cartTable?.items ?? cartPageFallback.cartTable.items,
    },
    totals: {
      ...cartPageFallback.totals,
      ...normalized.totals,
    },
    featureHighlights: normalized.featureHighlights ?? cartPageFallback.featureHighlights,
    footerContent: {
      ...cartPageFallback.footerContent,
      ...normalized.footerContent,
    },
  };
}

export function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartSubtotalLabel = useAppSelector(selectCartSubtotalLabel);
  const { data } = useGetCartPageBySlugQuery('cart');
  const content = getCartPageContent(data);

  const handleHeaderActionClick = (actionName: string) => {
    if (actionName === 'cart') {
      dispatch(openCart());
    }
  };

  return (
    <div className="cart-page">
      <FurniroHeader content={content.headerContent} onActionClick={handleHeaderActionClick} />

      <section
        className="cart-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.68), rgba(255,255,255,0.68)), url(${content.heroContent.backgroundImageUrl})`,
        }}
      >
        <img src={content.heroContent.logoImageUrl} alt="" aria-hidden="true" />
        <h1>{content.heroContent.title}</h1>
        <nav aria-label="Breadcrumb" className="cart-breadcrumb">
          {content.heroContent.breadcrumbs.map((crumb, index) => {
            const isLast = index === content.heroContent.breadcrumbs.length - 1;

            return (
              <span key={crumb.label}>
                {isLast ? <span>{crumb.label}</span> : <Link to={crumb.href}>{crumb.label}</Link>}
                {!isLast ? <img src={content.breadcrumbSeparatorIconUrl} alt="" aria-hidden="true" /> : null}
              </span>
            );
          })}
        </nav>
      </section>

      <main className="cart-main">
        <section className="cart-content" aria-label="Shopping cart">
          <CartTable
            content={content.cartTable}
            items={cartItems}
            onIncreaseQuantity={(itemId) => dispatch(increaseItemQuantity(itemId))}
            onDecreaseQuantity={(itemId) => dispatch(decreaseItemQuantity(itemId))}
            onRemoveItem={(itemId) => dispatch(removeItem(itemId))}
          />
          <CartTotalsCard content={content.totals} subtotalValue={cartSubtotalLabel} totalValue={cartSubtotalLabel} />
        </section>
      </main>

      <FeatureHighlights items={content.featureHighlights} />
      <FurniroFooter brandName={content.headerContent.brandName} content={content.footerContent} />
    </div>
  );
}
