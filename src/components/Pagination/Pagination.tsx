import React, { FunctionComponent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
// @ts-ignore
import localeInfo from "rc-pagination/lib/locale/en_GB";

import "./Pagination.scss";

interface IProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

const PaginationControl: FunctionComponent<IProps> = ({
  currentPage,
  totalItems,
  itemsPerPage
}) => {
  useEffect(() => {
    // this package has an input for the current page with no way to override it, remove this on load and replace with a div for styling
    const input = document.getElementsByTagName("input");

    const paginationCount = document.createElement("div");
    paginationCount.textContent = `${currentPage}`;
    paginationCount.className = "pagination--label--current";

    input[0].replaceWith(paginationCount);
  }, []);

  return (
    // the package does not recognise simple as a prop type so have to ts-ignore

    // @ts-ignore
    <Pagination
      simple
      className="pagination"
      defaultCurrent={1}
      current={currentPage}
      total={totalItems}
      pageSize={itemsPerPage}
      locale={localeInfo}
      prevIcon={
        <div className="pagination--label">
          <FontAwesomeIcon
            icon="chevron-left"
            className="pagination--label--icon-left"
          />{" "}
          <span>Last page</span>
        </div>
      }
      nextIcon={
        <div className="pagination--label">
          <span>Next page</span>
          <FontAwesomeIcon
            icon="chevron-right"
            className="pagination--label--icon-right"
          />
        </div>
      }
    />
  );
};

export default PaginationControl;
