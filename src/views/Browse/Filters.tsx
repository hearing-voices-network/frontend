import React, { FunctionComponent, useState, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ExperienceStore from "../../stores/experienceStore";
import { ITag } from "../../utils/types";

import Tag from "../../components/Tag";

import "./Filters.scss";

interface IProps {
  experienceStore?: ExperienceStore;
  handleTagSelect: (tag: ITag) => void;
  selectedTags: ITag[];
  isTagSelected: (tag: ITag) => boolean | undefined;
}

interface IFilterProps {
  title: string;
  tags: ITag[];
  handleTagSelect: (tag: ITag) => void;
  selectedTags: ITag[];
  isTagSelected: (tag: ITag) => boolean | undefined;
}

const Filters: FunctionComponent<IProps> = ({
  experienceStore,
  handleTagSelect,
  selectedTags,
  isTagSelected
}) => {
  if (!experienceStore) return null;

  return (
    <div className="flex-container flex-container--no-padding flex-container--justify">
      {experienceStore.categories.map((category: ITag) => (
        <Filter
          key={category.id}
          title={category.name}
          tags={experienceStore.getCategoryTags(category.id)}
          handleTagSelect={handleTagSelect}
          selectedTags={selectedTags}
          isTagSelected={isTagSelected}
        />
      ))}
    </div>
  );
};

const Filter: FunctionComponent<IFilterProps> = observer(
  ({ title, tags, handleTagSelect, isTagSelected }) => {
    const [open, toggleTagList] = useState(false);

    return (
      <Fragment>
        <button
          className="flex-col--12 filters--category"
          onClick={() => toggleTagList(!open)}
        >
          {title}
          <FontAwesomeIcon icon="chevron-down" />
        </button>

        {open && (
          <div
            className="flex-container flex-container--no-padding flex-container--no-space"
            tabIndex={0}
          >
            {tags.map((tag: ITag) => (
              <Tag
                key={tag.id}
                text={tag.name}
                search={true}
                onClick={() => handleTagSelect(tag)}
                onKeyPress={(e: any) =>
                  e.key === "Enter" ? handleTagSelect(tag) : null
                }
                selected={isTagSelected(tag)}
                tabIndex={0}
              />
            ))}
          </div>
        )}
      </Fragment>
    );
  }
);

export default inject("experienceStore")(observer(Filters));
