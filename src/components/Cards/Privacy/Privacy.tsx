import React, { FunctionComponent } from "react";

import "./Privacy.scss";

const Privacy: FunctionComponent = () => (
  <div className="flex-container flex-container--no-padding">
    <div className="privacy--header flex-col--12">
      <p>Privacy and withdrawl</p>
    </div>
    <div className="privacy--content flex-col--12">
      <p>
        Your account is secure and how much you share is up to you, you can
        always withdraw at any time.
      </p>
      <div className="privacy--links flex-col--12">
        <div className="flex-container flex-container--no-padding">
          <a href="/">Privacy policy</a>
          <a href="/">I would like to withdraw</a>
        </div>
      </div>
    </div>
  </div>
);

export default Privacy;
