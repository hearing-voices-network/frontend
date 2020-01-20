import React, { FunctionComponent, Fragment } from "react";
import { observer, inject } from "mobx-react";

import "./Results.scss";

import { IStory } from "../../utils/types";
import ExperienceStore from "../../stores/experienceStore";

import NoExperiences from "./NoExperiences";
import Loading from "../../components/Loading";
import Story from "../../components/Cards/Story";
import PaginationControl from "../../components/Pagination";

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
            <h2 className="results--count">{`${experiences.length} ${
              experiences.length > 1 ? "stories" : "story"
            }`}</h2>
          </div>
          <div className="flex-col--12">
            <div className="flex-container flex-container--no-padding flex-container--justify results--stories">
              {experiences.map((experience: IStory) => (
                <Story
                  story={experience.excerpt}
                  tags={experience.tags}
                  key={experience.id}
                  id={experience.id}
                />
              ))}
            </div>
          </div>

          <PaginationControl
            totalItems={experienceStore.totalItems}
            currentPage={experienceStore.currentPage}
            itemsPerPage={experienceStore.itemsPerPage}
            onChange={(pageNum: number) => experienceStore.paginate(pageNum)}
            inputNum={1}
          />
        </Fragment>
      )}
    </div>
  );
};

export default inject("experienceStore")(observer(Results));
