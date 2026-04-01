import type { CmsHomeProduct, CmsHomeProductAction } from '@workspace/shared';
import { Link } from 'react-router-dom';
import './HomeProductCard.css';

type HomeProductCardProps = {
  product: CmsHomeProduct;
  addToCartLabel: string;
  overlayActions: CmsHomeProductAction[];
};

export function HomeProductCard({ product, addToCartLabel, overlayActions }: HomeProductCardProps) {
  return (
    <article className="home-product-card">
      <Link to={product.href} className="home-product-image-link" aria-label={product.name}>
        <img src={product.imageUrl} alt={product.name} className="home-product-image" />
      </Link>

      {product.badgeLabel ? (
        <span className={`home-product-badge ${product.badgeTone === 'new' ? 'is-new' : 'is-discount'}`}>{product.badgeLabel}</span>
      ) : null}

      {product.showOverlay ? (
        <div className="home-product-overlay">
          <button type="button" className="home-product-overlay-cta">
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
