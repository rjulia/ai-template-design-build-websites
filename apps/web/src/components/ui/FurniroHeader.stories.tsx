import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { FurniroHeader } from './FurniroHeader';
import { contactPageFallback } from '../../content/contactPageFallback';

const meta = {
  title: 'UI/FurniroHeader',
  component: FurniroHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    content: contactPageFallback.headerContent,
  },
} satisfies Meta<typeof FurniroHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
