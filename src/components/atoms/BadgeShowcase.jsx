import { Badge } from '../../atoms/Badge/Badge';

export function BadgeShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Status pills */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Status Pills</div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Badge variant="success">Approved</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Rejected</Badge>
          <Badge variant="info">In Review</Badge>
          <Badge variant="default">Draft</Badge>
        </div>
      </div>

      {/* Count badges */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Count Badges</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Badge count={3} variant="error" />
          <Badge count={12} variant="info" />
          <Badge count={150} variant="default" />
        </div>
      </div>

      {/* Dot indicators */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Dot Indicators</div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {['success', 'error', 'warning', 'info', 'default'].map(v => (
            <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--ink)' }}>
              <Badge dot variant={v} />
              <span style={{ textTransform: 'capitalize' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Badge size="sm" variant="info">Small</Badge>
          <Badge size="md" variant="info">Medium</Badge>
          <Badge size="lg" variant="info">Large</Badge>
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div data-theme="light" style={{ flex: 1, padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <Badge variant="success">Approved</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="error">Rejected</Badge>
              <Badge variant="info">New</Badge>
            </div>
          </div>
          <div data-theme="dark" style={{ flex: 1, padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <Badge variant="success">Approved</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="error">Rejected</Badge>
              <Badge variant="info">New</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
