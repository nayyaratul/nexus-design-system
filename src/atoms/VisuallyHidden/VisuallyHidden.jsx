import { cloneElement, Children } from 'react';
import cx from 'classnames';
import styles from './VisuallyHidden.module.scss';

export function VisuallyHidden({
  asChild = false,
  className,
  children,
  ...rest
}) {
  if (asChild) {
    const child = Children.only(children);
    return cloneElement(child, {
      ...rest,
      className: cx(styles.visuallyHidden, child.props.className, className),
    });
  }

  return (
    <span
      className={cx(styles.visuallyHidden, className)}
      {...rest}
    >
      {children}
    </span>
  );
}
