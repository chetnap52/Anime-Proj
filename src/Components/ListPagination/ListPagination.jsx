import React from "react";

import "./ListPagination.css";

function ListPagination({ links = {}, pagination = {}, ongetAPIData }) {
  console.log({ links, pagination });
  const handleClick = (page) => {
    console.log("handle click ", page);
    ongetAPIData(page);
  };
  return (
    <div className="d-flex justify-content-center">
      <div>
        <button className="btn btn-primary" disabled={pagination.current_page === 1} onClick={() => handleClick(1)}>
          First
        </button>
        <button
          className="btn btn-info"
          disabled={pagination.current_page === 1}
          onClick={() => handleClick(pagination.current_page - 1)}
        >
          Previous
        </button>

        <button
          className="btn btn-info"
          disabled={!pagination.has_next_page}
          onClick={() => handleClick(pagination.current_page + 1)}
        >
          Next
        </button>
        <button
          className="btn btn-primary"
          disabled={pagination.current_page === pagination.last_visible_page}
          onClick={() => handleClick(pagination.last_visible_page)}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default ListPagination;
