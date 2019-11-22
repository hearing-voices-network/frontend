import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Tag.scss";

interface IProps {
  text: string;
  search?: boolean;
  story?: boolean;
  className?: string;
  onClick?: any;
  selected?: boolean;
}

const Tag: FunctionComponent<IProps> = ({
  text,
  search,
  story,
  className,
  onClick,
  selected
}) => (
  <div
    className={cx("tag", {
      "tag--search": search,
      "tag--story": story,
      "tag--selected": selected,
      [`${className}`]: className
    })}
    onClick={onClick}
  >
    <span>{text}</span>
  </div>
);

export default Tag;
