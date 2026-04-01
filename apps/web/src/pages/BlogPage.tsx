import type { CmsBlogPageContent, CmsCollectionResponse } from '@workspace/shared';
import { Link } from 'react-router-dom';
import './BlogPage.css';

import { useAppDispatch } from '../app/hooks';
import { BlogPostCard, BlogSidebar, FeatureHighlights, FurniroFooter, FurniroHeader } from '../components/ui';
import { blogPageFallback } from '../content/blogPageFallback';
import { openCart } from '../features/cart/cartSlice';
import { useGetBlogPageBySlugQuery } from '../services/cmsApi';

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

function getBlogPageContent(data: CmsCollectionResponse<CmsBlogPageContent> | undefined): CmsBlogPageContent {
  const normalized = normalizeCollectionEntry<CmsBlogPageContent>(data);

  if (!normalized) {
    return blogPageFallback;
  }

  return {
    ...blogPageFallback,
    ...normalized,
    headerContent: {
      ...blogPageFallback.headerContent,
      ...normalized.headerContent,
    },
    heroContent: {
      ...blogPageFallback.heroContent,
      ...normalized.heroContent,
    },
    posts: normalized.posts ?? blogPageFallback.posts,
    categories: normalized.categories ?? blogPageFallback.categories,
    recentPosts: normalized.recentPosts ?? blogPageFallback.recentPosts,
    featureHighlights: normalized.featureHighlights ?? blogPageFallback.featureHighlights,
    footerContent: {
      ...blogPageFallback.footerContent,
      ...normalized.footerContent,
    },
    pagination: {
      ...blogPageFallback.pagination,
      ...normalized.pagination,
    },
  };
}

export function BlogPage() {
  const dispatch = useAppDispatch();
  const { data } = useGetBlogPageBySlugQuery('blog');
  const content = getBlogPageContent(data);

  const handleHeaderActionClick = (actionName: string) => {
    if (actionName === 'cart') {
      dispatch(openCart());
    }
  };

  return (
    <div className="blog-page">
      <FurniroHeader content={content.headerContent} onActionClick={handleHeaderActionClick} />

      <section
        className="blog-hero"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.68), rgba(255,255,255,0.68)), url(${content.heroContent.backgroundImageUrl})` }}
      >
        <img src={content.heroContent.logoImageUrl} alt="" aria-hidden="true" />
        <h1>{content.heroContent.title}</h1>
        <nav aria-label="Breadcrumb" className="blog-breadcrumb">
          {content.heroContent.breadcrumbs.map((crumb, index) => (
            <span key={crumb.label}>
              <Link to={crumb.href}>{crumb.label}</Link>
              {index < content.heroContent.breadcrumbs.length - 1 ? (
                <span className="blog-breadcrumb-separator">&gt;</span>
              ) : null}
            </span>
          ))}
        </nav>
      </section>

      <main className="blog-main">
        <div className="blog-content-shell">
          <section className="blog-posts-column">
            {content.posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </section>
          <BlogSidebar categories={content.categories} recentPosts={content.recentPosts} />
        </div>

        <nav className="blog-pagination" aria-label="Pagination">
          {content.pagination.pages.map((page) => (
            <button key={page} type="button" className={page === content.pagination.currentPage ? 'is-current' : ''}>
              {page}
            </button>
          ))}
          <button type="button" className="blog-pagination-next">
            {content.pagination.nextLabel}
          </button>
        </nav>
      </main>

      <FeatureHighlights items={content.featureHighlights} />
      <FurniroFooter brandName={content.headerContent.brandName} content={content.footerContent} />
    </div>
  );
}
