import { Timer } from './Timer';

export default {
  title: 'Atoms/Timer',
  component: Timer,
  argTypes: {
    value: { control: 'number' },
    format: { control: 'select', options: ['d: h: m', 'mm:ss', 'hh:mm:ss'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'warning', 'danger'] },
  },
};

export const Default = {
  args: { value: 125760 }, // 1d 10h 56m in seconds
};

export const DaysHoursMinutes = {
  args: { value: 125760, format: 'd: h: m' },
};

export const FormatMmSs = {
  args: { value: 125, format: 'mm:ss' },
};

export const FormatHhMmSs = {
  args: { value: 3661, format: 'hh:mm:ss' },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Timer value={90} size="sm" />
      <Timer value={90} size="md" />
      <Timer value={90} size="lg" />
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-200)', alignItems: 'baseline' }}>
      <Timer value={300} variant="default" />
      <Timer value={240} variant="warning" />
      <Timer value={45} variant="danger" />
    </div>
  ),
};

export const StringValue = {
  args: { value: '—' },
};

export const PreformattedString = {
  args: { value: '1:30:00' },
};
