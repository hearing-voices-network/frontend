import React, { FunctionComponent, Fragment } from "react";
import Header from "../Header";

interface IProps {
  accountPage?: boolean;
  children: JSX.Element | JSX.Element[];
}

const Layout: FunctionComponent<IProps> = ({ accountPage, children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);

export default Layout;
