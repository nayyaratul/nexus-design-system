import { forwardRef, useRef, useCallback, useState, useEffect } from 'react';
import cx from 'classnames';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip/Tooltip';
import styles from './FileInput.module.scss';

export const FileInput = forwardRef(function FileInput(
  {
    accept,
    multiple = false,
    size = 'md',
    disabled = false,
    error = false,
    showFileLabel = true,
    chooseLabel = 'Upload',
    demoSelectedLabel,
    hideTrigger = false,
    id: idProp,
    name,
    className,
    onChange,
    ...rest
  },
  ref,
) {
  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [isTruncated, setIsTruncated] = useState(false);

  const hasFile = Boolean(selectedLabel || demoSelectedLabel);

  const runTruncationCheck = useCallback(() => {
    const el = labelRef.current;
    if (el?.isConnected) setIsTruncated(el.scrollWidth > el.clientWidth);
  }, []);

  const setLabelRef = useCallback(
    (el) => {
      labelRef.current = el;
      if (!el || !hasFile) return;
      runTruncationCheck();
      requestAnimationFrame(() => {
        runTruncationCheck();
        requestAnimationFrame(runTruncationCheck);
      });
    },
    [hasFile, runTruncationCheck],
  );

  const setRef = useCallback(
    (el) => {
      inputRef.current = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) ref.current = el;
    },
    [ref],
  );

  const handleChange = (e) => {
    const files = e.target.files;
    if (files?.length) {
      const names = Array.from(files).map((f) => f.name);
      setSelectedLabel(multiple && names.length > 1 ? `${names[0]} +${names.length - 1} more` : names[0]);
    } else {
      setSelectedLabel('');
    }
    onChange?.(e);
  };

  const handleTriggerClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const id = idProp ?? `fileinput-${Math.random().toString(36).slice(2, 11)}`;

  useEffect(() => {
    if (!hasFile) return;
    const el = labelRef.current;
    if (!el) return;
    const check = () => runTruncationCheck();
    check();
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(check);
    });
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [hasFile, selectedLabel, demoSelectedLabel, runTruncationCheck]);

  const input = (
    <input
      ref={setRef}
      type="file"
      id={id}
      name={name}
      accept={accept}
      multiple={multiple}
      disabled={disabled}
      onChange={handleChange}
      aria-invalid={error || undefined}
      tabIndex={-1}
      {...rest}
    />
  );

  if (hideTrigger) {
    return <VisuallyHidden asChild>{input}</VisuallyHidden>;
  }

  return (
    <div
      className={cx(
        styles.root,
        error && styles.error,
        disabled && styles.disabled,
        className,
      )}
    >
      <VisuallyHidden asChild>{input}</VisuallyHidden>
      <div className={styles.row}>
        <Button
          type="button"
          variant="secondary"
          size={size}
          disabled={disabled}
          iconLeft={<Icon name="Upload" size={size === 'sm' ? 'xs' : 'sm'} color="var(--color-text-primary)" />}
          onClick={handleTriggerClick}
        >
          {chooseLabel}
        </Button>
        {showFileLabel && (() => {
          const fileLabelText = selectedLabel || demoSelectedLabel || 'No file chosen';
          const labelSpan = (
            <span
              ref={setLabelRef}
              className={cx(styles.fileLabel, styles[`label_${size}`], hasFile && styles.hasFile)}
            >
              {fileLabelText}
            </span>
          );
          return hasFile && isTruncated ? (
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>{labelSpan}</TooltipTrigger>
                <TooltipContent side="top" className={styles.fileLabelTooltipContent}>
                  {fileLabelText}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            labelSpan
          );
        })()}
      </div>
    </div>
  );
});
