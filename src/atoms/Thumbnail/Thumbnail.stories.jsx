import { Thumbnail } from './Thumbnail';

export default {
  title: 'Atoms/Thumbnail',
  component: Thumbnail,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    overlay: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export const Default = {
  args: {
    src: 'https://picsum.photos/200/200',
    alt: 'Square thumbnail',
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', gap: 'var(--space-150)' }}>
      <Thumbnail src="https://picsum.photos/200/200" alt="XS thumbnail" size="xs" />
      <Thumbnail src="https://picsum.photos/200/200" alt="SM thumbnail" size="sm" />
      <Thumbnail src="https://picsum.photos/200/200" alt="MD thumbnail" size="md" />
      <Thumbnail src="https://picsum.photos/200/200" alt="LG thumbnail" size="lg" />
    </div>
  ),
};

export const WithOverlay = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-150)' }}>
      <Thumbnail src="https://picsum.photos/200/200" alt="Overlay thumbnail" size="md" overlay onClick={() => alert('Clicked!')} />
      <Thumbnail src="https://picsum.photos/200/200" alt="Overlay thumbnail lg" size="lg" overlay onClick={() => alert('Clicked!')} />
    </div>
  ),
};

export const ErrorState = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', gap: 'var(--space-150)' }}>
      <Thumbnail src="/invalid-image.jpg" alt="Broken thumbnail" size="sm" />
      <Thumbnail src="/invalid-image.jpg" alt="Broken thumbnail" size="md" />
      <Thumbnail src="/invalid-image.jpg" alt="Broken thumbnail" size="lg" />
    </div>
  ),
};
