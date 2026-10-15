import { StoryProgress } from './StoryProgress';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/StoryProgress',
  parameters: { design: figmaDesign('Atoms/StoryProgress') },
  component: StoryProgress,
  argTypes: {
    segments: { control: 'number' },
    activeIndex: { control: 'number' },
    progress: { control: 'number', min: 0, max: 1, step: 0.1 },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'subtle'] },
  },
};

export const Default = {
  args: {
    segments: 5,
    activeIndex: 1,
    progress: 0.4,
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-200)' }}>
      <StoryProgress segments={5} activeIndex={1} progress={0.4} size="xs" />
      <StoryProgress segments={5} activeIndex={1} progress={0.4} size="sm" />
      <StoryProgress segments={5} activeIndex={1} progress={0.4} size="md" />
      <StoryProgress segments={5} activeIndex={1} progress={0.4} size="lg" />
    </div>
  ),
};

export const Subtle = {
  args: {
    segments: 5,
    activeIndex: 1,
    progress: 0.4,
    size: 'xs',
    variant: 'subtle',
  },
  render: (args) => (
    <div style={{ background: 'var(--grey-90)', padding: 'var(--space-200)', borderRadius: 'var(--radius-150)' }}>
      <StoryProgress {...args} />
    </div>
  ),
};

export const FirstSegment = {
  args: {
    segments: 5,
    activeIndex: 0,
    progress: 0.2,
    size: 'md',
  },
};

export const LastSegment = {
  args: {
    segments: 5,
    activeIndex: 4,
    progress: 1,
    size: 'md',
  },
};

export const ManySegments = {
  args: {
    segments: 8,
    activeIndex: 3,
    progress: 0.6,
    size: 'md',
  },
};
