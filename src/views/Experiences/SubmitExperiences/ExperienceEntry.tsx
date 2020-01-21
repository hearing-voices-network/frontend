import React, { FunctionComponent, Fragment } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import cx from "classnames";

import { cms } from "../../../utils/cms";
import Editor from "../../../components/Editor";
import ContributionStore from "../../../stores/contributionStore";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";

interface IProps extends RouteComponentProps {
  contributionStore?: ContributionStore;
}

const MAX_WORD_COUNT = 700;

const ExperienceEntry: FunctionComponent<IProps> = ({
  history,
  contributionStore
}) => {
  if (!contributionStore) return null;

  return (
    <Fragment>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify submit-experiences">
        <div className="flex-col--12 my-experiences--back--container">
          <button
            onClick={() => history.goBack()}
            className="my-experiences--back"
          >
            <FontAwesomeIcon icon="chevron-left" /> Back
          </button>
        </div>
        <div className="flex-col--12 submission--header">
          <h1 className="submission--title">{cms("submission.title")}</h1>
          <p className="submission--date">{cms("submission.date")}</p>
        </div>

        <div className="flex-col--12 submission--editor">
          <Editor
            text={contributionStore.contribution}
            onChange={contributionStore.onContributionChange}
          />
        </div>
        <div className="flex-col--12 submission--word-count">
          {contributionStore.wordCount > MAX_WORD_COUNT && (
            <p className="submission--word-count--max">
              You have reached the word count limit!
            </p>
          )}
          <p></p>
          <p
            className={cx("submission--word-count--count", {
              "submission--word-count--count-max":
                contributionStore.wordCount > MAX_WORD_COUNT
            })}
          >
            Word count
            <span className="submission--word-count--count-max">{` ${contributionStore.wordCount} `}</span>
            {`/ ${MAX_WORD_COUNT}`}
          </p>
        </div>
      </div>
      <Footer green={true}>
        <div className="flex-container flex-container--center flex-container--justify experience-entry--footer">
          <div className="flex-col--8 flex-col--tablet-large--10 guidance--footer--content">
            <h5 className="experience-entry--footer--title">
              {cms("submission.footer.title")}
            </h5>
            <p className="experience-entry--footer--description">
              {cms("submission.footer.step-1-about")}
            </p>
            <Button
              text="Next Step"
              onClick={() => contributionStore.increaseStep("contribution")}
            />
          </div>
          <div className="flex-col--8 flex-col--tablet-large--12 guidance--footer--content">
            <button
              onClick={() => history.push("/my-experiences")}
              className="experience-entry--footer--cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </Footer>
    </Fragment>
  );
};

export default withRouter(
  inject("contributionStore")(observer(ExperienceEntry))
);
