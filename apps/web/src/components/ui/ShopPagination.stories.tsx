import type { Meta, StoryObj } from '@storybook/react';

import { ShopPagination } from './ShopPagination';
import { shopPageFallback } from '../../content/shopPageFallback';

const meta = {
  title: 'UI/ShopPagination',
  component: ShopPagination,
  tags: ['autodocs'],
  args: {
    currentPage: shopPageFallback.pagination.currentPage,
    pages: shopPageFallback.pagination.pages,
    nextLabel: shopPageFallback.pagination.nextLabel,
  },
} satisfies Meta<typeof ShopPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
