import React, { FunctionComponent } from "react";

import "./Privacy.scss";
import { cms } from "../../../utils/cms";
import { Link } from "react-router-dom";

const Privacy: FunctionComponent = () => (
  <div className="flex-container flex-container--no-padding">
    <div className="privacy--header flex-col--12">
      <p>{cms("privacy-notice.title")}</p>
    </div>
    <div className="privacy--content flex-col--12">
      <p>{cms("privacy-notice.about")}</p>
      <div className="privacy--links flex-col--12">
        <div className="flex-container flex-container--no-padding">
          <Link to="/privacy-policy">{cms("privacy-notice.policy")}</Link>
          <Link to="/account/withdraw">{cms("privacy-notice.withdraw")}</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Privacy;
