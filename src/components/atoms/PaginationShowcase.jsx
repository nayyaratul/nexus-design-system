import { useState } from 'react';
import { Pagination } from '../../atoms/Pagination/Pagination';

const sty = {
  label: { fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' },
  demoArea: { background: 'var(--card-bg)', border: '1px solid var(--rule)', borderRadius: 'var(--radius)', padding: '24px' },
};

export function PaginationShowcase() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [pageSm, setPageSm] = useState(3);
  const [pageMd, setPageMd] = useState(3);
  const [pageLg, setPageLg] = useState(3);
  const [pageNoPrev, setPageNoPrev] = useState(3);
  const [pageFew, setPageFew] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Default */}
      <div>
        <div style={sty.label}>Default</div>
        <div style={sty.demoArea}>
          <Pagination currentPage={page1} totalPages={10} onPageChange={setPage1} />
          <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--ink-3)' }}>
            Page {page1} of 10
          </div>
        </div>
      </div>

      {/* Many Pages */}
      <div>
        <div style={sty.label}>Many Pages (20 total)</div>
        <div style={sty.demoArea}>
          <Pagination currentPage={page2} totalPages={20} onPageChange={setPage2} />
          <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--ink-3)' }}>
            Page {page2} of 20
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={sty.label}>Sizes</div>
        <div style={{ ...sty.demoArea, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', minWidth: '60px' }}>Small</span>
            <Pagination currentPage={pageSm} totalPages={10} onPageChange={setPageSm} size="sm" />
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', minWidth: '60px' }}>Medium</span>
            <Pagination currentPage={pageMd} totalPages={10} onPageChange={setPageMd} size="md" />
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', minWidth: '60px' }}>Large</span>
            <Pagination currentPage={pageLg} totalPages={10} onPageChange={setPageLg} size="lg" />
          </div>
        </div>
      </div>

      {/* Without Prev/Next */}
      <div>
        <div style={sty.label}>Without Prev / Next</div>
        <div style={sty.demoArea}>
          <Pagination currentPage={pageNoPrev} totalPages={10} onPageChange={setPageNoPrev} showPrevNext={false} />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <div style={sty.label}>Disabled</div>
        <div style={sty.demoArea}>
          <Pagination currentPage={3} totalPages={10} disabled />
        </div>
      </div>

      {/* Few Pages */}
      <div>
        <div style={sty.label}>Few Pages (3 total)</div>
        <div style={sty.demoArea}>
          <Pagination currentPage={pageFew} totalPages={3} onPageChange={setPageFew} />
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={sty.label}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Pagination currentPage={3} totalPages={10} size="sm" />
              <Pagination currentPage={5} totalPages={10} size="md" />
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Pagination currentPage={3} totalPages={10} size="sm" />
              <Pagination currentPage={5} totalPages={10} size="md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
