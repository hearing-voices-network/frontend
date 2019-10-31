import React, { FunctionComponent } from "react";
import ClampLines from "react-clamp-lines";
import take from "lodash/take";

import "./Story.scss";
import Tag from "../../Tag";

interface IProps {
  story: string;
  tags: string[];
}

const Story: FunctionComponent<IProps> = ({ story, tags }) => (
  <section className="flex-col--mobile--12 flex-col--tablet--12 flex-col--tablet-large--5 story-card">
    <ClampLines
      text={story}
      lines={4}
      ellipsis="..."
      id="story"
      buttons={false}
    />
    <div className="story-card--read-more">
      <a href="/">Read whole story</a>
    </div>
    <div className="story-card--tags">
      <span className="story-card--tags--title">Tags:</span>
      {take(tags, 3).map(tag => (
        <Tag text={tag} className="story-card--tags--tag" />
      ))}
      {tags.length > 3 && (
        <Tag text={`${tags.length - 3}+`} className="story-card--tags--tag" />
      )}
    </div>
  </section>
);

export default Story;
