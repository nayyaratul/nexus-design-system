import { FileInput } from '../../atoms/FileInput/FileInput';
import { FormField } from '../../atoms/FormField/FormField';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase',
  margin: 'var(--space-000) var(--space-000) var(--space-150) var(--space-000)',
};

const showcaseBlock = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-200)',
  maxWidth: 'calc(4.5 * var(--space-1000))',
};

export function FileInputShowcase() {
  return (
    <div className="fileinput-showcase" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-500)' }}>
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>Sizes</h3>
        <div style={showcaseBlock}>
          <FileInput size="sm" />
          <FileInput size="md" />
          <FileInput size="lg" />
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>States</h3>
        <div style={showcaseBlock}>
          <FileInput />
          <FileInput demoSelectedLabel="report.pdf" />
          <FileInput error />
          <FileInput disabled />
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>Accept & multiple</h3>
        <div style={showcaseBlock}>
          <FileInput accept="image/*" />
          <FileInput accept=".pdf,.doc,.docx" multiple />
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>Without file label</h3>
        <div style={showcaseBlock}>
          <FileInput showFileLabel={false} chooseLabel="Select file" />
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>With FormField</h3>
        <div style={showcaseBlock}>
          <FormField
            label="Upload document"
            htmlFor="fileinput-demo"
            hint="Accepted: PDF, DOC, DOCX. Max 10 MB."
          >
            <FileInput id="fileinput-demo" name="document" accept=".pdf,.doc,.docx" />
          </FormField>
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>With FormField (error)</h3>
        <div style={showcaseBlock}>
          <FormField
            label="Required file"
            htmlFor="fileinput-error-demo"
            error="Please select a file."
          >
            <FileInput id="fileinput-error-demo" name="required" error />
          </FormField>
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>Theme Comparison</h3>
        <div className="theme-comparison">
          <div
            data-theme="light"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-150)',
              border: 'var(--border-width-100) solid var(--color-border-default)',
            }}
          >
            <div
              style={{
                fontSize: 'var(--font-size-100)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-150)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              LIGHT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-200)' }}>
              <FileInput />
              <FileInput demoSelectedLabel="report.pdf" />
            </div>
          </div>
          <div
            data-theme="dark"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-150)',
              border: 'var(--border-width-100) solid var(--color-border-default)',
            }}
          >
            <div
              style={{
                fontSize: 'var(--font-size-100)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-150)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              DARK
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-200)' }}>
              <FileInput />
              <FileInput demoSelectedLabel="report.pdf" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
