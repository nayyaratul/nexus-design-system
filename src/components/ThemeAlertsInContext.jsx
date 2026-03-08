import { Alert } from '../atoms/Alert/Alert';

/**
 * Renders the four Alert variants for the theme page "Components in Context" section.
 * Used inside each theme panel (data-theme="light" | "dark") so tokens resolve correctly.
 */
export function ThemeAlertsInContext() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-125)' }}>
      <Alert variant="success" title="Assignment submitted">
        Your assignment has been received and is now pending review.
      </Alert>
      <Alert variant="error" title="Submission failed">
        Your submission could not be processed. Please check the file format and try again.
      </Alert>
      <Alert variant="warning" title="Deadline approaching">
        Assignment &lsquo;Research Methods&rsquo; is due in 24 hours. Submit your work soon.
      </Alert>
      <Alert variant="info" title="New course available">
        Introduction to Data Science has been added to your learning path.
      </Alert>
    </div>
  );
}
