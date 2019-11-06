import React, { Fragment } from "react";
import { cms } from "../../utils/cms";

import "./Home.scss";
import Button from "../../components/Button";

const Home = () => (
  <Fragment>
    <div className="flex-container flex-container--no-padding flex-container--center home--welcome">
      <div className="flex-col--8 flex-col--tablet-large--12">
        <h1 className="home--welcome--title">{cms("home.title")}</h1>
        <h2 className="home--welcome--subtitle">{cms("home.subtitle")}</h2>
        <p className="home--welcome--about">{cms("home.about")}</p>
      </div>
    </div>
    <div className="flex-container flex-container--no-padding flex-container--full-width  home--experiences--container">
      <div className="flex-col--12 home--experiences">
        <div className="flex-container flex-container--center flex-container--justify">
          <div className="flex-col--7 flex-col--tablet-large--12">
            <h3 className="home--experiences--title">
              {cms("home.experiences.title")}
            </h3>
            <p className="home--experiences--content">
              {cms("home.experiences.content")}
            </p>
            <Button
              text="Browse experiences"
              onClick={() => console.log("browse experiences")}
            />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Home;
