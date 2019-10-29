import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Tag.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  text: string;
  search?: boolean;
  story?: boolean;
}

const Tag: FunctionComponent<IProps> = ({ text, search, story }) => (
  <div
    className={cx("tag", {
      "tag--search": search,
      "tag--story": story
    })}
  >
    <span>
      {text}
      {search && <FontAwesomeIcon icon="times" className="tag--remove" />}
    </span>
  </div>
);

export default Tag;
