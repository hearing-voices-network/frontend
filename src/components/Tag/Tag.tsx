import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Tag.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  text: string;
  search?: boolean;
}

const Tag: FunctionComponent<IProps> = ({ text, search }) => (
  <div
    className={cx("tag", {
      "tag--search": search
    })}
  >
    <span>
      {text}
      {search && <FontAwesomeIcon icon="times" className="tag--remove" />}
    </span>
  </div>
);

export default Tag;
