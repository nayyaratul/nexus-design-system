import { FileInput } from './FileInput';
import { FormField } from '../FormField/FormField';

export default {
  title: 'Atoms/Upload File',
  component: FileInput,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    accept: { control: 'text' },
    demoSelectedLabel: { control: 'text' },
  },
};

export const Default = {
  render: () => (
    <div style={{ maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FormField
        label="Upload document"
        htmlFor="fileinput-story"
        hint="Accepted: PDF, DOC, DOCX. Max 10 MB."
      >
        <FileInput id="fileinput-story" name="document" />
      </FormField>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FileInput size="sm" aria-label="Upload file (small)" />
      <FileInput size="md" aria-label="Upload file (medium)" />
      <FileInput size="lg" aria-label="Upload file (large)" />
    </div>
  ),
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FileInput aria-label="Upload file" />
      <FileInput error aria-label="Upload file with error" />
      <FileInput disabled aria-label="Upload file (disabled)" />
    </div>
  ),
};

export const AcceptAndMultiple = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FileInput accept="image/*" aria-label="Upload image" />
      <FileInput accept=".pdf,.doc,.docx" multiple aria-label="Upload document(s)" />
    </div>
  ),
};

export const WithoutFileLabel = {
  render: () => (
    <div style={{ maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FileInput showFileLabel={false} chooseLabel="Select file" aria-label="Upload file" />
    </div>
  ),
};

export const Primitive = {
  args: {
    'aria-label': 'Upload file',
  },
};
