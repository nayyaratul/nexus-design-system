import cx from 'classnames';
import { Skeleton } from '../../atoms/Skeleton/Skeleton';
import styles from './ListSkeleton.module.scss';

export function ListSkeleton({
  layout = 'list',
  count = 5,
  animated = true,
  density = 'comfortable',
  lines = 2,
  hasLeading = true,
  hasTrailing = false,
  hasMedia = true,
  hasFooter = false,
  className,
  ...rest
}) {
  const safeCount = Math.max(1, count);
  const safeLines = Math.min(Math.max(lines, 1), 3);

  const rootClassName = cx(
    styles.root,
    styles[`layout-${layout}`],
    styles[`density-${density}`],
    !animated && styles.static,
    className,
  );

  const noAnimClass = !animated ? styles.staticSkeleton : undefined;

  const renderListItem = (index) => (
    <div key={index} className={styles.listItem}>
      {hasLeading && (
        <Skeleton
          width={32}
          height={32}
          borderRadius="var(--radius-100)"
          className={cx(styles.leading, noAnimClass)}
        />
      )}

      <div className={styles.listBody}>
        {Array.from({ length: safeLines }).map((_, i) => (
          <Skeleton
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            width={i === 0 ? '80%' : i === safeLines - 1 ? '60%' : '100%'}
            height={10}
            className={cx(styles.line, noAnimClass)}
          />
        ))}
      </div>

      {hasTrailing && (
        <Skeleton
          width={48}
          height={16}
          borderRadius="999px"
          className={cx(styles.trailing, noAnimClass)}
        />
      )}
    </div>
  );

  const renderCardItem = (index) => (
    <div key={index} className={styles.cardItem}>
      {hasMedia && (
        <Skeleton
          width="100%"
          height={140}
          borderRadius="var(--radius-150)"
          className={cx(styles.media, noAnimClass)}
        />
      )}

      <div className={styles.cardBody}>
        {Array.from({ length: safeLines }).map((_, i) => (
          <Skeleton
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            width={i === 0 ? '90%' : i === safeLines - 1 ? '70%' : '100%'}
            height={10}
            className={cx(styles.line, noAnimClass)}
          />
        ))}
      </div>

      {hasFooter && (
        <div className={styles.cardFooter}>
          <Skeleton
            width={72}
            height={18}
            borderRadius="999px"
            className={cx(styles.footerPill, noAnimClass)}
          />
          <Skeleton
            width={52}
            height={18}
            borderRadius="999px"
            className={cx(styles.footerPill, noAnimClass)}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className={rootClassName} aria-hidden="true" {...rest}>
      {Array.from({ length: safeCount }).map((_, index) =>
        layout === 'card' ? renderCardItem(index) : renderListItem(index),
      )}
    </div>
  );
}

