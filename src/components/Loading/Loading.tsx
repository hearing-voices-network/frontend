import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";

import LoadingSpinner from "../../assets/icons/load-icon.svg";

import "./Loading.scss";

interface IProps {
  input: string;
}

const Loading: FunctionComponent<IProps> = ({ input }) => (
  <div className="flex-container flex-container--justify loading">
    <ReactSVG src={LoadingSpinner} className="loading--spinner" />
    <span className="loading--text">{`We are loading your ${input}`}</span>
  </div>
);

export default Loading;
