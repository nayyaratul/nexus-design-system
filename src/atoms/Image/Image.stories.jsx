import { Image } from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export const Default = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'A random 4:3 photograph',
  },
};

export const Letterboxed = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <Image src="https://picsum.photos/800/450" alt="A 16:9 image shown letterboxed in a 4:3 container" />
    </div>
  ),
};

export const Portrait = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <Image src="https://picsum.photos/450/600" alt="A 3:4 portrait image shown pillarboxed in a 4:3 container" />
    </div>
  ),
};

export const ErrorState = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <Image src="/invalid-image.jpg" alt="Broken image showing error fallback" />
    </div>
  ),
};
