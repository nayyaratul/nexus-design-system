import { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';
import cx from 'classnames';
import styles from './Select.module.scss';

export const Select = SelectPrimitive.Root;

export const SelectTrigger = forwardRef(function SelectTrigger(
  {
    size = 'md',
    error = false,
    placeholder,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cx(
        styles.trigger,
        styles[size],
        error && styles.error,
        className,
      )}
      aria-invalid={error || undefined}
      {...rest}
    >
      <SelectPrimitive.Value placeholder={placeholder} />
      <SelectPrimitive.Icon className={styles.icon}>
        <ChevronDown size={16} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

export const SelectContent = forwardRef(function SelectContent(
  { className, children, ...rest },
  ref,
) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        position="popper"
        sideOffset={4}
        className={cx(styles.content, className)}
        {...rest}
      >
        <SelectPrimitive.Viewport className={styles.viewport}>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});

export const SelectItem = forwardRef(function SelectItem(
  { className, children, ...rest },
  ref,
) {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cx(styles.item, className)}
      {...rest}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={styles.itemIndicator}>
        <Check size={14} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

export const SelectGroup = SelectPrimitive.Group;

export const SelectLabel = forwardRef(function SelectLabel(
  { className, ...rest },
  ref,
) {
  return (
    <SelectPrimitive.Label
      ref={ref}
      className={cx(styles.groupLabel, className)}
      {...rest}
    />
  );
});
