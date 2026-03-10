import { Dropzone } from '../../molecules/Dropzone/Dropzone';

const titleStyle = { fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' };
const panelStyle = { padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' };
const labelStyle = { fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 };

export function DropzoneThemeComparison() {
  return (
    <div>
      <div style={titleStyle}>Theme Comparison</div>
      <div className="theme-comparison">
        <div data-theme="light" style={panelStyle}>
          <div style={labelStyle}>LIGHT</div>
          <Dropzone size="md" hint="PDF, DOC or DOCX. Max 10MB." />
        </div>
        <div data-theme="dark" style={panelStyle}>
          <div style={labelStyle}>DARK</div>
          <Dropzone size="md" hint="PDF, DOC or DOCX. Max 10MB." />
        </div>
      </div>
    </div>
  );
}
