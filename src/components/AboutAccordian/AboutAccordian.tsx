import React, { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

import "./AboutAccordian.scss";

interface IProps {
  text: string;
}

const AboutAccordian: FunctionComponent<IProps> = ({ text }) => {
  const [open, toggleAccordian] = useState(false);

  return (
    <div className="about-accordian">
      {open && (
        <div
          className="about-accordian--content"
          id="accordian-content"
          aria-labelledby="accordian-header"
        >
          {text}
        </div>
      )}
      <button
        className={cx(
          "flex-container flex-container--align-center flex-container--justify about-accordian--button",
          {
            "about-accordian--button--open": open
          }
        )}
        onClick={() => toggleAccordian(!open)}
        aria-expanded={open}
        aria-controls="accordian-content"
        id="accordian-header"
      >
        <p>{open ? "Hide" : "Read about us"}</p>
        <FontAwesomeIcon
          icon="chevron-down"
          className={cx("about-accordian--icon", {
            "about-accordian--icon--open": open
          })}
        />
      </button>
    </div>
  );
};

export default AboutAccordian;
