import React, { FunctionComponent } from "react";
import ClampLines from "react-clamp-lines";
import take from "lodash/take";
import removeMd from "remove-markdown";
import { inject, observer } from "mobx-react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import "./Story.scss";

import ExperienceStore from "../../../stores/experienceStore";
import { ITag } from "../../../utils/types";

import Tag from "../../Tag";

interface IProps extends RouteComponentProps {
  experienceStore?: ExperienceStore;
  story: string;
  tags: ITag[];
  id: string;
}

const Story: FunctionComponent<IProps> = ({
  story,
  tags,
  experienceStore,
  id,
  history
}) => {
  if (!experienceStore) return null;

  const { isTagSelected, filteredResultsShowing } = experienceStore;

  return (
    <section
      className="flex-col--mobile--12 flex-col--tablet--12 flex-col--tablet-large--5 story-card"
      tabIndex={0}
      onClick={() => history.push(`/story/${id}`)}
      onKeyDown={e => (e.key === "Enter" ? history.push(`/story/${id}`) : null)}
    >
      <ClampLines
        text={removeMd(story)}
        lines={4}
        ellipsis="..."
        id="story"
        buttons={false}
        className="story-card--excerpt"
      />
      <div>
        <Link to={`/story/${id}`} className="story-card--read-more">
          Read whole story
        </Link>
      </div>
      {!!tags.length ? (
        <div className="story-card--tags">
          <span className="story-card--tags--title">Tags:</span>
          {take(tags, 3).map((tag: ITag) => (
            <Tag
              text={tag.name}
              className="story-card--tags--tag"
              key={tag.id}
              selected={filteredResultsShowing ? isTagSelected(tag) : false}
              small={true}
            />
          ))}
          {tags.length > 3 && (
            <Tag
              text={`${tags.length - 3}+`}
              className="story-card--tags--tag"
              small={true}
            />
          )}
        </div>
      ) : (
        <div className="story-card--tags">
          <span className="story-card--tags--title">Tags:</span>
          <Tag
            text="No tag"
            className="story-card--tags--tag"
            key="untagged"
            selected={
              filteredResultsShowing
                ? isTagSelected({ name: "No tag", id: "untagged" })
                : false
            }
            small={true}
          />
        </div>
      )}
    </section>
  );
};

export default inject("experienceStore")(withRouter(observer(Story)));
