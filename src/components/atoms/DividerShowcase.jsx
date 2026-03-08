import { Divider } from '../../atoms/Divider/Divider';

export function DividerShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Horizontal variants */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Horizontal Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--ink-2)', marginBottom: '8px' }}>Solid</div>
            <Divider variant="solid" spacing="sm" />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--ink-2)', marginBottom: '8px' }}>Dashed</div>
            <Divider variant="dashed" spacing="sm" />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--ink-2)', marginBottom: '8px' }}>Dotted</div>
            <Divider variant="dotted" spacing="sm" />
          </div>
        </div>
      </div>

      {/* With label */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Label</div>
        <Divider label="Section" spacing="sm" />
        <Divider label="Or continue with" variant="dashed" spacing="sm" />
      </div>

      {/* Vertical */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Vertical</div>
        <div style={{ display: 'flex', alignItems: 'center', height: '40px', gap: '0' }}>
          <span style={{ fontSize: '13px' }}>Home</span>
          <Divider orientation="vertical" spacing="md" />
          <span style={{ fontSize: '13px' }}>Settings</span>
          <Divider orientation="vertical" spacing="md" />
          <span style={{ fontSize: '13px' }}>Profile</span>
        </div>
      </div>

      {/* Spacing */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Spacing Sizes</div>
        <div style={{ fontSize: '12px', color: 'var(--ink-2)' }}>Small (8px)</div>
        <Divider spacing="sm" />
        <div style={{ fontSize: '12px', color: 'var(--ink-2)' }}>Medium (16px)</div>
        <Divider spacing="md" />
        <div style={{ fontSize: '12px', color: 'var(--ink-2)' }}>Large (24px)</div>
        <Divider spacing="lg" />
        <div style={{ fontSize: '12px', color: 'var(--ink-2)' }}>End</div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Divider variant="solid" spacing="sm" />
            <Divider variant="dashed" spacing="sm" />
            <Divider label="Section" spacing="sm" />
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Divider variant="solid" spacing="sm" />
            <Divider variant="dashed" spacing="sm" />
            <Divider label="Section" spacing="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
