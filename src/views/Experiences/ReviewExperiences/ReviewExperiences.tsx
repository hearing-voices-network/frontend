import React, { useEffect, FunctionComponent } from "react";
import Layout from "../../../components/Layout";
import { inject, observer } from "mobx-react";
import ExperienceStore from "../../../stores/experienceStore";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps {
  experienceStore: ExperienceStore;
}

const ReviewExperiences: FunctionComponent<IProps> = ({
  experienceStore,
  match
}) => {
  useEffect(() => {
    console.log(match);
    // experienceStore.getStoryToReview()
  });

  return (
    <Layout>
      <div className="flex-container">STORY!</div>
    </Layout>
  );
};
export default inject("experienceStore")(observer(ReviewExperiences));
