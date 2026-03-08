import { Spinner } from '../../atoms/Spinner/Spinner';

export function SpinnerShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Spin variant sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Spin Variant — Sizes</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {['xs', 'sm', 'md', 'lg', 'xl'].map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Spinner size={size} />
              <span style={{ fontSize: '10px', color: 'var(--ink-3)' }}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dots variant */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Dots Variant</div>
        <Spinner variant="dots" />
      </div>

      {/* Theme comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Spinner size="md" />
              <Spinner variant="dots" />
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Spinner size="md" />
              <Spinner variant="dots" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
