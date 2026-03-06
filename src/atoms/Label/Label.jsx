import { forwardRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import cx from 'classnames';
import styles from './Label.module.scss';

export const Label = forwardRef(function Label(
  {
    size = 'md',
    required = false,
    disabled = false,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cx(
        styles.label,
        styles[size],
        disabled && styles.disabled,
        className,
      )}
      {...rest}
    >
      {children}
      {required && <span aria-hidden="true" className={styles.required}> *</span>}
    </LabelPrimitive.Root>
  );
});
