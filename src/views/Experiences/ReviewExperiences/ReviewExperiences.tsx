import React, { useEffect, FunctionComponent, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import get from "lodash/get";
import ReactSVG from "react-svg";

import ReviewStore from "../../../stores/reviewStore";
import Layout from "../../../components/Layout";
import ReviewIcon from "../../../assets/icons/my-experiences-alt.svg";
import Question from "../../../assets/icons/question-circle.svg";
import Loading from "../../../components/Loading";

import "./ReviewExperiences.scss";
import { cms } from "../../../utils/cms";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";

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
    <Layout className="review-experiences--layout">
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify">
        <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify review-experiences">
          {reviewStore.loading ? (
            <Loading input="story to review" />
          ) : (
            <Fragment>
              {/* Mobile  */}
              <div className="flex-col--8 flex-col--tablet-large--12 mobile-show">
                <ReactSVG
                  src={ReviewIcon}
                  className="review-experiences--image"
                />
                <h1 className="review-experiences--title">
                  {cms("review.title")}
                </h1>
              </div>

              {/* Tablet-up */}

              <div className="flex-col--8 mobile-hide">
                <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify">
                  <div className="flex-col--12">
                    <h1 className="review-experiences--title">
                      {cms("review.title")}
                    </h1>
                  </div>
                  <div className="flex-col--12">
                    <div className="flex-container flex-container--no-padding flex-container--center">
                      <div className="flex-col--6">
                        <p className="review-experiences--about">
                          {cms("review.about")}
                        </p>
                      </div>
                      <div className="flex-col--3">
                        <ReactSVG
                          src={ReviewIcon}
                          className="review-experiences--image"
                          wrapper="span"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-col--6 flex-col--mobile--9 mobile-show">
                <p className="review-experiences--about">
                  {cms("review.about")}
                </p>
              </div>

              <div className="flex-col--8 flex-col--mobile--8 review-experiences--changes-container">
                <h2 className="review-experiences--subtitle">
                  {cms("review.subtitle")}
                </h2>

                <p className="review-experiences--changes">
                  {get(reviewStore, "storyToReview.changes_requested")}
                </p>
              </div>

              <div className="flex-col--12">
                <div className="flex-container flex-container--justify flex-container--no-padding">
                  <div className="flex-col--6 flex-col--tablet-large--7 flex-col--mobile--9">
                    <div className="review-experiences--hint">
                      <ReactSVG src={Question} />
                      <span>{cms("review.hint")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
        <div className="flex-col--12">
          <Footer green={true}>
            <div className="flex-container flex-container--center flex-container--justify guidance--footer">
              <div className="flex-col--8 flex-col--tablet-large--12 guidance--footer--content">
                <Button
                  text="Amend changes"
                  onClick={() => console.log("amend")}
                />
              </div>

              <div className="flex-col--8 flex-col--tablet-large--12 guidance--footer--content">
                <button
                  onClick={() => console.log("private")}
                  className="guidance--footer--skip"
                >
                  Keep private
                </button>
              </div>
            </div>
          </Footer>
        </div>
      </div>
    </Layout>
  );
};

export default inject("reviewStore")(observer(ReviewExperiences));
