import { Label } from './Label';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Label',
  parameters: { design: figmaDesign('Atoms/Label') },
  component: Label,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: { children: 'Email address' },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-150)', alignItems: 'center' }}>
      <Label size="sm">Small label</Label>
      <Label size="md">Medium label</Label>
    </div>
  ),
};

export const Required = {
  args: { children: 'Full name', required: true },
};

export const Disabled = {
  args: { children: 'Disabled label', disabled: true },
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-150)', alignItems: 'center' }}>
      <Label>Default</Label>
      <Label required>Required</Label>
      <Label disabled>Disabled</Label>
    </div>
  ),
};
