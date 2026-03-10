import { Card } from '../../molecules/Card/Card';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function CardShowcase() {
  return (
    <div
      className="card-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Dashboard tile
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(calc(16 * var(--space-200)), 1fr))',
            gap: 'var(--space-200)',
          }}
        >
          <Card interactive>
            <Card.Header>
              <Card.Eyebrow>Catalogue</Card.Eyebrow>
              <Card.Title>Active courses</Card.Title>
              <Card.Subtitle>12 courses · 3 new this week</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Text variant="caption" color="var(--color-text-secondary)">
                Track newly published courses and enrolment trends.
              </Text>
            </Card.Body>
          </Card>

          <Card interactive variant="outlined">
            <Card.Header>
              <Card.Eyebrow>Assessment</Card.Eyebrow>
              <Card.Title>Pending reviews</Card.Title>
              <Card.Subtitle>4 submissions awaiting review</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Text variant="caption" color="var(--color-text-secondary)">
                Keep assessments moving by reviewing submissions daily.
              </Text>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Card with footer actions
        </h3>
        <div style={{ width: '50%' }}>
          <Card>
            <Card.Header>
              <Card.Title>Course overview</Card.Title>
              <Card.Subtitle>Design Systems for LMS · 8 modules</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Text>
                Help instructors create consistent, accessible course experiences using a shared
                design system and component library.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary">Preview</Button>
              <Button>Open course</Button>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
}

