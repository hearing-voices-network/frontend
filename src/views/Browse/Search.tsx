import React, { Fragment, FunctionComponent } from "react";
import ReactTags from "react-tag-autocomplete";
import { observer, inject } from "mobx-react";

import { cms } from "../../utils/cms";

import Button from "../../components/Button";
import Tag from "../../components/Tag";
import Filters from "./Filters";

import ExperienceStore from "../../stores/experienceStore";

interface IProps {
  experienceStore?: ExperienceStore;
}

const Search: FunctionComponent<IProps> = ({ experienceStore }) => {
  if (!experienceStore) return null;

  const {
    selectedTags,
    availableTags,
    removeTag,
    handleAddition,
    showFilters,
    isTagSelected,
    filterOptionsVisible,
    toggleFilterOptions,
    filterResults,
    selectNoTag
  } = experienceStore;

  return (
    <div className="flex-container flex-container--no-padding flex-container--center browse--filter">
      <div className="flex-col--12">
        <h1 className="browse--filter--title">{cms("browse.filter.title")}</h1>
      </div>

      <div className="flex-container flex-container--no-padding">
        <div className="flex-col--12 browse--filter--input">
          <ReactTags
            tags={selectedTags}
            suggestions={availableTags}
            handleDelete={(index: number) => removeTag(index)}
            handleAddition={(tag: any) => handleAddition(tag)}
            placeholder={selectedTags.length ? "" : "e.g. angel, whispering"}
          />
          <Button onClick={() => filterResults()} text="Filter" filter={true} />
        </div>
      </div>

      <div
        className="flex-col--12
      "
      >
        <div className="flex-container flex-container--no-padding flex-container--justify browse--filter--options">
          <button
            aria-expanded={filterOptionsVisible}
            aria-controls="filter-content"
            id="filter-header"
            onClick={() => toggleFilterOptions()}
            className="browse--filter--options-toggle"
          >
            {filterOptionsVisible
              ? "Hide filter options"
              : "Show all filter options"}
          </button>
        </div>

        {filterOptionsVisible && (
          <div
            className="flex-col--12"
            id="filter-content"
            aria-labelledby="filter-header"
          >
            <p className="browse--filter--about">
              {cms("browse.filter.about")}
            </p>
            {showFilters && (
              <Fragment>
                <Filters
                  handleTagSelect={experienceStore.handleTagSelect}
                  selectedTags={experienceStore.selectedTags}
                  isTagSelected={experienceStore.isTagSelected}
                />

                <div className="flex-container flex-container--no-padding flex-container--justify">
                  <div className="flex-col--12">
                    <p className="browse--filter-no-tag--title">
                      {cms("browse.filter.no-tag")}
                    </p>
                    <Tag
                      text="No tag"
                      search={true}
                      tabIndex={0}
                      className="browse--filter-no-tag"
                      onClick={() => selectNoTag()}
                      selected={isTagSelected({
                        id: "untagged",
                        name: "No tag"
                      })}
                      onKeyPress={(e: any) =>
                        e.key === "Enter" ? selectNoTag() : null
                      }
                    />
                  </div>
                </div>

                <div className="flex-container flex-container--no-padding flex-container--justify browse--filter--options">
                  <button
                    aria-expanded={filterOptionsVisible}
                    aria-controls="filter-content"
                    id="filter-header"
                    onClick={() => toggleFilterOptions()}
                    className="browse--filter--options-toggle"
                  >
                    Hide filter options
                  </button>
                </div>
              </Fragment>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default inject("experienceStore")(observer(Search));
