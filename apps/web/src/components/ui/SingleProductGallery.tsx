import type { CmsSingleProductContent } from '@workspace/shared';
import { useState } from 'react';
import './SingleProductGallery.css';

type SingleProductGalleryProps = {
  gallery: CmsSingleProductContent['gallery'];
};

export function SingleProductGallery({ gallery }: SingleProductGalleryProps) {
  const [activeImage, setActiveImage] = useState({
    imageUrl: gallery.mainImageUrl,
    alt: gallery.mainImageAlt,
    id: 'main',
  });

  return (
    <section className="single-product-gallery" aria-label="Product images">
      <div className="single-product-gallery-thumbnails">
        {gallery.thumbnails.map((thumbnail) => (
          <button
            key={thumbnail.id}
            type="button"
            className={`single-product-gallery-thumbnail ${activeImage.id === thumbnail.id ? 'is-active' : ''}`}
            onClick={() =>
              setActiveImage({
                imageUrl: thumbnail.imageUrl,
                alt: thumbnail.alt,
                id: thumbnail.id,
              })
            }
            aria-label={`View ${thumbnail.alt}`}
          >
            <img src={thumbnail.imageUrl} alt="" aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="single-product-gallery-main">
        <img src={activeImage.imageUrl} alt={activeImage.alt} />
      </div>
    </section>
  );
}
