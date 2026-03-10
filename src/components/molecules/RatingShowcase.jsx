import { useState } from 'react';
import { Rating } from '../../molecules/Rating/Rating';
import { FormField } from '../../atoms/FormField/FormField';
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

export function RatingShowcase() {
  const [interactiveValue, setInteractiveValue] = useState(3);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>Interactive with FormField</h3>
        <div style={{ maxWidth: 360 }}>
          <FormField label="Course rating" htmlFor="showcase-rating" hint="Rate this course 1–5 stars.">
            <Rating
              id="showcase-rating"
              value={interactiveValue}
              onChange={setInteractiveValue}
              showValue
              showMax
            />
          </FormField>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>Read-only (course card style)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-100)' }}>
          <Rating
            readOnly
            value={4.4}
            max={5}
            showValue
            showMax
            showCount
            count={1234}
            label="Average rating"
          />
          <Rating
            readOnly
            value={3.8}
            max={5}
            variant="compact"
            size="sm"
            showValue
            showMax
            showCount
            count={87}
          />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>Stars only inline</h3>
        <Text variant="body" size="md" color="var(--color-text-primary)">
          This lesson is rated{' '}
          <Rating
            readOnly
            variant="starsOnly"
            value={4}
            max={5}
            size="sm"
            aria-label="4 out of 5"
          />{' '}
          by your learners.
        </Text>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>Half-star precision</h3>
        <Rating
          value={3.5}
          onChange={() => {}}
          precision={0.5}
          max={5}
          showValue
          showMax
          readOnly
        />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={sectionTitleStyle}>Disabled and read-only</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
          <Rating value={3} max={5} disabled showValue showMax />
          <Rating value={4} max={5} readOnly showValue showMax />
        </div>
      </section>

    </div>
  );
}
