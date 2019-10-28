import React, { FunctionComponent } from "react";

import "./Tag.scss";

interface IProps {
  text: string;
}

const Tag: FunctionComponent<IProps> = ({ text }) => (
  <div className="tag">
    <span>{text}</span>
  </div>
);

export default Tag;
