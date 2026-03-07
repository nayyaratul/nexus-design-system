import { forwardRef } from 'react';
import cx from 'classnames';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Pagination.module.scss';

function computePaginationRange(currentPage, totalPages, siblings, boundaryCount) {
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const totalPageNumbers = boundaryCount * 2 + siblings * 2 + 3;

  if (totalPages <= totalPageNumbers) {
    return range(1, totalPages);
  }

  const leftBoundary = range(1, boundaryCount);
  const rightBoundary = range(totalPages - boundaryCount + 1, totalPages);

  const siblingsStart = Math.max(boundaryCount + 2, currentPage - siblings);
  const siblingsEnd = Math.min(totalPages - boundaryCount - 1, currentPage + siblings);

  const showLeftEllipsis = siblingsStart > boundaryCount + 2;
  const showRightEllipsis = siblingsEnd < totalPages - boundaryCount - 1;

  const items = [];

  items.push(...leftBoundary);

  if (showLeftEllipsis) {
    items.push('...');
  } else {
    const extra = range(boundaryCount + 1, siblingsStart - 1);
    items.push(...extra);
  }

  items.push(...range(siblingsStart, siblingsEnd));

  if (showRightEllipsis) {
    items.push('...');
  } else {
    const extra = range(siblingsEnd + 1, totalPages - boundaryCount);
    items.push(...extra);
  }

  items.push(...rightBoundary);

  return items;
}

const iconSize = { sm: 14, md: 16, lg: 20 };

export const Pagination = forwardRef(function Pagination(
  {
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    siblings = 1,
    boundaryCount = 1,
    size = 'md',
    showPrevNext = true,
    disabled = false,
    className,
    ...rest
  },
  ref,
) {
  const pages = computePaginationRange(currentPage, totalPages, siblings, boundaryCount);

  function handlePageChange(page) {
    if (disabled || page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  }

  return (
    <nav
      ref={ref}
      aria-label="Pagination"
      className={cx(styles.pagination, styles[size], className)}
      {...rest}
    >
      <ul className={styles.list}>
        {showPrevNext && (
          <li>
            <button
              type="button"
              className={cx(styles.button, styles.prevNext)}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={disabled || currentPage <= 1}
              aria-disabled={disabled || currentPage <= 1 ? 'true' : undefined}
              aria-label="Go to previous page"
            >
              <ChevronLeft size={iconSize[size]} />
            </button>
          </li>
        )}

        {pages.map((page, index) =>
          page === '...' ? (
            <li key={`ellipsis-${index}`}>
              <span className={styles.ellipsis} aria-hidden="true">
                ...
              </span>
            </li>
          ) : (
            <li key={page}>
              <button
                type="button"
                className={cx(styles.button, {
                  [styles.active]: page === currentPage,
                })}
                onClick={() => handlePageChange(page)}
                disabled={disabled}
                aria-disabled={disabled ? 'true' : undefined}
                aria-current={page === currentPage ? 'page' : undefined}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            </li>
          ),
        )}

        {showPrevNext && (
          <li>
            <button
              type="button"
              className={cx(styles.button, styles.prevNext)}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={disabled || currentPage >= totalPages}
              aria-disabled={disabled || currentPage >= totalPages ? 'true' : undefined}
              aria-label="Go to next page"
            >
              <ChevronRight size={iconSize[size]} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
});
