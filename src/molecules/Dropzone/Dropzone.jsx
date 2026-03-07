import { forwardRef, useRef, useCallback, useState } from 'react';
import cx from 'classnames';
import { FileInput } from '../../atoms/FileInput/FileInput';
import { Icon } from '../../atoms/Icon/Icon';
import styles from './Dropzone.module.scss';

function setInputFiles(input, files) {
  if (!input || !files?.length) return;
  try {
    const dt = new DataTransfer();
    for (let i = 0; i < files.length; i++) {
      dt.items.add(files[i]);
    }
    input.files = dt.files;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  } catch (_) {
    // Fallback for older browsers
  }
}

export const Dropzone = forwardRef(function Dropzone(
  {
    accept,
    multiple = false,
    size = 'md',
    disabled = false,
    error = false,
    onChange,
    onFilesChange,
    children,
    prompt = 'Drag files here or click to browse',
    hint,
    browseLabel = 'Browse files',
    showIcon = true,
    id: idProp,
    name,
    className,
    'aria-label': ariaLabel,
    ...rest
  },
  ref,
) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const setRef = useCallback(
    (el) => {
      inputRef.current = el;
      if (typeof ref === 'function') ref(el);
      else if (ref) ref.current = el;
    },
    [ref],
  );

  const handleClick = (e) => {
    if (disabled) return;
    if (e.target.closest(`.${styles.browse}`)) {
      e.stopPropagation();
    }
    inputRef.current?.click();
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current?.click();
    }
  };

  const handleChange = (e) => {
    const files = e.target.files;
    onChange?.(e);
    onFilesChange?.(files?.length ? files : null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (disabled) return;
    const files = e.dataTransfer?.files;
    if (files?.length && inputRef.current) {
      setInputFiles(inputRef.current, Array.from(files));
      const nextFiles = inputRef.current.files;
      onFilesChange?.(nextFiles?.length ? nextFiles : null);
    }
  };

  const id = idProp ?? `dropzone-${Math.random().toString(36).slice(2, 11)}`;

  const headline = typeof children !== 'undefined' ? children : prompt;

  return (
    <div
      role="button"
      tabIndex={disabled ? undefined : 0}
      className={cx(
        styles.root,
        styles[size],
        dragActive && styles.dragActive,
        error && styles.error,
        disabled && styles.disabled,
        className,
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      aria-label={ariaLabel ?? (typeof headline === 'string' ? headline : 'Upload files')}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      <FileInput
        ref={setRef}
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        size={size}
        disabled={disabled}
        error={error}
        hideTrigger
        onChange={handleChange}
      />
      <div className={styles.content}>
        {showIcon && (
          <span className={styles.iconWrap} aria-hidden>
            <Icon name="Upload" size={size === 'sm' ? 'sm' : 'md'} color="var(--color-text-tertiary)" />
          </span>
        )}
        <span className={styles.prompt}>{headline}</span>
        {hint && <span className={styles.hint}>{hint}</span>}
        {browseLabel && (
          <span className={styles.browse} onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}>
            {browseLabel}
          </span>
        )}
      </div>
    </div>
  );
});
