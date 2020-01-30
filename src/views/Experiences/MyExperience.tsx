import React, { FunctionComponent, useEffect, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import get from "lodash/get";
import lowerCase from 'lodash/lowerCase'
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Padlock from "../../assets/icons/security.svg";
import Pencil from "../../assets/icons/pencil.svg";

import StoryStore from "../../stores/storyStore";
import Loading from "../../components/Loading";
import Layout from "../../components/Layout";
import ReactSVG from "react-svg";
import { cms } from "../../utils/cms";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { ICategorisedTag, ITag } from "../../utils/types";
import Tag from "../../components/Tag";

interface IProps extends RouteComponentProps {
  storyStore?: StoryStore;
}

const MyExperience: FunctionComponent<IProps> = ({ storyStore, match }) => {
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
            storyStore.story ? storyStore.story.excerpt : "Selected Story"
          }`}
        </title>
      </Helmet>

      <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center story">
        {!storyStore.storyLoading && storyStore.story ? (
          <Fragment>
            <div className="flex-col--mobile--12 flex-col--11">
              <div className="flex-container flex-container--no-padding story--info">
                <div className="flex-col--6 flex-col--tablet-large--12">
                  <Link to="/my-experiences" className="story--info--back">
                    <FontAwesomeIcon icon="chevron-left" /> Back to my
                    experiences
                  </Link>
                </div>
                <div className="flex-col--6 flex-col--tablet--12 story--info--date">
                  {`Date added ${format(
                    new Date(storyStore.story.created_at),
                    "do MMMM yyyy"
                  )}`}
                </div>
              </div>
            </div>

            {storyStore.story.status !== "changes_requested" && (
              <div className="flex-col--mobile--12 flex-col--5">
                <div className="experience-privacy--hint">
                  <ReactSVG src={Padlock} />
                  <span>
                    {`${cms("story.privacy")} ${lowerCase(storyStore.story.status)}`}
                  </span>
                </div>
              </div>
            )}

            {storyStore.story.status === "changes_requested" && (
              <Fragment>
                <div className="flex-col--mobile--12 flex-col--5">
                  <div className="experience-privacy--hint">
                    <ReactSVG src={Pencil} />
                    <span>{cms("story.changes")}</span>
                  </div>
                </div>

                <div className="flex-col--12" style={{ textAlign: "center" }}>
                  <Link
                    to={`/my-experiences/review/${get(
                      match,
                      "params.storyId"
                    )}`}
                  >
                    <Button text="View changes" small={true} />
                  </Link>
                </div>
              </Fragment>
            )}

            <div
              className="flex-col--mobile--12 flex-col--11"
              style={{ marginBottom: "32px" }}
            >
              <ReactMarkdown
                className="story--content markdown"
                source={storyStore.story.content}
              />
            </div>

            <div className="flex-col--mobile--12 flex-col--11">
              <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center story--tags--list">
                {/* <div className="flex-col--12"> */}
                {storyStore.tags.length ? (
                  storyStore.tags.map(
                    (category: ICategorisedTag, i: number) => {
                      return (
                        <div className="story--tags--category">
                          <p className="story--tags--category--title">{`${category.name}:`}</p>
                          <div style={{ display: "flex", flexWrap: "wrap" }}>
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
              {/* </div> */}
            </div>
          </Fragment>
        ) : (
          <Loading input="selected story" />
        )}
      </div>
      <Footer green={true}>
        <div className="flex-container flex-container--center flex-container--justify register--footer">
          <div className="flex-col--8 flex-col--tablet-large--12">
            <h3 className="register--footer--title">Edit this story</h3>

            <Link to={`/my-experiences/review/${get(match, "params.storyId")}`}>
              <Button text="Edit" />
            </Link>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("storyStore")(observer(MyExperience));
