import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Link.scss";

interface IProps {
  text: string;
  href: string;
  size: "small" | "medium" | "large";
  grey?: boolean;
  green?: boolean;
  newWindow?: boolean;
}

const Link: FunctionComponent<IProps> = ({
  text,
  href,
  size,
  grey,
  green,
  newWindow
}) => (
  <a
    href={href}
    className={cx(`link link--${size}`, {
      "link--grey": grey,
      "link--green": green
    })}
    target={newWindow ? "__blank" : "__self"}
  >
    {text}
  </a>
);

export default Link;
