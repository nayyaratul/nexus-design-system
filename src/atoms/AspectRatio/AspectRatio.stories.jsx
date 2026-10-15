import { AspectRatio } from './AspectRatio';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/AspectRatio',
  parameters: { design: figmaDesign('Atoms/AspectRatio') },
  component: AspectRatio,
  argTypes: {
    ratio: { control: 'number' },
  },
};

const Placeholder = ({ label, bg = 'var(--color-bg-secondary)' }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--color-text-secondary)',
    }}
  >
    {label}
  </div>
);

export const Default = {
  args: {
    ratio: 4 / 3,
    children: <Placeholder label="4 : 3" />,
  },
  decorators: [(Story) => <div style={{ maxWidth: 320 }}><Story /></div>],
};

export const SixteenNine = {
  args: {
    ratio: 16 / 9,
    children: <Placeholder label="16 : 9" bg="var(--color-bg-tertiary)" />,
  },
  decorators: [(Story) => <div style={{ maxWidth: 320 }}><Story /></div>],
};

export const Square = {
  args: {
    ratio: 1,
    children: <Placeholder label="1 : 1" bg="var(--color-bg-secondary)" />,
  },
  decorators: [(Story) => <div style={{ maxWidth: 200 }}><Story /></div>],
};

export const NineSixteen = {
  args: {
    ratio: 9 / 16,
    children: <Placeholder label="9 : 16" bg="var(--color-bg-tertiary)" />,
  },
  decorators: [(Story) => <div style={{ maxWidth: 200 }}><Story /></div>],
};

export const WithImage = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=640&q=80"
        alt="Landscape"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ),
  },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}><Story /></div>],
};
