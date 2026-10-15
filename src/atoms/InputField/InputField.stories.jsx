import { InputField } from './InputField';
import { Icon } from '../Icon/Icon';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/InputField',
  parameters: { design: figmaDesign('Atoms/InputField') },
  component: InputField,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    kind: { control: 'select', options: ['default', 'search', 'password', 'date', 'time'] },
    iconPosition: { control: 'select', options: ['left', 'right'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export const Default = {
  args: {
    placeholder: 'Text input',
  },
};

export const Kinds = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 360 }}>
      <InputField placeholder="Default (no icon)" />
      <InputField kind="search" placeholder="Search courses" />
      <InputField kind="date" placeholder="Start date" iconPosition="right" />
      <InputField kind="time" placeholder="Start time" iconPosition="right" />
      <InputField kind="password" placeholder="Enter password" />
    </div>
  ),
};

export const IconPositions = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 360 }}>
      <InputField
        placeholder="Icon on the left"
        icon={<Icon name="Calendar" size="sm" aria-hidden />}
        iconPosition="left"
      />
      <InputField
        placeholder="Icon on the right"
        icon={<Icon name="Clock" size="sm" aria-hidden />}
        iconPosition="right"
      />
    </div>
  ),
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 360 }}>
      <InputField kind="search" placeholder="Default" />
      <InputField kind="search" placeholder="Error" error />
      <InputField kind="search" placeholder="Disabled" disabled />
    </div>
  ),
};

