import { useState } from 'react';
import { Pagination } from './Pagination';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Pagination',
  parameters: { design: figmaDesign('Atoms/Pagination') },
  component: Pagination,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    currentPage: { control: { type: 'number', min: 1, max: 20 } },
    totalPages: { control: { type: 'number', min: 1, max: 100 } },
    siblings: { control: { type: 'number', min: 0, max: 3 } },
    showPrevNext: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

function InteractivePagination(props) {
  const [page, setPage] = useState(props.currentPage ?? 1);
  return <Pagination {...props} currentPage={page} onPageChange={setPage} />;
}

export const Default = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <InteractivePagination currentPage={1} totalPages={10} />
    </div>
  ),
};

export const ManyPages = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <InteractivePagination currentPage={5} totalPages={20} />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <InteractivePagination currentPage={3} totalPages={10} size="sm" />
      <InteractivePagination currentPage={3} totalPages={10} size="md" />
      <InteractivePagination currentPage={3} totalPages={10} size="lg" />
    </div>
  ),
};

export const NoPrevNext = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <InteractivePagination currentPage={3} totalPages={10} showPrevNext={false} />
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <Pagination currentPage={3} totalPages={10} disabled />
    </div>
  ),
};

export const FewPages = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <InteractivePagination currentPage={1} totalPages={3} />
    </div>
  ),
};
