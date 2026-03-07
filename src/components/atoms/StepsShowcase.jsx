import { useState } from 'react';
import { Steps, StepItem } from '../../atoms/Steps/Steps';
import { User, CreditCard, Package, Check, Settings, Shield } from 'lucide-react';

const sty = {
  label: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--ink-3)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  demoArea: {
    background: 'var(--card-bg)',
    border: '1px solid var(--rule)',
    borderRadius: 'var(--radius)',
    padding: '24px',
  },
};

function InteractiveSteps() {
  const [active, setActive] = useState(1);
  const steps = ['Account', 'Profile', 'Payment', 'Confirm'];

  return (
    <div>
      <Steps activeStep={active}>
        {steps.map((label) => (
          <StepItem key={label} label={label} />
        ))}
      </Steps>
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', justifyContent: 'center' }}>
        <button
          onClick={() => setActive((p) => Math.max(0, p - 1))}
          style={{ padding: '6px 16px', borderRadius: '6px', border: '1px solid var(--rule)', background: 'var(--card-bg)', cursor: 'pointer', fontSize: '13px', color: 'inherit' }}
        >
          Back
        </button>
        <button
          onClick={() => setActive((p) => Math.min(steps.length, p + 1))}
          style={{ padding: '6px 16px', borderRadius: '6px', border: '1px solid var(--rule)', background: 'var(--card-bg)', cursor: 'pointer', fontSize: '13px', color: 'inherit' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export function StepsShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Interactive */}
      <div>
        <div style={sty.label}>Interactive (click Next / Back)</div>
        <div style={sty.demoArea}>
          <InteractiveSteps />
        </div>
      </div>

      {/* With icons */}
      <div>
        <div style={sty.label}>With icons</div>
        <div style={sty.demoArea}>
          <Steps activeStep={2}>
            <StepItem label="Account" description="Create your account" icon={User} />
            <StepItem label="Payment" description="Add payment method" icon={CreditCard} />
            <StepItem label="Shipping" description="Set delivery address" icon={Package} />
            <StepItem label="Confirm" description="Review your order" icon={Check} />
          </Steps>
        </div>
      </div>

      {/* Vertical */}
      <div>
        <div style={sty.label}>Vertical orientation</div>
        <div style={sty.demoArea}>
          <Steps activeStep={2} orientation="vertical">
            <StepItem label="Order placed" description="Your order has been confirmed" />
            <StepItem label="Processing" description="We are preparing your items" />
            <StepItem label="Shipped" description="Your order is on its way" />
            <StepItem label="Delivered" description="Package delivered to your address" />
          </Steps>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={sty.label}>Sizes</div>
        <div style={sty.demoArea}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {['sm', 'md', 'lg'].map((size) => (
              <div key={size}>
                <div style={{ fontSize: '10px', color: 'var(--ink-3)', marginBottom: '8px', fontWeight: 500 }}>{size.toUpperCase()}</div>
                <Steps activeStep={1} size={size}>
                  <StepItem label="First" />
                  <StepItem label="Second" />
                  <StepItem label="Third" />
                </Steps>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* With body content */}
      <div>
        <div style={sty.label}>With body content (vertical)</div>
        <div style={sty.demoArea}>
          <Steps activeStep={1} orientation="vertical">
            <StepItem label="Account created" description="Jan 15, 2025">
              Your account was successfully created with email verification complete.
            </StepItem>
            <StepItem label="Profile setup" description="In progress">
              Complete your profile information to unlock all platform features.
            </StepItem>
            <StepItem label="Get started" description="Pending">
              Start exploring the platform and its capabilities.
            </StepItem>
          </Steps>
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={sty.label}>Theme comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Steps activeStep={1} orientation="vertical" size="sm">
              <StepItem label="Configure" icon={Settings} />
              <StepItem label="Security" icon={Shield} />
              <StepItem label="Complete" icon={Check} />
            </Steps>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Steps activeStep={1} orientation="vertical" size="sm">
              <StepItem label="Configure" icon={Settings} />
              <StepItem label="Security" icon={Shield} />
              <StepItem label="Complete" icon={Check} />
            </Steps>
          </div>
        </div>
      </div>
    </div>
  );
}
