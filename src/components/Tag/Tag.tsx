import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Tag.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  text: string;
  search?: boolean;
  story?: boolean;
  className?: string;
}

const Tag: FunctionComponent<IProps> = ({ text, search, story, className }) => (
  <div
    className={cx("tag", {
      "tag--search": search,
      "tag--story": story,
      [`${className}`]: className
    })}
  >
    <span>
      {text}
      {search && <FontAwesomeIcon icon="times" className="tag--remove" />}
    </span>
  </div>
);

export default Tag;
