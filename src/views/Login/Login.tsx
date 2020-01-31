import React, { FunctionComponent, useEffect } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import Helmet from "react-helmet";

import { cms } from "../../utils/cms";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

import "./Login.scss";
import UserStore from "../../stores/userStore";
import { Link } from "react-router-dom";

interface IProps extends RouteComponentProps {
  userStore: UserStore;
}

const Login: FunctionComponent<IProps> = ({ userStore, history }) => {
  useEffect(() => {
    if (userStore.loggedIn) {
      history.push("/dashboard");
    }
  }, [history, userStore.loggedIn]);

  return (
    <Layout>
      <Helmet>
        <title>Connecting Voices | Login</title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify login">
        <div className="flex-col--12 login--inner">
          <h1 className="login--title">{cms("login.title")}</h1>
          <p className="login--description">{cms("login.description")}</p>
        </div>
        <form
          className="flex-col--8 flex-col--mobile--10"
          onSubmit={e => {
            e.preventDefault();
            userStore.logIn();
          }}
        >
          <Input
            id="email"
            label="Enter email"
            placeholder="Type here"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              userStore.handleChange(e.target.value, "username")
            }
          />
          <Input
            id="password"
            label="Enter password"
            placeholder="Type here"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              userStore.handleChange(e.target.value, "password")
            }
            type="password"
          />
          {userStore.loginErrors && (
            <p className="login--error">{userStore.loginErrors}</p>
          )}

          <div className="login--button-container">
            <Button
              text="Submit"
              onClick={() => userStore.logIn()}
              purple={true}
              disabled={userStore.loginDisabled}
              type="submit"
            />
          </div>
        </form>
      </div>
      <Footer grey={true}>
        <div className="flex-container flex-container--center login--footer">
          <div className="flex-col--8 flex-col--tablet-large--12">
          <Link to="/forgot-password" className="link link--medium link--grey">
              Forgotten password
            </Link>

            <p className="login--footer--description">{cms("login.footer")}</p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("userStore")(withRouter(observer(Login)));
