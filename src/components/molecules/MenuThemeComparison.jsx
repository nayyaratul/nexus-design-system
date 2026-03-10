import { Menu } from '../../molecules/Menu/Menu';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

export function MenuThemeComparison() {
  const panelStyle = {
    padding: '20px',
    background: 'var(--color-bg-theme-panel)',
    borderRadius: '10px',
    border: '1px solid var(--color-border-default)',
  };

  const labelStyle = {
    fontSize: '10px',
    color: 'var(--color-text-secondary)',
    marginBottom: '12px',
    fontWeight: 500,
  };

  return (
    <div>
      <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
      <div className="theme-comparison">
      <div data-theme="light" style={panelStyle}>
        <div style={labelStyle}>LIGHT</div>
        <Menu
          matchTriggerWidth
          size="sm"
          renderTrigger={({ open }) => (
            <Button
              size="sm"
              variant="secondary"
              iconRight={
                <Icon
                  name={open ? 'ChevronUp' : 'ChevronDown'}
                  size="sm"
                  aria-hidden
                />
              }
              style={{ width: '100%' }}
            >
              Course actions
            </Button>
          )}
        >
          <Menu.Item>Rename</Menu.Item>
          <Menu.Item>Archive</Menu.Item>
          <Menu.Item variant="destructive">Delete</Menu.Item>
        </Menu>
      </div>

      <div data-theme="dark" style={panelStyle}>
        <div style={labelStyle}>DARK</div>
        <Menu
          matchTriggerWidth
          size="sm"
          renderTrigger={({ open }) => (
            <Button
              size="sm"
              variant="secondary"
              iconRight={
                <Icon
                  name={open ? 'ChevronUp' : 'ChevronDown'}
                  size="sm"
                  aria-hidden
                />
              }
              style={{ width: '100%' }}
            >
              Course actions
            </Button>
          )}
        >
          <Menu.Item>Rename</Menu.Item>
          <Menu.Item>Archive</Menu.Item>
          <Menu.Item variant="destructive">Delete</Menu.Item>
        </Menu>
      </div>
      </div>
    </div>
  );
}
