import React, { FunctionComponent } from "react";

import "./ReviewButton.scss";

interface IProps {
  text: string;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
}

const ReviewButton: FunctionComponent<IProps> = ({ text, type, onClick }) => (
  <button className="review-button" type={type} onClick={onClick}>
    {text}
  </button>
);

export default ReviewButton;
