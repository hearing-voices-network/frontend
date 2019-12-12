import React, { FunctionComponent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import map from "lodash/map";
import { observer, inject } from "mobx-react";

import { IStory, ITag } from "../../../utils/types";
import Accordian from "../../../components/Accordian";
import ReviewButton from "../../../components/ReviewButton";
import UserStore from "../../../stores/userStore";
import PrivacyButton from "../../../components/PrivacyButton";

import "../../../styles/markdown.scss";

interface IProps {
  userStore?: UserStore;
}

interface IDayProps {
  date: string;
  experiences: IStory[];
  totalInReview: string | null;
  totalPublic: string | null;
  totalPrivate: string | null;
}

const Day: FunctionComponent<IDayProps> = ({
  date,
  experiences,
  totalInReview,
  totalPrivate,
  totalPublic
}) => {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const summaryArray = [totalInReview, totalPrivate, totalPublic];

    setSummary(summaryArray.filter(summary => summary !== null).join(", "));
  }, [totalInReview, totalPrivate, totalPublic]);

  const displayButton = (status: string) => {
    switch (status) {
      case "public":
        return <PrivacyButton text={status} onChange={() => null} />;
      case "private":
        return <PrivacyButton text={status} onChange={() => null} />;

      case "in_review":
        return (
          <ReviewButton
            type="button"
            text="in review"
            onClick={() => console.log("review button")}
          />
        );

      case "to_review":
        return (
          <ReviewButton
            type="button"
            text="to review"
            onClick={() => console.log("review button")}
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
          <div className="flex-container flex-container--no-padding flex-container--align-center entry-summary">
            <div className="flex-col--mobile--7 flex-col--9">
              <ReactMarkdown className="markdown" source={story.excerpt} />
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
              {displayButton(story.status)}
            </div>
          </div>
        ))}
      </div>
    </Accordian>
  );
};

const Experiences: FunctionComponent<IProps> = ({ userStore }) => {
  if (!userStore) return null;
  return (
    <div className="flex-flex-container flex-container--no-padding flex-container--center flex-container--align-center flex-container--justify">
      {map(
        userStore.experiencesGroupedByDate,
        (experiences: IStory[], date: string) => (
          <div className="flex-col--12">
            <Day
              date={date}
              experiences={experiences}
              totalInReview={userStore.totalInReview(experiences)}
              totalPublic={userStore.totalPublic(experiences)}
              totalPrivate={userStore.totalPrivate(experiences)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default inject("userStore")(observer(Experiences));
