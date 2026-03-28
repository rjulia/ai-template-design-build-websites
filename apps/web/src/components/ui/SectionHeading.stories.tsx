import type { Meta, StoryObj } from '@storybook/react';

import { SectionHeading } from './SectionHeading';

const meta = {
  title: 'UI/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
  args: {
    title: 'Section Title',
    subtitle: 'Optional supporting copy to clarify intent.',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    subtitle: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const TitleOnly: Story = {
  args: {
    title: 'Heading Without Subtitle',
    subtitle: undefined,
  },
};
