import React, { FunctionComponent } from "react";

import "./Link.scss";

interface IProps {
  text: string;
  href: string;
  size: "small" | "medium" | "large";
}

const Link: FunctionComponent<IProps> = ({ text, href, size }) => (
  <a href={href} className={`link link--${size}`}>
    {text}
  </a>
);

export default Link;
