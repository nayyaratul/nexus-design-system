import { forwardRef } from 'react';
import cx from 'classnames';
import styles from './Textarea.module.scss';

export const Textarea = forwardRef(function Textarea(
  {
    size = 'md',
    rows = 3,
    resize = 'vertical',
    disabled = false,
    error = false,
    className,
    ...rest
  },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cx(
        styles.textarea,
        styles[size],
        styles[`resize-${resize}`],
        error && styles.error,
        className,
      )}
      disabled={disabled}
      aria-invalid={error || undefined}
      {...rest}
    />
  );
});
