import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { HomeRangeCard } from './HomeRangeCard';
import { homePageFallback } from '../../content/homePageFallback';

const meta = {
  title: 'UI/HomeRangeCard',
  component: HomeRangeCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ maxWidth: 381 }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    item: homePageFallback.rangeItems[0],
  },
} satisfies Meta<typeof HomeRangeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
