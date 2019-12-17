import React, { useEffect, FunctionComponent, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import get from "lodash/get";
import ReactSVG from "react-svg";

import ReviewStore from "../../../stores/reviewStore";
import Layout from "../../../components/Layout";
import ReviewIcon from "../../../assets/icons/my-experiences-alt.svg";
import Loading from "../../../components/Loading";

import "./ReviewExperiences.scss";
import { cms } from "../../../utils/cms";

interface IProps extends RouteComponentProps {
  reviewStore: ReviewStore;
}

const ReviewExperiences: FunctionComponent<IProps> = ({
  reviewStore,
  match
}) => {
  useEffect(() => {
    const id = get(match, "params.storyId");
    reviewStore.getReviewComments(id);
  }, []);

  return (
    <Layout>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify review-experiences">
        {reviewStore.loading ? (
          <Loading input="story to review" />
        ) : (
          <Fragment>
            <div className="flex-col--8 flex-col--tablet-large--12">
              <ReactSVG
                src={ReviewIcon}
                className="review-experiences--image"
              />
              <h1 className="review-experiences--title">
                {cms("review.title")}
              </h1>
            </div>
            <div className="flex-col--6 flex-col--mobile--9">
              <p className="review-experiences--about">{cms("review.about")}</p>
            </div>

            <div className="flex-col--5 flex-col--mobile--8">
              <h2 className="review-experiences--subtitle">
                {cms("review.subtitle")}
              </h2>

              <p className="review-experiences--changes">
                {get(reviewStore, "storyToReview.changes_requested")}
              </p>
            </div>
          </Fragment>
        )}
      </div>
    </Layout>
  );
};
export default inject("reviewStore")(observer(ReviewExperiences));
