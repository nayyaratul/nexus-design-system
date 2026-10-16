import figma from '@figma/code-connect';
import { InputField } from '../../atoms/InputField/InputField';
import { Textarea } from '../../atoms/Textarea/Textarea';
import { Label } from '../../atoms/Label/Label';
import { FormField } from '../../atoms/FormField/FormField';
import { FileInput } from '../../atoms/FileInput/FileInput';
import { SearchInput } from '../../molecules/SearchInput/SearchInput';
import { Select, SelectTrigger, SelectContent, SelectItem } from '../../atoms/Select/Select';

const size = figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' });
const error = figma.enum('State', { Error: true });
const disabled = figma.enum('State', { Disabled: true });

figma.connect(InputField, '<FIGMA_NEXUS>?node-id=12-196', {
  props: {
    size: size,
    error: error,
    disabled: disabled,
    placeholder: figma.string('Text'),
    icon: figma.boolean('Leading icon', { true: figma.instance('Leading icon swap'), false: undefined }),
  },
  example: (props) => <InputField {...props} />,
});

figma.connect(Textarea, '<FIGMA_NEXUS>?node-id=12-242', {
  props: { size: size, error: error, disabled: disabled, placeholder: figma.string('Text') },
  example: (props) => <Textarea rows={3} {...props} />,
});

figma.connect(Label, '<FIGMA_NEXUS>?node-id=12-15', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md' }),
    disabled: figma.enum('State', { Disabled: true }),
    required: figma.boolean('Required'),
    text: figma.string('Text'),
  },
  example: ({ text, ...props }) => <Label {...props}>{text}</Label>,
});

figma.connect(FormField, '<FIGMA_NEXUS>?node-id=12-270', {
  props: {
    hint: figma.string('Helper text'),
    control: figma.children('Control'),
    disabled: figma.enum('State', { Disabled: true }),
  },
  example: ({ control, ...props }) => <FormField label="Label" {...props}>{control}</FormField>,
});

figma.connect(SelectTrigger, '<FIGMA_NEXUS>?node-id=13-123', {
  props: { size: size, error: error, placeholder: figma.string('Value') },
  example: ({ size, error, placeholder }) => (
    <Select>
      <SelectTrigger size={size} error={error} placeholder={placeholder} />
      <SelectContent>
        <SelectItem value="one">Option one</SelectItem>
        <SelectItem value="two">Option two</SelectItem>
      </SelectContent>
    </Select>
  ),
});

figma.connect(SearchInput, '<FIGMA_NEXUS>?node-id=14-113', {
  props: {
    size: size,
    placeholder: figma.string('Text'),
    loading: figma.enum('State', { Loading: true }),
    error: error,
    disabled: disabled,
  },
  example: (props) => <SearchInput {...props} />,
});

figma.connect(FileInput, '<FIGMA_NEXUS>?node-id=37-123', {
  props: { size: size, error: error, disabled: disabled },
  example: (props) => <FileInput chooseLabel="Upload" {...props} />,
});
