import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Footer.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
  purple?: boolean;
  grey?: boolean;
}

const Footer: FunctionComponent<IProps> = ({ children, purple, grey }) => (
  <footer
    className={cx("footer", {
      "footer--purple": purple,
      "footer--grey": grey
    })}
  >
    {children}
  </footer>
);

export default Footer;
