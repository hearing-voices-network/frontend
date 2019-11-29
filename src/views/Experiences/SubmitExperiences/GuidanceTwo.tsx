import React from "react";
import { cms } from "../../../utils/cms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GuidanceTwo = () => (
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
);

export default GuidanceTwo;
