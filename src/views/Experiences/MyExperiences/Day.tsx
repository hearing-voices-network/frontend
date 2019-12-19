import React, { FunctionComponent, useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import removeMd from "remove-markdown";

import { IStory, ITag } from "../../../utils/types";
import ReviewButton from "../../../components/ReviewButton";
import Accordian from "../../../components/Accordian";
import ExperiencePrivacy from "./ExperiencePrivacy";

interface IProps extends RouteComponentProps {
  date: string;
  experiences: IStory[];
  totalInReview: string | null;
  totalToReview: string | null;
  totalPublic: string | null;
  totalPrivate: string | null;
}

const Day: FunctionComponent<IProps> = ({
  date,
  experiences,
  totalInReview,
  totalToReview,
  totalPrivate,
  totalPublic,
  history
}) => {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const summaryArray = [
      totalInReview,
      totalToReview,
      totalPrivate,
      totalPublic
    ];

    setSummary(summaryArray.filter(summary => summary !== null).join(", "));
  }, [totalInReview, totalToReview, totalPrivate, totalPublic]);

  const displayButton = (status: string, id: string) => {
    switch (status) {
      case "public":
        return <ExperiencePrivacy id={id} status={status} />;
      case "private":
        return <ExperiencePrivacy id={id} status={status} />;

      case "in_review":
        return (
          <ReviewButton
            type="button"
            text="in review"
            onClick={() => history.push(`/my-experiences/review/${id}`)}
          />
        );

      case "changes_requested":
        return (
          <ReviewButton
            type="button"
            text="to review"
            onClick={() => history.push(`/my-experiences/review/${id}`)}
          />
        );
      default:
        break;
    }
  };

  return (
    <Accordian title={date} subtitle={summary}>
      <div>
        {experiences.map((story: IStory) => (
          <div className="flex-container flex-container--no-padding flex-container--align-center flex-container--center entry-summary">
            <div className="flex-col--mobile--7 flex-col--9">
              <p className="markdown">{removeMd(story.excerpt)}</p>
              {!!story.tags.length && (
                <div className="entry-summary--tags">
                  {story.tags.map((tag: ITag, i: number) => (
                    <span>{`${tag.name}${
                      i < story.tags.length - 1 ? ", " : ""
                    }`}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-col--mobile--5 flex-col--3 entry-summary--button">
              {displayButton(story.status, story.id)}
            </div>
          </div>
        ))}
      </div>
    </Accordian>
  );
};

export default withRouter(Day);
