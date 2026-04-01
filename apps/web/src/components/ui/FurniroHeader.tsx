import type { CmsHeaderContent } from '@workspace/shared';
import { NavLink } from 'react-router-dom';
import './FurniroHeader.css';

type FurniroHeaderProps = {
  content: CmsHeaderContent;
  onActionClick?: (actionName: string) => void;
};

export function FurniroHeader({ content, onActionClick }: FurniroHeaderProps) {
  return (
    <header className="furniro-header" aria-label="Main site header">
      <div className="furniro-brand">
        <img src={content.brandLogoUrl} alt="" aria-hidden="true" />
        <span>{content.brandName}</span>
      </div>

      <nav className="furniro-nav" aria-label="Primary navigation">
        {content.navItems.map((item) => (
          <NavLink key={item.label} to={item.href} className="furniro-nav-link">
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="furniro-actions" aria-label="Header actions">
        {content.actionIcons.map((icon) => (
          <button
            key={icon.name}
            type="button"
            className="furniro-icon-button"
            aria-label={icon.name}
            onClick={() => onActionClick?.(icon.name)}
          >
            <img src={icon.iconUrl} alt="" aria-hidden="true" />
          </button>
        ))}
      </div>
    </header>
  );
}
