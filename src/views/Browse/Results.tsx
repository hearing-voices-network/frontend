import React, { FunctionComponent } from "react";
import { observer, inject } from "mobx-react";

import "./Results.scss";

import ExperienceStore from "../../stores/experienceStore";
import NoExperiences from "./NoExperiences";

interface IProps {
  experienceStore?: ExperienceStore;
}

const Results: FunctionComponent<IProps> = ({ experienceStore }) => {
  if (!experienceStore) return null;

  const { experiences } = experienceStore;

  return (
    <div className="flex-container flex-container--no-padding flex-container--center results">
      {!experiences.length && <NoExperiences />}
    </div>
  );
};

export default inject("experienceStore")(observer(Results));
