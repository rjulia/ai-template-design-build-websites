import type { CmsSingleProductDescriptionContent } from '@workspace/shared';
import { useMemo, useState } from 'react';
import './SingleProductDescriptionSection.css';

type SingleProductDescriptionSectionProps = {
  content: CmsSingleProductDescriptionContent;
};

export function SingleProductDescriptionSection({ content }: SingleProductDescriptionSectionProps) {
  const [activeTabId, setActiveTabId] = useState(content.tabs[0]?.id ?? 'description');

  const paragraphContent = useMemo(() => {
    if (activeTabId === 'additional-information') {
      return content.additionalInformationParagraphs;
    }

    if (activeTabId === 'reviews') {
      return [content.reviewsSummary];
    }

    return content.descriptionParagraphs;
  }, [activeTabId, content.additionalInformationParagraphs, content.descriptionParagraphs, content.reviewsSummary]);

  return (
    <section className="single-product-description" aria-label="Product description and reviews">
      <nav className="single-product-description-tabs" aria-label="Product detail tabs">
        {content.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={tab.id === activeTabId ? 'is-active' : ''}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="single-product-description-copy">
        {paragraphContent.map((paragraph, index) => (
          <p key={`${activeTabId}-${index + 1}`}>{paragraph}</p>
        ))}
      </div>

      <div className="single-product-description-gallery">
        {content.galleryImages.map((image) => (
          <figure key={image.id}>
            <img src={image.imageUrl} alt={image.alt} />
          </figure>
        ))}
      </div>
    </section>
  );
}
