import React from "react";
import ReactSVG from "react-svg";

import NoResults from "../../assets/icons/no-results.svg";

const NoExperiences = () => (
  <div className="flex-col--12 results--no-results">
    <ReactSVG src={NoResults} />
    <h1 className="results--no-results--title">
      No results for this selection
    </h1>
  </div>
);

export default NoExperiences;
