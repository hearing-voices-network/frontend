import React, { FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Helmet from "react-helmet";

import { cms } from "../../utils/cms";

import "./Contribute.scss";

import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import NavigationBlock from "../../components/NavigationBlock";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

const Contribute: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <Helmet>
      <title>Connecting Voices | Contribute</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--center contribute">
      <Breadcrumb
        crumbs={[
          { text: "Home", url: "/" },
          { text: "Contribute", url: "" }
        ]}
      />
      <div className="flex-col--12">
        <h1 className="contribute--subtitle">{cms("global.tagline")}</h1>
      </div>

      <div className="flex-col--8 flex-col--tablet-large--12">
        <p className="contribute--about">{cms("global.about")}</p>
      </div>
    </div>
    <NavigationBlock
      leftButton={
        <Button
          text={cms("contribute.login-cta")}
          twoCol={true}
          onClick={() =>
            history.push({
              pathname: "/login"
            })
          }
        />
      }
      mobileLeftButton={
        <Button
          text={cms("contribute.login-cta")}
          onClick={() =>
            history.push({
              pathname: "/login"
            })
          }
        />
      }
      leftTitle={cms("contribute.login")}
      leftDescription={cms("contribute.disclaimer")}
      rightButton={
        <Button
          text={cms("contribute.share-cta")}
          twoCol={true}
          onClick={() =>
            history.push({
              pathname: "/register"
            })
          }
        />
      }
      mobileRightButton={
        <Button
          text={cms("contribute.share-cta")}
          onClick={() =>
            history.push({
              pathname: "/register"
            })
          }
        />
      }
      rightTitle={cms("contribute.share")}
      rightDescription={cms("contribute.disclaimer")}
      mobileDescription={cms("contribute.disclaimer")}
    />
    <Footer purple={true}>
      <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center about--footer">
        <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
          <h3 className="about--footer--title">{cms("about.footer.title")}</h3>
          <p className="about--footer--content">
            {cms("about.footer.content")}
          </p>
        </div>
        <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--4 about--footer--button">
          <Button
            text="Sign up and share"
            onClick={() =>
              history.push({
                pathname: "/register"
              })
            }
            twoCol={true}
          />
        </div>
      </div>
    </Footer>
  </Layout>
);

export default withRouter(Contribute);
