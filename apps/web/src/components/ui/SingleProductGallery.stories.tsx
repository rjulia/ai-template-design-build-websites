import type { Meta, StoryObj } from '@storybook/react';

import { SingleProductGallery } from './SingleProductGallery';
import { singleProductPageFallback } from '../../content/singleProductPageFallback';

const meta = {
  title: 'UI/SingleProductGallery',
  component: SingleProductGallery,
  tags: ['autodocs'],
  args: {
    gallery: singleProductPageFallback.productContent.gallery,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SingleProductGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
