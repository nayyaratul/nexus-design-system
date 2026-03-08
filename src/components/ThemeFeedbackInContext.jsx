import { Tag } from '../atoms/Tag/Tag';

/**
 * Renders the feedback (tag) row for the theme page "Components in Context" section.
 * Used inside each theme panel (data-theme="light" | "dark") so tokens resolve correctly.
 */
export function ThemeFeedbackInContext() {
  return (
    <div className="tp-feedback-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-100)' }}>
      <Tag variant="success">Saved</Tag>
      <Tag variant="error">Failed</Tag>
      <Tag variant="warning">Retry</Tag>
    </div>
  );
}
