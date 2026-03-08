import { Text } from '../../atoms/Text/Text';

export function TextShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Variants */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Text variant="body">Body — Your next module is ready for review.</Text>
          <Text variant="bodyLg">Body Large — Course enrolment confirmed.</Text>
          <Text variant="caption">Caption — Updated 3 hours ago</Text>
          <Text variant="micro">Micro — 12 of 24 modules complete</Text>
          <Text variant="overline">Overline — Learning Path</Text>
        </div>
      </div>

      {/* Weights */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Weights</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Text weight="regular">Regular (400) — Default body text</Text>
          <Text weight="medium">Medium (500) — Emphasis text</Text>
          <Text weight="semibold">Semibold (600) — Strong text</Text>
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Text variant="body">Your leave request has been approved.</Text>
            <Text variant="caption">Submitted on 5 March 2026</Text>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Text variant="body">Your leave request has been approved.</Text>
            <Text variant="caption">Submitted on 5 March 2026</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
