import { useState } from 'react';
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastAction, ToastClose, ToastViewport } from '../../atoms/Toast/Toast';

export function ToastShowcase() {
  const [toasts, setToasts] = useState([]);
  let counter = 0;

  const showToast = (variant) => {
    const titles = { default: 'Notification', success: 'Success', error: 'Error', warning: 'Warning' };
    const messages = { default: 'This is a default toast.', success: 'Your changes have been saved.', error: 'Something went wrong.', warning: 'You are running low on storage.' };
    setToasts((prev) => [...prev, { id: Date.now(), variant, title: titles[variant], description: messages[variant] }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const btnStyle = { fontSize: '13px', padding: '6px 14px', cursor: 'pointer', border: '1px solid var(--rule)', borderRadius: '6px', background: 'var(--card-bg)', color: 'inherit' };

  return (
    <ToastProvider swipeDirection="right">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Trigger buttons */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Trigger Toasts</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button style={btnStyle} onClick={() => showToast('default')}>Default</button>
            <button style={btnStyle} onClick={() => showToast('success')}>Success</button>
            <button style={btnStyle} onClick={() => showToast('error')}>Error</button>
            <button style={btnStyle} onClick={() => showToast('warning')}>Warning</button>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Info</div>
          <p style={{ fontSize: '13px', color: 'var(--ink-3)', margin: 0 }}>
            Toasts appear in the bottom-right corner. Click a button above to trigger one. Swipe right to dismiss.
          </p>
        </div>

        {/* Dark theme preview */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
          <div className="theme-comparison">
            <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
              <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ padding: '12px 16px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '2px' }}>Notification</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>This is a default toast.</div>
                </div>
                <div style={{ padding: '12px 16px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-status-error)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '2px' }}>Error</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Something went wrong.</div>
                </div>
              </div>
            </div>
            <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
              <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ padding: '12px 16px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-default)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '2px' }}>Notification</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>This is a default toast.</div>
                </div>
                <div style={{ padding: '12px 16px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-status-error)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '2px' }}>Error</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Something went wrong.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toasts.map((t) => (
        <Toast key={t.id} variant={t.variant} open onOpenChange={(open) => { if (!open) removeToast(t.id); }} duration={4000}>
          <div style={{ flex: 1 }}>
            <ToastTitle>{t.title}</ToastTitle>
            <ToastDescription>{t.description}</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
