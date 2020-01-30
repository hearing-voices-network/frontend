import React, { Fragment, FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cms } from "../../../utils/cms";
import GuidanceIcon from "../../../assets/icons/writing-guidance.svg";
import PrivacyButton from "../../../components/PrivacyButton";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import ContributionStore from "../../../stores/contributionStore";

interface IProps {
  contributionStore?: ContributionStore;
}

const GuidanceOne: FunctionComponent<IProps> = ({ contributionStore }) => {
  if (!contributionStore) return null;

  return (
    <Fragment>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify submit-experiences">
        <div className="flex-col--8 flex-col--tablet-large--12 guidance">
          <ReactSVG src={GuidanceIcon} className="guidance--image" />
          <h1 className="guidance--title">
            {cms("writing-guidance.guidance-one-title")}
          </h1>
          <span className="guidance--step">1/2</span>
          <p className="guidance--content">
            {cms("writing-guidance.guidance-one-1")}
          </p>

          <PrivacyButton text="Private" onChange={() => null} disabled={true} />

          <p className="guidance--content">
            {cms("writing-guidance.guidance-one-2")}
          </p>

          <FontAwesomeIcon
            icon="circle"
            className="guidance--icon guidance--icon--active"
          />
          <FontAwesomeIcon icon="circle" className="guidance--icon" />
        </div>
      </div>
      <Footer green={true}>
        <div className="flex-container flex-container--center flex-container--justify guidance--footer">
          <div className="flex-col--8 flex-col--tablet-large--12 guidance--footer--content">
            <Button
              text="Continue"
              onClick={() => contributionStore.increaseStep("guidance")}
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

export default inject("contributionStore")(observer(GuidanceOne));
