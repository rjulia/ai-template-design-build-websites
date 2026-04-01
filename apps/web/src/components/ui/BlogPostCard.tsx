import type { CmsBlogPost } from '@workspace/shared';
import { Link } from 'react-router-dom';

type BlogPostCardProps = {
  post: CmsBlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="blog-post-card">
      <img src={post.imageUrl} alt={post.title} className="blog-post-card-image" />
      <div className="blog-post-meta">
        <span>{post.meta.author}</span>
        <span>{post.meta.date}</span>
        <span>{post.meta.category}</span>
      </div>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={post.readMoreHref} className="blog-read-more">
        Read more
      </Link>
    </article>
  );
}
