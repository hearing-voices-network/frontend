import React, { FunctionComponent } from "react";
import Layout from "../../components/Layout";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Helmet from "react-helmet";

import "./MyAccount.scss";
import { cms } from "../../utils/cms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../../components/Link";
import Footer from "../../components/Footer";

const MyAccount: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <Helmet>
      <title>Connecting Voices | My Account</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account">
      <div className="flex-col--12">
        <div className="flex-col--12 my-account--back--container">
          <button onClick={() => history.goBack()} className="my-account--back">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </button>
        </div>

        <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--container">
          <div className="flex-col--12">
            <h1 className="my-account--title">{cms("my-account.title")}</h1>
          </div>

          <div className="flex-col--8 flex-col--tablet-large--12">
            <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--row">
              <div className="flex-col--3 flex-col--tablet-large--4 flex-col--mobile--5">
                <h2 className="my-account--row--title">Email</h2>
              </div>

              <div className="flex-col--6 flex-col--tablet-large--8 flex-col--mobile--7">
                <RouterLink
                  to="/account/change-email"
                  className="my-account--row--link"
                >
                  Change email
                </RouterLink>
              </div>
            </div>
            <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--row">
              <div className="flex-col--3 flex-col--tablet-large--4 flex-col--mobile--5">
                <h2 className="my-account--row--title">Password</h2>
              </div>

              <div className="flex-col--6 flex-col--tablet-large--8 flex-col--mobile--7">
                <RouterLink
                  to="/account/change-password"
                  className="my-account--row--link"
                >
                  Change password
                </RouterLink>
              </div>
            </div>
            <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--row">
              <div className="flex-col--3 flex-col--tablet-large--4 flex-col--mobile--5">
                <h2 className="my-account--row--title">Problem?</h2>
              </div>

              <div className="flex-col--6 flex-col--tablet-large--8 flex-col--mobile--7">
                <RouterLink
                  to="/account/problem"
                  className="my-account--row--link"
                >
                  Contact us
                </RouterLink>
              </div>
            </div>
            <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--row--withdraw my-account--withdraw">
              <div className="flex-col--9 flex-col--tablet-large--12">
                <RouterLink to="/account/withdraw">
                  <Link
                    green={true}
                    text="I would like to withdraw"
                    href="/account/withdraw"
                    size="medium"
                  />
                </RouterLink>
              </div>
            </div>
          </div>
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

export default withRouter(observer(MyAccount));
