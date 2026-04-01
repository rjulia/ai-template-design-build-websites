import type { Meta, StoryObj } from '@storybook/react';

import { CheckoutBillingForm } from './CheckoutBillingForm';
import { checkoutPageFallback } from '../../content/checkoutPageFallback';

const meta = {
  title: 'UI/CheckoutBillingForm',
  component: CheckoutBillingForm,
  tags: ['autodocs'],
  args: {
    title: checkoutPageFallback.billingTitle,
    fields: checkoutPageFallback.billingFields,
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Section heading shown above the billing form fields.',
    },
    fields: {
      control: { type: 'object' },
      description: 'Field definitions used to render billing inputs.',
    },
  },
} satisfies Meta<typeof CheckoutBillingForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};
