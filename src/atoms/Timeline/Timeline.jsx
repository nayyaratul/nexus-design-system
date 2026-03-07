import { forwardRef } from 'react';
import cx from 'classnames';
import styles from './Timeline.module.scss';

export const TimelineItem = forwardRef(function TimelineItem(
  {
    icon,
    marker = 'dot',
    status = 'default',
    label,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <div
      ref={ref}
      role="listitem"
      className={cx(styles.item, className)}
      {...rest}
    >
      <div className={styles.markerCol}>
        <span
          className={cx(
            styles.marker,
            styles[`marker-${marker}`],
            styles[`status-${status}`],
          )}
        >
          {marker === 'icon' && icon ? icon : null}
        </span>
        <span className={styles.connector} />
      </div>
      <div className={styles.content}>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
});

export const Timeline = forwardRef(function Timeline(
  {
    orientation = 'vertical',
    variant = 'default',
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <div
      ref={ref}
      role="list"
      data-orientation={orientation}
      data-variant={variant}
      className={cx(
        styles.timeline,
        styles[orientation],
        variant === 'alternate' && styles.alternate,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
