import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import { PaginationProps } from '../../helpers/interfaces';

const Pagination: React.FC<PaginationProps> = ({ onChangePage, currentPage }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel='...'
      nextLabel=' >'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={2}
      forcePage={currentPage - 1}
      previousLabel='< '
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
