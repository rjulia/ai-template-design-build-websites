import type { CmsFooterContent } from '@workspace/shared';
import { NavLink } from 'react-router-dom';

type FurniroFooterProps = {
  brandName: string;
  content: CmsFooterContent;
};

export function FurniroFooter({ brandName, content }: FurniroFooterProps) {
  return (
    <footer className="furniro-footer">
      <div className="furniro-footer-grid">
        <div className="furniro-footer-brand">
          <h2>{brandName}.</h2>
          <p>{content.address.join(' ')}</p>
        </div>

        <div className="furniro-footer-column">
          <h3>Links</h3>
          {content.links.map((link) => (
            <NavLink key={link.label} to={link.href} className="furniro-footer-link">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="furniro-footer-column">
          <h3>Help</h3>
          {content.helpLinks.map((link) => (
            <NavLink key={link.label} to={link.href} className="furniro-footer-link">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="furniro-footer-column">
          <h3>Newsletter</h3>
          <form className="furniro-newsletter-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder={content.newsletterPlaceholder} aria-label="Newsletter email" />
            <button type="submit">{content.newsletterActionLabel}</button>
          </form>
        </div>
      </div>

      <p className="furniro-footer-copy">{content.copyright}</p>
    </footer>
  );
}
