import { Pagination } from "react-bootstrap";
import { useMemo } from "react";

const PaginationComponent = ({ handlePageChange, totalPages, currentPage }) => {
  const pages = useMemo(() => {
    let arr = [];
    for (let number = 1; number <= totalPages; number++) {
      arr.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return arr;
  }, [totalPages, handlePageChange, currentPage]);

  return <Pagination className="justify-content-center">{pages}</Pagination>;
};

export default PaginationComponent;
