import type { CmsSingleProductBreadcrumbContent } from '@workspace/shared';
import { Link } from 'react-router-dom';
import './SingleProductBreadcrumb.css';

type SingleProductBreadcrumbProps = {
  content: CmsSingleProductBreadcrumbContent;
};

export function SingleProductBreadcrumb({ content }: SingleProductBreadcrumbProps) {
  return (
    <section className="single-product-breadcrumb-strip" aria-label="Product breadcrumb">
      <nav className="single-product-breadcrumb" aria-label="Breadcrumb">
        {content.items.map((item) => (
          <span key={item.label} className="single-product-breadcrumb-item">
            <Link to={item.href}>{item.label}</Link>
            <img src={content.separatorIconUrl} alt="" aria-hidden="true" />
          </span>
        ))}
        <span className="single-product-breadcrumb-divider" aria-hidden="true" />
        <span className="single-product-breadcrumb-current">{content.currentLabel}</span>
      </nav>
    </section>
  );
}
