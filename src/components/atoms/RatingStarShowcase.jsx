import { RatingStar } from '../../atoms/RatingStar/RatingStar';

const labelStyle = {
  fontSize: 'var(--font-size-200)',
  color: 'var(--color-text-secondary)',
  fontWeight: 'var(--font-weight-medium)',
  letterSpacing: 'var(--letter-spacing-wide)',
};
const sectionLabelStyle = {
  fontSize: 'var(--font-size-100)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: 'var(--space-150)',
};
const blockStyle = {
  padding: 'var(--space-250)',
  background: 'var(--color-bg-primary)',
  borderRadius: 'var(--radius-200)',
  borderWidth: 'var(--border-width-100)',
  borderStyle: 'solid',
  borderColor: 'var(--color-border-subtle)',
};

export function RatingStarShowcase() {
  return (
    <div
      className="rating-star-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-300)' }}
    >
      {/* Hero: primary demo — 5 stars at large scale */}
      <div className="rating-star-showcase__hero" style={blockStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-100)', marginBottom: 'var(--space-150)' }}>
          <RatingStar state="filled" size="xl" />
          <RatingStar state="filled" size="xl" />
          <RatingStar state="filled" size="xl" />
          <RatingStar state="half" size="xl" />
          <RatingStar state="empty" size="xl" />
        </div>
        <p className="rating-star-showcase__hero-caption" style={{ margin: 'var(--space-000)', fontSize: 'var(--font-size-200)', color: 'var(--color-text-tertiary)', letterSpacing: 'var(--letter-spacing-wide)', textAlign: 'center' }}>
          3.5 of 5 — default size scale
        </p>
      </div>

      {/* States */}
      <div className="rating-star-showcase__block" style={blockStyle}>
        <div style={sectionLabelStyle}>States</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-300)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-100)' }}>
            <RatingStar state="filled" size="md" />
            <span style={labelStyle}>Filled</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-100)' }}>
            <RatingStar state="empty" size="md" />
            <span style={labelStyle}>Empty</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-100)' }}>
            <RatingStar state="half" size="md" />
            <span style={labelStyle}>Half</span>
          </div>
        </div>
      </div>

      {/* Sizes — match Icon: xs, sm, md, lg, xl */}
      <div className="rating-star-showcase__block" style={blockStyle}>
        <div style={sectionLabelStyle}>Sizes</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-250)', flexWrap: 'wrap' }}>
          {[
            { size: 'xs', px: '12' },
            { size: 'sm', px: '16' },
            { size: 'md', px: '20' },
            { size: 'lg', px: '24' },
            { size: 'xl', px: '32' },
          ].map(({ size, px }) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-100)' }}>
              <RatingStar state="filled" size={size} />
              <span style={labelStyle}>{size} ({px}px)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disabled */}
      <div className="rating-star-showcase__block" style={blockStyle}>
        <div style={sectionLabelStyle}>Disabled</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-250)' }}>
          <RatingStar state="filled" size="md" disabled />
          <RatingStar state="empty" size="md" disabled />
          <RatingStar state="half" size="md" disabled />
        </div>
      </div>

      {/* Inline example */}
      <div className="rating-star-showcase__block" style={blockStyle}>
        <div style={sectionLabelStyle}>Example — 5 stars (3.5 value)</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-075)' }}>
          <RatingStar state="filled" size="md" />
          <RatingStar state="filled" size="md" />
          <RatingStar state="filled" size="md" />
          <RatingStar state="half" size="md" />
          <RatingStar state="empty" size="md" />
        </div>
      </div>

      {/* Theme comparison — same pattern as Button/Switch showcases */}
      <div>
        <div style={{ fontSize: 'var(--font-size-100)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 'var(--space-150)' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: 'var(--space-250)', background: 'var(--color-bg-primary)', borderRadius: 'var(--radius)', borderWidth: 'var(--border-width-100)', borderStyle: 'solid', borderColor: 'var(--color-border-default)' }}>
            <div style={{ fontSize: 'var(--font-size-100)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-150)', fontWeight: 'var(--font-weight-medium)' }}>LIGHT</div>
            <div style={{ display: 'flex', gap: 'var(--space-100)' }}>
              <RatingStar state="filled" size="md" />
              <RatingStar state="empty" size="md" />
              <RatingStar state="half" size="md" />
            </div>
          </div>
          <div data-theme="dark" style={{ padding: 'var(--space-250)', background: 'var(--color-bg-primary)', borderRadius: 'var(--radius)', borderWidth: 'var(--border-width-100)', borderStyle: 'solid', borderColor: 'var(--color-border-default)' }}>
            <div style={{ fontSize: 'var(--font-size-100)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-150)', fontWeight: 'var(--font-weight-medium)' }}>DARK</div>
            <div style={{ display: 'flex', gap: 'var(--space-100)' }}>
              <RatingStar state="filled" size="md" />
              <RatingStar state="empty" size="md" />
              <RatingStar state="half" size="md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
