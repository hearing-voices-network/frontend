import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";

import Layout from "../../../components/Layout";
import ContributionStore from "../../../stores/contributionStore";
import GuidanceOne from "./GuidanceOne";
import ExperiencePrivacy from "./ExperiencePrivacy";

import "./SubmitExperiences.scss";
import GuidanceTwo from "./GuidanceTwo";
import ExperienceEntry from "./ExperienceEntry";

interface IProps {
  contributionStore: ContributionStore;
}

class SubmitExperiences extends Component<IProps> {
  componentDidMount() {
    if (!this.props.contributionStore) return null;
  }

  displayGuidanceStep() {
    const { contributionStore } = this.props;

    switch (contributionStore.guidanceStep) {
      case 0:
        return <GuidanceOne />;
      case 1:
        return <GuidanceTwo />;
      default:
        break;
    }
  }

  displaySubmissionStep() {
    const { contributionStore } = this.props;

    switch (contributionStore.contributionStep) {
      case 0:
        return <ExperienceEntry />;
      case 1:
        return <ExperiencePrivacy />;
      default:
        break;
    }
  }

  render() {
    const { contributionStore } = this.props;

    return (
      <Layout>
        <Fragment>
          {contributionStore.showGuidance
            ? this.displayGuidanceStep()
            : this.displaySubmissionStep()}
        </Fragment>
      </Layout>
    );
  }
}

export default inject("contributionStore")(observer(SubmitExperiences));
