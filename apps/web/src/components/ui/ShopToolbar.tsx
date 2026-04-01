import type { CmsShopToolbarContent } from '@workspace/shared';
import './ShopToolbar.css';

type ShopToolbarProps = {
  content: CmsShopToolbarContent;
};

export function ShopToolbar({ content }: ShopToolbarProps) {
  return (
    <section className="shop-toolbar" aria-label="Shop controls">
      <div className="shop-toolbar-left">
        <button type="button" className="shop-toolbar-filter">
          <img src={content.filterIconUrl} alt="" aria-hidden="true" />
          <span>{content.filterLabel}</span>
        </button>

        <button type="button" className="shop-toolbar-icon" aria-label="Grid view">
          <img src={content.gridIconUrl} alt="" aria-hidden="true" />
        </button>

        <button type="button" className="shop-toolbar-icon" aria-label="List view">
          <img src={content.listIconUrl} alt="" aria-hidden="true" />
        </button>

        <div className="shop-toolbar-results">{content.resultsLabel}</div>
      </div>

      <div className="shop-toolbar-right">
        <div className="shop-toolbar-select">
          <span>{content.showLabel}</span>
          <button type="button">{content.showValue}</button>
        </div>

        <div className="shop-toolbar-select">
          <span>{content.sortLabel}</span>
          <button type="button" className="shop-toolbar-sort-button">
            {content.sortValue}
          </button>
        </div>
      </div>
    </section>
  );
}
