import { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import { ImageOff } from 'lucide-react';
import { Skeleton } from '../Skeleton/Skeleton';
import styles from './Image.module.scss';

export function Image({
  src,
  alt,
  className,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(!src);
  const imgRef = useRef(null);

  // Catch images that errored before hydration or during SSR
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth === 0) {
        setError(true);
      } else {
        setLoaded(true);
      }
    }
  }, []);

  return (
    <div className={cx(styles.wrapper, className)}>
      {!error && (
        <>
          <div
            className={styles.blur}
            style={{ backgroundImage: `url(${src})` }}
          />
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading="lazy"
            className={styles.img}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            {...rest}
          />
        </>
      )}

      {!loaded && !error && (
        <div className={styles.skeleton}>
          <Skeleton width="100%" height="100%" />
        </div>
      )}

      {error && (
        <div className={styles.fallback}>
          <ImageOff size={32} />
        </div>
      )}
    </div>
  );
}
