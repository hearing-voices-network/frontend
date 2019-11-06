import React from "react";
import { cms } from "../../utils/cms";

import "./Home.scss";

const Home = () => (
  <div className="flex-container flex-container--no-padding flex-container--center home--welcome">
    <div className="flex-col--8 flex-col--tablet-large--12">
      <h1 className="home--welcome--title">{cms("home.title")}</h1>
      <h2 className="home--welcome--subtitle">{cms("home.subtitle")}</h2>
      <p className="home--welcome--about">{cms("home.about")}</p>
    </div>
  </div>
);

export default Home;
