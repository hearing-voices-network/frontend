import React, { FunctionComponent, useEffect, useState } from "react";
import map from "lodash/map";
import { observer, inject } from "mobx-react";

import { IStory } from "../../../utils/types";

import UserStore from "../../../stores/userStore";

import "../../../styles/markdown.scss";
import Day from "./Day";

interface IProps {
  userStore?: UserStore;
}

const Experiences: FunctionComponent<IProps> = ({ userStore }) => {
  if (!userStore) return null;
  return (
    <div className="flex-flex-container flex-container--no-padding flex-container--center flex-container--align-center flex-container--justify">
      {map(
        userStore.experiencesGroupedByDate,
        (experiences: IStory[], date: string) => (
          <div className="flex-col--12">
            <Day
              date={date}
              experiences={experiences}
              totalInReview={userStore.totalInReview(experiences)}
              totalToReview={userStore.totalToReview(experiences)}
              totalPublic={userStore.totalPublic(experiences)}
              totalPrivate={userStore.totalPrivate(experiences)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default inject("userStore")(observer(Experiences));
