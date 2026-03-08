import { Skeleton } from '../../atoms/Skeleton/Skeleton';

export function SkeletonShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Basic shapes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Basic Shapes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 320 }}>
          <Skeleton width="100%" height={16} />
          <Skeleton width="80%" height={12} />
          <Skeleton width={200} height={120} borderRadius="var(--radius-150)" />
        </div>
      </div>

      {/* Circles */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Circles</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Skeleton circle width={32} />
          <Skeleton circle width={40} />
          <Skeleton circle width={48} />
          <Skeleton circle width={64} />
        </div>
      </div>

      {/* Text block (count) */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Text Block (count=4)</div>
        <div style={{ maxWidth: 320 }}>
          <Skeleton width="100%" height={14} count={4} />
        </div>
      </div>

      {/* Card pattern */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Card Pattern</div>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', maxWidth: 320, padding: '16px', border: '1px solid var(--rule)', borderRadius: '8px' }}>
          <Skeleton circle width={44} />
          <div style={{ flex: 1 }}>
            <Skeleton width="50%" height={14} />
            <div style={{ marginTop: '8px' }}>
              <Skeleton width="100%" height={11} count={3} />
            </div>
          </div>
        </div>
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Skeleton circle width={40} />
              <div style={{ flex: 1 }}>
                <Skeleton width="100%" height={14} />
                <div style={{ marginTop: '8px' }}>
                  <Skeleton width="80%" height={11} count={2} />
                </div>
              </div>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Skeleton circle width={40} />
              <div style={{ flex: 1 }}>
                <Skeleton width="100%" height={14} />
                <div style={{ marginTop: '8px' }}>
                  <Skeleton width="80%" height={11} count={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
