import { useState } from 'react';
import { RadioGroup, RadioItem } from '../../atoms/RadioGroup/RadioGroup';

export function RadioGroupShowcase() {
  const [plan, setPlan] = useState('monthly');
  const [size, setSize] = useState('md');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Vertical (default) */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Vertical (Default)</div>
        <RadioGroup value={plan} onValueChange={setPlan}>
          <RadioItem value="monthly">Monthly billing</RadioItem>
          <RadioItem value="annual">Annual billing</RadioItem>
          <RadioItem value="lifetime">Lifetime access</RadioItem>
        </RadioGroup>
      </div>

      {/* Horizontal */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Horizontal</div>
        <RadioGroup value={size} onValueChange={setSize} orientation="horizontal">
          <RadioItem value="sm">Small</RadioItem>
          <RadioItem value="md">Medium</RadioItem>
          <RadioItem value="lg">Large</RadioItem>
        </RadioGroup>
      </div>

      {/* Disabled */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Disabled</div>
        <RadioGroup value="selected" disabled>
          <RadioItem value="selected">Selected (disabled)</RadioItem>
          <RadioItem value="other">Other (disabled)</RadioItem>
        </RadioGroup>
      </div>

      {/* Mixed disabled */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Mixed Disabled Items</div>
        <RadioGroup value="a" onValueChange={() => {}}>
          <RadioItem value="a">Available option</RadioItem>
          <RadioItem value="b" disabled>Unavailable option</RadioItem>
          <RadioItem value="c">Another available option</RadioItem>
        </RadioGroup>
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <RadioGroup value="monthly" disabled={false}>
              <RadioItem value="monthly">Monthly billing</RadioItem>
              <RadioItem value="annual">Annual billing</RadioItem>
              <RadioItem value="lifetime">Lifetime access</RadioItem>
            </RadioGroup>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <RadioGroup value="monthly" disabled={false}>
              <RadioItem value="monthly">Monthly billing</RadioItem>
              <RadioItem value="annual">Annual billing</RadioItem>
              <RadioItem value="lifetime">Lifetime access</RadioItem>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
