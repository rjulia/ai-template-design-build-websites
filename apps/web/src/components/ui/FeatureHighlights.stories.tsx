import type { Meta, StoryObj } from '@storybook/react';

import { FeatureHighlights } from './FeatureHighlights';
import { contactPageFallback } from '../../content/contactPageFallback';

const meta = {
  title: 'UI/FeatureHighlights',
  component: FeatureHighlights,
  tags: ['autodocs'],
  args: {
    items: contactPageFallback.featureHighlights,
  },
} satisfies Meta<typeof FeatureHighlights>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
