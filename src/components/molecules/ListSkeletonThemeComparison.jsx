import { ListSkeleton } from '../../molecules/ListSkeleton/ListSkeleton';

const titleStyle = { fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' };
const panelStyle = { padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' };
const labelStyle = { fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 };

export function ListSkeletonThemeComparison() {
  return (
    <div>
      <div style={titleStyle}>Theme Comparison</div>
      <div className="theme-comparison">
        <div data-theme="light" style={panelStyle}>
          <div style={labelStyle}>LIGHT</div>
          <div style={{ maxWidth: 320 }}>
            <ListSkeleton layout="list" count={4} lines={2} hasLeading hasTrailing={false} />
          </div>
        </div>
        <div data-theme="dark" style={panelStyle}>
          <div style={labelStyle}>DARK</div>
          <div style={{ maxWidth: 320 }}>
            <ListSkeleton layout="list" count={4} lines={2} hasLeading hasTrailing={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
