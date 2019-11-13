import React, { FunctionComponent, Fragment } from "react";
import { cms } from "../../utils/cms";
import Input from "../../components/Input";
import ReactSVG from "react-svg";

import Question from "../../assets/icons/question-circle.svg";

const StepOne: FunctionComponent = () => (
  <Fragment>
    <div className="flex-col--12">
      <h1 className="register--title">{cms("register.step-1-title")}</h1>
      <p className="register--description--tight">
        {cms("register.step-1-description")}
      </p>
    </div>

    <div className="flex-col--10">
      <Input label="Email" id="email" />

      <div className="register--hint">
        <ReactSVG src={Question} />
        <span>{cms("register.step-1-hint")}</span>
      </div>
    </div>
  </Fragment>
);

export default StepOne;
