import { Slider } from './Slider';

export default {
  title: 'Atoms/Slider',
};

export const Default = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '300px' }}>
      <Slider defaultValue={[50]} />
    </div>
  ),
};

export const Range = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '300px' }}>
      <Slider defaultValue={[25, 75]} />
    </div>
  ),
};

export const WithValue = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '300px' }}>
      <Slider defaultValue={[40]} showValue />
    </div>
  ),
};

export const Small = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '300px' }}>
      <Slider defaultValue={[60]} size="sm" />
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '300px' }}>
      <Slider defaultValue={[50]} disabled />
    </div>
  ),
};

export const Stepped = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '300px' }}>
      <Slider defaultValue={[30]} step={10} showValue />
    </div>
  ),
};
