import { forwardRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import cx from 'classnames';
import styles from './RadioGroup.module.scss';

export const RadioGroup = forwardRef(function RadioGroup(
  {
    value,
    onValueChange,
    disabled = false,
    orientation = 'vertical',
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      orientation={orientation}
      className={cx(
        styles.group,
        styles[orientation],
        className,
      )}
      {...rest}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
});

export const RadioItem = forwardRef(function RadioItem(
  {
    value,
    disabled = false,
    children,
    className,
    ...rest
  },
  ref,
) {
  return (
    <div className={cx(styles.item, className)}>
      <RadioGroupPrimitive.Item
        ref={ref}
        value={value}
        disabled={disabled}
        className={styles.radio}
        {...rest}
      >
        <RadioGroupPrimitive.Indicator className={styles.indicator} />
      </RadioGroupPrimitive.Item>
      {children && (
        <label className={styles.label} htmlFor={undefined}>
          {children}
        </label>
      )}
    </div>
  );
});
