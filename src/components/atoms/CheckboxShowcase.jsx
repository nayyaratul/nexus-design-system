import { useState } from 'react';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';

export function CheckboxShowcase() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox size="sm" checked />
            <span style={{ fontSize: '13px' }}>Small (16px)</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox size="md" checked />
            <span style={{ fontSize: '13px' }}>Medium (20px)</span>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>States</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox />
            <span style={{ fontSize: '13px' }}>Unchecked</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox checked />
            <span style={{ fontSize: '13px' }}>Checked</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox checked="indeterminate" />
            <span style={{ fontSize: '13px' }}>Indeterminate</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox disabled />
            <span style={{ fontSize: '13px', opacity: 0.48 }}>Disabled</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox checked disabled />
            <span style={{ fontSize: '13px', opacity: 0.48 }}>Checked + Disabled</span>
          </div>
        </div>
      </div>

      {/* Interactive */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Interactive</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox checked={checked1} onCheckedChange={setChecked1} id="demo-1" />
            <label htmlFor="demo-1" style={{ fontSize: '14px', cursor: 'pointer' }}>Enable notifications</label>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Checkbox checked={checked2} onCheckedChange={setChecked2} id="demo-2" />
            <label htmlFor="demo-2" style={{ fontSize: '14px', cursor: 'pointer' }}>Accept terms and conditions</label>
          </div>
        </div>
      </div>
    </div>
  );
}
