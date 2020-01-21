import React, { Component, RefObject } from "react";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helmet from "react-helmet";

import "./Register.scss";

import { cms } from "../../utils/cms";
import { email } from "../../utils/regex";

import Intro from "./Intro";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Confirmation from "./Confirmation";

import RegisterStore from "../../stores/registerStore";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

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

  componentWillUnmount() {
    const { registerStore } = this.props;

    registerStore.clear();
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

  disableButton() {
    const { registerStore } = this.props;

    switch (registerStore.step) {
      case 0:
        return false;

      case 1:
        return !email.test(registerStore.email);

      case 2:
        return !registerStore.password;

      case 3:
        return !registerStore.consent;

      default:
        break;
    }
  }

  render() {
    const { registerStore } = this.props;

    if (registerStore.showConfirmation) return <Confirmation />;
    return (
      <Layout>
        <Helmet>
          <title>Connecting Voices | Register</title>
        </Helmet>
        <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify register">
          {registerStore.step > 0 && (
            <div className="flex-col--12 my-account--back--container">
              <button
                onClick={() => registerStore.previousStep()}
                className="privacy-policy--back"
              >
                <FontAwesomeIcon icon="chevron-left" /> Back
              </button>
            </div>
          )}
          {this.displayStep()}

          {registerStore.registerError && (
            <p className="register--error">{cms("register.error")}</p>
          )}
        </div>

        <Footer green={true}>
          <div className="flex-container flex-container--center flex-container--justify register--footer">
            <div className="flex-col--8 flex-col--tablet-large--12">
              <h3 className="register--footer--title">
                {cms(`register.footer.step-${registerStore.step}-title`)}
              </h3>
              <p className="register--footer--description">
                {cms(`register.footer.step-${registerStore.step}-description`)}
              </p>
              <Button
                text={registerStore.step === 3 ? "Submit" : "Continue"}
                onClick={() =>
                  registerStore.step === 3
                    ? registerStore.register()
                    : registerStore.nextStep()
                }
                ref={this.buttonRef}
                disabled={this.disableButton()}
              />
            </div>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default inject("registerStore")(observer(Register));
