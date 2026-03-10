import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
  cloneElement,
} from 'react';
import cx from 'classnames';
import {
  Menu as PrimitiveMenu,
  MenuItem as PrimitiveMenuItem,
  MenuGroup as PrimitiveMenuGroup,
  MenuDivider as PrimitiveMenuDivider,
} from '../../atoms/Menu/Menu';
import { Popover, PopoverTrigger, PopoverContent } from '../../atoms/Popover/Popover';
import styles from './Menu.module.scss';

const MenuContext = createContext({
  closeMenu: () => {},
  closeOnSelect: true,
});

export function Menu({
  open,
  defaultOpen,
  onOpenChange,
  side = 'bottom',
  align = 'start',
  matchTriggerWidth = false,
  renderTrigger,
  size = 'md',
  variant = 'plain',
  closeOnSelect = true,
  'aria-label': ariaLabel,
  ariaLabelledBy,
  children,
  className,
  ...menuProps
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen ?? false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;

  const triggerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(null);

  const handleOpenChange = useCallback(
    (nextOpen) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  useEffect(() => {
    if (!matchTriggerWidth) return;
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setContentWidth(rect.width);
  }, [matchTriggerWidth, isOpen]);

  const handleEscape = useCallback(
    (event) => {
      if (menuProps.onEscape) {
        menuProps.onEscape(event);
      }
      if (event.defaultPrevented) return;
      handleOpenChange(false);
    },
    [handleOpenChange, menuProps],
  );

  const triggerNode = renderTrigger ? renderTrigger({ open: isOpen }) : null;

  const triggerWithRef =
    triggerNode &&
    cloneElement(triggerNode, {
      ref: (node) => {
        triggerRef.current = node;
        const { ref } = triggerNode;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref && typeof ref === 'object') {
          // eslint-disable-next-line no-param-reassign
          ref.current = node;
        }
      },
      onClick: (event) => {
        if (typeof triggerNode.props.onClick === 'function') {
          triggerNode.props.onClick(event);
        }
        if (event.defaultPrevented) return;
        handleOpenChange(!isOpen);
      },
      'aria-haspopup': 'menu',
      'aria-expanded': isOpen || undefined,
    });

  const contentStyle =
    matchTriggerWidth && contentWidth != null
      ? { width: `${contentWidth}px` }
      : undefined;

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      {triggerWithRef && (
        <PopoverTrigger asChild>
          {triggerWithRef}
        </PopoverTrigger>
      )}
      <PopoverContent
        side={side}
        align={align}
        showClose={false}
        showArrow={false}
        className={cx(styles.content, className)}
        style={contentStyle}
      >
        <MenuContext.Provider
          value={{ closeMenu: () => handleOpenChange(false), closeOnSelect }}
        >
          <PrimitiveMenu
            size={size}
            panel={variant === 'panel'}
            onEscape={handleEscape}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            {...menuProps}
          >
            {children}
          </PrimitiveMenu>
        </MenuContext.Provider>
      </PopoverContent>
    </Popover>
  );
}

const MenuItem = forwardRef(function MenuItem(
  { onClick, ...props },
  ref,
) {
  const { closeMenu, closeOnSelect } = useContext(MenuContext);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (event.defaultPrevented) return;
    if (closeOnSelect) {
      closeMenu();
    }
  };

  return <PrimitiveMenuItem ref={ref} onClick={handleClick} {...props} />;
});

const MenuGroup = forwardRef(function MenuGroup(
  props,
  ref,
) {
  return <PrimitiveMenuGroup ref={ref} {...props} />;
});

const MenuDivider = forwardRef(function MenuDivider(
  props,
  ref,
) {
  return <PrimitiveMenuDivider ref={ref} {...props} />;
});

Menu.Item = MenuItem;
Menu.Group = MenuGroup;
Menu.Divider = MenuDivider;

const CheckboxItem = forwardRef(function CheckboxItem(props, ref) {
  return <MenuItem ref={ref} role="menuitemcheckbox" {...props} />;
});

const RadioItem = forwardRef(function RadioItem(props, ref) {
  return <MenuItem ref={ref} role="menuitemradio" {...props} />;
});

Menu.CheckboxItem = CheckboxItem;
Menu.RadioItem = RadioItem;

