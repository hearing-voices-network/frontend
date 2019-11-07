import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Footer.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
  purple?: boolean;
}

const Footer: FunctionComponent<IProps> = ({ children, purple }) => (
  <footer
    className={cx("footer", {
      "footer--purple": purple
    })}
  >
    {children}
  </footer>
);

export default Footer;
