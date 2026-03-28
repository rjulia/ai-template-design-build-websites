import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Card } from './Card';
import { SectionHeading } from './SectionHeading';

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <SectionHeading
        title="Starter Card"
        subtitle="Reusable container for feature sections and content blocks."
      />
      <p style={{ marginTop: '1rem' }}>This component is ready to map Figma sections quickly.</p>
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
        <Button>Save</Button>
        <Button variant="ghost">Cancel</Button>
      </div>
    </Card>
  ),
};
