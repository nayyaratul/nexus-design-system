import { forwardRef, createContext, useContext, Children, cloneElement, isValidElement } from 'react';
import { Check } from 'lucide-react';
import cx from 'classnames';
import styles from './Steps.module.scss';

const StepsContext = createContext({ activeStep: 0, orientation: 'horizontal', size: 'md' });

export const Steps = forwardRef(function Steps(
  {
    activeStep = 0,
    orientation = 'horizontal',
    size = 'md',
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <StepsContext.Provider value={{ activeStep, orientation, size }}>
      <div
        ref={ref}
        role="list"
        className={cx(
          styles.root,
          styles[orientation],
          styles[`size-${size}`],
          className,
        )}
        {...rest}
      >
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, { _index: index, _total: Children.count(children) });
          }
          return child;
        })}
      </div>
    </StepsContext.Provider>
  );
});

export const StepItem = forwardRef(function StepItem(
  {
    label,
    description,
    icon: Icon,
    status: statusProp,
    _index = 0,
    _total = 1,
    className,
    children,
    ...rest
  },
  ref,
) {
  const { activeStep, orientation, size } = useContext(StepsContext);

  const status = statusProp ?? (
    _index < activeStep ? 'complete' : _index === activeStep ? 'active' : 'upcoming'
  );

  const isLast = _index === _total - 1;

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

  return (
    <div
      ref={ref}
      role="listitem"
      aria-current={status === 'active' ? 'step' : undefined}
      className={cx(
        styles.item,
        styles[`item--${status}`],
        isLast && styles['item--last'],
        className,
      )}
      {...rest}
    >
      <div className={styles.indicator}>
        <span className={cx(styles.marker, styles[`marker--${status}`])}>
          {status === 'complete' ? (
            <Check size={iconSize} />
          ) : Icon ? (
            typeof Icon === 'function' || Icon?.$$typeof ? <Icon size={iconSize} /> : Icon
          ) : (
            <span className={styles.markerNumber}>{_index + 1}</span>
          )}
        </span>
        {!isLast && (
          <span className={cx(styles.connector, status === 'complete' && styles['connector--complete'])} />
        )}
      </div>
      <div className={styles.content}>
        <span className={cx(styles.label, styles[`label--${status}`])}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
        {children && <div className={styles.body}>{children}</div>}
      </div>
    </div>
  );
});
