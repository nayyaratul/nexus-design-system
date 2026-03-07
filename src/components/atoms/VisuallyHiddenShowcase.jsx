import { VisuallyHidden } from '../../atoms/VisuallyHidden/VisuallyHidden';
import { Settings, Heart, Search, X } from 'lucide-react';

const iconBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-100)',
  background: 'var(--color-bg-primary)',
  color: 'var(--color-text-primary)',
  cursor: 'pointer',
};

export function VisuallyHiddenShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Icon buttons with hidden labels */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Icon Buttons with Hidden Labels</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button style={iconBtnStyle}>
            <Settings size={16} />
            <VisuallyHidden>Settings</VisuallyHidden>
          </button>
          <button style={iconBtnStyle}>
            <Heart size={16} />
            <VisuallyHidden>Favourite</VisuallyHidden>
          </button>
          <button style={iconBtnStyle}>
            <Search size={16} />
            <VisuallyHidden>Search</VisuallyHidden>
          </button>
          <button style={iconBtnStyle}>
            <X size={16} />
            <VisuallyHidden>Close</VisuallyHidden>
          </button>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--ink-2)', marginTop: '12px', lineHeight: 1.5 }}>
          Each button above contains a <code style={{ fontSize: '11px', padding: '1px 5px', background: 'var(--card-bg)', border: '1px solid var(--rule)', borderRadius: '4px' }}>&lt;VisuallyHidden&gt;</code> label.
          Screen readers will announce "Settings", "Favourite", "Search", and "Close" respectively.
        </p>
      </div>

      {/* Explanation */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>How It Works</div>
        <div style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: '560px' }}>
          <p style={{ margin: '0 0 8px' }}>
            <strong>VisuallyHidden</strong> renders content that is invisible to sighted users but remains in the DOM for assistive technologies like screen readers.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            It uses the standard "sr-only" CSS technique: absolute positioning, 1px dimensions, hidden overflow, and clipping.
          </p>
          <p style={{ margin: 0 }}>
            Use <code style={{ fontSize: '11px', padding: '1px 5px', background: 'var(--card-bg)', border: '1px solid var(--rule)', borderRadius: '4px' }}>asChild</code> to apply the hidden styles directly to a child element instead of wrapping in an extra span.
          </p>
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={iconBtnStyle}>
                <Settings size={16} />
                <VisuallyHidden>Settings</VisuallyHidden>
              </button>
              <button style={iconBtnStyle}>
                <Heart size={16} />
                <VisuallyHidden>Favourite</VisuallyHidden>
              </button>
              <button style={iconBtnStyle}>
                <Search size={16} />
                <VisuallyHidden>Search</VisuallyHidden>
              </button>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={iconBtnStyle}>
                <Settings size={16} />
                <VisuallyHidden>Settings</VisuallyHidden>
              </button>
              <button style={iconBtnStyle}>
                <Heart size={16} />
                <VisuallyHidden>Favourite</VisuallyHidden>
              </button>
              <button style={iconBtnStyle}>
                <Search size={16} />
                <VisuallyHidden>Search</VisuallyHidden>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
