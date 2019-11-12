import React, { FunctionComponent } from "react";

import "./Login.scss";
import { cms } from "../../utils/cms";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login: FunctionComponent = () => (
  <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify login">
    <div className="flex-col--12 login--inner">
      <h1 className="login--title">{cms("login.title")}</h1>
      <p className="login--description">{cms("login.description")}</p>
    </div>
    <form className="flex-col--8 flex-col--mobile--10">
      <Input id="email" label="Enter email" />
      <Input id="password" label="Enter password" />
      <div className="login--button-container">
        <Button
          text="Submit"
          onClick={() => console.log("submit form")}
          purple={true}
        />
      </div>
    </form>
  </div>
);

export default Login;
