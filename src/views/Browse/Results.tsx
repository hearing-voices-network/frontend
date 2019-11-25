import React, { FunctionComponent, Fragment } from "react";
import { observer, inject } from "mobx-react";

import "./Results.scss";

import { IStory } from "../../utils/types";
import ExperienceStore from "../../stores/experienceStore";

import NoExperiences from "./NoExperiences";
import Loading from "../../components/Loading";
import Story from "../../components/Cards/Story";

interface IProps {
  experienceStore?: ExperienceStore;
}

const Results: FunctionComponent<IProps> = ({ experienceStore }) => {
  if (!experienceStore) return null;

  const { experiences, experiencesLoading } = experienceStore;

  return (
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify results">
      {!experiences.length && !experiencesLoading && <NoExperiences />}

      {experiencesLoading && <Loading input="selection" />}

      {!experiencesLoading && !!experiences.length && (
        <Fragment>
          <div className="flex-col--12">
            <p className="results--count">{`${experiences.length} ${
              experiences.length > 1 ? "stories" : "story"
            }`}</p>
          </div>
          <div className="flex-col--12">
            <div className="flex-container flex-container--no-padding">
              {experiences.map((experience: IStory) => (
                <Story story={experience.content} tags={experience.tags} />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default inject("experienceStore")(observer(Results));
