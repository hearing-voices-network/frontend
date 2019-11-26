import React, { Component } from "react";
import get from "lodash/get";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Story.scss";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import Tag from "../../components/Tag";

import { cms } from "../../utils/cms";
import { ICategorisedTag, ITag } from "../../utils/types";
import ExperienceStore from "../../stores/experienceStore";
import experienceList from "../../stores/experiences.json";

interface IProps {
  experienceStore?: ExperienceStore;
}

class Story extends Component<IProps> {
  // TEMP UNTIL HOOKED UP
  story = get(experienceList, "data[0]");

  async componentDidMount() {
    const { experienceStore } = this.props;

    if (!experienceStore) return null;

    if (!experienceStore.tags.length) {
      await this.fetchTags(experienceStore);
    }

    experienceStore.categorizeTags(this.story.tags);
  }

  fetchTags = async (experienceStore: ExperienceStore) => {
    await experienceStore.getTags();
  };

  render() {
    const { experienceStore } = this.props;

    if (!experienceStore) return null;

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
                {`Date added ${format(
                  new Date(this.story.created_at),
                  "do MMMM yyyy"
                )}`}
              </div>
            </div>
          </div>

          <div className="flex-col--12">
            <p className="story--content">{this.story.content}</p>
          </div>
        </div>

        <Footer green={true}>
          <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center story--footer">
            <h5 className="story--footer--title">
              {cms("story.footer.title")}
            </h5>
            <div className="flex-col--12">
              <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center story--tags--list">
                {experienceStore.categorizedTags.map(
                  (category: ICategorisedTag, i: number) => {
                    return (
                      <div className="story--tags--category">
                        <p className="story--tags--category--title">{`${category.name}:`}</p>
                        <div style={{ display: "flex" }}>
                          {category.tags.map((tag: ITag) => (
                            <Tag story={true} text={tag.name}></Tag>
                          ))}
                          {i < experienceStore.categorizedTags.length - 1 && (
                            <span className="story--tags--separator"></span>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default inject("experienceStore")(observer(Story));
