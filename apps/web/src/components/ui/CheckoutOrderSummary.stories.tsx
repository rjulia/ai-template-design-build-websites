import type { Meta, StoryObj } from '@storybook/react';

import { CheckoutOrderSummary } from './CheckoutOrderSummary';
import { checkoutPageFallback } from '../../content/checkoutPageFallback';

const meta = {
  title: 'UI/CheckoutOrderSummary',
  component: CheckoutOrderSummary,
  tags: ['autodocs'],
  args: {
    content: checkoutPageFallback.summaryContent,
    items: checkoutPageFallback.summaryContent.fallbackItems,
    subtotalLabel: 'Rs. 250,000.00',
    totalLabel: 'Rs. 250,000.00',
  },
  argTypes: {
    content: {
      control: { type: 'object' },
      description: 'Labels, payment methods, and call-to-action copy for the summary panel.',
    },
    items: {
      control: { type: 'object' },
      description: 'Order line items rendered in the summary list.',
    },
    subtotalLabel: {
      control: { type: 'text' },
      description: 'Displayed subtotal value.',
    },
    totalLabel: {
      control: { type: 'text' },
      description: 'Displayed total value.',
    },
  },
} satisfies Meta<typeof CheckoutOrderSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};
