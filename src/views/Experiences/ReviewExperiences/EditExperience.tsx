import React, { FunctionComponent, Fragment } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { EditorValue } from "react-rte";
import cx from "classnames";

import Editor from "../../../components/Editor";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";

import { cms } from "../../../utils/cms";

interface IProps extends RouteComponentProps {
  story: EditorValue;
  onEdit: (text: EditorValue) => void;
  date: string;
  wordcount: number;
  increaseStep: () => void;
}

const MAX_WORD_COUNT = 700;

const EditExperience: FunctionComponent<IProps> = ({
  story,
  history,
  onEdit,
  date,
  wordcount,
  increaseStep
}) => (
  <Fragment>
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
        <h1 className="submission--title">Update experience</h1>
        {date && (
          <p className="submission--date">
            {format(new Date(date), "dd MMM yyyy")}
          </p>
        )}
      </div>

      <div className="flex-col--12 submission--editor">
        <Editor text={story} onChange={onEdit} />
      </div>
      <div className="flex-col--12 submission--word-count">
        {wordcount > MAX_WORD_COUNT && (
          <p className="submission--word-count--max">
            You have reached the word count limit!
          </p>
        )}
        <p></p>
        <p
          className={cx("submission--word-count--count", {
            "submission--word-count--count-max": wordcount > MAX_WORD_COUNT
          })}
        >
          Word count
          <span className="submission--word-count--count-max">{` ${wordcount} `}</span>
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
          <Button text="Resubmit" onClick={() => increaseStep()} />
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

export default withRouter(observer(EditExperience));
