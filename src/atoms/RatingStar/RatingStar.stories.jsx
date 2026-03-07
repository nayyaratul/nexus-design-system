import { RatingStar } from './RatingStar';

export default {
  title: 'Atoms/RatingStar',
  component: RatingStar,
  argTypes: {
    state: { control: 'select', options: ['filled', 'empty', 'half'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: { state: 'filled', size: 'md' },
};

export const Empty = {
  args: { state: 'empty', size: 'md' },
};

export const Half = {
  args: { state: 'half', size: 'md' },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-200)' }}>
      <RatingStar state="filled" size="xs" />
      <RatingStar state="filled" size="sm" />
      <RatingStar state="filled" size="md" />
      <RatingStar state="filled" size="lg" />
      <RatingStar state="filled" size="xl" />
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-200)' }}>
      <RatingStar state="filled" size="md" disabled />
      <RatingStar state="empty" size="md" disabled />
      <RatingStar state="half" size="md" disabled />
    </div>
  ),
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-200)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-050)' }}>
        <RatingStar state="filled" size="md" />
        <span style={{ fontSize: 'var(--font-size-200)', color: 'var(--color-text-secondary)' }}>Filled</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-050)' }}>
        <RatingStar state="empty" size="md" />
        <span style={{ fontSize: 'var(--font-size-200)', color: 'var(--color-text-secondary)' }}>Empty</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-050)' }}>
        <RatingStar state="half" size="md" />
        <span style={{ fontSize: 'var(--font-size-200)', color: 'var(--color-text-secondary)' }}>Half</span>
      </div>
    </div>
  ),
};
