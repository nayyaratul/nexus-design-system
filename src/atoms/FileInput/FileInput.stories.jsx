import { FileInput } from './FileInput';

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
  args: {},
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
    </div>
  ),
};

export const States = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FileInput />
      <FileInput error />
      <FileInput disabled />
    </div>
  ),
};

export const AcceptAndMultiple = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FileInput accept="image/*" />
      <FileInput accept=".pdf,.doc,.docx" multiple />
    </div>
  ),
};

export const WithoutFileLabel = {
  render: () => (
    <div style={{ maxWidth: 'calc(4 * var(--space-1000))' }}>
      <FileInput showFileLabel={false} chooseLabel="Select file" />
    </div>
  ),
};
