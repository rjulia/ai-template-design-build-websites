import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { HomeProductCard } from './HomeProductCard';
import { homePageFallback } from '../../content/homePageFallback';

const meta = {
  title: 'UI/HomeProductCard',
  component: HomeProductCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ maxWidth: 285 }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    product: homePageFallback.products[0],
    addToCartLabel: homePageFallback.addToCartLabel,
    seeDetailLabel: 'See detail',
    overlayActions: homePageFallback.productOverlayActions,
  },
} satisfies Meta<typeof HomeProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithOverlay: Story = {
  args: {
    product: homePageFallback.products[1],
  },
};
