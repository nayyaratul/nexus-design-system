import figma from '@figma/code-connect';
import { Button } from '../../atoms/Button/Button';

const variant = figma.enum('Variant', {
  Primary: 'primary', Secondary: 'secondary', Dash: 'dash', Destructive: 'destructive', Ghost: 'ghost',
});
const size = figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' });
const disabled = figma.enum('State', { Disabled: true });

figma.connect(Button, '<FIGMA_NEXUS>?node-id=8-723', {
  props: {
    variant: variant,
    size: size,
    disabled: disabled,
    label: figma.string('Label'),
    iconLeft: figma.boolean('Show icon left', { true: figma.instance('Icon left'), false: undefined }),
    iconRight: figma.boolean('Show icon right', { true: figma.instance('Icon right'), false: undefined }),
  },
  example: ({ label, ...props }) => <Button {...props}>{label}</Button>,
});

figma.connect(Button, '<FIGMA_NEXUS>?node-id=8-724', {
  props: { variant: variant, size: size, disabled: disabled, icon: figma.instance('Icon') },
  example: ({ icon, ...props }) => <Button iconOnly aria-label="Action" iconLeft={icon} {...props} />,
});
