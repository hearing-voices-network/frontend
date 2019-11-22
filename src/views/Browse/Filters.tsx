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
}

const Filters: FunctionComponent<IProps> = ({ experienceStore }) => {
  if (!experienceStore) return null;

  return (
    <div className="flex-container flex-container--no-padding flex-container--justify">
      {experienceStore.categories.map((category: ITag) => (
        <Filter
          title={category.name}
          tags={experienceStore.getCategoryTags(category.id)}
        />
      ))}
    </div>
  );
};

const Filter: FunctionComponent<IFilterProps> = ({ title, tags }) => {
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
            <Tag text={tag.name} search={true} />
          ))}
        </div>
      )}
    </Fragment>
  );
};
export default inject("experienceStore")(observer(Filters));
