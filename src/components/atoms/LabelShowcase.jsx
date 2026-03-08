import { Label } from '../../atoms/Label/Label';

export function LabelShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Label size="sm">Small label</Label>
          <Label size="md">Medium label</Label>
        </div>
      </div>

      {/* Required */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Required</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Label>Default label</Label>
          <Label required>Required label</Label>
        </div>
      </div>

      {/* States */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>States</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Label>Default</Label>
          <Label required>Required</Label>
          <Label disabled>Disabled</Label>
          <Label disabled required>Disabled + Required</Label>
        </div>
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Label size="sm">Small label</Label>
              <Label size="md">Medium label</Label>
              <Label required>Required</Label>
              <Label disabled>Disabled</Label>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Label size="sm">Small label</Label>
              <Label size="md">Medium label</Label>
              <Label required>Required</Label>
              <Label disabled>Disabled</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
