import type { Meta, StoryObj } from '@storybook/react';

import { ShopToolbar } from './ShopToolbar';
import { shopPageFallback } from '../../content/shopPageFallback';

const meta = {
  title: 'UI/ShopToolbar',
  component: ShopToolbar,
  tags: ['autodocs'],
  args: {
    content: shopPageFallback.toolbarContent,
  },
} satisfies Meta<typeof ShopToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
