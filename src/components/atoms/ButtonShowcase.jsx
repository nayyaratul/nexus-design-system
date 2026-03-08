import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

export function ButtonShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Variants */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Variants</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="dash">Dash</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* Shape */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Shape</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button shape="default">Default</Button>
            <Button shape="rounded">Rounded</Button>
            <Button shape="pill">Pill</Button>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="secondary" shape="default">Secondary default</Button>
            <Button variant="secondary" shape="rounded">Secondary rounded</Button>
            <Button variant="secondary" shape="pill">Secondary pill</Button>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="ghost" shape="default">Ghost default</Button>
            <Button variant="ghost" shape="rounded">Ghost rounded</Button>
            <Button variant="ghost" shape="pill">Ghost pill</Button>
          </div>
        </div>
      </div>

      {/* With icons */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Icons</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button iconLeft={<Icon name="Download" size="sm" />}>Download</Button>
          <Button iconRight={<Icon name="ArrowRight" size="sm" />}>Continue</Button>
          <Button variant="destructive" iconLeft={<Icon name="Trash2" size="sm" />}>Delete</Button>
          <Button variant="ghost" iconLeft={<Icon name="BookOpen" size="sm" />}>View Course</Button>
        </div>
      </div>

      {/* Dash variant */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Dash Variant</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="dash" size="sm">Small</Button>
          <Button variant="dash" size="md">Medium</Button>
          <Button variant="dash" size="lg">Large</Button>
          <Button variant="dash" iconLeft={<Icon name="Plus" size="sm" />}>Add Item</Button>
        </div>
      </div>

      {/* Icon-only */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Icon Only</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="primary" iconOnly><Icon name="Plus" size="sm" /></Button>
          <Button variant="secondary" iconOnly><Icon name="Settings" size="sm" /></Button>
          <Button variant="dash" iconOnly><Icon name="Plus" size="sm" /></Button>
          <Button variant="destructive" iconOnly><Icon name="Trash2" size="sm" /></Button>
          <Button variant="ghost" iconOnly><Icon name="MoreHorizontal" size="sm" /></Button>
        </div>
      </div>

      {/* All variants with icons */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>All Variants with Icons</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" iconLeft={<Icon name="Check" size="sm" />} iconRight={<Icon name="ArrowRight" size="sm" />}>Primary</Button>
          <Button variant="secondary" iconLeft={<Icon name="Filter" size="sm" />}>Secondary</Button>
          <Button variant="dash" iconLeft={<Icon name="Plus" size="sm" />}>Dash</Button>
          <Button variant="destructive" iconLeft={<Icon name="Trash2" size="sm" />}>Destructive</Button>
          <Button variant="ghost" iconRight={<Icon name="ChevronDown" size="sm" />}>Ghost</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>States</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>

      {/* Full width */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Full Width</div>
        <div style={{ maxWidth: 360 }}>
          <Button fullWidth iconLeft={<Icon name="Send" size="sm" />}>Submit Leave Request</Button>
        </div>
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="dash">Dash</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="dash">Dash</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
