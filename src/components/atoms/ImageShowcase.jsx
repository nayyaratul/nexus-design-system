import { Image } from '../../atoms/Image/Image';

export function ImageShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Normal 4:3 */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Normal (4:3 source)</div>
        <div style={{ maxWidth: 480 }}>
          <Image src="https://picsum.photos/800/600" alt="A standard 4:3 photograph" />
        </div>
      </div>

      {/* Letterboxed 16:9 */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Letterboxed (16:9 source)</div>
        <div style={{ maxWidth: 480 }}>
          <Image src="https://picsum.photos/800/450" alt="A 16:9 image with blurred letterbox bars" />
        </div>
      </div>

      {/* Portrait 3:4 */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Portrait (3:4 source)</div>
        <div style={{ maxWidth: 480 }}>
          <Image src="https://picsum.photos/450/600" alt="A 3:4 portrait image with blurred pillarbox bars" />
        </div>
      </div>

      {/* Error state */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Error State</div>
        <div style={{ maxWidth: 480 }}>
          <Image src="/invalid-image.jpg" alt="Broken image" />
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Image src="https://picsum.photos/800/600" alt="Normal image in light theme" />
              <Image src="https://picsum.photos/800/450" alt="Letterboxed image in light theme" />
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Image src="https://picsum.photos/800/600" alt="Normal image in dark theme" />
              <Image src="https://picsum.photos/800/450" alt="Letterboxed image in dark theme" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
