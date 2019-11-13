import React, { FunctionComponent, Fragment } from "react";
import { cms } from "../../utils/cms";

const Intro: FunctionComponent = () => (
  <Fragment>
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
  </Fragment>
);

export default Intro;
