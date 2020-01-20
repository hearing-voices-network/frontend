import React, { FunctionComponent } from "react";
import {
  Link as RouteLink,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";

import "./Dashboard.scss";

import { cms } from "../../utils/cms";

import Layout from "../../components/Layout";
import NavigationBlock from "../../components/NavigationBlock";
import Button from "../../components/Button";
import Privacy from "../../components/Cards/Privacy";
import Footer from "../../components/Footer";
import UserStore from "../../stores/userStore";

interface IProps extends RouteComponentProps {
  userStore?: UserStore;
}

const Dashboard: FunctionComponent<IProps> = ({ history, userStore }) => {
  if (!userStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>Connecting Voices | Dashboard</title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--center dashboard">
        <div className="flex-col--12">
          <h1 className="dashboard--about">{cms("dashboard.about")}</h1>
        </div>
        <div className="flex-col--12">
          <NavigationBlock
            leftButton={
              <Button
                text="View my experiences"
                twoCol={true}
                onClick={() =>
                  history.push({
                    pathname: "/my-experiences"
                  })
                }
              />
            }
            mobileLeftButton={
              <Button
                text="View my experiences"
                onClick={() =>
                  history.push({
                    pathname: "/my-experiences"
                  })
                }
              />
            }
            leftTitle={cms("dashboard.experiences")}
            leftDescription=""
            rightButton={
              <Button
                text="Submit new experience"
                twoCol={true}
                onClick={() => history.push({ pathname: "/submit-experience" })}
              />
            }
            mobileRightButton={
              <Button
                text="Submit new experience"
                twoCol={true}
                onClick={() => history.push({ pathname: "/submit-experience" })}
              />
            }
            rightTitle={cms("dashboard.submit")}
            rightDescription=""
            mobileDescription={cms("dashboard.description")}
          />
        </div>
        <div className="flex-col--mobile--12 mobile-show">
          <Privacy />
        </div>
      </div>

      {/* Mobile Footer */}
      <Footer purple={true} className="mobile-show">
        <div className="flex-container flex-container--center dashboard--footer">
          <div className="flex-col--8 flex-col--tablet-large--12">
            <button
              className="dashboard--footer--logout"
              onClick={() => userStore.logOut()}
            >
              {cms("dashboard.footer.title")}
            </button>
            <p className="dashboard--footer--description">
              {cms("dashboard.footer.description")}
            </p>
          </div>
        </div>
      </Footer>

      {/* Desktop Footer */}
      <Footer grey={true} className="mobile-hide">
        <div className="flex-container flex-container--center dashboard--footer">
          <div className="flex-col--8 flex-col--tablet-large--12">
            <h3 className="dashboard--footer--title">
              {cms("privacy-notice.title")}
            </h3>
            <p className="dashboard--footer--privacy-about">
              {cms("privacy-notice.about")}
            </p>
          </div>

          <div className="flex-col--8  flex-col--tablet--8 flex-col--tablet-large--8 dashboard--footer--link--container">
            <RouteLink to="/privacy-policy" className="dashboard--footer--link">
              {cms("privacy-notice.policy")}
            </RouteLink>
            <RouteLink
              to="/account/withdraw"
              className="dashboard--footer--link"
            >
              {cms("privacy-notice.withdraw")}
            </RouteLink>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("userStore")(withRouter(observer(Dashboard)));
