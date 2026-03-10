import { useState } from 'react';
import { Dropzone } from '../../molecules/Dropzone/Dropzone';
import { FormField } from '../../atoms/FormField/FormField';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

const showcaseBlock = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-200)',
  maxWidth: 400,
};

const fileListStyle = {
  margin: 0,
  paddingLeft: 'var(--space-200)',
  fontSize: 'var(--font-size-200)',
  lineHeight: 'var(--line-height-300)',
  color: 'var(--color-text-secondary)',
};

export function DropzoneShowcase() {
  const [files, setFiles] = useState(null);

  return (
    <div className="dropzone-showcase" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-500)' }}>
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>Default</h3>
        <div style={showcaseBlock}>
          <Dropzone />
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>With hint and browse</h3>
        <div style={showcaseBlock}>
          <Dropzone
            prompt="Drag files here or click to browse"
            hint="PDF, DOC or DOCX. Max 10MB."
            browseLabel="Browse files"
          />
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>Sizes</h3>
        <div style={showcaseBlock}>
          <Dropzone size="sm" />
          <Dropzone size="md" />
          <Dropzone size="lg" />
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>States</h3>
        <div style={showcaseBlock}>
          <Dropzone />
          <Dropzone error />
          <Dropzone disabled />
        </div>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>With FormField and selected files</h3>
        <div style={showcaseBlock}>
          <FormField
            label="Upload documents"
            htmlFor="dropzone-demo"
            hint="PDF, DOC or DOCX. Drag and drop or click."
          >
            <Dropzone
              id="dropzone-demo"
              name="documents"
              accept=".pdf,.doc,.docx"
              multiple
              hint="Drag and drop or click to select."
              onFilesChange={setFiles}
            />
          </FormField>
          {files?.length > 0 && (
            <ul style={fileListStyle}>
              {Array.from(files).map((f, i) => (
                <li key={i} style={{ marginBottom: 'var(--space-050)' }}>{f.name}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

    </div>
  );
}
