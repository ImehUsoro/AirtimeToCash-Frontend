import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
const StyledPaginateContainer = styled.div`
 margin-top:1.5rem;
 margin-bottom:1.5rem;
  display: flex;
  .pagination {
    color: #000000;
  }
  .paginationBttns {
    width: 100%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0px; 
  }
  .paginationBttns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    background: #f3f3f3;
    color: #000000;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    @media (max-width: 768px) {
      margin: 0px;
    }
  }
  .paginationBttns a:hover {
    color: white;
    background-color: #DE3D6D;
  }
  .paginationActive a {
    color: white;
    background-color: #DE3D6D;
  }
  .paginationDisabled a {
    color: grey;
    background-color: grey;
  }
`;
 function PaginationSecond({
  fetcheddata,
  itemsPerPage,
  setPageNumber,
}) {
  const pageCount = Math.ceil(fetcheddata.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <StyledPaginateContainer>
        <ReactPaginate
          breakLabel="..."
          nextLabel={'Next >'}
          onPageChange={changePage}
          pageRangeDisplayed={8}
          pageCount={pageCount}
          previousLabel={'< Prev'}
          containerClassName="paginationBttns"
          activeClassName="paginationActive"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          renderOnZeroPageCount={null}
        />
      </StyledPaginateContainer>
    </div>
  );
}
PaginationSecond.propTypes = {
  fetcheddata: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};
export default PaginationSecond