import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import cx from 'classnames';
import styles from './Checkbox.module.scss';

export const Checkbox = forwardRef(function Checkbox(
  {
    checked,
    onCheckedChange,
    disabled = false,
    required = false,
    size = 'md',
    className,
    ...rest
  },
  ref,
) {
  const iconSize = size === 'sm' ? 12 : 14;

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      className={cx(
        styles.checkbox,
        styles[size],
        className,
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator className={styles.indicator}>
        {checked === 'indeterminate' ? (
          <Minus size={iconSize} strokeWidth={3} />
        ) : (
          <Check size={iconSize} strokeWidth={3} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
