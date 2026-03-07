import { useState } from 'react';
import cx from 'classnames';
import { ImageOff, Expand } from 'lucide-react';
import styles from './Thumbnail.module.scss';

export function Thumbnail({
  src,
  alt,
  size = 'md',
  overlay = false,
  overlayIcon = <Expand size={18} />,
  onClick,
  className,
  ...rest
}) {
  const [error, setError] = useState(false);

  return (
    <div
      className={cx(styles.thumbnail, styles[size], className)}
      onClick={overlay ? onClick : undefined}
      role={overlay && onClick ? 'button' : undefined}
      tabIndex={overlay && onClick ? 0 : undefined}
      {...rest}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          className={styles.img}
          onError={() => setError(true)}
        />
      ) : (
        <div className={styles.fallback}>
          <ImageOff size={size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
        </div>
      )}

      {overlay && !error && (
        <div className={styles.overlay}>
          {overlayIcon}
        </div>
      )}
    </div>
  );
}
