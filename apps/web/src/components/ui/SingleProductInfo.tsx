import type { CmsSingleProductContent } from '@workspace/shared';
import { type ReactNode, useState } from 'react';
import './SingleProductInfo.css';

type SingleProductInfoProps = {
  content: CmsSingleProductContent;
  onAddToCart?: (quantity: number) => void;
};

type DetailRowProps = {
  label: string;
  value: ReactNode;
};

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="single-product-info-detail-row">
      <span>{label}</span>
      <strong>:</strong>
      <span>{value}</span>
    </div>
  );
}

export function SingleProductInfo({ content, onAddToCart }: SingleProductInfoProps) {
  const [quantity, setQuantity] = useState(Math.max(1, content.quantityDefault));
  const [selectedSizeId, setSelectedSizeId] = useState(content.sizes.find((size) => size.isSelected)?.id ?? content.sizes[0]?.id);
  const [selectedColorId, setSelectedColorId] = useState(
    content.colors.find((color) => color.isSelected)?.id ?? content.colors[0]?.id,
  );

  return (
    <section className="single-product-info" aria-label="Product details">
      <h1>{content.title}</h1>
      <p className="single-product-info-price">{content.priceLabel}</p>

      <div className="single-product-info-rating-row">
        <div className="single-product-info-stars" aria-hidden="true">
          {Array.from({ length: content.rating.fullStars }).map((_, index) => (
            <img key={`star-${index + 1}`} src={content.rating.fullStarIconUrl} alt="" />
          ))}
          {content.rating.hasHalfStar ? <img src={content.rating.halfStarIconUrl} alt="" /> : null}
        </div>
        <span className="single-product-info-reviews">{content.rating.reviewLabel}</span>
      </div>

      <p className="single-product-info-description">{content.shortDescription}</p>

      <div className="single-product-info-options">
        <div className="single-product-info-option-group">
          <span>Size</span>
          <div className="single-product-info-size-options">
            {content.sizes.map((size) => (
              <button
                key={size.id}
                type="button"
                className={selectedSizeId === size.id ? 'is-active' : ''}
                onClick={() => setSelectedSizeId(size.id)}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        <div className="single-product-info-option-group">
          <span>Color</span>
          <div className="single-product-info-color-options">
            {content.colors.map((color) => (
              <button
                key={color.id}
                type="button"
                className={selectedColorId === color.id ? 'is-active' : ''}
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColorId(color.id)}
                aria-label={color.label}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="single-product-info-actions">
        <div className="single-product-info-quantity">
          <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
            -
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity">
            +
          </button>
        </div>

        <button
          type="button"
          className="single-product-info-primary-action"
          onClick={() => onAddToCart?.(quantity)}
        >
          {content.addToCartLabel}
        </button>
        <button type="button" className="single-product-info-secondary-action">
          + {content.compareLabel}
        </button>
      </div>

      <div className="single-product-info-divider" aria-hidden="true" />

      <div className="single-product-info-details">
        <DetailRow label="SKU" value={content.sku} />
        <DetailRow label="Category" value={content.category} />
        <DetailRow label="Tags" value={content.tags} />
        <DetailRow
          label="Share"
          value={
            <span className="single-product-info-share-icons">
              {content.shareIcons.map((icon) => (
                <a key={icon.id} href={icon.href} aria-label={icon.label}>
                  <img src={icon.iconUrl} alt="" aria-hidden="true" />
                </a>
              ))}
            </span>
          }
        />
      </div>
    </section>
  );
}
