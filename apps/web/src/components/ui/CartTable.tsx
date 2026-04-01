import type { CmsCartPageContent } from '@workspace/shared';

import type { CartItem } from '../../features/cart/cartTypes';
import { formatCartAmount } from '../../features/cart/cartUtils';
import './CartTable.css';

type CartTableProps = {
  content: CmsCartPageContent['cartTable'];
  items: CartItem[];
  onIncreaseQuantity: (itemId: string) => void;
  onDecreaseQuantity: (itemId: string) => void;
  onRemoveItem: (itemId: string) => void;
};

export function CartTable({ content, items, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }: CartTableProps) {
  if (items.length === 0) {
    return (
      <div className="cart-table" role="table" aria-label="Cart items">
        <div className="cart-table-header" role="row">
          <span role="columnheader">{content.headers.product}</span>
          <span role="columnheader">{content.headers.price}</span>
          <span role="columnheader">{content.headers.quantity}</span>
          <span role="columnheader">{content.headers.subtotal}</span>
        </div>
        <p className="cart-table-empty">Your cart is empty. Add products from the shop page.</p>
      </div>
    );
  }

  return (
    <div className="cart-table" role="table" aria-label="Cart items">
      <div className="cart-table-header" role="row">
        <span role="columnheader">{content.headers.product}</span>
        <span role="columnheader">{content.headers.price}</span>
        <span role="columnheader">{content.headers.quantity}</span>
        <span role="columnheader">{content.headers.subtotal}</span>
      </div>

      {items.map((item) => (
        <article key={item.id} className="cart-table-row" role="row">
          <div className="cart-product-cell" role="cell">
            <div className="cart-product-thumb">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>

          <p className="cart-cell-muted" role="cell">
            {item.priceLabel}
          </p>

          <div className="cart-quantity-controls" role="cell">
            <button type="button" aria-label={`Decrease quantity for ${item.name}`} onClick={() => onDecreaseQuantity(item.id)}>
              -
            </button>
            <div className="cart-quantity" aria-label={`Quantity ${item.quantity}`}>
              {item.quantity}
            </div>
            <button type="button" aria-label={`Increase quantity for ${item.name}`} onClick={() => onIncreaseQuantity(item.id)}>
              +
            </button>
          </div>

          <p className="cart-cell-strong" role="cell">
            {formatCartAmount(item.unitPrice * item.quantity, item.currencyPrefix)}
          </p>

          <button
            className="cart-remove"
            type="button"
            aria-label={`${content.removeActionLabel} ${item.name}`}
            onClick={() => onRemoveItem(item.id)}
          >
            <img src={content.removeIconUrl} alt="" aria-hidden="true" />
          </button>
        </article>
      ))}
    </div>
  );
}
