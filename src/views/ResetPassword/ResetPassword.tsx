import React, { FunctionComponent, Fragment } from "react";

import { cms } from "../../utils/cms";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import "./ResetPassword.scss";

const ResetPassword: FunctionComponent = () => (
  <Fragment>
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify reset-password">
      <div className="flex-col--12 reset-password--inner">
        <h1 className="reset-password--title">{cms("reset-password.title")}</h1>
      </div>
      <form className="flex-col--8 flex-col--mobile--10">
        <Input id="email" label="Enter password" placeholder="Type here" />
        <div className="flex-container flex-container--no-padding flex-container--justify r">
          <div className="flex-col--10 reset-password--button-container">
            <Button
              text="Save"
              onClick={() => console.log("resent password")}
              purple={true}
            />
          </div>
        </div>
      </form>
    </div>

    <Footer green={true}>
      <div className="flex-container flex-container--center reset-password--footer">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <h2 className="reset-password--footer--title">
            {cms("reset-password.footer.title")}
          </h2>
          <p className="reset-password--footer--description">
            {cms("reset-password.footer.description")}
          </p>
        </div>
      </div>
    </Footer>
  </Fragment>
);

export default ResetPassword;
