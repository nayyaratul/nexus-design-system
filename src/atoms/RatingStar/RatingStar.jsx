import { forwardRef } from 'react';
import cx from 'classnames';
import styles from './RatingStar.module.scss';

/** 5-point star path (filled); use currentColor for fill */
const StarPath = () => (
  <path
    fill="currentColor"
    d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6L12 2z"
  />
);

export const RatingStar = forwardRef(function RatingStar(
  {
    state,
    size = 'md',
    disabled = false,
    className,
    ...rest
  },
  ref,
) {
  const isHalf = state === 'half';
  const isFilled = state === 'filled';

  return (
    <span
      ref={ref}
      className={cx(
        styles.root,
        styles[size],
        state === 'filled' && styles.filled,
        state === 'empty' && styles.empty,
        state === 'half' && styles.half,
        disabled && styles.disabled,
        className,
      )}
      aria-hidden
      {...rest}
    >
      {isHalf ? (
        <>
          <span className={cx(styles.layer, styles.layerEmpty)} aria-hidden>
            <svg viewBox="0 0 24 24" className={styles.svg}>
              <StarPath />
            </svg>
          </span>
          <span className={cx(styles.layer, styles.layerFilled)} aria-hidden>
            <svg viewBox="0 0 24 24" className={styles.svg}>
              <StarPath />
            </svg>
          </span>
        </>
      ) : (
        <svg viewBox="0 0 24 24" className={styles.svg}>
          <StarPath />
        </svg>
      )}
    </span>
  );
});
