import cx from 'classnames';
import styles from './Timer.module.scss';

function pad(n) {
  return String(Math.floor(n)).padStart(2, '0');
}

function formatSeconds(seconds, format) {
  const s = Math.max(0, Math.floor(seconds));
  if (format === 'd: h: m') {
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    return `${d}d: ${pad(h)}h : ${pad(m)}m`;
  }
  if (format === 'hh:mm:ss') {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${pad(h)}:${pad(m)}:${pad(sec)}`;
  }
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${pad(m)}:${pad(sec)}`;
}

export function Timer({
  value = 0,
  format = 'd: h: m',
  size = 'md',
  variant = 'default',
  className,
  ...rest
}) {
  const displayValue =
    typeof value === 'string' ? value : formatSeconds(value, format);

  return (
    <span
      role="timer"
      aria-live="polite"
      className={cx(styles.timer, styles[size], styles[variant], className)}
      {...rest}
    >
      {displayValue}
    </span>
  );
}
