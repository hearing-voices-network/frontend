import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";

import LoadingSpinner from "../../assets/icons/load-icon.svg";

import "./Loading.scss";

interface IProps {
  input: string;
}

const Loading: FunctionComponent<IProps> = ({ input }) => (
  <div className="loading">
    <div className="flex-container flex-container--justify flex-container--mobile-no-padding">
      <ReactSVG src={LoadingSpinner} className="loading--spinner" />
      <span className="loading--text">{`We are loading your ${input}`}</span>
    </div>
  </div>
);

export default Loading;
