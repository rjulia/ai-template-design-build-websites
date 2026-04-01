import type { CmsFeatureHighlight } from '@workspace/shared';
import './FeatureHighlights.css';

import { FeatureHighlightCard } from './FeatureHighlightCard';

type FeatureHighlightsProps = {
  items: CmsFeatureHighlight[];
};

export function FeatureHighlights({ items }: FeatureHighlightsProps) {
  return (
    <section className="feature-highlights" aria-label="Key benefits">
      {items.map((item) => (
        <FeatureHighlightCard key={item.id} item={item} />
      ))}
    </section>
  );
}
