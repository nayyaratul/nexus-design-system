import { forwardRef, useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import cx from 'classnames';
import styles from './Slider.module.scss';

export const Slider = forwardRef(function Slider(
  {
    value,
    defaultValue,
    onValueChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    size = 'md',
    showValue = false,
    className,
    ...rest
  },
  ref,
) {
  const [internalValue, setInternalValue] = useState(defaultValue || [50]);
  const displayValue = value || internalValue;

  const handleValueChange = (val) => {
    setInternalValue(val);
    onValueChange?.(val);
  };

  return (
    <div className={cx(styles[size], { [styles.disabled]: disabled })}>
      <SliderPrimitive.Root
        ref={ref}
        value={displayValue}
        onValueChange={handleValueChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={cx(styles.root, className)}
        {...rest}
      >
        <SliderPrimitive.Track className={styles.track}>
          <SliderPrimitive.Range className={styles.range} />
        </SliderPrimitive.Track>
        {displayValue.map((_, i) => (
          <SliderPrimitive.Thumb key={i} className={styles.thumb} />
        ))}
      </SliderPrimitive.Root>
      {showValue && (
        <div className={styles.value}>
          {displayValue.length === 1
            ? Math.round(displayValue[0])
            : displayValue.map(v => Math.round(v)).join(' – ')}
        </div>
      )}
    </div>
  );
});
