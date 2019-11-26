import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import ReactSVG from "react-svg";

import TryAgainIconLarge from "../../assets/icons/try-later-large.svg";
import TryAgainIcon from "../../assets/icons/try-later.svg";

import "./TryAgain.scss";

import Layout from "../../components/Layout";
import { cms } from "../../utils/cms";
import Footer from "../../components/Footer";

const TryAgain: FunctionComponent = () => (
  <Layout>
    <Helmet>
      <title>Connecting Voices | Try Again</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--center try-again">
      <div className="flex-col--8 flex-col--tablet-large--12">
        <ReactSVG
          src={TryAgainIconLarge}
          className="mobile-show try-again--icon--mobile"
        />
        <h1 className="try-again--title">
          {cms("try-again.title")}
          <ReactSVG
            src={TryAgainIcon}
            wrapper="span"
            className="mobile-hide try-again--icon"
          />
        </h1>

        <p className="try-again--about">{cms("not-found.content")}</p>
      </div>
    </div>
    <Footer purple={true}>
      <div className="flex-container flex-container--center try-again--footer">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <h5 className="try-again--footer--title">
            {cms("home.footer.title")}
          </h5>
          <p className="try-again--footer--content">
            {cms("home.footer.content")}
          </p>
        </div>
        <div className="flex-col--8 flex-col--tablet-large--12">
          <p className="try-again--footer--contact">
            {cms("home.footer.contact")}
            <a href={`mailto:${cms("global.email")}`}>{cms("global.email")}</a>
          </p>
        </div>
      </div>
    </Footer>
  </Layout>
);

export default TryAgain;
