import type { Meta, StoryObj } from '@storybook/react';

import { cartPageFallback } from '../../content/cartPageFallback';
import { CartTotalsCard } from './CartTotalsCard';

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
  },
} satisfies Meta<typeof CartTotalsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
