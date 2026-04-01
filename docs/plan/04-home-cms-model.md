# Home Page CMS Model

## Content Type

- Name: `home-page`
- Collection name: `home_pages`
- Purpose: structured content model for the Furniro home page implementation

## Required Fields

1. `title` (`string`)
2. `slug` (`uid`, derived from `title`)
3. `headerContent` (`json`)
4. `heroContent` (`json`)
5. `rangeSectionTitle` (`string`)
6. `rangeSectionDescription` (`string`)
7. `rangeItems` (`json`)
8. `productsSectionTitle` (`string`)
9. `showMoreLabel` (`string`)
10. `showMoreHref` (`string`)
11. `products` (`json`)
12. `productOverlayActions` (`json`)
13. `addToCartLabel` (`string`)
14. `inspirationContent` (`json`)
15. `shareContent` (`json`)
16. `footerContent` (`json`)

## Optionality Strategy

- At CMS level, all content blocks are required so the home page stays complete and predictable.
- At frontend level, fallback content is used when there is no published `home-page` entry yet.
- Product-specific optional fields (like old price, badge, overlay state) remain optional inside each JSON item.
