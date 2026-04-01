import type { Meta, StoryObj } from '@storybook/react';

import { CartTable } from './CartTable';
import { cartPageFallback } from '../../content/cartPageFallback';
import { detectCurrencyPrefix, parsePriceLabelToNumber } from '../../features/cart/cartUtils';

const storyItems = cartPageFallback.cartTable.items.map((item) => ({
  id: item.id,
  name: item.name,
  imageUrl: item.imageUrl,
  priceLabel: item.priceLabel,
  unitPrice: parsePriceLabelToNumber(item.priceLabel),
  currencyPrefix: detectCurrencyPrefix(item.priceLabel),
  quantity: item.quantity,
}));

const meta = {
  title: 'UI/CartTable',
  component: CartTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 817 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    content: cartPageFallback.cartTable,
    items: storyItems,
    onIncreaseQuantity: () => undefined,
    onDecreaseQuantity: () => undefined,
    onRemoveItem: () => undefined,
  },
} satisfies Meta<typeof CartTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
