import { forwardRef } from 'react';
import cx from 'classnames';
import { ExternalLink } from 'lucide-react';
import styles from './Link.module.scss';

export const Link = forwardRef(function Link(
  { href, variant = 'default', external, disabled = false, className, children, ...rest },
  ref,
) {
  const isExternal = external || rest.target === '_blank';

  const linkProps = { ...rest };

  if (isExternal) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }

  if (disabled) {
    linkProps['aria-disabled'] = 'true';
    linkProps.tabIndex = -1;
    linkProps.onClick = (e) => e.preventDefault();
  }

  return (
    <a
      ref={ref}
      href={href}
      className={cx(styles.link, styles[variant], disabled && styles.disabled, className)}
      {...linkProps}
    >
      {children}
      {isExternal && <ExternalLink size={12} className={styles.externalIcon} />}
    </a>
  );
});
