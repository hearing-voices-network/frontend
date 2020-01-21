import React, { FunctionComponent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
// @ts-ignore
import localeInfo from "rc-pagination/lib/locale/en_GB";

import "./Pagination.scss";

interface IProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChange: (pageNum: number) => void;
  inputNum: number;
}

const PaginationControl: FunctionComponent<IProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onChange,
  inputNum
}) => {
  useEffect(() => {
    // this package has an input for the current page with no way to override it, remove this on load and replace with a div for styling
    const input = document.getElementsByTagName("input");

    const paginationCount = document.createElement("div");
    paginationCount.textContent = `${currentPage}`;
    paginationCount.className = "pagination--label--current";

    if (input.length) {
      // this is hacky as you need to know how many inputs on the page so you can target the right one. Starts at 0 index
      // @ts-ignore
      input[inputNum].parentNode.replaceChild(paginationCount, input[inputNum]);
    } else {
      const currentPageNum = document.getElementsByClassName(
        "pagination--label--current"
      );

      if (currentPageNum.length) {
        currentPageNum[0].textContent = `${currentPage}`;
      }
    }
  }, [currentPage, inputNum]);

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
        currentPage !== 1 && (
          <div className="pagination--label">
            <FontAwesomeIcon
              icon="chevron-left"
              className="pagination--label--icon-left"
            />{" "}
            <span>Last page</span>
          </div>
        )
      }
      nextIcon={
        itemsPerPage / totalItems !== itemsPerPage && (
          <button className="pagination--label">
            <span>Next page</span>
            <FontAwesomeIcon
              icon="chevron-right"
              className="pagination--label--icon-right"
            />
          </button>
        )
      }
      onChange={currentPage => {
        onChange(currentPage);
        window.scrollTo(0, 0);
      }}
    />
  );
};

export default observer(PaginationControl);
