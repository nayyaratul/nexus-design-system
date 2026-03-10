import { forwardRef, useId, useState, useMemo, useCallback } from 'react';
import cx from 'classnames';
import { RatingStar } from '../../atoms/RatingStar/RatingStar';
import { Text } from '../../atoms/Text/Text';
import styles from './Rating.module.scss';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function roundToPrecision(value, precision) {
  if (!precision || precision <= 0) return value;
  const factor = 1 / precision;
  return Math.round(value * factor) / factor;
}

export const Rating = forwardRef(function Rating(
  {
    value: controlledValue,
    defaultValue = null,
    max = 5,
    precision = 1,
    readOnly = false,
    disabled = false,
    onChange,
    name,
    id,
    variant = 'standard',
    size = 'md',
    color = 'default',
    label,
    showValue = false,
    showMax = false,
    showCount = false,
    count,
    getLabelText,
    allowClear = false,
    dir = 'ltr',
    className,
    ...rest
  },
  ref,
) {
  const isControlled = controlledValue != null;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue == null ? null : clamp(roundToPrecision(defaultValue, precision), 0, max),
  );
  const [hoverValue, setHoverValue] = useState(null);

  const ratingId = useId();
  const groupId = id || ratingId;

  const currentValue = useMemo(() => {
    const base = isControlled ? controlledValue : uncontrolledValue;
    if (base == null) return null;
    return clamp(roundToPrecision(base, precision), 0, max);
  }, [controlledValue, uncontrolledValue, isControlled, precision, max]);

  const displayValue = hoverValue != null ? hoverValue : currentValue;

  const handleChange = useCallback(
    (newValue) => {
      if (readOnly || disabled) return;
      const next =
        allowClear && currentValue != null && newValue === currentValue ? null : newValue;

      if (!isControlled) {
        setUncontrolledValue(next);
      }
      if (onChange) {
        onChange(next);
      }
    },
    [allowClear, currentValue, disabled, isControlled, onChange, readOnly],
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (readOnly || disabled) return;

      const isRtl = dir === 'rtl';
      const incrementKeys = isRtl ? ['ArrowLeft', 'ArrowDown'] : ['ArrowRight', 'ArrowUp'];
      const decrementKeys = isRtl ? ['ArrowRight', 'ArrowUp'] : ['ArrowLeft', 'ArrowDown'];

      let next = currentValue == null ? 0 : currentValue;

      if (incrementKeys.includes(event.key)) {
        event.preventDefault();
        next = clamp(roundToPrecision((next || 0) + precision, precision), 0, max);
        handleChange(next);
      } else if (decrementKeys.includes(event.key)) {
        event.preventDefault();
        next = clamp(roundToPrecision((next || 0) - precision, precision), 0, max);
        handleChange(next);
      } else if (event.key === 'Home') {
        event.preventDefault();
        handleChange(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        handleChange(max);
      } else if ((event.key === 'Enter' || event.key === ' ') && displayValue != null) {
        event.preventDefault();
        handleChange(displayValue);
      }
    },
    [currentValue, dir, displayValue, handleChange, max, precision, readOnly, disabled],
  );

  const stars = useMemo(() => {
    const effectiveValue = displayValue == null ? 0 : displayValue;
    const items = [];

    for (let index = 1; index <= max; index += 1) {
      let state = 'empty';

      if (effectiveValue >= index) {
        state = 'filled';
      } else if (
        precision < 1 &&
        effectiveValue > index - 1 &&
        effectiveValue < index &&
        Math.abs(effectiveValue - (index - 0.5)) < precision
      ) {
        state = 'half';
      }

      items.push({ index, state });
    }

    return items;
  }, [displayValue, max, precision]);

  const defaultGetLabelText = useCallback(
    (starValue) => {
      if (starValue === 0) return 'No rating';
      const base = `${starValue} ${starValue === 1 ? 'star' : 'stars'}`;
      if (max && starValue > 0) {
        return `${base} out of ${max}`;
      }
      return base;
    },
    [max],
  );

  const resolveLabelText = (starValue) =>
    getLabelText ? getLabelText(starValue, max) : defaultGetLabelText(starValue);

  const rootRole = readOnly ? undefined : 'radiogroup';
  const ariaLabel =
    typeof label === 'string' ? label : currentValue != null ? resolveLabelText(currentValue) : undefined;

  const isInteractive = !readOnly && !disabled;

  const baseClassName = cx(
    styles.root,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    !isInteractive && styles.readOnly,
    disabled && styles.disabled,
    className,
  );

  return (
    <div
      ref={ref}
      id={groupId}
      className={baseClassName}
      role={rootRole}
      aria-label={rootRole ? ariaLabel : undefined}
      aria-disabled={disabled || undefined}
      data-readonly={readOnly ? 'true' : undefined}
      data-dir={dir}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      {...rest}
    >
      {label && (
        <Text
          as="span"
          variant="body"
          size="sm"
          className={styles.label}
        >
          {label}
        </Text>
      )}

      <div className={styles.group} dir={dir}>
        {stars.map(({ index, state }) => {
          const starValue = index * precision > 1 ? index : index;
          const checked = currentValue != null && currentValue >= index;
          const isFocusable =
            currentValue == null ? index === 1 : Math.round(currentValue) === index;

          if (!isInteractive) {
            return (
              <RatingStar
                key={index}
                state={state}
                size={size}
                className={styles.star}
              />
            );
          }

          return (
            <button
              key={index}
              type="button"
              className={cx(styles.starButton, checked && styles.starButtonChecked)}
              name={name}
              value={starValue}
              role="radio"
              aria-checked={checked}
              tabIndex={isFocusable ? 0 : -1}
              onClick={() => handleChange(index)}
              onMouseEnter={() => setHoverValue(index)}
              onMouseLeave={() => setHoverValue(null)}
              onBlur={() => setHoverValue(null)}
            >
              <span className={styles.starWrapper} aria-hidden="true">
                <RatingStar state={state} size={size} className={styles.star} />
              </span>
              <span className={styles.visuallyHidden}>{resolveLabelText(index)}</span>
            </button>
          );
        })}
      </div>

      {(showValue || showCount) && (
        <div className={styles.meta}>
          {showValue && (
            <Text as="span" variant="body" size="sm" className={styles.value}>
              {currentValue != null ? currentValue.toFixed(precision < 1 ? 1 : 0) : '–'}
              {showMax && max ? (
                <span className={styles.max}>/{max}</span>
              ) : null}
            </Text>
          )}
          {showCount && typeof count === 'number' && (
            <Text as="span" variant="body" size="sm" className={styles.count}>
              ({count.toLocaleString()})
            </Text>
          )}
        </div>
      )}
    </div>
  );
});

