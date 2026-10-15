import { useState } from 'react';
import { Rating } from './Rating';
import { FormField } from '../../atoms/FormField/FormField';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Molecules/Rating',
  parameters: { design: figmaDesign('Molecules/Rating') },
  component: Rating,
  argTypes: {
    max: { control: 'number' },
    precision: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['standard', 'starsOnly', 'compact'] },
    color: { control: 'select', options: ['default', 'muted'] },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
    showMax: { control: 'boolean' },
    showCount: { control: 'boolean' },
  },
};

export const DefaultInteractive = {
  render: (args) => {
    const [value, setValue] = useState(3);

    return (
      <div style={{ maxWidth: 360 }}>
        <FormField label="Course rating" htmlFor="course-rating">
          <Rating
            id="course-rating"
            value={value}
            onChange={setValue}
            showValue
            showMax
            {...args}
          />
        </FormField>
      </div>
    );
  },
  args: {
    max: 5,
    precision: 1,
    size: 'md',
    variant: 'standard',
  },
};

export const ReadOnlyCourseCard = {
  render: () => (
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
        showValue
        showMax
        showCount
        count={87}
      />
    </div>
  ),
};

export const StarsOnlyInline = {
  render: () => (
    <p style={{ fontFamily: 'var(--sans)', fontSize: 'var(--font-size-200)' }}>
      This lesson is rated{' '}
      <Rating
        readOnly
        variant="starsOnly"
        value={4}
        max={5}
        size="sm"
        aria-label="Lesson rating: 4 out of 5"
      />{' '}
      by your learners.
    </p>
  ),
};

export const HalfStarPrecision = {
  render: () => {
    const [value, setValue] = useState(3.5);
    return (
      <Rating
        value={value}
        onChange={setValue}
        precision={0.5}
        max={5}
        showValue
        showMax
      />
    );
  },
};

export const DisabledAndReadOnlyStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Rating value={3} max={5} disabled showValue showMax />
      <Rating value={4} max={5} readOnly showValue showMax />
    </div>
  ),
};

export const CompactDensity = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)' }}>
      <Rating
        value={4.7}
        max={5}
        variant="compact"
        size="sm"
        showValue
        showMax
        showCount
        count={329}
      />
      <Rating
        value={4.2}
        max={10}
        variant="compact"
        size="sm"
        showValue
        showMax
      />
    </div>
  ),
};

