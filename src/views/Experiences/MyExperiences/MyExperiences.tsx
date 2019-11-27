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
import PaginationControl from "../../../components/Pagination";
import Footer from "../../../components/Footer";
import Link from "../../../components/Link";

import { cms } from "../../../utils/cms";

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
      <div className="flex-container flex-container--center flex-container--justify my-experiences--pagination">
        <PaginationControl totalItems={1} itemsPerPage={10} currentPage={1} />
      </div>

      <Footer purple={true}>
        <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center my-experiences--footer">
          <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
            <Link
              text={cms("my-experiences.footer.link")}
              href="/browse"
              size="medium"
            />
            <p className="my-experiences--footer--about">
              {cms("my-experiences.footer.about")}
            </p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("userStore")(withRouter(observer(MyExperiences)));
