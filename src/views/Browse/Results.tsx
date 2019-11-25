import React, { FunctionComponent } from "react";
import { observer, inject } from "mobx-react";

import "./Results.scss";

import ExperienceStore from "../../stores/experienceStore";

interface IProps {
  experienceStore?: ExperienceStore;
}

const Results: FunctionComponent<IProps> = ({ experienceStore }) => {
  if (!experienceStore) return null;

  return (
    <div className="flex-container flex-container--no-padding flex-container--center results">
      <div className="flex-col--12">Results</div>
    </div>
  );
};

export default inject("experienceStore")(observer(Results));
