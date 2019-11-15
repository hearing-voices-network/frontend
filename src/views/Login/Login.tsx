import React, { FunctionComponent, Fragment } from "react";

import { cms } from "../../utils/cms";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Link from "../../components/Link";

import "./Login.scss";

const Login: FunctionComponent = () => (
  <Fragment>
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify login">
      <div className="flex-col--12 login--inner">
        <h1 className="login--title">{cms("login.title")}</h1>
        <p className="login--description">{cms("login.description")}</p>
      </div>
      <form className="flex-col--8 flex-col--mobile--10">
        <Input id="email" label="Enter email" placeholder="Type here" />
        <Input id="password" label="Enter password" placeholder="Type here" />
        <div className="login--button-container">
          <Button
            text="Submit"
            onClick={() => console.log("submit form")}
            purple={true}
          />
        </div>
      </form>
    </div>
    <Footer grey={true}>
      <div className="flex-container flex-container--center login--footer">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <Link
            grey={true}
            size="medium"
            text="Forgotten password"
            href="/forgot-password"
          />
          <p className="login--footer--description">{cms("login.footer")}</p>
        </div>
      </div>
    </Footer>
  </Fragment>
);

export default Login;
