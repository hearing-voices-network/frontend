import React, { useEffect, FunctionComponent, Fragment } from "react";
import { inject, observer } from "mobx-react";

import { cms } from "../../../utils/cms";
import ExperienceStore from "../../../stores/experienceStore";
import ContributionStore from "../../../stores/contributionStore";

import Filters from "../../Browse/Filters";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";

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
    <Fragment>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify submit-experiences experience-privacy">
        <div className="flex-col--12">
          <h1 className="experience-tags--title">
            {cms("experience-tags.title")}
          </h1>
          <p className="experience-tags--about">
            {cms("experience-tags.about")}
          </p>
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
      <Footer purple={true}>
        <div className="flex-container flex-container--center flex-container--justify experience-entry--footer">
          <div className="flex-col--8 flex-col--tablet-large--10 guidance--footer--content">
            <button
              className="experience-tags--skip"
              onClick={() => contributionStore.skipTags()}
            >
              Skip this step
            </button>

            <p className="experience-tags--footer-about">
              {cms("submission.footer.step-3-about")}
            </p>
          </div>
        </div>
      </Footer>
    </Fragment>
  );
};

export default inject(
  "experienceStore",
  "contributionStore"
)(observer(ExperienceTags));
