import type { CmsHomeRangeItem } from '@workspace/shared';
import { Link } from 'react-router-dom';
import './HomeRangeCard.css';

type HomeRangeCardProps = {
  item: CmsHomeRangeItem;
};

export function HomeRangeCard({ item }: HomeRangeCardProps) {
  return (
    <Link className="home-range-card" to={item.href}>
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
    </Link>
  );
}
