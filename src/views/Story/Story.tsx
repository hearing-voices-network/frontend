import React, { FunctionComponent, useEffect, Fragment } from "react";
import get from "lodash/get";
import { format } from "date-fns";
import { Link, RouteComponentProps } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helmet from "react-helmet";
import removeMd from "remove-markdown";

import "./Story.scss";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import Tag from "../../components/Tag";

import { cms } from "../../utils/cms";
import { ICategorisedTag, ITag } from "../../utils/types";

import ReactMarkdown from "react-markdown";
import Loading from "../../components/Loading";
import StoryStore from "../../stores/storyStore";

interface IProps extends RouteComponentProps {
  storyStore?: StoryStore;
}

const Story: FunctionComponent<IProps> = ({ storyStore, match }) => {
  useEffect(() => {
    if (!storyStore) return;

    const getStory = async () => {
      await storyStore.fetchStory(get(match, "params.storyId"));
    };

    getStory();
  }, [match]);

  if (!storyStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>
          {`Connecting Voices | ${
            storyStore.story ? removeMd(storyStore.story.excerpt)  : "Selected Story"
          }`}
        </title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center story">
        <div className="flex-col--12">
          <Breadcrumb
            crumbs={[
              { url: "/", text: "Home" },
              { url: "/browse", text: "Stories" },
              { url: "", text: "Selected Story" }
            ]}
          />
        </div>

        {!storyStore.storyLoading && storyStore.story ? (
          <Fragment>
            <div className="flex-col--mobile--12 flex-col--11">
              <div className="flex-container flex-container--no-padding story--info">
                <div className="flex-col--6 flex-col--tablet-large--12">
                  <Link to="/browse" className="story--info--back">
                    <FontAwesomeIcon icon="chevron-left" /> Back to search
                  </Link>
                </div>
                <div className="flex-col--6 flex-col--tablet--12 story--info--date">
                  <h1>
                    {`Date added ${format(
                      new Date(storyStore.story.created_at),
                      "do MMMM yyyy"
                    )}`}
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex-col--mobile--12 flex-col--11">
              <ReactMarkdown
                className="story--content markdown"
                source={storyStore.story.content}
              />
            </div>
          </Fragment>
        ) : (
          <div className="story--info">
            <Loading input="selected story" />
          </div>
        )}
      </div>

      <Footer green={true}>
        <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center story--footer">
          <div className="flex-col--11">
            <h2 className="story--footer--title">
              {cms("story.footer.title")}
            </h2>
          </div>
          <div className="flex-col--11">
            {!storyStore.storyLoading && (
              <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center story--tags--list">
                {storyStore.tags.length ? (
                  storyStore.tags.map(
                    (category: ICategorisedTag, i: number) => {
                      return (
                        <div className="story--tags--category">
                          <h3 className="story--tags--category--title">{`${category.name}:`}</h3>
                          <div style={{ display: "flex" }}>
                            {category.tags.map((tag: ITag) => (
                              <Tag story={true} text={tag.name}></Tag>
                            ))}
                            {i < storyStore.tags.length - 1 && (
                              <span className="story--tags--separator"></span>
                            )}
                          </div>
                        </div>
                      );
                    }
                  )
                ) : (
                  <Tag story={true} text="No tag" />
                )}
              </div>
            )}
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("storyStore")(observer(Story));
