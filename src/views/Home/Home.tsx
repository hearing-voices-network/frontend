import React, { Fragment } from "react";
import ReactSVG from "react-svg";
import { cms } from "../../utils/cms";

import "./Home.scss";

import Button from "../../components/Button";

import Pencil from "../../assets/icons/pencil.svg";
import Community from "../../assets/icons/community.svg";
import Security from "../../assets/icons/security.svg";

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
    <div className="flex-container flex-container--center flex-container--align-center home--share">
      <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--6">
        <h4 className="home--share--title">{cms("home.share.title")}</h4>

        <div className="home--share--description">
          <ReactSVG src={Pencil} />
          <p> {cms("home.share.experiences")}</p>
        </div>

        <div className="home--share--description">
          <ReactSVG src={Community} />
          <p>{cms("home.share.community")}</p>
        </div>

        <div className="home--share--description">
          <ReactSVG src={Security} />
          <p>{cms("home.share.contributions")}</p>
        </div>
      </div>
      <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--5 home--share--button-container">
        <Button
          text="Sign up and share"
          onClick={() => console.log("sign up and share")}
          twoCol={true}
        />
        <p className="home--share--content">{cms("home.share.content")}</p>
      </div>
    </div>
  </Fragment>
);

export default Home;
