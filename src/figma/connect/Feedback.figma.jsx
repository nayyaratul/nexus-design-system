import figma from '@figma/code-connect';
import { Alert } from '../../atoms/Alert/Alert';
import { Toast, ToastTitle, ToastDescription, ToastClose } from '../../atoms/Toast/Toast';
import { Tooltip, TooltipTrigger, TooltipContent } from '../../atoms/Tooltip/Tooltip';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import { Skeleton } from '../../atoms/Skeleton/Skeleton';

figma.connect(Alert, '<FIGMA_NEXUS>?node-id=16-99', {
  props: {
    variant: figma.enum('Variant', { Info: 'info', Success: 'success', Warning: 'warning', Error: 'error' }),
    title: figma.boolean('Show title', { true: figma.string('Title'), false: undefined }),
    body: figma.boolean('Show body', { true: figma.string('Body'), false: undefined }),
    dismissible: figma.boolean('Dismissible'),
  },
  example: ({ body, ...props }) => <Alert {...props}>{body}</Alert>,
});

figma.connect(Toast, '<FIGMA_NEXUS>?node-id=16-140', {
  props: {
    variant: figma.enum('Variant', { Default: 'default', Success: 'success', Error: 'error', Warning: 'warning' }),
    title: figma.string('Title'),
    description: figma.boolean('Show description', { true: figma.string('Description'), false: undefined }),
  },
  example: ({ title, description, variant }) => (
    <Toast variant={variant}>
      <div style={{ flex: 1 }}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
});

figma.connect(TooltipContent, '<FIGMA_NEXUS>?node-id=18-19', {
  props: { side: figma.enum('Side', { Top: 'top', Bottom: 'bottom', Left: 'left', Right: 'right' }), text: figma.string('Text') },
  example: ({ side, text }) => (
    <Tooltip>
      <TooltipTrigger asChild><button>Hover me</button></TooltipTrigger>
      <TooltipContent side={side}>{text}</TooltipContent>
    </Tooltip>
  ),
});

figma.connect(Spinner, '<FIGMA_NEXUS>?node-id=7-22', {
  props: {
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    variant: figma.enum('Variant', { Spin: 'spin', Dots: 'dots' }),
  },
  example: (props) => <Spinner {...props} />,
});

figma.connect(ProgressBar, '<FIGMA_NEXUS>?node-id=20-43', {
  props: {
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }),
    variant: figma.enum('Variant', { Default: 'default', Success: 'success', Warning: 'warning', Error: 'error', Subtle: 'subtle' }),
  },
  example: (props) => <ProgressBar value={60} {...props} />,
});

figma.connect(Skeleton, '<FIGMA_NEXUS>?node-id=20-123', {
  variant: { Shape: 'Circle' },
  example: () => <Skeleton circle width={40} />,
});
figma.connect(Skeleton, '<FIGMA_NEXUS>?node-id=20-123', {
  variant: { Shape: 'Rectangle' },
  example: () => <Skeleton width={240} height={16} />,
});
figma.connect(Skeleton, '<FIGMA_NEXUS>?node-id=20-123', {
  variant: { Shape: 'Text' },
  example: () => <Skeleton width={240} height={12} count={3} />,
});
