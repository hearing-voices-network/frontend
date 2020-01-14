import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import cx from "classnames";
import Helmet from "react-helmet";

import { cms } from "../../utils/cms";
import UserStore from "../../stores/userStore";

import "./PrivacyPolicy.scss";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

interface IProps extends RouteComponentProps {
  userStore?: UserStore;
}

const PrivacyPolicy: FunctionComponent<IProps> = ({ userStore, history }) => {
  if (!userStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>Connecting Voices | Privacy Policy</title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center privacy-policy">
        <div className="flex-col--12">
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
                  { text: "Privacy policy", url: "" }
                ]}
              />
            )}
          </div>
        </div>
        <div
          className={cx("flex-col--tablet-large--12", {
            "flex-col--12": !userStore.loggedIn,
            "privacy-policy--content--container flex-col--8": userStore.loggedIn
          })}
        >
          {userStore.loggedIn && (
            <h1 className="privacy-policy--title">Privacy Policy</h1>
          )}
          <p
            className="privacy-policy--content"
            dangerouslySetInnerHTML={{ __html: cms("privacy.content") }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default inject("userStore")(withRouter(observer(PrivacyPolicy)));
