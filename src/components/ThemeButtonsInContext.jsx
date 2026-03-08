import { Button } from '../atoms/Button/Button';

/**
 * Renders the button row for the theme page "Components in Context" section.
 * Used inside each theme panel (data-theme="light" | "dark") so tokens resolve correctly.
 */
export function ThemeButtonsInContext() {
  return (
    <div className="tp-button-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-100)' }}>
      <Button variant="primary">Enrol</Button>
      <Button variant="destructive">Drop Course</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  );
}
