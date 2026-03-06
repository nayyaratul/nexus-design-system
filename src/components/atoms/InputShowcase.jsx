import { Input } from '../../atoms/Input/Input';

export function InputShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 320 }}>
          <Input size="sm" placeholder="Small (32px)" />
          <Input size="md" placeholder="Medium (40px)" />
          <Input size="lg" placeholder="Large (48px)" />
        </div>
      </div>

      {/* States */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>States</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 320 }}>
          <Input placeholder="Default" />
          <Input placeholder="Error state" error />
          <Input placeholder="Disabled" disabled />
        </div>
      </div>

      {/* Types */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Types</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 320 }}>
          <Input type="text" placeholder="Text input" />
          <Input type="email" placeholder="Email input" />
          <Input type="password" placeholder="Password input" />
          <Input type="number" placeholder="Number input" />
          <Input type="search" placeholder="Search input" />
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div data-theme="light" style={{ flex: 1, padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Input placeholder="Default" />
              <Input placeholder="Error" error />
            </div>
          </div>
          <div data-theme="dark" style={{ flex: 1, padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Input placeholder="Default" />
              <Input placeholder="Error" error />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
