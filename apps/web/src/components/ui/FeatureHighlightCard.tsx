import type { CmsFeatureHighlight } from '@workspace/shared';
import './FeatureHighlightCard.css';

type FeatureHighlightCardProps = {
  item: CmsFeatureHighlight;
};

export function FeatureHighlightCard({ item }: FeatureHighlightCardProps) {
  return (
    <div className="feature-highlight-item">
      <img src={item.iconUrl} alt="" aria-hidden="true" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
    </div>
  );
}
