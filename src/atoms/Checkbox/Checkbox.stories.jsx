import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Checkbox',
  parameters: { design: figmaDesign('Atoms/Checkbox') },
  component: Checkbox,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: { checked: false },
};

export const Checked = {
  args: { checked: true },
};

export const Indeterminate = {
  args: { checked: 'indeterminate' },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-150)', alignItems: 'center' }}>
      <Checkbox size="sm" checked />
      <Checkbox size="md" checked />
    </div>
  ),
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-150)', alignItems: 'center' }}>
      <Checkbox />
      <Checkbox checked />
      <Checkbox checked="indeterminate" />
      <Checkbox disabled />
      <Checkbox checked disabled />
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', gap: 'var(--space-100)', alignItems: 'center' }}>
        <Checkbox checked={checked} onCheckedChange={setChecked} id="terms" />
        <label htmlFor="terms" style={{ fontSize: '14px', cursor: 'pointer' }}>Accept terms and conditions</label>
      </div>
    );
  },
};
