import React from 'react';
/* Lib */
import ReactPaginate from 'react-paginate';

const index = ({ pageCount, handlePageChange }) => {
  return (
    <div className="paginations">
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        pageClassName={'pagination__item'}
        activeClassName={'pagination__item--active'}
        nextClassName={'pagination__item pagination__item--next'}
        previousClassName={'pagination__item pagination__item--previous'}
        disabledClassName={'pagination__item--disabled'}
        pageLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        previousLinkClassName={'pagination__link'}
      />
    </div>
  );
};

export default index;
