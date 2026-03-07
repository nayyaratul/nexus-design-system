import { forwardRef } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { X } from 'lucide-react';
import cx from 'classnames';
import styles from './Popover.module.scss';

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverClose = PopoverPrimitive.Close;

export const PopoverContent = forwardRef(function PopoverContent(
  {
    side = 'bottom',
    sideOffset = 8,
    align = 'center',
    showClose = true,
    container,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <PopoverPrimitive.Portal container={container}>
      <PopoverPrimitive.Content
        ref={ref}
        side={side}
        sideOffset={sideOffset}
        align={align}
        className={cx(styles.content, className)}
        {...rest}
      >
        {showClose && (
          <PopoverPrimitive.Close className={styles.close} aria-label="Close">
            <X size={14} />
          </PopoverPrimitive.Close>
        )}
        {children}
        <PopoverPrimitive.Arrow className={styles.arrow} />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});
