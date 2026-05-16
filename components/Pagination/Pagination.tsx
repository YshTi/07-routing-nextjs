'use client';

import type { ComponentType } from 'react';
import ReactPaginateImport from 'react-paginate';
import type { ReactPaginateProps } from 'react-paginate';
import css from './Pagination.module.css';

const ReactPaginate =
  (
    ReactPaginateImport as unknown as {
      default?: ComponentType<ReactPaginateProps>;
    }
  ).default ??
  (ReactPaginateImport as unknown as ComponentType<ReactPaginateProps>);

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

interface SelectedItem {
  selected: number;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = ({ selected }: SelectedItem): void => {
    onPageChange(selected + 1);
  };

  if (pageCount <= 1) {
    return null;
  }

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      forcePage={currentPage - 1}
      onPageChange={handlePageChange}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      containerClassName={css.pagination}
      activeClassName={css.active}
      disabledClassName={css.disabled}
    />
  );
}