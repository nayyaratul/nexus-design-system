import cx from 'classnames';
import { Icon } from '../../atoms/Icon/Icon';
import { Link } from '../../atoms/Link/Link';
import styles from './Breadcrumb.module.scss';

function getDisplayItems(items, maxItems, itemsBeforeCollapse, itemsAfterCollapse) {
  if (!maxItems || items.length <= maxItems) {
    return { head: items, hidden: [], tail: [] };
  }

  const head = items.slice(0, itemsBeforeCollapse);
  const tail = items.slice(items.length - itemsAfterCollapse);
  const hidden = items.slice(itemsBeforeCollapse, items.length - itemsAfterCollapse);

  return { head, hidden, tail };
}

export function Breadcrumb({
  items,
  size = 'md',
  separator,
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  ariaLabel = 'Breadcrumb',
  scrollBehavior = 'none',
  className,
  ...rest
}) {
  if (!items || items.length === 0) return null;

  const resolvedSeparator =
    separator !== undefined ? (
      separator
    ) : (
      <Icon name="ChevronRight" size="sm" aria-hidden="true" />
    );

  const { head, hidden, tail } = getDisplayItems(
    items,
    maxItems,
    itemsBeforeCollapse,
    itemsAfterCollapse,
  );

  const visibleItems = [...head, ...(hidden.length ? ['__ellipsis__'] : []), ...tail];

  return (
    <nav
      aria-label={ariaLabel}
      className={cx(
        styles.root,
        styles[size],
        scrollBehavior === 'scroll' && styles.scroll,
        className,
      )}
      {...rest}
    >
      <ol className={styles.list}>
        {visibleItems.map((item, index) => {
          const isEllipsis = item === '__ellipsis__';

          if (isEllipsis) {
            return (
              <li key="ellipsis" className={styles.item}>
                <span className={styles.ellipsis} aria-hidden="true">
                  …
                </span>
              </li>
            );
          }

          const isLast = index === visibleItems.length - 1;
          const originalIndex = items.indexOf(item);
          const isCurrent = item.isCurrent || isLast;

          const content = (
            <>
              {item.icon && (
                <span className={styles.icon} aria-hidden={item.label ? 'true' : 'false'}>
                  {item.icon}
                </span>
              )}
              {item.label && <span className={styles.label}>{item.label}</span>}
            </>
          );

          const key = item.href || item.label || originalIndex || index;

          return (
            <li key={key} className={styles.item}>
              {isCurrent || !item.href ? (
                <span
                  className={cx(styles.current, !item.label && styles.iconOnly)}
                  aria-current={isCurrent ? 'page' : undefined}
                  aria-label={!item.label ? item.ariaLabel : undefined}
                >
                  {content}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cx(styles.link, !item.label && styles.iconOnly)}
                  aria-label={!item.label ? item.ariaLabel : undefined}
                >
                  {content}
                </Link>
              )}
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  {resolvedSeparator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

