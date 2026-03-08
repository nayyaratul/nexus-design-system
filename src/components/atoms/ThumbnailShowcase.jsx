import { Thumbnail } from '../../atoms/Thumbnail/Thumbnail';

export function ThumbnailShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', alignItems: 'end', gap: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <Thumbnail src="https://picsum.photos/200/200" alt="XS thumbnail" size="xs" />
            <div style={{ fontSize: '10px', color: 'var(--ink-3)', marginTop: '6px' }}>xs (32)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Thumbnail src="https://picsum.photos/200/200" alt="SM thumbnail" size="sm" />
            <div style={{ fontSize: '10px', color: 'var(--ink-3)', marginTop: '6px' }}>sm (48)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Thumbnail src="https://picsum.photos/200/200" alt="MD thumbnail" size="md" />
            <div style={{ fontSize: '10px', color: 'var(--ink-3)', marginTop: '6px' }}>md (64)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Thumbnail src="https://picsum.photos/200/200" alt="LG thumbnail" size="lg" />
            <div style={{ fontSize: '10px', color: 'var(--ink-3)', marginTop: '6px' }}>lg (96)</div>
          </div>
        </div>
      </div>

      {/* With Overlay */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Overlay (hover to reveal)</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Thumbnail src="https://picsum.photos/200/200" alt="Overlay md" size="md" overlay onClick={() => {}} />
          <Thumbnail src="https://picsum.photos/200/200" alt="Overlay lg" size="lg" overlay onClick={() => {}} />
        </div>
      </div>

      {/* Without Overlay */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Without Overlay</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Thumbnail src="https://picsum.photos/200/200" alt="No overlay md" size="md" />
          <Thumbnail src="https://picsum.photos/200/200" alt="No overlay lg" size="lg" />
        </div>
      </div>

      {/* Error State */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Error State</div>
        <div style={{ display: 'flex', alignItems: 'end', gap: '16px' }}>
          <Thumbnail src="/invalid-image.jpg" alt="Broken" size="sm" />
          <Thumbnail src="/invalid-image.jpg" alt="Broken" size="md" />
          <Thumbnail src="/invalid-image.jpg" alt="Broken" size="lg" />
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div data-theme="light" style={{ flex: 1, padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Thumbnail src="https://picsum.photos/200/200" alt="Light md" size="md" overlay onClick={() => {}} />
              <Thumbnail src="https://picsum.photos/200/200" alt="Light lg" size="lg" overlay onClick={() => {}} />
            </div>
          </div>
          <div data-theme="dark" style={{ flex: 1, padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Thumbnail src="https://picsum.photos/200/200" alt="Dark md" size="md" overlay onClick={() => {}} />
              <Thumbnail src="https://picsum.photos/200/200" alt="Dark lg" size="lg" overlay onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
