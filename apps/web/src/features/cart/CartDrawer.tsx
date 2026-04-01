import { Link } from 'react-router-dom';

import { closeCart, removeItem, selectCartIsOpen, selectCartItems, selectCartSubtotalLabel } from './cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './CartDrawer.css';

const closeIconUrl = 'https://www.figma.com/api/mcp/asset/a3a956b1-44d4-4d66-8f55-27cd0f455ed9';
const removeIconUrl = 'https://www.figma.com/api/mcp/asset/67db179a-c9c9-4d68-bdb4-a209495434e3';

export function CartDrawer() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectCartIsOpen);
  const items = useAppSelector(selectCartItems);
  const subtotalLabel = useAppSelector(selectCartSubtotalLabel);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-drawer-overlay" onClick={() => dispatch(closeCart())} role="presentation">
      <aside
        className="cart-drawer-panel"
        aria-label="Shopping cart drawer"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header className="cart-drawer-header">
          <h2>Shopping Cart</h2>
          <button type="button" className="cart-drawer-close" aria-label="Close shopping cart" onClick={() => dispatch(closeCart())}>
            <img src={closeIconUrl} alt="" aria-hidden="true" />
          </button>
        </header>

        <div className="cart-drawer-header-divider" aria-hidden="true" />

        <div className="cart-drawer-items-area">
          {items.length === 0 ? (
            <p className="cart-drawer-empty">Your cart is empty. Add products from the shop.</p>
          ) : (
            <ul className="cart-drawer-items-list">
              {items.map((item) => (
                <li key={item.id} className="cart-drawer-item">
                  <div className="cart-drawer-item-image-shell">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>

                  <div className="cart-drawer-item-copy">
                    <p>{item.name}</p>
                    <div className="cart-drawer-item-meta">
                      <span>{item.quantity}</span>
                      <small>X</small>
                      <strong>{item.priceLabel}</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="cart-drawer-item-remove"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <img src={removeIconUrl} alt="" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="cart-drawer-footer">
          <div className="cart-drawer-subtotal">
            <span>Subtotal</span>
            <strong>{subtotalLabel}</strong>
          </div>

          <div className="cart-drawer-footer-divider" aria-hidden="true" />

          <div className="cart-drawer-actions">
            <Link to="/cart" onClick={() => dispatch(closeCart())}>
              Cart
            </Link>
            <Link to="/checkout" onClick={() => dispatch(closeCart())}>
              Checkout
            </Link>
            <button type="button" onClick={() => dispatch(closeCart())}>
              Comparison
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
