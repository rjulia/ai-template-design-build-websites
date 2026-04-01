import type { CmsHomeProduct, CmsSingleProductContent } from '@workspace/shared';

import type { CartEntryPayload } from './cartTypes';

export function mapHomeProductToCartEntry(product: CmsHomeProduct, quantity = 1): CartEntryPayload {
  return {
    id: product.id,
    name: product.name,
    imageUrl: product.imageUrl,
    priceLabel: product.priceLabel,
    quantity,
    href: product.href,
  };
}

export function mapSingleProductToCartEntry(product: CmsSingleProductContent, slug: string, quantity = 1): CartEntryPayload {
  return {
    id: slug,
    name: product.title,
    imageUrl: product.gallery.mainImageUrl,
    priceLabel: product.priceLabel,
    quantity,
    href: `/shop/${slug}`,
  };
}
