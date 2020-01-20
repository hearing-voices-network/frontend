import React, { FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { inject } from "mobx-react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helmet from "react-helmet";

import "./About.scss";
import Breadcrumb from "../../components/Breadcrumb";
import { cms } from "../../utils/cms";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import UserStore from "../../stores/userStore";

interface IProps extends RouteComponentProps {
  userStore?: UserStore;
}

const About: FunctionComponent<IProps> = ({ userStore, history }) => {
  if (!userStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>Connecting Voices | About</title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--center about">
        <div
          className={cx("flex-col--12", {
            "my-account--back--container": userStore.loggedIn
          })}
        >
          {userStore.loggedIn ? (
            <button
              onClick={() => history.goBack()}
              className="privacy-policy--back"
            >
              <FontAwesomeIcon icon="chevron-left" /> Back
            </button>
          ) : (
            <Breadcrumb
              crumbs={[
                { text: "Home", url: "/" },
                { text: "About the project", url: "" }
              ]}
            />
          )}
        </div>

        <div className="flex-col--12 about--container">
          <h1 className="about--title">Who is Hearing Voices Network?</h1>
          <p className="about--content">{cms("about.who")}</p>

          <h2 className="about--title">What is the project?</h2>
          <p className="about--content">{cms("about.what")}</p>

          <h3 className="about--title">Why develop the project?</h3>
          <p className="about--content">{cms("about.why")}</p>
        </div>
      </div>
      <Footer purple={true}>
        <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center about--footer">
          <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
            <h4 className="about--footer--title">
              {cms("about.footer.title")}
            </h4>
            <p className="about--footer--content">
              {userStore.loggedIn
                ? cms("about.footer-loggedin")
                : cms("about.footer.content")}
            </p>
          </div>
          <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--4 about--footer--button">
            <Button
              text={
                userStore.loggedIn
                  ? "Submit new experience"
                  : "Sign up and share"
              }
              onClick={() =>
                history.push({
                  pathname: userStore.loggedIn
                    ? "/submit-experience"
                    : "/register"
                })
              }
              twoCol={true}
            />
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("userStore")(withRouter(About));
