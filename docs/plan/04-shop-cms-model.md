# Shop Page CMS Model

## Content Type

- Name: `shop-page`
- Collection name: `shop_pages`
- Purpose: structured content model for the Furniro shop page implementation

## Required Fields

1. `title` (`string`)
2. `slug` (`uid`, derived from `title`)
3. `headerContent` (`json`)
4. `heroContent` (`json`)
5. `toolbarContent` (`json`)
6. `products` (`json`)
7. `productOverlayActions` (`json`)
8. `addToCartLabel` (`string`)
9. `pagination` (`json`)
10. `featureHighlights` (`json`)
11. `footerContent` (`json`)

## Optionality Strategy

- At CMS level, all top-level sections are required to keep the shop page complete.
- At frontend level, fallback content is used if no published `shop-page` entry exists.
- Product-level optional values (old price, badge, overlay state) remain optional per item in `products`.
