import { Breadcrumb } from '../../molecules/Breadcrumb/Breadcrumb';
import { Icon } from '../../atoms/Icon/Icon';

const titleStyle = { fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' };
const panelStyle = { padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' };
const labelStyle = { fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 };

const cataloguePath = [
  { href: '/', icon: <Icon name="Home" />, ariaLabel: 'Home' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/catalogue/design-systems', label: 'Design systems' },
  { href: '/catalogue/design-systems/nexus', label: 'Nexus' },
];

export function BreadcrumbThemeComparison() {
  return (
    <div>
      <div style={titleStyle}>Theme Comparison</div>
      <div className="theme-comparison">
        <div data-theme="light" style={panelStyle}>
          <div style={labelStyle}>LIGHT</div>
          <Breadcrumb items={cataloguePath} size="sm" />
        </div>
        <div data-theme="dark" style={panelStyle}>
          <div style={labelStyle}>DARK</div>
          <Breadcrumb items={cataloguePath} size="sm" />
        </div>
      </div>
    </div>
  );
}
