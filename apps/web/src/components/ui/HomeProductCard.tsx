import type { CmsHomeProduct, CmsHomeProductAction } from '@workspace/shared';
import { Link } from 'react-router-dom';
import './HomeProductCard.css';

type HomeProductCardProps = {
  product: CmsHomeProduct;
  addToCartLabel: string;
  overlayActions: CmsHomeProductAction[];
  onAddToCart?: (product: CmsHomeProduct) => void;
  seeDetailLabel?: string;
};

export function HomeProductCard({
  product,
  addToCartLabel,
  overlayActions,
  onAddToCart,
  seeDetailLabel = 'See detail',
}: HomeProductCardProps) {
  const shouldRenderOverlay = addToCartLabel.trim().length > 0 || overlayActions.length > 0;

  return (
    <article className={`home-product-card ${product.showOverlay ? 'is-overlay-visible' : ''}`}>
      <Link to={product.href} className="home-product-image-link" aria-label={product.name}>
        <img src={product.imageUrl} alt={product.name} className="home-product-image" />
      </Link>

      {product.badgeLabel ? (
        <span className={`home-product-badge ${product.badgeTone === 'new' ? 'is-new' : 'is-discount'}`}>{product.badgeLabel}</span>
      ) : null}

      {shouldRenderOverlay ? (
        <div className="home-product-overlay">
          <Link to={product.href} className="home-product-overlay-detail">
            {seeDetailLabel}
          </Link>
          <button type="button" className="home-product-overlay-cta" onClick={() => onAddToCart?.(product)}>
            {addToCartLabel}
          </button>
          <div className="home-product-overlay-actions">
            {overlayActions.map((action) => (
              <button key={action.id} type="button" className="home-product-overlay-action" aria-label={action.label}>
                <img src={action.iconUrl} alt="" aria-hidden="true" />
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="home-product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="home-product-pricing">
          <span>{product.priceLabel}</span>
          {product.originalPriceLabel ? <strong>{product.originalPriceLabel}</strong> : null}
        </div>
      </div>
    </article>
  );
}
