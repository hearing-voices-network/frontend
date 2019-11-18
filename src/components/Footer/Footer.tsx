import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Footer.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  purple?: boolean;
  grey?: boolean;
  green?: boolean;
}

const Footer: FunctionComponent<IProps> = ({
  children,
  purple,
  grey,
  green,

  className
}) => (
  <footer
    className={cx("footer", {
      "footer--purple": purple,
      "footer--grey": grey,
      "footer--green": green,
      [`${className}`]: className
    })}
  >
    {children}
  </footer>
);

export default Footer;
