import React, { Fragment } from "react";

import "./About.scss";
import Breadcrumb from "../../components/Breadcrumb";

import { cms } from "../../utils/cms";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const About = () => (
  <Fragment>
    <div className="flex-container flex-container--no-padding flex-container--center about">
      <Breadcrumb
        crumbs={[
          { text: "Home", url: "/" },
          { text: "About the project", url: "" }
        ]}
      />

      <div className="flex-col--12 about--container">
        <h1 className="about--title">Who is Hearing Voices Network?</h1>
        <p className="about--content">{cms("about.who")}</p>

        <h2 className="about--title">What is the project?</h2>
        <p className="about--content">{cms("about.what")}</p>

        <h3 className="about--title">Why develop the project?</h3>
        <p className="about--content">{cms("about.why")}</p>
      </div>
    </div>
    <Footer purple={true}>
      <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center about--footer">
        <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
          <h5 className="about--footer--title">{cms("about.footer.title")}</h5>
          <p className="about--footer--content">
            {cms("about.footer.content")}
          </p>
        </div>
        <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--4 about--footer--button">
          <Button
            text="Sign up and share"
            onClick={() => console.log("sign up and share")}
            twoCol={true}
          />
        </div>
      </div>
    </Footer>
  </Fragment>
);

export default About;
