import { useState } from 'react';
import { SearchInput } from '../../molecules/SearchInput/SearchInput';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function SearchInputShowcase() {
  const [catalogueQuery, setCatalogueQuery] = useState('');
  const [tableQuery, setTableQuery] = useState('');

  return (
    <div
      className="searchinput-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Catalogue search
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-150)',
            padding: 'var(--space-250)',
            borderRadius: 'var(--radius-150)',
            border: 'var(--border-width-100) solid var(--color-border-default)',
            background: 'var(--color-bg-elevated)',
          }}
        >
          <Text variant="body" size="sm" color="var(--color-text-secondary)">
            Use Search input at the top of catalogue pages to filter courses by name, instructor, or
            tag.
          </Text>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-150)',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <SearchInput
              placeholder="Search all courses"
              value={catalogueQuery}
              onChange={(event) => setCatalogueQuery(event.target.value)}
              style={{ minWidth: 'min(320px, 100%)', maxWidth: '480px' }}
            />
            <Text
              variant="caption"
              size="sm"
              color="var(--color-text-secondary)"
              style={{ marginLeft: 'auto' }}
            >
              Showing 24 of 120 courses
            </Text>
          </div>
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Table toolbar search
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-150)',
            padding: 'var(--space-250)',
            borderRadius: 'var(--radius-150)',
            border: 'var(--border-width-100) solid var(--color-border-default)',
            background: 'var(--color-bg-elevated)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-150)',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              padding: 'var(--space-150)',
              borderRadius: 'var(--radius-100)',
              background: 'var(--color-bg-secondary)',
            }}
          >
            <SearchInput
              size="sm"
              placeholder="Search learners in table"
              value={tableQuery}
              onChange={(event) => setTableQuery(event.target.value)}
              style={{ maxWidth: 'min(280px, 100%)' }}
            />
            <div style={{ display: 'flex', gap: 'var(--space-100)' }}>
              <Button size="sm" variant="secondary">
                Filters
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setTableQuery('')}
              >
                Clear
              </Button>
            </div>
          </div>
          <Text variant="caption" size="sm" color="var(--color-text-secondary)">
            Pair the toolbar search with table filters and sort controls for dense data views.
          </Text>
        </div>
      </section>
    </div>
  );
}

