import React, { FunctionComponent, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MyExperiences.scss";

import Layout from "../../../components/Layout";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import UserStore from "../../../stores/userStore";
import NoExperience from "./NoExperience";

interface IProps extends RouteComponentProps {
  userStore: UserStore;
}

const MyExperiences: FunctionComponent<IProps> = ({ history, userStore }) => {
  if (!userStore) return null;

  return (
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
      <Fragment>{!userStore.experiences.length && <NoExperience />}</Fragment>
    </Layout>
  );
};

export default inject("userStore")(withRouter(observer(MyExperiences)));
