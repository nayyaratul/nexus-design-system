import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '../../atoms/ToggleGroup/ToggleGroup';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';

export function ToggleGroupShowcase() {
  const [single, setSingle] = useState('center');
  const [multi, setMulti] = useState(['bold']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Single-select */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Single Select</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <ToggleGroup type="single" value={single} onValueChange={setSingle}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>value: {single || 'none'}</span>
        </div>
      </div>

      {/* Multi-select */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Multi Select</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <ToggleGroup type="multiple" value={multi} onValueChange={setMulti}>
            <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
            <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
            <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
          </ToggleGroup>
          <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>value: [{multi.join(', ')}]</span>
        </div>
      </div>

      {/* Outline variant */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Default Variant</div>
        <ToggleGroup type="single" variant="default" defaultValue="center">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Vertical */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Vertical</div>
        <ToggleGroup type="single" orientation="vertical" defaultValue="center">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* With Icons */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Icons</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <ToggleGroup type="single" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft size={16} /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter size={16} /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight size={16} /></ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Justify"><AlignJustify size={16} /></ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="sm" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft size={14} /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter size={14} /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight size={14} /></ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="lg" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft size={20} /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter size={20} /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight size={20} /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
                <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
              <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
                <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
