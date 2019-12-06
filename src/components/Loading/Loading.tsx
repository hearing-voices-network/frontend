import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";

import LoadingSpinner from "../../assets/icons/load-icon.svg";

import "./Loading.scss";

interface IProps {
  input: string;
}

const Loading: FunctionComponent<IProps> = ({ input }) => (
  <div className="loading">
    <div className="flex-container flex-container--justify flex-container--align-center flex-container--mobile-no-padding">
      <div className="flex-col--12">
        <ReactSVG src={LoadingSpinner} className="loading--spinner" />
      </div>
      <div className="flex-col--12">
        <span className="loading--text">{`We are loading your ${input}`}</span>
      </div>
    </div>
  </div>
);

export default Loading;
