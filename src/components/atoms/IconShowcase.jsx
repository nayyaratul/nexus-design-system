import { Icon } from '../../atoms/Icon/Icon';

const commonIcons = [
  'Heart', 'Star', 'Search', 'Bell', 'Settings', 'User', 'Mail', 'BookOpen',
  'Calendar', 'Check', 'X', 'ChevronDown', 'ArrowRight', 'Download',
  'Upload', 'Eye', 'Clock', 'Home', 'FileText', 'Award',
];

export function IconShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px' }}>
          {['xs', 'sm', 'md', 'lg', 'xl'].map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--ink)' }}>
              <Icon name="Star" size={size} />
              <span style={{ fontSize: '10px', color: 'var(--ink-3)' }}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Common icons grid */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Common Icons</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))', gap: '4px' }}>
          {commonIcons.map(name => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '12px 4px', borderRadius: '8px', cursor: 'default', color: 'var(--ink)' }}>
              <Icon name={name} size="lg" />
              <span style={{ fontSize: '9px', color: 'var(--ink-3)', textAlign: 'center' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-primary)' }}>
              <Icon name="Heart" size="lg" />
              <Icon name="Bell" size="lg" />
              <Icon name="BookOpen" size="lg" />
              <Icon name="Award" size="lg" />
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-primary)' }}>
              <Icon name="Heart" size="lg" />
              <Icon name="Bell" size="lg" />
              <Icon name="BookOpen" size="lg" />
              <Icon name="Award" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
