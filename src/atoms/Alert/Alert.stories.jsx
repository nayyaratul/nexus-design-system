import { Alert } from './Alert';
import { Button } from '../Button/Button';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Alert',
  parameters: { design: figmaDesign('Atoms/Alert') },
  component: Alert,
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    title: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
};

export const Default = {
  args: { variant: 'info', title: 'Information', children: 'This is an informational alert message.' },
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Alert variant="info" title="Info">This is an informational message.</Alert>
      <Alert variant="success" title="Success">Your changes have been saved.</Alert>
      <Alert variant="warning" title="Warning">This action cannot be undone.</Alert>
      <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
    </div>
  ),
};

export const Dismissible = {
  args: { variant: 'warning', title: 'Dismissible', dismissible: true, children: 'Click the X to dismiss this alert.' },
};

export const TitleOnly = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Alert variant="success" title="File uploaded successfully" />
      <Alert variant="error" title="Connection lost" />
    </div>
  ),
};

export const WithAction = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Alert
        variant="info"
        title="New version available"
        action={
          <Button variant="secondary" size="sm">Update now</Button>
        }
      >
        Version 2.4.0 is ready to install.
      </Alert>
      <Alert
        variant="error"
        title="Payment failed"
        dismissible
        action={
          <>
            <Button variant="destructive" size="sm">Retry</Button>
            <Button variant="ghost" size="sm">Cancel</Button>
          </>
        }
      >
        Your card was declined. Please try again.
      </Alert>
    </div>
  ),
};

export const BodyOnly = {
  render: () => (
    <Alert variant="info">A simple alert without a title — just body text.</Alert>
  ),
};
