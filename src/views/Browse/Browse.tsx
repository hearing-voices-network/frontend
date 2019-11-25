import React, { FunctionComponent, useEffect } from "react";
import { inject, observer } from "mobx-react";

import "./Browse.scss";

import { cms } from "../../utils/cms";
import ExperienceStore from "../../stores/experienceStore";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import AboutAccordian from "../../components/AboutAccordian";
import Search from "./Search";
import Results from "./Results";

interface IProps {
  experienceStore: ExperienceStore;
}

const Browse: FunctionComponent<IProps> = ({ experienceStore }) => {
  useEffect(() => {
    experienceStore.getTags();
    experienceStore.getExperiences();
  }, [experienceStore]);

  if (!experienceStore) return null;

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

      <Search />

      <Results />
    </Layout>
  );
};

export default inject("experienceStore")(observer(Browse));
