import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";

import "./ForgotPassword.scss";
import { cms } from "../../utils/cms";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

const ForgotPassword: FunctionComponent = () => (
  <Layout>
    <Helmet>
      <title>Connecting Voices | Forgot Password</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify forgot-password">
      <div className="flex-col--12 forgot-password--inner">
        <h1 className="forgot-password--title">
          {cms("forgot-password.title")}
        </h1>
        <p className="forgot-password--description">
          {cms("forgot-password.description")}
        </p>
      </div>
      <form className="flex-col--8 flex-col--mobile--10">
        <Input
          id="email"
          label="Enter email"
          placeholder="Type here"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)}
        />
        <div className="flex-container flex-container--no-padding flex-container--justify r">
          <div className="flex-col--10 forgot-password--button-container">
            <Button
              text="Send reset password link"
              onClick={() => console.log("resent password")}
              purple={true}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>

    <Footer green={true}>
      <div className="flex-container flex-container--center forgot-password--footer">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <h2 className="forgot-password--footer--title">
            {cms("forgot-password.footer.title")}
          </h2>
          <p className="forgot-password--footer--description">
            {cms("forgot-password.footer.description")}
          </p>
        </div>
      </div>
    </Footer>
  </Layout>
);

export default ForgotPassword;
