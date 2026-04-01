import type { Meta, StoryObj } from '@storybook/react';

import { cartPageFallback } from '../../content/cartPageFallback';
import { CartTable } from './CartTable';

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
  },
} satisfies Meta<typeof CartTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
