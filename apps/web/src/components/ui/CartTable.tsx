import type { CmsCartPageContent } from '@workspace/shared';
import './CartTable.css';

type CartTableProps = {
  content: CmsCartPageContent['cartTable'];
};

export function CartTable({ content }: CartTableProps) {
  return (
    <div className="cart-table" role="table" aria-label="Cart items">
      <div className="cart-table-header" role="row">
        <span role="columnheader">{content.headers.product}</span>
        <span role="columnheader">{content.headers.price}</span>
        <span role="columnheader">{content.headers.quantity}</span>
        <span role="columnheader">{content.headers.subtotal}</span>
      </div>

      {content.items.map((item) => (
        <article key={item.id} className="cart-table-row" role="row">
          <div className="cart-product-cell" role="cell">
            <div className="cart-product-thumb">
              <img src={item.imageUrl} alt={item.imageAlt} />
            </div>
            <p>{item.name}</p>
          </div>

          <p className="cart-cell-muted" role="cell">
            {item.priceLabel}
          </p>

          <div className="cart-quantity" role="cell" aria-label={`Quantity ${item.quantity}`}>
            {item.quantity}
          </div>

          <p className="cart-cell-strong" role="cell">
            {item.subtotalLabel}
          </p>

          <button className="cart-remove" type="button" aria-label={`${content.removeActionLabel} ${item.name}`}>
            <img src={content.removeIconUrl} alt="" aria-hidden="true" />
          </button>
        </article>
      ))}
    </div>
  );
}
