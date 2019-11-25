import React, { FunctionComponent } from "react";
import get from "lodash/get";

import "./Story.scss";

import Layout from "../../components/Layout";

import experienceList from "../../stores/experiences.json";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Story: FunctionComponent = () => {
  const story = get(experienceList, "data[0]");

  return (
    <Layout>
      <div className="flex-container flex-container--no-padding flex-container--center story">
        <div className="flex-col--12">
          <Breadcrumb
            crumbs={[
              { url: "/", text: "Home" },
              { url: "/browse", text: "Stories" },
              { url: "", text: "Selected Story" }
            ]}
          />
        </div>

        <div className="flex-col--12">
          <div className="flex-container flex-container--no-padding story--info">
            <div className="flex-col--6 flex-col--tablet-large--12">
              <Link to="/browse" className="story--info--back">
                <FontAwesomeIcon icon="chevron-left" /> Back to search
              </Link>
            </div>
            <div className="flex-col--6 flex-col--tablet--12 story--info--date">
              Date added
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Story;
