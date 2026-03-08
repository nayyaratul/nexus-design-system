import { Slider } from '../../atoms/Slider/Slider';

export function SliderShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Single thumb */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Single Thumb</div>
        <div style={{ maxWidth: '300px' }}>
          <Slider defaultValue={[50]} />
        </div>
      </div>

      {/* Range */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Range (Two Thumbs)</div>
        <div style={{ maxWidth: '300px' }}>
          <Slider defaultValue={[25, 75]} />
        </div>
      </div>

      {/* With showValue */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Value Display</div>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '300px', flex: 1 }}>
            <Slider defaultValue={[40]} showValue />
          </div>
          <div style={{ maxWidth: '300px', flex: 1 }}>
            <Slider defaultValue={[20, 80]} showValue />
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--ink-3)', marginBottom: '6px' }}>sm</div>
            <Slider defaultValue={[60]} size="sm" />
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--ink-3)', marginBottom: '6px' }}>md</div>
            <Slider defaultValue={[60]} size="md" />
          </div>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Disabled</div>
        <div style={{ maxWidth: '300px' }}>
          <Slider defaultValue={[50]} disabled />
        </div>
      </div>

      {/* Stepped */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Stepped (step=10)</div>
        <div style={{ maxWidth: '300px' }}>
          <Slider defaultValue={[30]} step={10} showValue />
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Slider defaultValue={[50]} />
              <Slider defaultValue={[20, 70]} />
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Slider defaultValue={[50]} />
              <Slider defaultValue={[20, 70]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
