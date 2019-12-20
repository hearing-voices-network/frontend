import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import get from "lodash/get";
import cx from "classnames";

import ReviewStore from "../../../stores/reviewStore";
import Layout from "../../../components/Layout";
import Changes from "./Changes";
import EditExperience from "./EditExperience";
import ReviewTags from "./ReviewTags";
import ResubmitConfirmation from "./ResubmitConfirmation";
import EditPrivacy from "./EditPrivacy";

import "./ReviewExperiences.scss";
import Loading from "../../../components/Loading";

interface IProps extends RouteComponentProps {
  reviewStore: ReviewStore;
}

class ReviewExperiences extends Component<IProps> {
  componentDidMount() {
    if (!this.props.reviewStore) return null;

    const id = get(this.props.match, "params.storyId", null);
    const { reviewStore } = this.props;

    if (id) {
      reviewStore.getReviewComments(id);
    }
  }

  componentWillUnmount() {
    const { reviewStore } = this.props;

    reviewStore.clear();
  }

  displayStep = () => {
    const { reviewStore } = this.props;

    switch (reviewStore.reviewStep) {
      case 0:
        return (
          <Changes
            story={reviewStore.storyToReview}
            loading={reviewStore.loading}
            increaseStep={reviewStore.increaseStep}
          />
        );
      case 1:
        return (
          <EditExperience
            story={reviewStore.editedStory}
            onEdit={reviewStore.onStoryEdit}
            date={get(reviewStore, "storyToReview.created_at")}
            wordcount={reviewStore.wordCount}
            increaseStep={reviewStore.increaseStep}
          />
        );

      case 2:
        return <EditPrivacy />;
      case 3:
        return <ReviewTags />;
      default:
        break;
    }
  };

  render() {
    const { reviewStore } = this.props;

    if (reviewStore.reviewSubmitted) return <ResubmitConfirmation />;

    return (
      <Layout
        className={cx({
          "review-experiences--layout":
            reviewStore.reviewStep === 0 && !reviewStore.loading
        })}
      >
        <Fragment>
          {reviewStore.loading ? (
            <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify results">
              <Loading input="your selected story" />
            </div>
          ) : (
            this.displayStep()
          )}
        </Fragment>
      </Layout>
    );
  }
}

export default inject("reviewStore")(observer(ReviewExperiences));
