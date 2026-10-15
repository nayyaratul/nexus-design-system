import { Steps, StepItem } from './Steps';
import { User, CreditCard, Check, Package } from 'lucide-react';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Steps',
  parameters: { design: figmaDesign('Atoms/Steps') },
  component: Steps,
  argTypes: {
    activeStep: { control: { type: 'number', min: 0, max: 4 } },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {
  args: { activeStep: 1 },
  render: (args) => (
    <Steps {...args}>
      <StepItem label="Account" description="Create your account" />
      <StepItem label="Profile" description="Set up your profile" />
      <StepItem label="Review" description="Review and confirm" />
    </Steps>
  ),
};

export const AllComplete = {
  render: () => (
    <Steps activeStep={3}>
      <StepItem label="Account" />
      <StepItem label="Profile" />
      <StepItem label="Review" />
    </Steps>
  ),
};

export const WithIcons = {
  render: () => (
    <Steps activeStep={1}>
      <StepItem label="Account" description="Create your account" icon={User} />
      <StepItem label="Payment" description="Add payment method" icon={CreditCard} />
      <StepItem label="Shipping" description="Set delivery address" icon={Package} />
      <StepItem label="Confirm" description="Review your order" icon={Check} />
    </Steps>
  ),
};

export const Vertical = {
  render: () => (
    <Steps activeStep={2} orientation="vertical">
      <StepItem label="Order placed" description="Your order has been placed" />
      <StepItem label="Processing" description="We are processing your order" />
      <StepItem label="Shipped" description="Your order is on its way" />
      <StepItem label="Delivered" description="Package delivered" />
    </Steps>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-300)' }}>
      {['sm', 'md', 'lg'].map((size) => (
        <div key={size}>
          <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-text-tertiary)', marginBottom: '8px', textTransform: 'uppercase' }}>{size}</div>
          <Steps activeStep={1} size={size}>
            <StepItem label="First" />
            <StepItem label="Second" />
            <StepItem label="Third" />
          </Steps>
        </div>
      ))}
    </div>
  ),
};

export const WithContent = {
  render: () => (
    <Steps activeStep={1} orientation="vertical">
      <StepItem label="Account created" description="Jan 15, 2025">
        Your account was successfully created with email verification.
      </StepItem>
      <StepItem label="Profile setup" description="In progress">
        Complete your profile to unlock all features.
      </StepItem>
      <StepItem label="Get started" description="Pending">
        Start using the platform.
      </StepItem>
    </Steps>
  ),
};
