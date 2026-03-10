import { EmptyState } from '../../molecules/EmptyState/EmptyState';
import { Tag } from '../../atoms/Tag/Tag';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function EmptyStateShowcase() {
  return (
    <div
      className="emptystate-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Page-level empty state
        </h3>
        <EmptyState
          size="page"
          iconName="Inbox"
          title="No courses yet"
          description="When you create or enrol in a course, it will appear here. Use the Catalogue to discover new content."
          primaryAction={{ label: 'Browse catalogue' }}
          secondaryAction={{ label: 'Create course', variant: 'secondary' }}
        />
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          No results state
        </h3>
        <EmptyState
          variant="no-results"
          size="section"
          iconName="Search"
          title="No results"
          style={{ marginInline: 'auto' }}
          description={
            <>
              We couldn&rsquo;t find anything matching{' '}
              <Tag size="sm" variant="default">leadership fundamentals</Tag>. Try adjusting your
              filters or using a different keyword.
            </>
          }
          primaryAction={{ label: 'Clear filters' }}
        />
      </section>
    </div>
  );
}

