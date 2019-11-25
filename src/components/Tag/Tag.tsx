import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Tag.scss";

interface IProps {
  text: string;
  search?: boolean;
  story?: boolean;
  className?: string;
  onClick?: any;
  onKeyPress?: any;
  selected?: boolean;
  tabIndex?: number;
}

const Tag: FunctionComponent<IProps> = ({
  text,
  search,
  story,
  className,
  onClick,
  onKeyPress,
  selected,
  tabIndex
}) => (
  <div
    className={cx("tag", {
      "tag--selected": selected,
      "tag--search": search,
      "tag--story": story,
      "tag--search--selected": selected && search,
      [`${className}`]: className
    })}
    onClick={onClick}
    onKeyPress={onKeyPress}
    tabIndex={tabIndex}
  >
    <span>{text}</span>
  </div>
);

export default Tag;
