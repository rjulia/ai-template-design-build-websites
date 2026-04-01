import type { Meta, StoryObj } from '@storybook/react';

import { CartTotalsCard } from './CartTotalsCard';
import { cartPageFallback } from '../../content/cartPageFallback';

const meta = {
  title: 'UI/CartTotalsCard',
  component: CartTotalsCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 393 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    content: cartPageFallback.totals,
    subtotalValue: cartPageFallback.totals.subtotalValue,
    totalValue: cartPageFallback.totals.totalValue,
  },
} satisfies Meta<typeof CartTotalsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
