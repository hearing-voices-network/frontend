import React, { FunctionComponent, Fragment } from "react";
import { observer, inject } from "mobx-react";

import UserStore from "../../stores/userStore";
import UserHeader from "../Header/UserHeader";
import Header from "../Header";

interface IProps {
  children: JSX.Element | JSX.Element[];
  userStore?: UserStore;
}

const Layout: FunctionComponent<IProps> = ({ children, userStore }) => {
  if (!userStore) return null;

  return (
    <Fragment>
      {userStore.loggedIn ? <UserHeader /> : <Header />}

      {children}
    </Fragment>
  );
};

export default inject("userStore")(observer(Layout));
