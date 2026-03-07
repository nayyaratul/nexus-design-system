import { useState } from 'react';
import { Calendar } from './Calendar';

export default {
  title: 'Atoms/Calendar',
  component: Calendar,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    weekStartsOn: { control: { type: 'number', min: 0, max: 6 } },
  },
};

export const Default = {
  args: {},
};

export const WithSelected = {
  render: () => {
    const [date, setDate] = useState(new Date());
    return (
      <div>
        <Calendar value={date} onChange={setDate} />
        <p style={{ marginTop: 'var(--space-100)', fontSize: 'var(--font-size-200)', color: 'var(--color-text-secondary)' }}>
          Selected: {date?.toLocaleDateString()}
        </p>
      </div>
    );
  },
};

export const MondayStart = {
  args: { weekStartsOn: 1 },
};

export const WithMinMax = {
  render: () => {
    const today = new Date();
    const min = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
    const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10);
    return <Calendar min={min} max={max} />;
  },
};

export const WithDisabledDates = {
  render: () => {
    const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6;
    return <Calendar disabledDates={isWeekend} />;
  },
};

export const DateRange = {
  render: () => {
    const [range, setRange] = useState({ start: null, end: null });
    const label =
      range.start && range.end
        ? `${range.start.toLocaleDateString()} – ${range.end.toLocaleDateString()}`
        : range.start
          ? `Start: ${range.start.toLocaleDateString()} (select end)`
          : 'Select start date';
    return (
      <div>
        <Calendar mode="range" value={range} onChange={setRange} />
        <p style={{ marginTop: 'var(--space-100)', fontSize: 'var(--font-size-200)', color: 'var(--color-text-secondary)' }}>
          {label}
        </p>
      </div>
    );
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-200)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-text-tertiary)', marginBottom: '8px', textTransform: 'uppercase' }}>Small</div>
        <Calendar size="sm" />
      </div>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-text-tertiary)', marginBottom: '8px', textTransform: 'uppercase' }}>Medium</div>
        <Calendar size="md" />
      </div>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-text-tertiary)', marginBottom: '8px', textTransform: 'uppercase' }}>Large</div>
        <Calendar size="lg" />
      </div>
    </div>
  ),
};
