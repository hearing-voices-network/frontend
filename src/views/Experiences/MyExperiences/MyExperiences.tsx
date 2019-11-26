import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MyExperiences.scss";

import Layout from "../../../components/Layout";
import Select from "../../../components/Select";
import Button from "../../../components/Button";

const MyExperiences: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <div className="flex-container flex-container--no-padding flex-container--center my-experiences">
      <div className="flex-col--12">
        <div className="flex-container flex-container--no-padding flex-container--center flex-container--align-center">
          <button
            onClick={() => history.goBack()}
            className="my-experiences--back"
          >
            <FontAwesomeIcon icon="chevron-left" /> Back
          </button>

          <Select
            options={[
              {
                value: "",
                text: "Public"
              }
            ]}
            placeholder="See all"
            id="type"
          />

          <Button
            text="New story"
            onClick={() => console.log("add new story")}
            small={true}
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default withRouter(observer(MyExperiences));
