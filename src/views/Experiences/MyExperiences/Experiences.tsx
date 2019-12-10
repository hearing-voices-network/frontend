import React, { FunctionComponent, Fragment } from "react";
import { IStory } from "../../../utils/types";
import { format } from "date-fns";
import { Dictionary } from "lodash";
import map from "lodash/map";
import Accordian from "../../../components/Accordian";

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
        <p>{story.excerpt}</p>
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
