import { ListSkeleton } from '../../molecules/ListSkeleton/ListSkeleton';
import { Text } from '../../atoms/Text/Text';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function ListSkeletonShowcase() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>List (default)</h3>
        <Text variant="body" size="sm" color="var(--color-text-secondary)" style={{ marginBottom: 'var(--space-150)' }}>
          Vertical list with leading block and 2 lines per item. Use for course lists, notifications, or any row-based content.
        </Text>
        <div style={{ maxWidth: 640 }}>
          <ListSkeleton layout="list" count={5} lines={2} hasLeading hasTrailing={false} />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>List compact</h3>
        <Text variant="body" size="sm" color="var(--color-text-secondary)" style={{ marginBottom: 'var(--space-150)' }}>
          Tighter spacing and single line per item for sidebars or dense lists.
        </Text>
        <div style={{ maxWidth: 420 }}>
          <ListSkeleton layout="list" count={6} lines={1} density="compact" hasLeading hasTrailing />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>Card grid</h3>
        <Text variant="body" size="sm" color="var(--color-text-secondary)" style={{ marginBottom: 'var(--space-150)' }}>
          Grid of card-like placeholders with media block and footer pills. Use while loading course cards or feed tiles.
        </Text>
        <div style={{ maxWidth: 960 }}>
          <ListSkeleton layout="card" count={6} lines={3} hasMedia hasFooter />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>Without animation</h3>
        <Text variant="body" size="sm" color="var(--color-text-secondary)" style={{ marginBottom: 'var(--space-150)' }}>
          Static skeletons for reduced motion or when animation is not desired.
        </Text>
        <div style={{ maxWidth: 640 }}>
          <ListSkeleton layout="list" count={4} lines={2} animated={false} hasLeading hasTrailing />
        </div>
      </section>

    </div>
  );
}
