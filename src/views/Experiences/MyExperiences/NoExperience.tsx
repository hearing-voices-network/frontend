import React from "react";
import ReactSVG from "react-svg";
import { Link } from "react-router-dom";

import NoExperienceIcon from "../../../assets/icons/my-experiences.svg";
import { cms } from "../../../utils/cms";

const NoExperience = () => (
  <div className="flex-container flex-container--center flex-container--justify no-experience">
    <div className="flex-col--12">
      <ReactSVG src={NoExperienceIcon} />
      <h1 className="no-experience--title">{cms("my-experiences.title")}</h1>
      <p className="no-experience--about">{cms("my-experiences.about")}</p>

      <Link to="/new-story" className="no-experience--link">
        {cms("my-experiences.cta")}
      </Link>
    </div>
  </div>
);

export default NoExperience;
