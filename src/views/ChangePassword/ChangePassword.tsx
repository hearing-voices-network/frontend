import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../../components/Layout";
import { cms } from "../../utils/cms";

import "../UpdateEmail/UpdateEmail.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Link from "../../components/Link";

const ChangePassword: FunctionComponent<RouteComponentProps> = ({
  history
}) => (
  <Layout>
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify update-email">
      <div className="flex-col--12">
        <button onClick={() => history.goBack()} className="my-account--back">
          <FontAwesomeIcon icon="chevron-left" /> Back
        </button>
      </div>

      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--container">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <h1 className="update-email--title">
            {cms("change-password.title")}
          </h1>
          <p className="update-email--about">{cms("change-password.about")}</p>
        </div>

        <form className="flex-col--8 flex-col--tablet-large--10">
          <Input
            id="old-password"
            label="Enter current password"
            placeholder="Type here"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(e.target.value, "old password")
            }
            type="password"
          />
          <Input
            id="new-password"
            label="Enter new password"
            placeholder="Type here"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(e.target.value, "new password")
            }
          />

          <div className="update-email--form">
            <Button
              purple={true}
              text="Save"
              type="submit"
              onClick={() => console.log("click")}
            />
          </div>
        </form>
      </div>
    </div>

    <Footer grey={true}>
      <div className="flex-container flex-container--center flex-container--justify my-account--footer">
        <div className="flex-col--8 flex-col--tablet-large--10 my-account--footer--content">
          <Link
            text="Privacy Policy"
            href="/privacy-policy"
            size="medium"
            grey={true}
          />
          <p className="my-account--footer--about">
            {cms("my-account.footer.about")}
          </p>
        </div>
      </div>
    </Footer>
  </Layout>
);

export default withRouter(observer(ChangePassword));
