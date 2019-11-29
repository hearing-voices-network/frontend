import React from "react";
import ReactSVG from "react-svg";

import GuidanceIcon from "../../../assets/icons/writing-guidance.svg";
import { cms } from "../../../utils/cms";
import PrivacyButton from "../../../components/PrivacyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GuidanceOne = () => (
  <div className="flex-col--8 flex-col--tablet-large--12 guidance">
    <ReactSVG src={GuidanceIcon} className="guidance--image" />
    <h1 className="guidance--title">
      {cms("writing-guidance.guidance-one-title")}
    </h1>
    <span className="guidance--step">1/2</span>
    <p className="guidance--content">
      {cms("writing-guidance.guidance-one-1")}
    </p>

    <PrivacyButton text="Private" />

    <p className="guidance--content">
      {cms("writing-guidance.guidance-one-2")}
    </p>

    <FontAwesomeIcon
      icon="circle"
      className="guidance--icon guidance--icon--active"
    />
    <FontAwesomeIcon icon="circle" className="guidance--icon" />
  </div>
);

export default GuidanceOne;
