import React, { FunctionComponent, useEffect, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import get from "lodash/get";
import ReactMarkdown from "react-markdown";

import StoryStore from "../../stores/storyStore";
import Loading from "../../components/Loading";
import Layout from "../../components/Layout";

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

            <div className="flex-col--mobile--12 flex-col--11">
              <ReactMarkdown
                className="story--content markdown"
                source={storyStore.story.content}
              />
            </div>
          </Fragment>
        ) : (
          <Loading input="selected story" />
        )}
      </div>
    </Layout>
  );
};

export default inject("storyStore")(observer(MyExperience));
