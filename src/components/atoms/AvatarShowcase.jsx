import { Avatar } from '../../atoms/Avatar/Avatar';

export function AvatarShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {['xs', 'sm', 'md', 'lg', 'xl'].map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Avatar name="Atul Nayyar" size={size} />
              <span style={{ fontSize: '10px', color: 'var(--ink-3)' }}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* With images */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Images</div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Avatar src="https://i.pravatar.cc/150?u=a" name="Alice" size="lg" />
          <Avatar src="https://i.pravatar.cc/150?u=b" name="Bob" size="lg" />
          <Avatar src="https://i.pravatar.cc/150?u=c" name="Carol" size="lg" />
        </div>
      </div>

      {/* Online status */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Online Status</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Avatar name="Online User" size="lg" online={true} />
            <span style={{ fontSize: '10px', color: 'var(--ink-3)' }}>Online</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Avatar name="Offline User" size="lg" online={false} />
            <span style={{ fontSize: '10px', color: 'var(--ink-3)' }}>Offline</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Avatar name="No Status" size="lg" />
            <span style={{ fontSize: '10px', color: 'var(--ink-3)' }}>No status</span>
          </div>
        </div>
      </div>

      {/* Fallback chain */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Fallback Chain</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Avatar src="https://broken.example/img.jpg" name="Broken Image" size="lg" />
            <span style={{ fontSize: '10px', color: 'var(--ink-3)' }}>Broken → Initials</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <Avatar size="lg" />
            <span style={{ fontSize: '10px', color: 'var(--ink-3)' }}>No name → Icon</span>
          </div>
        </div>
      </div>

      {/* Deterministic colours */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Deterministic Colours</div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['Atul Nayyar', 'Sarah Chen', 'James Wilson', 'Priya Sharma', 'David Kim', 'Emily Brown', 'Raj Patel', 'Lisa Wong'].map(name => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <Avatar name={name} size="md" />
              <span style={{ fontSize: '9px', color: 'var(--ink-3)' }}>{name.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Avatar name="Alice B" size="md" online={true} />
              <Avatar name="Carol D" size="md" online={false} />
              <Avatar name="Eve F" size="md" />
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Avatar name="Alice B" size="md" online={true} />
              <Avatar name="Carol D" size="md" online={false} />
              <Avatar name="Eve F" size="md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
