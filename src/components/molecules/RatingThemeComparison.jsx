import { Rating } from '../../molecules/Rating/Rating';

const titleStyle = { fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' };
const panelStyle = { padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' };
const labelStyle = { fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 };

export function RatingThemeComparison() {
  return (
    <div>
      <div style={titleStyle}>Theme Comparison</div>
      <div className="theme-comparison">
        <div data-theme="light" style={panelStyle}>
          <div style={labelStyle}>LIGHT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
            <Rating readOnly value={4} max={5} showValue showMax showCount count={1234} label="Average rating" />
            <Rating readOnly variant="starsOnly" value={3} max={5} size="sm" aria-label="3 out of 5" />
          </div>
        </div>
        <div data-theme="dark" style={panelStyle}>
          <div style={labelStyle}>DARK</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
            <Rating readOnly value={4} max={5} showValue showMax showCount count={1234} label="Average rating" />
            <Rating readOnly variant="starsOnly" value={3} max={5} size="sm" aria-label="3 out of 5" />
          </div>
        </div>
      </div>
    </div>
  );
}
