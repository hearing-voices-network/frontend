import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Helmet from "react-helmet";

import Layout from "../../components/Layout";
import { cms } from "../../utils/cms";
import Footer from "../../components/Footer";
import Link from "../../components/Link";

const Problem: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <Helmet>
      <title>Connecting Voices | Problem</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify update-email">
      <div className="flex-col--12 my-account--back--container">
        <button onClick={() => history.goBack()} className="my-account--back">
          <FontAwesomeIcon icon="chevron-left" /> Back
        </button>
      </div>

      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--container">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <h1 className="my-account--title">{cms("problem.title")}</h1>
          <p className="update-email--about" style={{ textAlign: "center" }}>
            {cms("problem.about")}
          </p>
        </div>

        <div className="flex-col--6 flex-col--tablet-large--11 contact">
          <h2>{cms("home.footer.contact")}</h2>
          <a className="contact--email" href={`mailto:${cms("global.email")}`}>
            {cms("global.email")}
          </a>
        </div>
      </div>
    </div>
    <Footer grey={true}>
      <div className="flex-container flex-container--center flex-container--justify my-account--footer">
        <div className="flex-col--8 flex-col--tablet-large--10 my-account--footer--content">
          <RouterLink to="/privacy-policy">
            <Link
              text="Privacy Policy"
              href="/privacy-policy"
              size="medium"
              grey={true}
            />
          </RouterLink>
          <p className="my-account--footer--about">
            {cms("my-account.footer.about")}
          </p>
        </div>
      </div>
    </Footer>
  </Layout>
);

export default withRouter(observer(Problem));
