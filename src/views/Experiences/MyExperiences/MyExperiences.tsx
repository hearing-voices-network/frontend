import React, { FunctionComponent, Fragment, useEffect } from "react";
import { observer, inject } from "mobx-react";
import {
  withRouter,
  Link as RouteLink,
  RouteComponentProps
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helmet from "react-helmet";

import "./MyExperiences.scss";

import Layout from "../../../components/Layout";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import UserStore from "../../../stores/userStore";
import NoExperiences from "../../Browse/NoExperiences";
import PaginationControl from "../../../components/Pagination";
import Footer from "../../../components/Footer";

import { cms } from "../../../utils/cms";
import Loading from "../../../components/Loading";
import Experiences from "./Experiences";

interface IProps extends RouteComponentProps {
  userStore: UserStore;
}

const MyExperiences: FunctionComponent<IProps> = ({ history, userStore }) => {
  useEffect(() => {
    userStore.fetchUserExperiences(1);
  }, []);

  if (!userStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>Connecting Voices | My Experiences</title>
      </Helmet>
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
                { value: "all", text: "See all" },
                {
                  value: "public",
                  text: "Public"
                },
                {
                  value: "private",
                  text: "Private"
                },
                {
                  value: "in_review",
                  text: "In review"
                },
                {
                  value: "to_review",
                  text: "To review"
                }
              ]}
              placeholder="See all"
              id="type"
              onChange={e => {
                userStore.filterResults(e.target.value);
              }}
            />

            <Button
              text="New story"
              onClick={() => history.push("/submit-experience")}
              small={true}
            />
          </div>
        </div>
      </div>
      <Fragment>
        {userStore.experiencesLoading && (
          <div className="flex-container flex-container--center flex-container--justify">
            <Loading input="experiences" />
          </div>
        )}

        {!userStore.experiencesLoading && (
          <Fragment>
            {!userStore.experiences.length ? (
              <NoExperiences />
            ) : (
              <Experiences />
            )}
          </Fragment>
        )}
      </Fragment>
      <div className="flex-container flex-container--center flex-container--justify my-experiences--pagination">
        <PaginationControl
          totalItems={userStore.totalItems}
          itemsPerPage={userStore.itemsPerPage}
          currentPage={userStore.currentPage}
          onChange={userStore.fetchUserExperiences}
          inputNum={0}
        />
      </div>

      <Footer purple={true}>
        <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center my-experiences--footer">
          <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
            <RouteLink to="/browse" className="link link--medium">
              {cms("my-experiences.footer.link")}
            </RouteLink>

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
