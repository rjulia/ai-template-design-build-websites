import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { FurniroFooter } from './FurniroFooter';
import { contactPageFallback } from '../../content/contactPageFallback';

const meta = {
  title: 'UI/FurniroFooter',
  component: FurniroFooter,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    brandName: contactPageFallback.headerContent.brandName,
    content: contactPageFallback.footerContent,
  },
} satisfies Meta<typeof FurniroFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
