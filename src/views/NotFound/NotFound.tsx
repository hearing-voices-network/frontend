import React, { Fragment, FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { Helmet } from "react-helmet";
import { withRouter, RouteComponentProps } from "react-router";

import { cms } from "../../utils/cms";

import "./NotFound.scss";

import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Pencil from "../../assets/icons/pencil.svg";
import Community from "../../assets/icons/community.svg";
import Security from "../../assets/icons/security.svg";
import Page404Large from "../../assets/icons/page-404-large.svg";
import Page404 from "../../assets/icons/page-404.svg";

const NotFound: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Fragment>
    <Helmet>
      <title>Connecting Voices | Not Found</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--center home--welcome not-found">
      <div className="flex-col--8 flex-col--tablet-large--12">
        <ReactSVG
          src={Page404Large}
          className="mobile-show not-found--icon--mobile"
        />
        <h1 className="home--welcome--title">
          {cms("not-found.title")}
          <ReactSVG
            src={Page404}
            wrapper="span"
            className="mobile-hide not-found--icon"
          />
        </h1>

        <p className="home--welcome--about">{cms("not-found.content")}</p>
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
          onClick={() =>
            history.push({
              pathname: "/register"
            })
          }
          twoCol={true}
        />
        <p className="home--share--content">{cms("home.share.content")}</p>
      </div>
    </div>
    <Footer purple={true}>
      <div className="flex-container flex-container--center home--footer">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <h5 className="home--footer--title">{cms("home.footer.title")}</h5>
          <p className="home--footer--content">{cms("home.footer.content")}</p>
        </div>
        <div className="flex-col--8 flex-col--tablet-large--12">
          <p className="home--footer--contact">
            {cms("home.footer.contact")}{" "}
            <a href={`mailto:${cms("global.email")}`}>{cms("global.email")}</a>
          </p>
        </div>
      </div>
    </Footer>
  </Fragment>
);

export default withRouter(NotFound);
