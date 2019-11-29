import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";

import Layout from "../../../components/Layout";
import ContributionStore from "../../../stores/contributionStore";
import GuidanceOne from "./GuidanceOne";

import "./SubmitExperiences.scss";
import GuidanceTwo from "./GuidanceTwo";

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

  render() {
    const { contributionStore } = this.props;

    return (
      <Layout>
        <Fragment>
          {contributionStore.showGuidance && this.displayGuidanceStep()}
        </Fragment>
      </Layout>
    );
  }
}

export default inject("contributionStore")(observer(SubmitExperiences));
