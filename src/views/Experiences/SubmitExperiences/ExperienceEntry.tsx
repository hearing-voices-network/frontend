import React, { FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cms } from "../../../utils/cms";
import Editor from "../../../components/Editor";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import ContributionStore from "../../../stores/contributionStore";
import cx from "classnames";

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
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify submit-experiences">
      <div className="flex-col--12">
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
  );
};

export default withRouter(
  inject("contributionStore")(observer(ExperienceEntry))
);
