import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pagination({ totalPages, setCurrentPage }) {
  const [currentButton, setCurrentButton] = useState(1);
  //   const pages = 10;
  const numOfPages = [];

  for (let i = 1; i <= totalPages; i++) {
    numOfPages.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <Link
            className="page-link"
            to="#"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Previous
          </Link>
        </li>
        {numOfPages.map((page, key) => {
          return (
            <li
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
            >
              <Link
                className="page-link"
                to="#!"
                onClick={() => setCurrentButton(page)}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li
          className={`${
            currentButton === numOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <Link
            className="page-link"
            to="#"
            onClick={() =>
              setCurrentButton((prev) =>
                prev === numOfPages.length ? prev : prev + 1
              )
            }
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
