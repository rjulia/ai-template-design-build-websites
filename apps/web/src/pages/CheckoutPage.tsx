import type { CmsCheckoutPageContent, CmsCollectionResponse } from '@workspace/shared';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { CheckoutBillingForm, CheckoutOrderSummary, FeatureHighlights, FurniroFooter, FurniroHeader } from '../components/ui';
import type { CheckoutOrderSummaryItem } from '../components/ui/CheckoutOrderSummary';
import { checkoutPageFallback } from '../content/checkoutPageFallback';
import { openCart, selectCartItems, selectCartSubtotalLabel } from '../features/cart/cartSlice';
import { useGetCheckoutPageBySlugQuery } from '../services/cmsApi';

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

function getCheckoutPageContent(data: CmsCollectionResponse<CmsCheckoutPageContent> | undefined): CmsCheckoutPageContent {
  const normalized = normalizeCollectionEntry<CmsCheckoutPageContent>(data);

  if (!normalized) {
    return checkoutPageFallback;
  }

  return {
    ...checkoutPageFallback,
    ...normalized,
    headerContent: {
      ...checkoutPageFallback.headerContent,
      ...normalized.headerContent,
      navItems: normalized.headerContent?.navItems ?? checkoutPageFallback.headerContent.navItems,
      actionIcons: normalized.headerContent?.actionIcons ?? checkoutPageFallback.headerContent.actionIcons,
    },
    heroContent: {
      ...checkoutPageFallback.heroContent,
      ...normalized.heroContent,
      breadcrumbs: normalized.heroContent?.breadcrumbs ?? checkoutPageFallback.heroContent.breadcrumbs,
    },
    billingFields: normalized.billingFields ?? checkoutPageFallback.billingFields,
    summaryContent: {
      ...checkoutPageFallback.summaryContent,
      ...normalized.summaryContent,
      paymentMethods: normalized.summaryContent?.paymentMethods ?? checkoutPageFallback.summaryContent.paymentMethods,
      fallbackItems: normalized.summaryContent?.fallbackItems ?? checkoutPageFallback.summaryContent.fallbackItems,
    },
    featureHighlights: normalized.featureHighlights ?? checkoutPageFallback.featureHighlights,
    footerContent: {
      ...checkoutPageFallback.footerContent,
      ...normalized.footerContent,
    },
  };
}

export function CheckoutPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartSubtotalLabel = useAppSelector(selectCartSubtotalLabel);
  const { data } = useGetCheckoutPageBySlugQuery('checkout');
  const content = getCheckoutPageContent(data);

  const orderItems: CheckoutOrderSummaryItem[] = cartItems.map((item) => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    priceLabel: item.priceLabel,
  }));

  const handleHeaderActionClick = (actionName: string) => {
    if (actionName === 'cart') {
      dispatch(openCart());
    }
  };

  return (
    <div className="checkout-page">
      <FurniroHeader content={content.headerContent} onActionClick={handleHeaderActionClick} />

      <section
        className="checkout-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.62), rgba(255,255,255,0.62)), url(${content.heroContent.backgroundImageUrl})`,
        }}
      >
        <img src={content.heroContent.logoImageUrl} alt="" aria-hidden="true" />
        <h1>{content.heroContent.title}</h1>
        <nav aria-label="Breadcrumb" className="checkout-breadcrumb">
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

      <main className="checkout-main">
        <section className="checkout-main-grid" aria-label="Checkout form and summary">
          <CheckoutBillingForm title={content.billingTitle} fields={content.billingFields} />
          <CheckoutOrderSummary
            content={content.summaryContent}
            items={orderItems}
            subtotalLabel={cartSubtotalLabel}
            totalLabel={cartSubtotalLabel}
          />
        </section>
      </main>

      <FeatureHighlights items={content.featureHighlights} />
      <FurniroFooter brandName={content.headerContent.brandName} content={content.footerContent} />
    </div>
  );
}
