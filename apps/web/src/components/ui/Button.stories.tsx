import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { buttonVariants } from './Button.variants';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Action',
  },
  argTypes: {
    variant: {
      options: buttonVariants,
      control: { type: 'select' },
      description: 'Visual style variant for the button',
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Action',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Action',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Action',
    disabled: true,
  },
};
