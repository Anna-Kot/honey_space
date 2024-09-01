import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ setCurrentPage, pageCount }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel='...'
      nextLabel=' >'
      onPageChange={(event) => setCurrentPage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={2}
      previousLabel='< '
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
