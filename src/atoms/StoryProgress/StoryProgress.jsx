import cx from 'classnames';
import styles from './StoryProgress.module.scss';

export function StoryProgress({
  segments = 5,
  activeIndex = 0,
  progress = 0,
  size = 'md',
  variant = 'default',
  className,
  ...rest
}) {
  const progressClamped = Math.min(1, Math.max(0, progress));
  const activeClamped = Math.min(segments - 1, Math.max(0, activeIndex));
  const ariaValueNow = activeClamped + progressClamped;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={segments}
      aria-valuenow={ariaValueNow}
      aria-label={`Segment ${activeClamped + 1} of ${segments}${progressClamped > 0 && progressClamped < 1 ? `, ${Math.round(progressClamped * 100)}%` : ''}`}
      className={cx(styles.root, styles[variant], className)}
      {...rest}
    >
      {Array.from({ length: segments }, (_, i) => {
        const isPast = i < activeClamped;
        const isActive = i === activeClamped;
        const fillWidth = isPast ? 100 : isActive ? progressClamped * 100 : 0;
        const sizeClass = size === 'xs' ? styles.trackXs : size === 'sm' ? styles.trackSm : size === 'lg' ? styles.trackLg : styles.trackMd;

        return (
          <div
            key={i}
            className={cx(styles.segment, sizeClass)}
          >
            {(isPast || isActive) && (
              <div
                className={styles.fill}
                style={{ width: `${fillWidth}%` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
