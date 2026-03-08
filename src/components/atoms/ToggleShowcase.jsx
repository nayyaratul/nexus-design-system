import { useState } from 'react';
import { Toggle } from '../../atoms/Toggle/Toggle';
import { Bold, Italic, Underline } from 'lucide-react';

export function ToggleShowcase() {
  const [pressed, setPressed] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Variants */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Variants</div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Toggle>Default</Toggle>
            <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>off</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Toggle pressed>Default</Toggle>
            <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>on</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Toggle variant="outline">Outline</Toggle>
            <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>off</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Toggle variant="outline" pressed>Outline</Toggle>
            <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>on</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Toggle variant="pill">Pill</Toggle>
            <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>off</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Toggle variant="pill" pressed>Pill</Toggle>
            <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>on</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Toggle size="sm" variant="outline" pressed>Small</Toggle>
          <Toggle size="md" variant="outline" pressed>Medium</Toggle>
          <Toggle size="lg" variant="outline" pressed>Large</Toggle>
        </div>
      </div>

      {/* Icon-only vs Icon + Text */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Icon-only vs Icon + Text</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Toggle variant="outline" pressed aria-label="Bold"><Bold size={16} /></Toggle>
          <Toggle variant="outline" aria-label="Italic"><Italic size={16} /></Toggle>
          <Toggle variant="outline" aria-label="Underline"><Underline size={16} /></Toggle>
          <div style={{ width: '1px', height: '24px', background: 'var(--color-border-default)' }} />
          <Toggle variant="outline" pressed><Bold size={16} /> Bold</Toggle>
          <Toggle variant="outline"><Italic size={16} /> Italic</Toggle>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Disabled</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Toggle disabled>Default Off</Toggle>
          <Toggle disabled pressed>Default On</Toggle>
          <Toggle variant="outline" disabled>Outline Off</Toggle>
          <Toggle variant="outline" disabled pressed>Outline On</Toggle>
        </div>
      </div>

      {/* Controlled */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Controlled</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Toggle variant="outline" pressed={pressed} onPressedChange={setPressed}>
            <Bold size={16} /> Bold
          </Toggle>
          <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>
            pressed: {pressed ? 'true' : 'false'}
          </span>
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Toggle>Default</Toggle>
                <Toggle pressed>Pressed</Toggle>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Toggle variant="outline">Outline</Toggle>
                <Toggle variant="outline" pressed>Pressed</Toggle>
              </div>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Toggle>Default</Toggle>
                <Toggle pressed>Pressed</Toggle>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Toggle variant="outline">Outline</Toggle>
                <Toggle variant="outline" pressed>Pressed</Toggle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
