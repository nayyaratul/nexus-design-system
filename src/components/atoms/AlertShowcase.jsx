import { useState } from 'react';
import { Alert } from '../../atoms/Alert/Alert';
import { Button } from '../../atoms/Button/Button';

const sectionLabelStyle = {
  fontSize: 'var(--font-size-200)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase',
  marginBottom: 'var(--space-150)',
};

export function AlertShowcase() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      {/* Variants */}
      <div>
        <div style={sectionLabelStyle}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
          <Alert variant="info" title="Info">This is an informational message.</Alert>
          <Alert variant="success" title="Success">Your changes have been saved successfully.</Alert>
          <Alert variant="warning" title="Warning">This action cannot be undone.</Alert>
          <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
        </div>
      </div>

      {/* Dismissible */}
      <div>
        <div style={sectionLabelStyle}>Dismissible</div>
        {!dismissed ? (
          <Alert variant="warning" title="Heads up" dismissible onDismiss={() => setDismissed(true)}>
            Click the dismiss button to hide this alert.
          </Alert>
        ) : (
          <button
            onClick={() => setDismissed(false)}
            style={{
              fontSize: 'var(--font-size-300)',
              padding: 'var(--space-075) var(--space-150)',
              cursor: 'pointer',
              border: 'var(--border-width-100) solid var(--color-border-default)',
              borderRadius: 'var(--radius-150)',
              background: 'var(--color-bg-elevated)',
              color: 'inherit',
              fontFamily: 'var(--sans)',
            }}
          >
            Show alert again
          </button>
        )}
      </div>

      {/* With Action */}
      <div>
        <div style={sectionLabelStyle}>With Action</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
          <Alert
            variant="info"
            title="New version available"
            action={
              <Button variant="secondary" size="sm">Update now</Button>
            }
          >
            Version 2.4.0 is ready to install with new features and bug fixes.
          </Alert>
          <Alert
            variant="error"
            title="Payment failed"
            dismissible
            onDismiss={() => {}}
            action={
              <>
                <Button variant="destructive" size="sm">Retry</Button>
                <Button variant="ghost" size="sm">Cancel</Button>
              </>
            }
          >
            Your card was declined. Please update your payment method or try again.
          </Alert>
        </div>
      </div>

      {/* Title only */}
      <div>
        <div style={sectionLabelStyle}>Title Only</div>
        <Alert variant="success" title="File uploaded successfully" />
      </div>

      {/* Theme comparison */}
      <div>
        <div style={sectionLabelStyle}>Theme Comparison</div>
        <div className="theme-comparison">
          <div
            data-theme="light"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-theme-panel)',
              borderRadius: 'var(--radius-150)',
              border: 'var(--border-width-100) solid var(--color-border-default)',
            }}
          >
            <div style={{ fontSize: 'var(--font-size-100)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-150)', fontWeight: 'var(--font-weight-medium)' }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-125)' }}>
              <Alert variant="info" title="Info">This is an informational message.</Alert>
              <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
            </div>
          </div>
          <div
            data-theme="dark"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-theme-panel)',
              borderRadius: 'var(--radius-150)',
              border: 'var(--border-width-100) solid var(--color-border-default)',
            }}
          >
            <div style={{ fontSize: 'var(--font-size-100)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-150)', fontWeight: 'var(--font-weight-medium)' }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-125)' }}>
              <Alert variant="info" title="Info">This is an informational message.</Alert>
              <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
