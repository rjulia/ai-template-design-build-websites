import type { CmsCheckoutOrderSummaryContent } from '@workspace/shared';
import { useMemo, useState } from 'react';
import './CheckoutOrderSummary.css';

export type CheckoutOrderSummaryItem = {
  id: string;
  name: string;
  quantity: number;
  priceLabel: string;
};

type CheckoutOrderSummaryProps = {
  content: CmsCheckoutOrderSummaryContent;
  items: CheckoutOrderSummaryItem[];
  subtotalLabel: string;
  totalLabel: string;
};

function getPrivacyNoticeWithHighlight(notice: string, highlight: string) {
  const marker = highlight.trim();

  if (!marker || !notice.includes(marker)) {
    return { before: notice, highlighted: '', after: '' };
  }

  const [before, after] = notice.split(marker, 2);

  return { before, highlighted: marker, after: after ?? '' };
}

export function CheckoutOrderSummary({ content, items, subtotalLabel, totalLabel }: CheckoutOrderSummaryProps) {
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState(
    content.paymentMethods.find((method) => method.isSelected)?.id ?? content.paymentMethods[0]?.id ?? '',
  );

  const summaryItems = items.length > 0 ? items : content.fallbackItems;
  const noticeParts = useMemo(
    () => getPrivacyNoticeWithHighlight(content.privacyNotice, content.privacyPolicyLabel),
    [content.privacyNotice, content.privacyPolicyLabel],
  );

  return (
    <section className="checkout-order-summary" aria-label="Order summary">
      <header>
        <p>{content.productHeading}</p>
        <p>{content.subtotalHeading}</p>
      </header>

      <div className="checkout-order-summary-items">
        {summaryItems.map((item) => (
          <div key={item.id} className="checkout-order-summary-item">
            <span>
              {item.name} <small>x {item.quantity}</small>
            </span>
            <span>{item.priceLabel}</span>
          </div>
        ))}
      </div>

      <div className="checkout-order-summary-row">
        <span>{content.subtotalLabel}</span>
        <span>{subtotalLabel}</span>
      </div>

      <div className="checkout-order-summary-row is-total">
        <span>{content.totalLabel}</span>
        <span>{totalLabel}</span>
      </div>

      <div className="checkout-order-summary-divider" aria-hidden="true" />

      <fieldset className="checkout-payment-methods">
        {content.paymentMethods.map((method) => (
          <label key={method.id}>
            <input
              type="radio"
              name="payment-method"
              value={method.id}
              checked={selectedPaymentMethodId === method.id}
              onChange={() => setSelectedPaymentMethodId(method.id)}
            />
            <span>{method.label}</span>
            {method.description ? <small>{method.description}</small> : null}
          </label>
        ))}
      </fieldset>

      <p className="checkout-order-summary-privacy">
        {noticeParts.before}
        {noticeParts.highlighted ? <strong>{noticeParts.highlighted}</strong> : null}
        {noticeParts.after}
      </p>

      <button type="button">{content.placeOrderLabel}</button>
    </section>
  );
}
