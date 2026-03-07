import { useState, useEffect } from 'react';
import { Timer } from '../../atoms/Timer/Timer';

const sectionLabel = {
  fontSize: 'var(--font-size-200)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--ink-3)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase',
  marginBottom: 'var(--space-150)',
};

export function TimerShowcase() {
  const [seconds, setSeconds] = useState(125);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s <= 0 ? 125 : s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      <div>
        <div style={sectionLabel}>Default (d: h: m)</div>
        <Timer value={125760} />
      </div>

      <div>
        <div style={sectionLabel}>Format mm:ss</div>
        <Timer value={125} format="mm:ss" />
      </div>

      <div>
        <div style={sectionLabel}>Format hh:mm:ss</div>
        <Timer value={3661} format="hh:mm:ss" />
      </div>

      <div>
        <div style={sectionLabel}>Sizes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
          <Timer value={90} size="sm" />
          <Timer value={90} size="md" />
          <Timer value={90} size="lg" />
        </div>
      </div>

      <div>
        <div style={sectionLabel}>Variants</div>
        <div style={{ display: 'flex', gap: 'var(--space-200)', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <Timer value={300} variant="default" />
          <Timer value={240} variant="warning" />
          <Timer value={45} variant="danger" />
        </div>
      </div>

      <div>
        <div style={sectionLabel}>String value (preformatted)</div>
        <Timer value="—" /> <Timer value="1:30:00" />
      </div>

      <div>
        <div style={sectionLabel}>Live update (tabular-nums)</div>
        <p style={{ fontSize: 'var(--font-size-200)', color: 'var(--ink-2)', marginBottom: 'var(--space-100)' }}>
          Time remaining: <Timer value={seconds} size="lg" /> — digits do not shift.
        </p>
      </div>
    </div>
  );
}
