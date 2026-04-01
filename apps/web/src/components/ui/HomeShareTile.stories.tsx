import type { Meta, StoryObj } from '@storybook/react';

import { HomeShareTile } from './HomeShareTile';
import { homePageFallback } from '../../content/homePageFallback';

const meta = {
  title: 'UI/HomeShareTile',
  component: HomeShareTile,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 220 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    tile: homePageFallback.shareContent.tiles[0],
  },
} satisfies Meta<typeof HomeShareTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
