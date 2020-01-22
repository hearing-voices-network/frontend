import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";

import Layout from "../../../components/Layout";
import ContributionStore from "../../../stores/contributionStore";
import GuidanceOne from "./GuidanceOne";
import GuidanceTwo from "./GuidanceTwo";
import ExperiencePrivacy from "./ExperiencePrivacy";
import ExperienceTags from "./ExperienceTags";
import ExperienceEntry from "./ExperienceEntry";
import Confirmation from "./Confirmation";

import "./SubmitExperiences.scss";

interface IProps {
  contributionStore: ContributionStore;
}

class SubmitExperiences extends Component<IProps> {
  componentDidMount() {
    if (!this.props.contributionStore) return null;
  }

  componentWillUnmount() {
    const { contributionStore } = this.props;

    contributionStore.clear();
    contributionStore.contributionSubmitted = false;
    contributionStore.privacy = "public";
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
      case 2:
        return <ExperienceTags />;
      default:
        break;
    }
  }

  render() {
    const { contributionStore } = this.props;

    if (contributionStore.contributionSubmitted) return <Confirmation />;

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
