import cx from 'classnames';
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from 'lucide-react';
import styles from './Alert.module.scss';

const variantIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

export function Alert({
  variant = 'info',
  title,
  icon,
  action,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...rest
}) {
  const IconComponent = icon === undefined ? variantIcons[variant] : icon;

  return (
    <div
      role="alert"
      className={cx(styles.alert, styles[variant], className)}
      {...rest}
    >
      {IconComponent && (
        <span className={styles.icon}>
          {typeof IconComponent === 'function' || IconComponent?.$$typeof ? <IconComponent size={16} /> : IconComponent}
        </span>
      )}
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.body}>{children}</div>}
        {action && <div className={styles.actions}>{action}</div>}
      </div>
      {dismissible && (
        <button
          className={styles.dismiss}
          onClick={onDismiss}
          aria-label="Dismiss alert"
          type="button"
        >
          <X size={16} aria-hidden />
        </button>
      )}
    </div>
  );
}
