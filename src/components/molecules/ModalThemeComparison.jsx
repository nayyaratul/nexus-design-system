import { Button } from '../../atoms/Button/Button';
import { X } from 'lucide-react';

const titleStyle = { fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' };
const panelStyle = { padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' };
const labelStyle = { fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 };

const dialogStyle = {
  background: 'var(--color-bg-elevated)',
  borderRadius: 'var(--radius-150)',
  border: 'var(--border-width-100) solid var(--color-border-default)',
  display: 'flex',
  flexDirection: 'column',
};

function DialogMockup() {
  return (
    <div style={dialogStyle}>
      <div style={{ padding: 'var(--space-200) var(--space-250)', borderBottom: 'var(--border-width-100) solid var(--color-border-dialog)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-150)' }}>
          <div>
            <h4 style={{ margin: 0, fontSize: 'var(--font-size-400)', lineHeight: 'var(--line-height-400)', color: 'var(--color-text-primary)' }}>Invite learners</h4>
            <p style={{ margin: 'var(--space-050) 0 0', fontSize: 'var(--font-size-200)', lineHeight: 'var(--line-height-200)', color: 'var(--color-text-secondary)' }}>Share this course with your learners.</p>
          </div>
          <button type="button" aria-label="Close dialog" style={{ border: 'none', background: 'none', padding: 'var(--space-075)', margin: 0, borderRadius: 'var(--radius-100)', color: 'var(--color-text-tertiary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div style={{ padding: 'var(--space-250)' }}>
        <p style={{ margin: 0, fontSize: 'var(--font-size-300)', lineHeight: 'var(--line-height-300)', color: 'var(--color-text-primary)' }}>
          Learners will receive an email with a link to this course. You can also manage enrolments from the course settings page.
        </p>
      </div>
      <div style={{ padding: 'var(--space-250)', borderTop: 'var(--border-width-100) solid var(--color-border-dialog)', display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-100)' }}>
        <Button variant="ghost">Cancel</Button>
        <Button>Send invites</Button>
      </div>
    </div>
  );
}

export function ModalThemeComparison() {
  return (
    <div>
      <div style={titleStyle}>Theme Comparison</div>
      <div className="theme-comparison">
        <div data-theme="light" style={panelStyle}>
          <div style={labelStyle}>LIGHT</div>
          <DialogMockup />
        </div>
        <div data-theme="dark" style={panelStyle}>
          <div style={labelStyle}>DARK</div>
          <DialogMockup />
        </div>
      </div>
    </div>
  );
}
