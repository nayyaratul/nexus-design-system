import figma from '@figma/code-connect';
import { Badge } from '../../atoms/Badge/Badge';
import { Tag } from '../../atoms/Tag/Tag';

figma.connect(Badge, '<FIGMA_NEXUS>?node-id=9-38', {
  variant: { Type: 'Label' },
  props: { variant: figma.enum('Variant', { Default: 'default', Success: 'success', Error: 'error', Warning: 'warning', Info: 'info' }), size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }), label: figma.string('Label') },
  example: ({ label, ...props }) => <Badge {...props}>{label}</Badge>,
});

figma.connect(Badge, '<FIGMA_NEXUS>?node-id=9-38', {
  variant: { Type: 'Dot' },
  props: { variant: figma.enum('Variant', { Default: 'default', Success: 'success', Error: 'error', Warning: 'warning', Info: 'info' }) },
  example: (props) => <Badge dot {...props} />,
});

figma.connect(Tag, '<FIGMA_NEXUS>?node-id=9-99', {
  props: {
    variant: figma.enum('Variant', { Default: 'default', Success: 'success', Error: 'error', Warning: 'warning', Info: 'info' }),
    size: figma.enum('Size', { sm: 'sm', md: 'md' }),
    label: figma.string('Label'),
    icon: figma.boolean('Show icon', { true: figma.instance('Icon'), false: undefined }),
    dismissible: figma.boolean('Dismissible'),
  },
  example: ({ label, ...props }) => <Tag {...props}>{label}</Tag>,
});
