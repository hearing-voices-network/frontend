import React, { FunctionComponent } from "react";
import { observer, inject } from "mobx-react";
import cx from "classnames";

import UserStore from "../../stores/userStore";
import UserHeader from "../Header/UserHeader";
import Header from "../Header";

interface IProps {
  children: JSX.Element | JSX.Element[];
  userStore?: UserStore;
  className?: string;
}

const Layout: FunctionComponent<IProps> = ({
  children,
  userStore,
  className
}) => {
  if (!userStore) return null;

  return (
    <div
      className={cx({
        [`${className}`]: className
      })}
    >
      {userStore.loggedIn ? <UserHeader /> : <Header />}

      {children}
    </div>
  );
};

export default inject("userStore")(observer(Layout));
