import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import map from "lodash/map";
import { Dictionary } from "lodash";

import { IStory, ITag } from "../../../utils/types";
import Accordian from "../../../components/Accordian";

import "../../../styles/markdown.scss";

interface IProps {
  experiences: Dictionary<IStory[]>;
}

interface IDayProps {
  date: string;
  experiences: IStory[];
}

const Day: FunctionComponent<IDayProps> = ({ date, experiences }) => (
  <Accordian title={date} green={true} subtitle="1 private, 1 in public">
    <div>
      {experiences.map((story: IStory) => (
        <div className="flex-container flex-container--no-padding entry-summary">
          <div className="flex-col--9">
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

          <div className="flex-col--3">
            <p>{story.status}</p>
          </div>
        </div>
      ))}
    </div>
  </Accordian>
);

const Experiences: FunctionComponent<IProps> = ({ experiences }) => (
  <div className="flex-flex-container flex-container--no-padding flex-container--centre flex-container--justify">
    {map(experiences, (experiences: IStory[], date: string) => (
      <div className="flex-col--12">
        <Day date={date} experiences={experiences} />
      </div>
    ))}
  </div>
);

export default Experiences;
