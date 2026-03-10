import { forwardRef, useState } from 'react';
import cx from 'classnames';
import { Input } from '../Input/Input';
import { Icon } from '../Icon/Icon';
import styles from './InputField.module.scss';

const kindDefaults = {
  default: {
    type: 'text',
    iconName: null,
    iconPosition: 'left',
  },
  search: {
    type: 'search',
    iconName: 'Search',
    iconPosition: 'left',
  },
  password: {
    type: 'password',
    iconName: 'EyeOff',
    iconPosition: 'right',
  },
  date: {
    type: 'text',
    iconName: 'Calendar',
    iconPosition: 'right',
  },
  time: {
    type: 'text',
    iconName: 'Clock',
    iconPosition: 'right',
  },
};

export const InputField = forwardRef(function InputField(
  {
    size = 'md',
    error = false,
    disabled = false,
    kind = 'default',
    icon,
    iconPosition: iconPositionProp,
    className,
    ...rest
  },
  ref,
) {
  const defaults = kindDefaults[kind] || kindDefaults.default;
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordKind = kind === 'password';
  const resolvedType =
    rest.type ||
    (isPasswordKind ? (showPassword ? 'text' : defaults.type) : defaults.type);

  const resolvedIconPosition = iconPositionProp || defaults.iconPosition;
  const hasIcon = Boolean(icon) || Boolean(defaults.iconName);

  const renderIcon = () => {
    if (!hasIcon) return null;

    if (isPasswordKind) {
      const iconName = showPassword ? 'Eye' : 'EyeOff';

      return (
        <button
          type="button"
          className={cx(
            styles.icon,
            styles[resolvedIconPosition],
            styles.passwordToggle,
          )}
          onClick={() => {
            if (!disabled) {
              setShowPassword(prev => !prev);
            }
          }}
          disabled={disabled}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <Icon name={iconName} size="sm" aria-hidden />
        </button>
      );
    }

    if (icon) {
      return (
        <span
          className={cx(styles.icon, styles[resolvedIconPosition])}
        >
          {icon}
        </span>
      );
    }

    if (!defaults.iconName) return null;

    return (
      <span
        className={cx(styles.icon, styles[resolvedIconPosition])}
      >
        <Icon name={defaults.iconName} size="sm" aria-hidden />
      </span>
    );
  };

  return (
    <div
      className={cx(
        styles.field,
        hasIcon && styles.withIcon,
        hasIcon && styles[`withIcon-${resolvedIconPosition}`],
        error && styles.error,
        disabled && styles.disabled,
        styles[size],
        className,
      )}
    >
      <Input
        ref={ref}
        size={size}
        error={error}
        disabled={disabled}
        className={cx(
          styles.input,
          hasIcon && styles.inputWithIcon,
          hasIcon && styles[`inputWithIcon-${resolvedIconPosition}`],
        )}
        type={resolvedType}
        {...rest}
      />
      {renderIcon()}
    </div>
  );
});
