import React, { FunctionComponent } from "react";
import { cms } from "../../utils/cms";

import "./Register.scss";

const Register: FunctionComponent = () => (
  <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify register">
    <div className="flex-col--12">
      <h1 className="register--title">{cms("register.title")}</h1>
      <p className="register--description">{cms("register.description")}</p>
    </div>
    <div className="flex-col--12">
      <h2 className="register--subtitle">{cms("register.step-title")}</h2>
      <p className="register--step-description">
        {cms("register.step-description")}
      </p>
    </div>
  </div>
);

export default Register;
