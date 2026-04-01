import type { CmsCollectionResponse, CmsHomePageContent } from '@workspace/shared';
import { Link } from 'react-router-dom';
import './HomePage.css';

import { useAppDispatch } from '../app/hooks';
import { HomeProductCard, HomeRangeCard, HomeShareTile, FurniroFooter, FurniroHeader } from '../components/ui';
import { homePageFallback } from '../content/homePageFallback';
import { mapHomeProductToCartEntry } from '../features/cart/cartMappers';
import { addItem, openCart } from '../features/cart/cartSlice';
import { useGetHomePageBySlugQuery } from '../services/cmsApi';

function normalizeCollectionEntry<T>(response: CmsCollectionResponse<T> | undefined): T | undefined {
  const entry = response?.data?.[0];

  if (!entry) {
    return undefined;
  }

  if (entry.attributes) {
    return entry.attributes;
  }

  return entry as T;
}

function getHomePageContent(data: CmsCollectionResponse<CmsHomePageContent> | undefined): CmsHomePageContent {
  const normalized = normalizeCollectionEntry<CmsHomePageContent>(data);

  if (!normalized) {
    return homePageFallback;
  }

  return {
    ...homePageFallback,
    ...normalized,
    headerContent: {
      ...homePageFallback.headerContent,
      ...normalized.headerContent,
    },
    heroContent: {
      ...homePageFallback.heroContent,
      ...normalized.heroContent,
    },
    rangeItems: normalized.rangeItems ?? homePageFallback.rangeItems,
    products: normalized.products ?? homePageFallback.products,
    productOverlayActions: normalized.productOverlayActions ?? homePageFallback.productOverlayActions,
    inspirationContent: {
      ...homePageFallback.inspirationContent,
      ...normalized.inspirationContent,
    },
    shareContent: {
      ...homePageFallback.shareContent,
      ...normalized.shareContent,
      tiles: normalized.shareContent?.tiles ?? homePageFallback.shareContent.tiles,
    },
    footerContent: {
      ...homePageFallback.footerContent,
      ...normalized.footerContent,
    },
  };
}

export function HomePage() {
  const dispatch = useAppDispatch();
  const { data } = useGetHomePageBySlugQuery('home');
  const content = getHomePageContent(data);

  const handleHeaderActionClick = (actionName: string) => {
    if (actionName === 'cart') {
      dispatch(openCart());
    }
  };

  const handleAddToCart = (product: CmsHomePageContent['products'][number]) => {
    dispatch(addItem(mapHomeProductToCartEntry(product)));
  };

  return (
    <div className="home-page">
      <FurniroHeader content={content.headerContent} onActionClick={handleHeaderActionClick} />

      <section className="home-hero" style={{ backgroundImage: `url(${content.heroContent.backgroundImageUrl})` }}>
        <div className="home-hero-panel">
          <p>{content.heroContent.eyebrow}</p>
          <h1>{content.heroContent.title}</h1>
          <span>{content.heroContent.description}</span>
          <Link to={content.heroContent.ctaHref} className="home-hero-cta">
            {content.heroContent.ctaLabel}
          </Link>
        </div>
      </section>

      <main>
        <section className="home-range" aria-label="Browse the range">
          <h2>{content.rangeSectionTitle}</h2>
          <p>{content.rangeSectionDescription}</p>
          <div className="home-range-grid">
            {content.rangeItems.map((item) => (
              <HomeRangeCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="home-products" aria-label="Featured products">
          <h2>{content.productsSectionTitle}</h2>
          <div className="home-products-grid">
            {content.products.map((product) => (
              <HomeProductCard
                key={product.id}
                product={product}
                addToCartLabel={content.addToCartLabel}
                overlayActions={content.productOverlayActions}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <Link to={content.showMoreHref} className="home-show-more">
            {content.showMoreLabel}
          </Link>
        </section>

        <section className="home-inspirations" aria-label="Rooms inspiration">
          <div className="home-inspirations-copy">
            <h2>{content.inspirationContent.title}</h2>
            <p>{content.inspirationContent.description}</p>
            <Link to={content.inspirationContent.ctaHref} className="home-inspirations-cta">
              {content.inspirationContent.ctaLabel}
            </Link>
          </div>

          <div className="home-inspirations-gallery">
            <article className="home-inspiration-primary">
              <img src={content.inspirationContent.primaryImageUrl} alt={content.inspirationContent.activeSlideTitle} />
              <div className="home-inspiration-caption">
                <p>
                  {content.inspirationContent.activeSlideLabel} <span>{content.inspirationContent.activeSlideCategory}</span>
                </p>
                <h3>{content.inspirationContent.activeSlideTitle}</h3>
              </div>
              <button type="button" className="home-inspiration-action" aria-label="Open inspiration detail">
                <img src={content.inspirationContent.primaryActionIconUrl} alt="" aria-hidden="true" />
              </button>
            </article>

            <article className="home-inspiration-secondary">
              <img src={content.inspirationContent.secondaryImageUrl} alt="Inspiration room 2" />
            </article>

            <article className="home-inspiration-tertiary">
              <img src={content.inspirationContent.tertiaryImageUrl} alt="Inspiration room 3" />
            </article>

            <button type="button" className="home-inspiration-next" aria-label="Next inspiration">
              <img src={content.inspirationContent.navigationIconUrl} alt="" aria-hidden="true" />
            </button>
          </div>
        </section>

        <section className="home-share" aria-label="Community gallery">
          <p>{content.shareContent.subtitle}</p>
          <h2>{content.shareContent.title}</h2>
          <div className="home-share-grid">
            {content.shareContent.tiles.map((tile) => (
              <HomeShareTile key={tile.id} tile={tile} />
            ))}
          </div>
        </section>
      </main>

      <FurniroFooter brandName={content.headerContent.brandName} content={content.footerContent} />
    </div>
  );
}
