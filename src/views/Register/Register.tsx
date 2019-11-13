import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";

import "./Register.scss";

import { cms } from "../../utils/cms";

import Intro from "./Intro";
import RegisterStore from "../../stores/registerStore";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

interface IProps {
  registerStore: RegisterStore;
}

class Register extends Component<IProps> {
  componentDidMount() {
    if (!this.props.registerStore) return null;
  }

  displayStep() {
    const { registerStore } = this.props;

    switch (registerStore.step) {
      case 0:
        return <Intro />;

      default:
        break;
    }
  }

  render() {
    const { registerStore } = this.props;
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
              <Button text="Continue" onClick={() => console.log("continue")} />
            </div>
          </div>
        </Footer>
      </Fragment>
    );
  }
}

export default inject("registerStore")(observer(Register));
