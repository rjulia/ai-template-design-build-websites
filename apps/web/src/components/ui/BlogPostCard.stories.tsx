import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { BlogPostCard } from './BlogPostCard';
import { blogPageFallback } from '../../content/blogPageFallback';

const meta = {
  title: 'UI/BlogPostCard',
  component: BlogPostCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    post: blogPageFallback.posts[0],
  },
} satisfies Meta<typeof BlogPostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
