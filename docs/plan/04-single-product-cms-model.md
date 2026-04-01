# Single Product Page CMS Model

## Content Type

- Name: `single-product-page`
- Collection name: `single_product_pages`
- Purpose: structured content model for the Furniro single product implementation

## Required Fields

1. `title` (`string`)
2. `slug` (`uid`, derived from `title`)
3. `headerContent` (`json`)
4. `breadcrumbContent` (`json`)
5. `productContent` (`json`)
6. `descriptionContent` (`json`)
7. `relatedProductsContent` (`json`)
8. `footerContent` (`json`)

## Optionality Strategy

- At CMS level, all top-level sections are required so the page is always complete.
- At frontend level, fallback content is used if no published `single-product-page` entry exists for a requested slug.
- In `productContent`, interactive defaults (selected size/color and starting quantity) can be overridden per product entry.
