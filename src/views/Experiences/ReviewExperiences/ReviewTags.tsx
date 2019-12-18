import React, { FunctionComponent, useEffect, Fragment } from "react";
import { inject, observer } from "mobx-react";

import ExperienceStore from "../../../stores/experienceStore";
import ReviewStore from "../../../stores/reviewStore";
import { cms } from "../../../utils/cms";

import Filters from "../../Browse/Filters";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";

interface IProps {
  experienceStore?: ExperienceStore;
  reviewStore?: ReviewStore;
}

const ReviewTags: FunctionComponent<IProps> = ({
  experienceStore,
  reviewStore
}) => {
  useEffect(() => {
    if (experienceStore && !experienceStore.tags.length) {
      experienceStore.getTags();
    }
  }, [experienceStore]);

  if (!reviewStore) return null;

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
            handleTagSelect={reviewStore.handleTagSelect}
            selectedTags={reviewStore.selectedTags}
            isTagSelected={reviewStore.isTagSelected}
          />
        </div>

        <div className="flex-col--12 experience-tags--continue">
          <Button text="Submit" onClick={() => reviewStore.submitChanges()} />
        </div>
      </div>
      <Footer purple={true}>
        <div className="flex-container flex-container--center flex-container--justify experience-entry--footer">
          <div className="flex-col--8 flex-col--tablet-large--10 guidance--footer--content">
            <button
              className="experience-tags--skip"
              onClick={() => reviewStore.skipTags()}
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

export default inject("experienceStore", "reviewStore")(observer(ReviewTags));
