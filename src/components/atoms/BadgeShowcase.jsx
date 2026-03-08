import { Badge } from '../../atoms/Badge/Badge';

const sectionLabelStyle = {
  fontSize: 'var(--font-size-200)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase',
  marginBottom: 'var(--space-150)',
};

export function BadgeShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      {/* Status pills */}
      <div>
        <div style={sectionLabelStyle}>Status Pills</div>
        <div style={{ display: 'flex', gap: 'var(--space-100)', flexWrap: 'wrap' }}>
          <Badge variant="success">Approved</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Rejected</Badge>
          <Badge variant="info">In Review</Badge>
          <Badge variant="default">Draft</Badge>
        </div>
      </div>

      {/* Count badges */}
      <div>
        <div style={sectionLabelStyle}>Count Badges</div>
        <div style={{ display: 'flex', gap: 'var(--space-150)', alignItems: 'center' }}>
          <Badge count={3} variant="error" />
          <Badge count={12} variant="info" />
          <Badge count={150} variant="default" />
        </div>
      </div>

      {/* Dot indicators */}
      <div>
        <div style={sectionLabelStyle}>Dot Indicators</div>
        <div style={{ display: 'flex', gap: 'var(--space-250)', alignItems: 'center' }}>
          {['success', 'error', 'warning', 'info', 'default'].map((v) => (
            <div
              key={v}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-075)',
                fontSize: 'var(--font-size-200)',
                color: 'var(--color-text-primary)',
              }}
            >
              <Badge dot variant={v} />
              <span style={{ textTransform: 'capitalize' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={sectionLabelStyle}>Sizes</div>
        <div style={{ display: 'flex', gap: 'var(--space-100)', alignItems: 'center' }}>
          <Badge size="sm" variant="info">Small</Badge>
          <Badge size="md" variant="info">Medium</Badge>
          <Badge size="lg" variant="info">Large</Badge>
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={sectionLabelStyle}>Theme Comparison</div>
        <div className="theme-comparison">
          <div
            data-theme="light"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-theme-panel)',
              borderRadius: 'var(--radius-200)',
              border: '1px solid var(--color-border-default)',
            }}
          >
            <div
              style={{
                fontSize: 'var(--font-size-100)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-150)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              LIGHT
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-075)', flexWrap: 'wrap' }}>
              <Badge variant="success">Approved</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="error">Rejected</Badge>
              <Badge variant="info">New</Badge>
            </div>
          </div>
          <div
            data-theme="dark"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-theme-panel)',
              borderRadius: 'var(--radius-200)',
              border: '1px solid var(--color-border-default)',
            }}
          >
            <div
              style={{
                fontSize: 'var(--font-size-100)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-150)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              DARK
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-075)', flexWrap: 'wrap' }}>
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
