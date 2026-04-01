import type { CmsCartPageContent } from '@workspace/shared';
import './CartTotalsCard.css';

type CartTotalsCardProps = {
  content: CmsCartPageContent['totals'];
  subtotalValue?: string;
  totalValue?: string;
};

export function CartTotalsCard({ content, subtotalValue, totalValue }: CartTotalsCardProps) {
  return (
    <aside className="cart-totals-card" aria-label="Cart totals">
      <h2>{content.title}</h2>

      <div className="cart-totals-card-row">
        <span>{content.subtotalLabel}</span>
        <span className="cart-totals-card-muted">{subtotalValue ?? content.subtotalValue}</span>
      </div>

      <div className="cart-totals-card-row">
        <span>{content.totalLabel}</span>
        <span className="cart-totals-card-strong">{totalValue ?? content.totalValue}</span>
      </div>

      <button type="button" className="cart-checkout-button">
        {content.checkoutLabel}
      </button>
    </aside>
  );
}
