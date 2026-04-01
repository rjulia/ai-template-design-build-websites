import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { SingleProductBreadcrumb } from './SingleProductBreadcrumb';
import { singleProductPageFallback } from '../../content/singleProductPageFallback';

const meta = {
  title: 'UI/SingleProductBreadcrumb',
  component: SingleProductBreadcrumb,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    content: singleProductPageFallback.breadcrumbContent,
  },
} satisfies Meta<typeof SingleProductBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
