import React, { FunctionComponent } from "react";
import { observer, inject } from "mobx-react";
import { Route, Redirect } from "react-router";

import UserStore from "../stores/userStore";

interface IProps {
  path: string;
  component: any;
  userStore?: UserStore;
  exact?: boolean;
}

const PrivateRoute: FunctionComponent<IProps> = ({
  path,
  component,
  exact,
  userStore
}) => {
  if (!userStore) return null;

  const { loggedIn } = userStore;

  return loggedIn ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to="/login" />
  );
};

export default inject("userStore")(observer(PrivateRoute));
