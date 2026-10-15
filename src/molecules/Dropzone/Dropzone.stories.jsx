import { Dropzone } from './Dropzone';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Molecules/Dropzone',
  parameters: { design: figmaDesign('Molecules/Dropzone') },
  component: Dropzone,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    accept: { control: 'text' },
  },
};

export const Default = {
  args: {},
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Dropzone size="sm" />
      <Dropzone size="md" />
      <Dropzone size="lg" />
    </div>
  ),
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Dropzone />
      <Dropzone error />
      <Dropzone disabled />
    </div>
  ),
};

export const WithHintAndBrowse = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Dropzone
        prompt="Drag files here or click to browse"
        hint="PDF, DOC or DOCX. Max 10MB."
        browseLabel="Browse files"
      />
    </div>
  ),
};

export const WithAcceptAndMultiple = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Dropzone accept="image/*" prompt="Images only" hint="PNG, JPG, WebP" />
      <Dropzone accept=".pdf,.doc,.docx" multiple prompt="PDF or Word, multiple files" hint="Max 50MB total" />
    </div>
  ),
};

export const WithFilesCallback = {
  render: function WithFilesCallbackRender() {
    return (
      <Dropzone
        onFilesChange={(files) => {
          if (files?.length) {
            console.log('Selected:', Array.from(files).map((f) => f.name));
          }
        }}
      />
    );
  },
};
