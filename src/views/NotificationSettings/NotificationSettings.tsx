import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../components/Layout";

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
    </div>
  </Layout>
);

export default withRouter(observer(NotificationSettings));
