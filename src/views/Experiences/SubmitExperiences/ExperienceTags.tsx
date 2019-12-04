import React, { useEffect, FunctionComponent } from "react";
import { inject, observer } from "mobx-react";
import Filters from "../../Browse/Filters";
import ExperienceStore from "../../../stores/experienceStore";
import { cms } from "../../../utils/cms";
import ContributionStore from "../../../stores/contributionStore";
import Button from "../../../components/Button";

interface IProps {
  experienceStore?: ExperienceStore;
  contributionStore?: ContributionStore;
}

const ExperienceTags: FunctionComponent<IProps> = ({
  experienceStore,
  contributionStore
}) => {
  useEffect(() => {
    if (experienceStore && !experienceStore.tags.length) {
      experienceStore.getTags();
    }
  }, [experienceStore]);

  if (!contributionStore) return null;

  return (
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify submit-experiences experience-privacy">
      <div className="flex-col--12">
        <h1 className="experience-tags--title">
          {cms("experience-tags.title")}
        </h1>
        <p className="experience-tags--about">{cms("experience-tags.about")}</p>
      </div>

      <div className="flex-col--12">
        <Filters
          handleTagSelect={contributionStore.handleTagSelect}
          selectedTags={contributionStore.selectedTags}
          isTagSelected={contributionStore.isTagSelected}
        />
      </div>

      <div className="flex-col--12 experience-tags--continue">
        <Button
          text="Continue"
          onClick={() => contributionStore.increaseStep("contribution")}
        />
      </div>
    </div>
  );
};

export default inject(
  "experienceStore",
  "contributionStore"
)(observer(ExperienceTags));
