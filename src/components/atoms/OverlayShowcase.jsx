import { useState } from 'react';
import { Overlay } from '../../atoms/Overlay/Overlay';

export function OverlayShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Preview in a contained area (same visual token) */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Visible (preview in contained area)
        </div>
        <div
          style={{
            position: 'relative',
            height: '200px',
            background: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-200)',
            border: '1px solid var(--color-border-subtle)',
            overflow: 'hidden',
          }}
        >
          <p style={{ position: 'relative', zIndex: 1, padding: 'var(--space-200)', margin: 0 }}>
            Content behind
          </p>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--color-bg-overlay)',
              pointerEvents: 'none',
            }}
            aria-hidden
          />
        </div>
        <p style={{ fontSize: '12px', color: 'var(--ink-2)', marginTop: '8px' }}>
          Overlay uses <code>--color-bg-overlay</code>. In a real modal, the overlay is full-screen (position: fixed).
        </p>
      </div>

      {/* Hidden state */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Hidden (visible=false)
        </div>
        <div
          style={{
            position: 'relative',
            height: '120px',
            background: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-200)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <Overlay visible={false} />
          <p style={{ position: 'relative', zIndex: 1, padding: 'var(--space-200)', margin: 0 }}>
            Overlay is present but hidden; content stays interactive.
          </p>
        </div>
      </div>

      {/* Interactive full-screen demo */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Interactive (click outside to close)
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            padding: 'var(--space-100) var(--space-150)',
            background: 'var(--color-action-primary)',
            color: 'var(--color-text-on-action)',
            border: 'none',
            borderRadius: 'var(--radius-100)',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Open overlay
        </button>
        {open && (
          <>
            <Overlay visible onClick={() => setOpen(false)} />
            <p
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1001,
                background: 'var(--color-bg-elevated)',
                padding: 'var(--space-200)',
                borderRadius: 'var(--radius-200)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                margin: 0,
              }}
            >
              Click the dimmed area to close
            </p>
          </>
        )}
      </div>
    </div>
  );
}
