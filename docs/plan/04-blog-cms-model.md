# Blog Page CMS Model

## Content Type

- Name: `blog-page`
- Collection name: `blog_pages`
- Purpose: structured content model for the Furniro blog page implementation

## Required Fields

1. `title` (`string`)
2. `slug` (`uid`, derived from `title`)
3. `headerContent` (`json`)
4. `heroContent` (`json`)
5. `posts` (`json`)
6. `categories` (`json`)
7. `recentPosts` (`json`)
8. `featureHighlights` (`json`)
9. `footerContent` (`json`)
10. `pagination` (`json`)

## Optionality Strategy

- At CMS level, all blocks are required to ensure the blog page renders predictably.
- At frontend level, fallback content is used when no published blog entry exists in Strapi.
- Post-level optional values (like future tags) should be handled inside each JSON item schema.
