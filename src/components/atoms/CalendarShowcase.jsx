import { useState } from 'react';
import { Calendar } from '../../atoms/Calendar/Calendar';

const sty = {
  label: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--ink-3)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  demoArea: {
    background: 'var(--card-bg)',
    border: '1px solid var(--rule)',
    borderRadius: 'var(--radius)',
    padding: '24px',
  },
};

function InteractiveCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Calendar value={date} onChange={setDate} />
      <div style={{ fontSize: '13px', color: 'var(--ink-2)', paddingTop: '8px' }}>
        <strong>Selected:</strong> {date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  );
}

function CalendarRangeDemo() {
  const [range, setRange] = useState({ start: null, end: null });
  const label =
    range.start && range.end
      ? `${range.start.toLocaleDateString('en-US')} – ${range.end.toLocaleDateString('en-US')}`
      : range.start
        ? `Start: ${range.start.toLocaleDateString('en-US')} (select end)`
        : 'Select start date';
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Calendar mode="range" value={range} onChange={setRange} />
      <div style={{ fontSize: 'var(--font-size-200)', color: 'var(--color-text-secondary)', paddingTop: '8px' }}>
        {label}
      </div>
    </div>
  );
}

export function CalendarShowcase() {
  const today = new Date();
  const min = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
  const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Interactive */}
      <div>
        <div style={sty.label}>Interactive (click a day)</div>
        <div style={sty.demoArea}>
          <InteractiveCalendar />
        </div>
      </div>

      {/* Monday start */}
      <div>
        <div style={sty.label}>Monday start (weekStartsOn=1)</div>
        <div style={sty.demoArea}>
          <Calendar weekStartsOn={1} />
        </div>
      </div>

      {/* Min/Max range */}
      <div>
        <div style={sty.label}>Min/Max date range</div>
        <div style={sty.demoArea}>
          <Calendar min={min} max={max} />
        </div>
      </div>

      {/* Date range selection */}
      <div>
        <div style={sty.label}>Date range selection</div>
        <div style={sty.demoArea}>
          <CalendarRangeDemo />
        </div>
      </div>

      {/* Weekends disabled */}
      <div>
        <div style={sty.label}>Weekends disabled</div>
        <div style={sty.demoArea}>
          <Calendar disabledDates={(d) => d.getDay() === 0 || d.getDay() === 6} />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={sty.label}>Sizes</div>
        <div style={sty.demoArea}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {['sm', 'md', 'lg'].map((size) => (
              <div key={size}>
                <div style={{ fontSize: '10px', color: 'var(--ink-3)', marginBottom: '8px', fontWeight: 500 }}>{size.toUpperCase()}</div>
                <Calendar size={size} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={sty.label}>Theme comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Calendar size="sm" />
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Calendar size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
