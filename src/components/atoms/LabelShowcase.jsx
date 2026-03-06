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
    </div>
  );
}
