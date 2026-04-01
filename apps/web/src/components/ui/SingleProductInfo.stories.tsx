import type { Meta, StoryObj } from '@storybook/react';

import { SingleProductInfo } from './SingleProductInfo';
import { singleProductPageFallback } from '../../content/singleProductPageFallback';

const meta = {
  title: 'UI/SingleProductInfo',
  component: SingleProductInfo,
  tags: ['autodocs'],
  args: {
    content: singleProductPageFallback.productContent,
  },
} satisfies Meta<typeof SingleProductInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
