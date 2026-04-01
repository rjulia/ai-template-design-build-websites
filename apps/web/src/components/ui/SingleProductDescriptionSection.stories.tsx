import type { Meta, StoryObj } from '@storybook/react';

import { SingleProductDescriptionSection } from './SingleProductDescriptionSection';
import { singleProductPageFallback } from '../../content/singleProductPageFallback';

const meta = {
  title: 'UI/SingleProductDescriptionSection',
  component: SingleProductDescriptionSection,
  tags: ['autodocs'],
  args: {
    content: singleProductPageFallback.descriptionContent,
  },
} satisfies Meta<typeof SingleProductDescriptionSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
