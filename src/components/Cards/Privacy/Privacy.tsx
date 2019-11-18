import React, { FunctionComponent } from "react";

import "./Privacy.scss";
import { cms } from "../../../utils/cms";

const Privacy: FunctionComponent = () => (
  <div className="flex-container flex-container--no-padding">
    <div className="privacy--header flex-col--12">
      <p>{cms("privacy-notice.title")}</p>
    </div>
    <div className="privacy--content flex-col--12">
      <p>{cms("privacy-notice.about")}</p>
      <div className="privacy--links flex-col--12">
        <div className="flex-container flex-container--no-padding">
          <a href="/">{cms("privacy-notice.policy")}</a>
          <a href="/">{cms("privacy-notice.withdraw")}</a>
        </div>
      </div>
    </div>
  </div>
);

export default Privacy;
