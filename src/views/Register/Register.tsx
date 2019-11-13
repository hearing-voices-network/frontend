import React, { Component, Fragment, RefObject } from "react";
import { observer, inject } from "mobx-react";

import "./Register.scss";

import { cms } from "../../utils/cms";

import Intro from "./Intro";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Confirmation from "./Confirmation";

import RegisterStore from "../../stores/registerStore";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

interface IProps {
  registerStore: RegisterStore;
}

class Register extends Component<IProps> {
  private buttonRef: RefObject<HTMLButtonElement>;

  public constructor(props: IProps) {
    super(props);

    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    if (!this.props.registerStore) return null;
  }

  componentDidUpdate() {
    if (this.buttonRef.current) {
      this.buttonRef.current.blur();
    }
  }

  displayStep() {
    const { registerStore } = this.props;

    switch (registerStore.step) {
      case 0:
        return <Intro />;
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        break;
    }
  }

  render() {
    const { registerStore } = this.props;

    if (registerStore.showConfirmation) return <Confirmation />;

    return (
      <Fragment>
        <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify register">
          {this.displayStep()}
        </div>

        <Footer green={true}>
          <div className="flex-container flex-container--center register--footer">
            <div className="flex-col--8 flex-col--tablet-large--12">
              <h3 className="register--footer--title">
                {cms(`register.footer.step-${registerStore.step}-title`)}
              </h3>
              <p className="register--footer--description">
                {cms(`register.footer.step-${registerStore.step}-description`)}
              </p>
              <Button
                text="Continue"
                onClick={() =>
                  registerStore.step === 3
                    ? registerStore.confirm()
                    : registerStore.nextStep()
                }
                ref={this.buttonRef}
              />
            </div>
          </div>
        </Footer>
      </Fragment>
    );
  }
}

export default inject("registerStore")(observer(Register));
