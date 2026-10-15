import { ListSkeleton } from './ListSkeleton';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Molecules/ListSkeleton',
  parameters: { design: figmaDesign('Molecules/ListSkeleton') },
  component: ListSkeleton,
  argTypes: {
    layout: { control: 'select', options: ['list', 'card'] },
    density: { control: 'select', options: ['compact', 'comfortable'] },
    count: { control: 'number' },
    lines: { control: 'number' },
    animated: { control: 'boolean' },
    hasLeading: { control: 'boolean' },
    hasTrailing: { control: 'boolean' },
    hasMedia: { control: 'boolean' },
    hasFooter: { control: 'boolean' },
  },
};

export const ListDefault = {
  render: (args) => (
    <div style={{ maxWidth: 640 }}>
      <ListSkeleton {...args} />
    </div>
  ),
  args: {
    layout: 'list',
    count: 5,
    lines: 2,
    density: 'comfortable',
    animated: true,
    hasLeading: true,
    hasTrailing: false,
  },
};

export const ListCompact = {
  render: () => (
    <div style={{ maxWidth: 420 }}>
      <ListSkeleton layout="list" count={6} lines={1} density="compact" hasLeading hasTrailing />
    </div>
  ),
};

export const CardGrid = {
  render: () => (
    <ListSkeleton
      layout="card"
      count={6}
      lines={3}
      hasMedia
      hasFooter
      style={{ maxWidth: 960 }}
    />
  ),
};

export const WithoutAnimation = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <ListSkeleton layout="list" count={4} lines={2} animated={false} hasLeading hasTrailing />
    </div>
  ),
};

