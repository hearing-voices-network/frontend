import React, { Fragment, FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";

import { cms } from "../../../utils/cms";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";

import ContributionStore from "../../../stores/contributionStore";

interface IProps {
  contributionStore?: ContributionStore;
}

const GuidanceTwo: FunctionComponent<IProps> = ({ contributionStore }) => {
  if (!contributionStore) return null;

  return (
    <Fragment>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify submit-experiences">
        <div className="flex-col--8 flex-col--tablet-large--12 guidance">
          <h1 className="guidance--title">
            {cms("writing-guidance.guidance-two-title")}
          </h1>
          <span className="guidance--step">2/2</span>
          <p className="guidance--content">
            {cms("writing-guidance.guidance-two-1")}
          </p>

          <p className="guidance--content">
            {cms("writing-guidance.guidance-two-2")}
          </p>

          <FontAwesomeIcon icon="circle" className="guidance--icon" />
          <FontAwesomeIcon
            icon="circle"
            className="guidance--icon guidance--icon--active"
          />
        </div>
      </div>
      <Footer green={true}>
        <div className="flex-container flex-container--center flex-container--justify guidance--footer">
          <div className="flex-col--8 flex-col--tablet-large--12 guidance--footer--content">
            <Button
              text="Start"
              onClick={() => contributionStore.skipGuidance()}
            />
          </div>
          <div className="flex-col--8 flex-col--tablet-large--12 guidance--footer--content">
            <button
              onClick={() => contributionStore.skipGuidance()}
              className="guidance--footer--skip"
            >
              Skip
            </button>
          </div>
        </div>
      </Footer>
    </Fragment>
  );
};

export default inject("contributionStore")(observer(GuidanceTwo));
