import React, { useState, FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

import "./Accordian.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  subtitle?: string;
}

const Accordian: React.FunctionComponent<IProps> = ({
  children,
  title,
  subtitle
}) => {
  const [open, toggleAccordian] = useState(false);

  return (
    <div className="accordian--container">
      <button
        className={cx(
          "flex-container flex-container--no-padding flex-container--align-center accordian--header accordian--button",
          {
            "accordian--header--grey": open
          }
        )}
        onClick={() => toggleAccordian(!open)}
        aria-expanded={open}
        aria-controls="accordian-content"
        id="accordian-header"
      >
        <div className="accordian--title-container flex-container flex-container--no-padding flex-container--no-space flex-container--align-center">
          <p className="accordian--title">{title}</p>
          {subtitle && !open && (
            <p className="accordian--subtitle">{subtitle}</p>
          )}
        </div>
        <FontAwesomeIcon
          icon="chevron-down"
          className={cx("accordian--icon", {
            "accordian--icon--open": open
          })}
        />
      </button>
      {open && (
        <div
          className="accordian--content"
          id="accordian-content"
          aria-labelledby="accordian-header"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordian;
