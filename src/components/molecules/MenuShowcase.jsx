import { Menu } from '../../molecules/Menu/Menu';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import { Icon } from '../../atoms/Icon/Icon';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function MenuShowcase() {
  return (
    <div
      className="menu-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Conversation header overflow
        </h3>
        <div
          style={{
            padding: 'var(--space-250)',
            borderRadius: 'var(--radius-150)',
            border: 'var(--border-width-100) solid var(--color-border-default)',
            background: 'var(--color-bg-elevated)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-150)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text variant="body" size="md">
              Learner support
            </Text>
            <Text variant="caption" size="sm" color="var(--color-text-secondary)">
              Online · Typically responds in under 1 hour
            </Text>
          </div>
          <Menu
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
              >
                More
              </Button>
            )}
          >
            <Menu.Item>Mute notifications</Menu.Item>
            <Menu.Item>View profile</Menu.Item>
            <Menu.Divider />
            <Menu.Item variant="destructive">End conversation</Menu.Item>
          </Menu>
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Filter menu
        </h3>
        <div
          style={{
            padding: 'var(--space-250)',
            borderRadius: 'var(--radius-150)',
            border: 'var(--border-width-100) solid var(--color-border-default)',
            background: 'var(--color-bg-elevated)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-150)',
          }}
        >
          <Text variant="body" size="md">
            Visible items
          </Text>
          <Menu
            closeOnSelect={false}
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
              >
                Filters
              </Button>
            )}
          >
            <Menu.CheckboxItem>Show completed</Menu.CheckboxItem>
            <Menu.CheckboxItem>Show drafts</Menu.CheckboxItem>
          </Menu>
        </div>
      </section>
    </div>
  );
}

