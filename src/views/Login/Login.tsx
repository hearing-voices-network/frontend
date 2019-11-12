import React, { FunctionComponent } from "react";

import "./Login.scss";
import { cms } from "../../utils/cms";

const Login: FunctionComponent = () => (
  <div className="flex-container flex-container--no-padding flex-container--center login">
    <div className="flex-col--12 login--inner">
      <h1 className="login--title">{cms("login.title")}</h1>
      <p className="login--description">{cms("login.description")}</p>
    </div>
  </div>
);

export default Login;
