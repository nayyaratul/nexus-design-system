import { Textarea } from '../../atoms/Textarea/Textarea';

export function TextareaShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 400 }}>
          <Textarea size="sm" placeholder="Small textarea" />
          <Textarea size="md" placeholder="Medium textarea" />
          <Textarea size="lg" placeholder="Large textarea" />
        </div>
      </div>

      {/* States */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>States</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 400 }}>
          <Textarea placeholder="Default" />
          <Textarea placeholder="Error state" error />
          <Textarea placeholder="Disabled" disabled />
        </div>
      </div>

      {/* Resize options */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Resize Options</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 400 }}>
          <Textarea placeholder="Vertical resize (default)" resize="vertical" />
          <Textarea placeholder="Both directions" resize="both" />
          <Textarea placeholder="No resize" resize="none" />
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Textarea placeholder="Default" rows={2} />
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Textarea placeholder="Default" rows={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
