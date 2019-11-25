import React, { FunctionComponent } from "react";
import { observer, inject } from "mobx-react";

import "./Results.scss";

import ExperienceStore from "../../stores/experienceStore";
import NoExperiences from "./NoExperiences";
import Loading from "../../components/Loading";

interface IProps {
  experienceStore?: ExperienceStore;
}

const Results: FunctionComponent<IProps> = ({ experienceStore }) => {
  if (!experienceStore) return null;

  const { experiences, experiencesLoading } = experienceStore;

  return (
    <div className="flex-container flex-container--no-padding flex-container--center results">
      {!experiences.length && !experiencesLoading && <NoExperiences />}

      {experiencesLoading && <Loading input="selection" />}

      {!experiencesLoading && !!experiences.length && (
        <div className="flex-col--12">
          <p className="results--count">{`${experiences.length} ${
            experiences.length > 1 ? "stories" : "story"
          }`}</p>
        </div>
      )}
    </div>
  );
};

export default inject("experienceStore")(observer(Results));
