import type { Meta, StoryObj } from '@storybook/react';

import { FeatureHighlightCard } from './FeatureHighlightCard';
import { contactPageFallback } from '../../content/contactPageFallback';

const meta = {
  title: 'UI/FeatureHighlightCard',
  component: FeatureHighlightCard,
  tags: ['autodocs'],
  args: {
    item: contactPageFallback.featureHighlights[0],
  },
} satisfies Meta<typeof FeatureHighlightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
