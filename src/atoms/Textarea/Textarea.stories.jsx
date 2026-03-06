import { Textarea } from './Textarea';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    resize: { control: 'select', options: ['none', 'vertical', 'both'] },
    rows: { control: 'number' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export const Default = {
  args: { placeholder: 'Enter a description...' },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 400 }}>
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </div>
  ),
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 400 }}>
      <Textarea placeholder="Default" />
      <Textarea placeholder="Error state" error />
      <Textarea placeholder="Disabled" disabled />
    </div>
  ),
};

export const ResizeOptions = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 400 }}>
      <Textarea placeholder="Resize: vertical (default)" resize="vertical" />
      <Textarea placeholder="Resize: both" resize="both" />
      <Textarea placeholder="Resize: none" resize="none" />
    </div>
  ),
};
