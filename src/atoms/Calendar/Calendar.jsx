import { forwardRef, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cx from 'classnames';
import styles from './Calendar.module.scss';

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getMonthGrid(year, month, weekStartsOn = 0) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);

  const startOffset = (firstDay - weekStartsOn + 7) % 7;
  const grid = [];

  // Previous month overflow
  for (let i = startOffset - 1; i >= 0; i--) {
    grid.push({
      date: new Date(year, month - 1, daysInPrevMonth - i),
      isOverflow: true,
    });
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    grid.push({
      date: new Date(year, month, d),
      isOverflow: false,
    });
  }

  // Next month overflow
  const remaining = 7 - (grid.length % 7);
  if (remaining < 7) {
    for (let d = 1; d <= remaining; d++) {
      grid.push({
        date: new Date(year, month + 1, d),
        isOverflow: true,
      });
    }
  }

  return grid;
}

function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isToday(date) {
  return isSameDay(date, new Date());
}

function isInRange(date, start, end) {
  if (!start || !end) return false;
  const t = date.getTime();
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return t >= Math.min(s, e) && t <= Math.max(s, e);
}

function getWeekdayNames(weekStartsOn = 0, locale = 'en-US') {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const names = [];
  // Jan 4, 2024 is a Thursday; we use a known Sunday (Jan 7)
  for (let i = 0; i < 7; i++) {
    const day = new Date(2024, 0, 7 + ((i + weekStartsOn) % 7));
    names.push(formatter.format(day));
  }
  return names;
}

export const Calendar = forwardRef(function Calendar(
  {
    value,
    defaultValue,
    onChange,
    month: monthProp,
    defaultMonth,
    onMonthChange,
    min,
    max,
    disabledDates,
    weekStartsOn = 0,
    locale = 'en-US',
    size = 'md',
    mode = 'single',
    className,
    ...rest
  },
  ref,
) {
  const today = new Date();
  const initialMonth =
    monthProp ??
    defaultMonth ??
    (mode === 'single'
      ? (value ?? defaultValue ?? today)
      : (value?.start ?? value?.end ?? defaultValue?.start ?? defaultValue?.end ?? today));
  const initialMonthDate =
    initialMonth instanceof Date ? initialMonth : new Date(initialMonth?.getTime?.() ?? today.getTime());

  const [viewYear, setViewYear] = useState(initialMonthDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialMonthDate.getMonth());
  const [selectedDate, setSelectedDate] = useState(
    mode === 'single' ? (value ?? defaultValue ?? null) : null,
  );
  const [rangeStart, setRangeStart] = useState(
    mode === 'range' ? (value?.start ?? defaultValue?.start ?? null) : null,
  );
  const [rangeEnd, setRangeEnd] = useState(
    mode === 'range' ? (value?.end ?? defaultValue?.end ?? null) : null,
  );
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const gridRef = useRef(null);

  // Controlled month
  useEffect(() => {
    if (monthProp) {
      setViewYear(monthProp.getFullYear());
      setViewMonth(monthProp.getMonth());
    }
  }, [monthProp]);

  // Controlled value
  useEffect(() => {
    if (value === undefined) return;
    if (mode === 'single') {
      setSelectedDate(value);
    } else {
      setRangeStart(value?.start ?? null);
      setRangeEnd(value?.end ?? null);
    }
  }, [value, mode]);

  const grid = useMemo(
    () => getMonthGrid(viewYear, viewMonth, weekStartsOn),
    [viewYear, viewMonth, weekStartsOn],
  );

  const weekdays = useMemo(
    () => getWeekdayNames(weekStartsOn, locale),
    [weekStartsOn, locale],
  );

  const monthFormatter = useMemo(
    () => new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }),
    [locale],
  );

  const monthLabel = monthFormatter.format(new Date(viewYear, viewMonth, 1));

  const navigateMonth = useCallback(
    (delta) => {
      let newMonth = viewMonth + delta;
      let newYear = viewYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      setViewYear(newYear);
      setViewMonth(newMonth);
      setFocusedIndex(-1);
      onMonthChange?.(new Date(newYear, newMonth, 1));
    },
    [viewYear, viewMonth, onMonthChange],
  );

  const isDateDisabled = useCallback(
    (date) => {
      if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
      if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
      if (Array.isArray(disabledDates)) {
        return disabledDates.some((d) => isSameDay(d, date));
      }
      if (typeof disabledDates === 'function') {
        return disabledDates(date);
      }
      return false;
    },
    [min, max, disabledDates],
  );

  const handleSelect = useCallback(
    (date) => {
      if (isDateDisabled(date)) return;
      if (mode === 'single') {
        if (value === undefined) setSelectedDate(date);
        onChange?.(date);
        return;
      }
      // Range mode
      const hasStart = rangeStart != null;
      const hasEnd = rangeEnd != null;
      if (hasStart && hasEnd) {
        // New selection: set this date as start, clear end
        const next = { start: date, end: null };
        if (value === undefined) {
          setRangeStart(date);
          setRangeEnd(null);
        }
        onChange?.(next);
        return;
      }
      if (hasStart) {
        const start = rangeStart;
        const end = date.getTime() < new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime()
          ? { start: date, end: start }
          : { start, end: date };
        if (value === undefined) {
          setRangeStart(end.start);
          setRangeEnd(end.end);
        }
        onChange?.(end);
        return;
      }
      const next = { start: date, end: null };
      if (value === undefined) {
        setRangeStart(date);
        setRangeEnd(null);
      }
      onChange?.(next);
    },
    [onChange, value, mode, rangeStart, rangeEnd, isDateDisabled],
  );

  const handleKeyDown = useCallback(
    (e) => {
      const fallbackCell =
        mode === 'single'
          ? selectedDate
          : rangeEnd ?? rangeStart;
      const currentIndex =
        focusedIndex >= 0
          ? focusedIndex
          : grid.findIndex(
              (cell) =>
                !cell.isOverflow && fallbackCell != null && isSameDay(cell.date, fallbackCell),
            );
      let nextIndex = currentIndex;

      switch (e.key) {
        case 'ArrowRight':
          nextIndex = Math.min(currentIndex + 1, grid.length - 1);
          break;
        case 'ArrowLeft':
          nextIndex = Math.max(currentIndex - 1, 0);
          break;
        case 'ArrowDown':
          nextIndex = Math.min(currentIndex + 7, grid.length - 1);
          break;
        case 'ArrowUp':
          nextIndex = Math.max(currentIndex - 7, 0);
          break;
        case 'Home':
          nextIndex = currentIndex - (currentIndex % 7);
          break;
        case 'End':
          nextIndex = currentIndex - (currentIndex % 7) + 6;
          break;
        case 'PageDown':
          e.preventDefault();
          navigateMonth(1);
          return;
        case 'PageUp':
          e.preventDefault();
          navigateMonth(-1);
          return;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (currentIndex >= 0) handleSelect(grid[currentIndex].date);
          return;
        default:
          return;
      }

      e.preventDefault();
      setFocusedIndex(nextIndex);

      // Focus the button
      const buttons = gridRef.current?.querySelectorAll('[role="gridcell"] button');
      buttons?.[nextIndex]?.focus();
    },
    [focusedIndex, grid, mode, selectedDate, rangeStart, rangeEnd, navigateMonth, handleSelect],
  );

  return (
    <div
      ref={ref}
      className={cx(styles.root, styles[`size-${size}`], className)}
      {...rest}
    >
      {/* Header */}
      <div className={styles.header}>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => navigateMonth(-1)}
          aria-label="Previous month"
        >
          <ChevronLeft size={size === 'sm' ? 16 : 18} />
        </button>
        <span className={styles.monthLabel} aria-live="polite">
          {monthLabel}
        </span>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => navigateMonth(1)}
          aria-label="Next month"
        >
          <ChevronRight size={size === 'sm' ? 16 : 18} />
        </button>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        role="grid"
        aria-label={monthLabel}
        onKeyDown={handleKeyDown}
      >
        {/* Weekday header */}
        <div role="row" className={styles.weekRow}>
          {weekdays.map((day) => (
            <span key={day} role="columnheader" className={styles.weekday}>
              {day}
            </span>
          ))}
        </div>

        {/* Day cells */}
        {Array.from({ length: grid.length / 7 }, (_, weekIdx) => (
          <div key={weekIdx} role="row" className={styles.dayRow}>
            {grid.slice(weekIdx * 7, weekIdx * 7 + 7).map((cell, dayIdx) => {
              const idx = weekIdx * 7 + dayIdx;
              const disabled = cell.isOverflow || isDateDisabled(cell.date);
              const isStart = mode === 'range' && rangeStart != null && isSameDay(cell.date, rangeStart);
              const isEnd = mode === 'range' && rangeEnd != null && isSameDay(cell.date, rangeEnd);
              const inRange =
                mode === 'range' &&
                rangeStart != null &&
                rangeEnd != null &&
                !isStart &&
                !isEnd &&
                isInRange(cell.date, rangeStart, rangeEnd);
              const selected =
                mode === 'single'
                  ? isSameDay(cell.date, selectedDate)
                  : isStart || isEnd;
              const todayCell = isToday(cell.date) && !cell.isOverflow;

              const ariaLabel =
                mode === 'range' && !cell.isOverflow
                  ? isStart
                    ? 'Start date'
                    : isEnd
                      ? 'End date'
                      : inRange
                        ? 'In range'
                        : undefined
                  : undefined;

              return (
                <span key={idx} role="gridcell">
                  <button
                    type="button"
                    tabIndex={
                      focusedIndex === idx
                        ? 0
                        : focusedIndex === -1 && selected
                          ? 0
                          : focusedIndex === -1 && todayCell && !selected
                            ? 0
                            : -1
                    }
                    disabled={disabled}
                    aria-selected={selected || undefined}
                    aria-label={ariaLabel}
                    aria-disabled={disabled || undefined}
                    className={cx(
                      styles.dayButton,
                      cell.isOverflow && styles['dayButton--overflow'],
                      selected && styles['dayButton--selected'],
                      isStart && styles['dayButton--rangeStart'],
                      isEnd && styles['dayButton--rangeEnd'],
                      inRange && styles['dayButton--inRange'],
                      todayCell && !selected && styles['dayButton--today'],
                      disabled && styles['dayButton--disabled'],
                    )}
                    onClick={() => handleSelect(cell.date)}
                  >
                    {cell.date.getDate()}
                  </button>
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
});
