import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import get from "lodash/get";
import cx from "classnames";

import ReviewStore from "../../../stores/reviewStore";
import Layout from "../../../components/Layout";
import Changes from "./Changes";

import "./ReviewExperiences.scss";
import EditExperience from "./EditExperience";

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

  displayStep = () => {
    const { reviewStore } = this.props;

    switch (reviewStore.reviewStep) {
      case 0:
        return (
          <Changes
            changes={get(reviewStore, "storyToReview.changes_requested")}
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
      default:
        break;
    }
  };

  render() {
    const { reviewStore } = this.props;

    return (
      <Layout
        className={cx({
          "review-experiences--layout": reviewStore.reviewStep === 0
        })}
      >
        <Fragment>{this.displayStep()}</Fragment>
      </Layout>
    );
  }
}

export default inject("reviewStore")(observer(ReviewExperiences));