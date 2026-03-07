import { forwardRef, useState } from 'react';
import cx from 'classnames';
import { Copy, Check } from 'lucide-react';
import styles from './Code.module.scss';

export const Code = forwardRef(function Code(
  { variant = 'inline', copyable = false, className, children, ...rest },
  ref,
) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = typeof children === 'string' ? children : '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (variant === 'inline') {
    return (
      <code ref={ref} className={cx(styles.inline, className)} {...rest}>
        {children}
      </code>
    );
  }

  return (
    <div className={cx(styles.blockWrapper, className)} ref={ref}>
      <pre className={styles.block} {...rest}>
        <code>{children}</code>
      </pre>
      {copyable && (
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label="Copy code"
          type="button"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      )}
    </div>
  );
});
