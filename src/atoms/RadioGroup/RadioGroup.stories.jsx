import { useState } from 'react';
import { RadioGroup, RadioItem } from './RadioGroup';

export default {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  argTypes: {
    orientation: { control: 'select', options: ['vertical', 'horizontal'] },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  render: () => {
    const [value, setValue] = useState('option-1');
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <RadioItem value="option-1">Option One</RadioItem>
        <RadioItem value="option-2">Option Two</RadioItem>
        <RadioItem value="option-3">Option Three</RadioItem>
      </RadioGroup>
    );
  },
};

export const Horizontal = {
  render: () => {
    const [value, setValue] = useState('a');
    return (
      <RadioGroup value={value} onValueChange={setValue} orientation="horizontal">
        <RadioItem value="a">Alpha</RadioItem>
        <RadioItem value="b">Beta</RadioItem>
        <RadioItem value="c">Gamma</RadioItem>
      </RadioGroup>
    );
  },
};

export const Disabled = {
  render: () => (
    <RadioGroup value="option-1" disabled>
      <RadioItem value="option-1">Selected but disabled</RadioItem>
      <RadioItem value="option-2">Disabled option</RadioItem>
    </RadioGroup>
  ),
};

export const WithDisabledItem = {
  render: () => {
    const [value, setValue] = useState('a');
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <RadioItem value="a">Available</RadioItem>
        <RadioItem value="b" disabled>Unavailable</RadioItem>
        <RadioItem value="c">Available</RadioItem>
      </RadioGroup>
    );
  },
};
