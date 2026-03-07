import { VisuallyHidden } from './VisuallyHidden';
import { Settings } from 'lucide-react';

export default {
  title: 'Atoms/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {
    asChild: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    children: 'This text is visually hidden but accessible to screen readers',
  },
};

export const AsChild = {
  render: () => (
    <VisuallyHidden asChild>
      <button>Hidden button label</button>
    </VisuallyHidden>
  ),
};

export const WithIconButton = {
  render: () => (
    <button
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        border: '1px solid var(--color-border-default)',
        borderRadius: 'var(--radius-100)',
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
        cursor: 'pointer',
      }}
    >
      <Settings size={16} />
      <VisuallyHidden>Settings</VisuallyHidden>
    </button>
  ),
};
