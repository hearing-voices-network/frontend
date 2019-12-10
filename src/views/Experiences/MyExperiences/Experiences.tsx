import React, { FunctionComponent, Fragment } from "react";
import { IStory } from "../../../utils/types";
import { format } from "date-fns";
import { Dictionary } from "lodash";
import map from "lodash/map";

interface IProps {
  experiences: Dictionary<IStory[]>;
}

interface IDayProps {
  date: string;
  experiences: IStory[];
}

const Day: FunctionComponent<IDayProps> = ({ date, experiences }) => (
  <div>
    <div>{format(new Date(date), "dd MMM yyyy")}</div>
    <div>
      {experiences.map((story: IStory) => (
        <p>{story.excerpt}</p>
      ))}
    </div>
  </div>
);

const Experiences: FunctionComponent<IProps> = ({ experiences }) => (
  <div>
    {map(experiences, (experiences: IStory[], date: string) => (
      <Day date={date} experiences={experiences} />
    ))}
  </div>
);

export default Experiences;
