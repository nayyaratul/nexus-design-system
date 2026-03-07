import { Heading } from '../../atoms/Heading/Heading';

export function HeadingShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* All levels */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>All Levels</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Heading level={1}>Heading 1 — Display</Heading>
          <Heading level={2}>Heading 2 — Page Title</Heading>
          <Heading level={3}>Heading 3 — Section</Heading>
          <Heading level={4}>Heading 4 — Subsection</Heading>
          <Heading level={5}>Heading 5 — Card Title</Heading>
          <Heading level={6}>Heading 6 — Label</Heading>
        </div>
      </div>

      {/* Truncated */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Truncated</div>
        <div style={{ maxWidth: 320, border: '1px dashed var(--rule)', padding: '12px', borderRadius: '8px' }}>
          <Heading level={3} truncate>This is a very long heading that should be truncated</Heading>
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Heading level={3}>Course Overview</Heading>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Heading level={3}>Course Overview</Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
