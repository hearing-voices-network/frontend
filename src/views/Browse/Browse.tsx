import React, { FunctionComponent, useEffect } from "react";
import { inject, observer } from "mobx-react";
import ReactTags from "react-tag-autocomplete";

import "./Browse.scss";

import { cms } from "../../utils/cms";
import ExperienceStore from "../../stores/experienceStore";

import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import AboutAccordian from "../../components/AboutAccordian";

interface IProps {
  experienceStore: ExperienceStore;
}

const Browse: FunctionComponent<IProps> = ({ experienceStore }) => {
  useEffect(() => {
    experienceStore.getTags();
  }, [experienceStore]);

  if (!experienceStore) return null;

  const {
    tags,
    selectedTags,
    handleAddition,
    removeTag,
    filterOptionsVisible,
    toggleFilterOptions
  } = experienceStore;

  return (
    <Layout>
      <div className="flex-container flex-container--no-padding flex-container--center browse">
        <div className="flex-col--12">
          <Breadcrumb
            crumbs={[
              { url: "/", text: "Home" },
              { url: "", text: "Stories" }
            ]}
          />
          <p className="browse--subtitle">{cms("global.tagline")}</p>
        </div>
        <div className="flex-col--8 flex-col--tablet-large--12">
          <p className="browse--about mobile-hide">{cms("global.about")}</p>
          <AboutAccordian
            text={cms("global.about")}
            className="browse--about--mobile mobile-show"
          />
        </div>
      </div>

      <div className="flex-container flex-container--no-padding flex-container--center browse--filter">
        <div className="flex-col--12">
          <h1 className="browse--filter--title">
            {cms("browse.filter.title")}
          </h1>
        </div>

        <div className="flex-container flex-container--no-padding">
          <div className="flex-col--12 browse--filter--input">
            <ReactTags
              tags={selectedTags}
              suggestions={tags}
              handleDelete={(index: number) => removeTag(index)}
              handleAddition={(tag: any) => handleAddition(tag)}
              placeholder={selectedTags.length ? "" : "e.g. angel, whispering"}
            />
            <Button
              onClick={() => console.log("hey")}
              text="Filter"
              filter={true}
            />
          </div>
        </div>

        <div className="flex-col--12 mobile-show">
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
              filters
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default inject("experienceStore")(observer(Browse));