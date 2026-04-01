import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { BlogSidebar } from './BlogSidebar';
import { blogPageFallback } from '../../content/blogPageFallback';

const meta = {
  title: 'UI/BlogSidebar',
  component: BlogSidebar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    categories: blogPageFallback.categories,
    recentPosts: blogPageFallback.recentPosts,
  },
} satisfies Meta<typeof BlogSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
