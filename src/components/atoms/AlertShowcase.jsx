import { useState } from 'react';
import { Alert } from '../../atoms/Alert/Alert';
import { Button } from '../../atoms/Button/Button';

export function AlertShowcase() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Variants */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Alert variant="info" title="Info">This is an informational message.</Alert>
          <Alert variant="success" title="Success">Your changes have been saved successfully.</Alert>
          <Alert variant="warning" title="Warning">This action cannot be undone.</Alert>
          <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
        </div>
      </div>

      {/* Dismissible */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Dismissible</div>
        {!dismissed ? (
          <Alert variant="warning" title="Heads up" dismissible onDismiss={() => setDismissed(true)}>
            Click the dismiss button to hide this alert.
          </Alert>
        ) : (
          <button
            onClick={() => setDismissed(false)}
            style={{ fontSize: '13px', padding: '6px 12px', cursor: 'pointer', border: '1px solid var(--rule)', borderRadius: '6px', background: 'var(--card-bg)', color: 'inherit' }}
          >
            Show alert again
          </button>
        )}
      </div>

      {/* With Action */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Action</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Title Only</div>
        <Alert variant="success" title="File uploaded successfully" />
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Alert variant="info" title="Info">This is an informational message.</Alert>
              <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Alert variant="info" title="Info">This is an informational message.</Alert>
              <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
