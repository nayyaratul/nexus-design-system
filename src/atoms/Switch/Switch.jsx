import { forwardRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import cx from 'classnames';
import styles from './Switch.module.scss';

export const Switch = forwardRef(function Switch(
  {
    checked,
    onCheckedChange,
    disabled = false,
    size = 'md',
    className,
    ...rest
  },
  ref,
) {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cx(
        styles.track,
        styles[size],
        className,
      )}
      {...rest}
    >
      <SwitchPrimitive.Thumb className={styles.thumb} />
    </SwitchPrimitive.Root>
  );
});
