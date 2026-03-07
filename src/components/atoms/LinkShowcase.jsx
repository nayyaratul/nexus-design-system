import { Link } from '../../atoms/Link/Link';

export function LinkShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Variants */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Variants</div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="#">Default link</Link>
          <Link href="#" variant="subtle">Subtle link</Link>
        </div>
      </div>

      {/* External */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>External</div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="#" external>External link</Link>
          <Link href="#" variant="subtle" external>Subtle external</Link>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Disabled</div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="#" disabled>Disabled default</Link>
          <Link href="#" variant="subtle" disabled>Disabled subtle</Link>
        </div>
      </div>

      {/* Inline context */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Inline Context</div>
        <p style={{ fontSize: '14px', lineHeight: 1.6, maxWidth: '520px' }}>
          Links inherit the surrounding font size, so you can place a <Link href="#">default link</Link> or
          a <Link href="#" variant="subtle">subtle link</Link> inside a paragraph and it will flow
          naturally with the text. An <Link href="#" external>external link</Link> appends an icon automatically.
        </p>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <Link href="#">Default link</Link>
              <Link href="#" variant="subtle">Subtle link</Link>
              <Link href="#" external>External link</Link>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <Link href="#">Default link</Link>
              <Link href="#" variant="subtle">Subtle link</Link>
              <Link href="#" external>External link</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
