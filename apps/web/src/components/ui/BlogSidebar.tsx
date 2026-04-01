import type { CmsBlogRecentPost, CmsBlogSidebarCategory } from '@workspace/shared';
import { Link } from 'react-router-dom';

type BlogSidebarProps = {
  categories: CmsBlogSidebarCategory[];
  recentPosts: CmsBlogRecentPost[];
};

export function BlogSidebar({ categories, recentPosts }: BlogSidebarProps) {
  return (
    <aside className="blog-sidebar">
      <div className="blog-search-shell">
        <input type="search" aria-label="Search posts" />
      </div>

      <section className="blog-sidebar-block">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.label}>
              <span>{category.label}</span>
              <span>{category.count}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="blog-sidebar-block">
        <h2>Recent Posts</h2>
        <ul className="blog-recent-list">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <img src={post.imageUrl} alt={post.title} />
              <div>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                <p>{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
