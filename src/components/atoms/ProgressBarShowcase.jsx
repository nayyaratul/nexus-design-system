import { useState, useEffect } from 'react';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';

export function ProgressBarShowcase() {
  const [animValue, setAnimValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimValue((v) => (v >= 100 ? 0 : v + 5));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: 'var(--font-size-200)', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: 'var(--letter-spacing-wide)', textTransform: 'uppercase', marginBottom: 'var(--space-100)' }}>Sizes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-100)', maxWidth: 400 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '32px', color: 'var(--ink-3)' }}>xs</span>
            <ProgressBar value={65} size="xs" style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '32px', color: 'var(--ink-3)' }}>sm</span>
            <ProgressBar value={65} size="sm" style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '32px', color: 'var(--ink-3)' }}>md</span>
            <ProgressBar value={65} size="md" style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '32px', color: 'var(--ink-3)' }}>lg</span>
            <ProgressBar value={65} size="lg" style={{ flex: 1 }} />
          </div>
        </div>
      </div>

      {/* Variants */}
      <div>
        <div style={{ fontSize: 'var(--font-size-200)', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: 'var(--letter-spacing-wide)', textTransform: 'uppercase', marginBottom: 'var(--space-100)' }}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-100)', maxWidth: 400 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '60px', color: 'var(--ink-3)' }}>default</span>
            <ProgressBar value={80} variant="default" size="md" style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '60px', color: 'var(--ink-3)' }}>success</span>
            <ProgressBar value={100} variant="success" size="md" style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '60px', color: 'var(--ink-3)' }}>warning</span>
            <ProgressBar value={50} variant="warning" size="md" style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '60px', color: 'var(--ink-3)' }}>error</span>
            <ProgressBar value={30} variant="error" size="md" style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <span style={{ fontSize: 'var(--font-size-200)', minWidth: '60px', color: 'var(--ink-3)' }}>subtle</span>
            <ProgressBar value={60} variant="subtle" size="md" style={{ flex: 1 }} />
          </div>
        </div>
      </div>

      {/* Subtle on dark */}
      <div>
        <div style={{ fontSize: 'var(--font-size-200)', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: 'var(--letter-spacing-wide)', textTransform: 'uppercase', marginBottom: 'var(--space-100)' }}>Subtle on dark</div>
        <div style={{ background: 'var(--grey-90)', padding: 'var(--space-200)', borderRadius: 'var(--radius-150)', maxWidth: 400 }}>
          <ProgressBar value={60} variant="subtle" size="xs" />
        </div>
      </div>

      {/* Animated */}
      <div>
        <div style={{ fontSize: 'var(--font-size-200)', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: 'var(--letter-spacing-wide)', textTransform: 'uppercase', marginBottom: 'var(--space-100)' }}>Animated</div>
        <div style={{ maxWidth: 400 }}>
          <ProgressBar value={animValue} size="lg" />
          <div style={{ fontSize: 'var(--font-size-200)', color: 'var(--ink-3)', marginTop: 'var(--space-075)' }}>{animValue}%</div>
        </div>
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: 'var(--font-size-200)', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: 'var(--letter-spacing-wide)', textTransform: 'uppercase', marginBottom: 'var(--space-100)' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: 'var(--space-250)', background: 'var(--color-bg-theme-panel)', borderRadius: 'var(--radius-150)', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: 'var(--font-size-200)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-100)', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-125)' }}>
              <ProgressBar value={70} size="md" />
              <ProgressBar value={70} size="md" variant="success" />
            </div>
          </div>
          <div data-theme="dark" style={{ padding: 'var(--space-250)', background: 'var(--color-bg-theme-panel)', borderRadius: 'var(--radius-150)', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: 'var(--font-size-200)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-100)', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-125)' }}>
              <ProgressBar value={70} size="md" />
              <ProgressBar value={70} size="md" variant="success" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
