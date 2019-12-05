import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";

import { cms } from "../../utils/cms";

import "./PrivacyPolicy.scss";
import Layout from "../../components/Layout";

const PrivacyPolicy: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center privacy-policy">
      <div className="flex-col--12">
        <div className="flex-col--12">
          <button
            onClick={() => history.goBack()}
            className="privacy-policy--back"
          >
            <FontAwesomeIcon icon="chevron-left" /> Back
          </button>
        </div>
      </div>
      <div className="flex-col--8 flex-col--tablet-large--12 privacy-policy--content--container">
        <h1 className="privacy-policy--title">Privacy Policy</h1>
        <p
          className="privacy-policy--content"
          dangerouslySetInnerHTML={{ __html: cms("privacy.content") }}
        />
      </div>
    </div>
  </Layout>
);

export default withRouter(observer(PrivacyPolicy));
