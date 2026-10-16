import figma from '@figma/code-connect';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { RadioGroup, RadioItem } from '../../atoms/RadioGroup/RadioGroup';
import { Switch } from '../../atoms/Switch/Switch';

figma.connect(Checkbox, '<FIGMA_NEXUS>?node-id=10-107', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md' }),
    checked: figma.enum('Value', { Unchecked: false, Checked: true, Indeterminate: 'indeterminate' }),
    disabled: figma.enum('State', { Disabled: true }),
  },
  example: (props) => <Checkbox {...props} />,
});

figma.connect(RadioItem, '<FIGMA_NEXUS>?node-id=10-136', {
  props: { label: figma.string('Label'), disabled: figma.enum('State', { Disabled: true }) },
  example: ({ label, ...props }) => <RadioItem value="option" {...props}>{label}</RadioItem>,
});

figma.connect(RadioGroup, '<FIGMA_NEXUS>?node-id=10-159', {
  props: { orientation: figma.enum('Orientation', { Vertical: 'vertical', Horizontal: 'horizontal' }) },
  example: (props) => (
    <RadioGroup defaultValue="one" {...props}>
      <RadioItem value="one">Option one</RadioItem>
      <RadioItem value="two">Option two</RadioItem>
      <RadioItem value="three">Option three</RadioItem>
    </RadioGroup>
  ),
});

figma.connect(Switch, '<FIGMA_NEXUS>?node-id=10-208', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    checked: figma.enum('Checked', { On: true, Off: false }),
    disabled: figma.enum('State', { Disabled: true }),
  },
  example: (props) => <Switch {...props} />,
});
