import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../../components/Layout";
import { cms } from "../../utils/cms";
import Checkbox from "../../components/Checkbox";
import Footer from "../../components/Footer";
import Link from "../../components/Link";

const NotificationSettings: FunctionComponent<RouteComponentProps> = ({
  history
}) => (
  <Layout>
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account">
      <div className="flex-col--12">
        <button onClick={() => history.goBack()} className="my-account--back">
          <FontAwesomeIcon icon="chevron-left" /> Back
        </button>
      </div>

      <div className="flex-col--12">
        <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--container">
          <div className="flex-col--8 flex-col--tablet-large--12">
            <h1 className="my-account--title">{cms("notification.title")}</h1>
            <p className="update-email--about">{cms("notification.about")}</p>
          </div>
        </div>
      </div>

      <div className="flex-col--12">
        <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--container my-account--list">
          <div className="flex-col--8 flex-col--tablet-large--12 ">
            <h2 className="my-account--list--title">
              Recieve notifications for
            </h2>
          </div>

          <div className="flex-col--8 flex-col--tablet-large--12 ">
            <Checkbox
              label="Submission needs reviewing"
              id="reviewing"
              checked={true}
              className="my-account--list--checkbox"
            />
            <Checkbox
              label="New experience published"
              id="published"
              checked={true}
              className="my-account--list--checkbox"
            />
            <Checkbox
              label="Account changes"
              id="account"
              checked={true}
              className="my-account--list--checkbox"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer grey={true}>
      <div className="flex-container flex-container--center flex-container--justify my-account--footer">
        <div className="flex-col--8 flex-col--tablet-large--10 my-account--footer--content">
          <Link
            text="Privacy Policy"
            href="/privacy-policy"
            size="medium"
            grey={true}
          />
          <p className="my-account--footer--about">
            {cms("my-account.footer.about")}
          </p>
        </div>
      </div>
    </Footer>
  </Layout>
);

export default withRouter(observer(NotificationSettings));
