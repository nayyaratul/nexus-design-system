import { forwardRef, createContext, useContext, useRef, useCallback } from 'react';
import { Check, Circle } from 'lucide-react';
import cx from 'classnames';
import styles from './Menu.module.scss';

/* ─── Context ────────────────────────────────────────────── */
const MenuContext = createContext({ size: 'md' });

/* ─── Helpers ────────────────────────────────────────────── */
function getItems(container) {
  return Array.from(
    container.querySelectorAll('[role^="menuitem"]:not([aria-disabled="true"])'),
  );
}

function focusItem(items, index) {
  const target = items[index];
  if (target) target.focus();
}

/* ─── Menu ───────────────────────────────────────────────── */
export const Menu = forwardRef(function Menu(
  { size = 'md', panel = false, onEscape, className, children, ...rest },
  ref,
) {
  const typeaheadRef = useRef('');
  const typeaheadTimer = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      const container = e.currentTarget;
      const items = getItems(container);
      const currentIndex = items.indexOf(document.activeElement);

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          focusItem(items, next);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          focusItem(items, prev);
          break;
        }
        case 'Home': {
          e.preventDefault();
          focusItem(items, 0);
          break;
        }
        case 'End': {
          e.preventDefault();
          focusItem(items, items.length - 1);
          break;
        }
        case 'Escape': {
          e.preventDefault();
          onEscape?.(e);
          break;
        }
        default: {
          // Typeahead
          if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            typeaheadRef.current += e.key.toLowerCase();
            clearTimeout(typeaheadTimer.current);
            typeaheadTimer.current = setTimeout(() => {
              typeaheadRef.current = '';
            }, 500);

            const match = items.find((item) =>
              item.textContent?.toLowerCase().startsWith(typeaheadRef.current),
            );
            if (match) match.focus();
          }
        }
      }
    },
    [onEscape],
  );

  return (
    <MenuContext.Provider value={{ size }}>
      <div
        ref={ref}
        role="menu"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={cx(styles.menu, styles[size], panel && styles.panel, className)}
        {...rest}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
});

/* ─── MenuItem ───────────────────────────────────────────── */
export const MenuItem = forwardRef(function MenuItem(
  {
    icon: Icon,
    description,
    shortcut,
    trailing,
    variant = 'default',
    role = 'menuitem',
    checked,
    onCheckedChange,
    active = false,
    disabled = false,
    href,
    as,
    className,
    children,
    onClick,
    ...rest
  },
  ref,
) {
  useContext(MenuContext);

  const isCheckable = role === 'menuitemcheckbox' || role === 'menuitemradio';

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (isCheckable) {
      onCheckedChange?.(!checked);
    }
    onClick?.(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  const Component = as || (href ? 'a' : 'button');

  const itemProps = {
    ref,
    role,
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled || undefined,
    className: cx(
      styles.item,
      variant === 'destructive' && styles.destructive,
      active && styles.active,
      disabled && styles.disabled,
      className,
    ),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ...rest,
  };

  if (isCheckable) {
    itemProps['aria-checked'] = checked;
  }

  if (href) {
    itemProps.href = href;
  }

  if (Component === 'button') {
    itemProps.type = 'button';
  }

  const iconSize = 16;

  return (
    <Component {...itemProps}>
      {isCheckable && (
        <span className={styles.checkIndicator}>
          {checked ? (
            role === 'menuitemradio' ? (
              <Circle size={iconSize - 6} fill="currentColor" />
            ) : (
              <Check size={iconSize} />
            )
          ) : (
            <span style={{ width: iconSize, height: iconSize }} />
          )}
        </span>
      )}
      {Icon && (
        <span className={styles.itemIcon}>
          {typeof Icon === 'function' || Icon?.$$typeof ? (
            <Icon size={iconSize} />
          ) : (
            Icon
          )}
        </span>
      )}
      <span className={styles.itemContent}>
        <span className={styles.itemLabel}>{children}</span>
        {description && (
          <span className={styles.itemDescription}>{description}</span>
        )}
      </span>
      {trailing && <span className={styles.itemTrailing}>{trailing}</span>}
      {shortcut && <span className={styles.itemShortcut}>{shortcut}</span>}
    </Component>
  );
});

/* ─── MenuGroup ──────────────────────────────────────────── */
export const MenuGroup = forwardRef(function MenuGroup(
  { label, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="group"
      aria-label={label}
      className={cx(styles.group, className)}
      {...rest}
    >
      {label && <span className={styles.groupLabel}>{label}</span>}
      {children}
    </div>
  );
});

/* ─── MenuDivider ────────────────────────────────────────── */
export const MenuDivider = forwardRef(function MenuDivider(
  { className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="separator"
      className={cx(styles.divider, className)}
      {...rest}
    />
  );
});
