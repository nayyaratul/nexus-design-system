import cx from 'classnames';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import styles from './AspectRatio.module.scss';

export function AspectRatio({
  ratio = 4 / 3,
  className,
  children,
  ...rest
}) {
  return (
    <div className={cx(styles.wrapper, className)} {...rest}>
      <AspectRatioPrimitive.Root ratio={ratio}>
        {children}
      </AspectRatioPrimitive.Root>
    </div>
  );
}
