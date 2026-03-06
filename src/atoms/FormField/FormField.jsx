import cx from 'classnames';
import { Label } from '../Label/Label';
import styles from './FormField.module.scss';

export function FormField({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  disabled = false,
  className,
  children,
}) {
  return (
    <div className={cx(styles.field, disabled && styles.disabled, className)}>
      {label && (
        <Label
          htmlFor={htmlFor}
          required={required}
          disabled={disabled}
        >
          {label}
        </Label>
      )}
      {children}
      {error ? (
        <span className={styles.error} role="alert">{error}</span>
      ) : hint ? (
        <span className={styles.hint}>{hint}</span>
      ) : null}
    </div>
  );
}
