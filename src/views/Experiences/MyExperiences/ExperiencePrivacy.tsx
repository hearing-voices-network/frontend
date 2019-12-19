import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  status: "private" | "public";
}

const ExperiencePrivacy: FunctionComponent<IProps> = ({ id, status }) => (
  <Link to={`/my-experiences/story/${id}`}>
    <button className="experience-privacy">{status}</button>
  </Link>
);

export default ExperiencePrivacy;
