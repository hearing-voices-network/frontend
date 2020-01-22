import React, { FunctionComponent, Fragment } from "react";
import { cms } from "../../utils/cms";
import ReactSVG from "react-svg";
import { observer, inject } from "mobx-react";

import Input from "../../components/Input";
import Question from "../../assets/icons/question-circle.svg";
import RegisterStore from "../../stores/registerStore";

interface IProps {
  registerStore?: RegisterStore;
}

const StepOne: FunctionComponent<IProps> = ({ registerStore }) => {
  if (!registerStore) return null;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        registerStore.nextStep();
      }}
      className="flex-container flex-container--no-padding flex-container--center flex-container--justify"
    >
      <div className="flex-col--12">
        <h1 className="register--title">{cms("register.step-1-title")}</h1>
        <p className="register--description--tight">
          {cms("register.step-1-description")}
        </p>
      </div>

      <div className="flex-col--10">
        <Input
          label="Email"
          id="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            registerStore.handleChange(e.target.value, "email")
          }
        />

        <div className="flex-container flex-container--justify flex-container--no-padding">
          <div className="flex-col--mobile--11 flex-col--tablet--6 flex-col--standard--8 flex-col--tablet-large--8 flex-col--8">
            <div className="register--hint">
              <ReactSVG src={Question} />
              <span>{cms("register.step-1-hint")}</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default inject("registerStore")(observer(StepOne));
