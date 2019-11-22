import React, { FunctionComponent, useState, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ExperienceStore from "../../stores/experienceStore";
import { ITag } from "../../utils/types";

import Tag from "../../components/Tag";

import "./Filters.scss";

interface IProps {
  experienceStore?: ExperienceStore;
}

interface IFilterProps {
  title: string;
  tags: ITag[];
  handleTagSelect: (tag: ITag) => void;
  selectedTags: ITag[];
}

const Filters: FunctionComponent<IProps> = ({ experienceStore }) => {
  if (!experienceStore) return null;

  return (
    <div className="flex-container flex-container--no-padding flex-container--justify">
      {experienceStore.categories.map((category: ITag) => (
        <Filter
          key={category.id}
          title={category.name}
          tags={experienceStore.getCategoryTags(category.id)}
          handleTagSelect={experienceStore.handleTagSelect}
          selectedTags={experienceStore.selectedTags}
        />
      ))}
    </div>
  );
};

const Filter: FunctionComponent<IFilterProps> = observer(
  ({ title, tags, handleTagSelect, selectedTags }) => {
    const [open, toggleTagList] = useState(false);

    return (
      <Fragment>
        <div
          className="flex-col--12 filters--category"
          onClick={() => toggleTagList(!open)}
        >
          {title}
          <FontAwesomeIcon icon="chevron-down" />
        </div>

        {open && (
          <div className="flex-container flex-container--no-padding flex-container--no-space">
            {tags.map((tag: ITag) => (
              <Tag
                key={tag.id}
                text={tag.name}
                search={true}
                onClick={() => handleTagSelect(tag)}
                selected={selectedTags.includes(tag)}
              />
            ))}
          </div>
        )}
      </Fragment>
    );
  }
);

export default inject("experienceStore")(observer(Filters));
