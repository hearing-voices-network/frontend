import React, { FunctionComponent, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";

import Layout from "../../components/Layout";
import { cms } from "../../utils/cms";

import "../UpdateEmail/UpdateEmail.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Link from "../../components/Link";
import UserStore from "../../stores/userStore";

interface IProps extends RouteComponentProps {
  userStore?: UserStore;
}

const ChangePassword: FunctionComponent<IProps> = ({ history, userStore }) => {
  if (!userStore) return null;

  return (
    <Layout>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify update-email">
        <div className="flex-col--12 my-account--back--container">
          <button onClick={() => history.goBack()} className="my-account--back">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </button>
        </div>

        <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--container">
          <div className="flex-col--8 flex-col--tablet-large--12">
            <h1 className="update-email--title">
              {cms("change-password.title")}
            </h1>
            <p className="update-email--about">
              {cms("change-password.about")}
            </p>
          </div>

          <form className="flex-col--8 flex-col--tablet-large--10 flex-col--mobile--11">
            <Input
              id="new-password"
              label="Enter new password"
              placeholder="Type here"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                userStore.handleChange(e.target.value, "newPassword")
              }
              type="password"
            />
            <Input
              id="confirm-password"
              label="Confirm new password"
              placeholder="Type here"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                userStore.handleChange(e.target.value, "confirmPassword")
              }
              type="password"
            />

            <div className="update-email--form">
              {userStore.changePasswordSuccess && (
                <p className="update-email--confirmation">
                  Password successfully changed.
                </p>
              )}

              {!!userStore.changePasswordErrors.length && (
                <Fragment>
                  {userStore.changePasswordErrors.map(error => (
                    <p className="update-email--error">{error}</p>
                  ))}
                </Fragment>
              )}

              <Button
                purple={true}
                text="Save"
                type="submit"
                disabled={!userStore.confirmPassword || !userStore.newPassword}
                onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  userStore.resetPassword();
                }}
              />
            </div>
          </form>
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
};

export default inject("userStore")(withRouter(observer(ChangePassword)));
