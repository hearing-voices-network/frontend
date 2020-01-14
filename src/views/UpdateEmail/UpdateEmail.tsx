import React, { FunctionComponent, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";
import ReactSVG from "react-svg";
import Helmet from "react-helmet";

import Layout from "../../components/Layout";
import { cms } from "../../utils/cms";
import Question from "../../assets/icons/question-circle.svg";

import "./UpdateEmail.scss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Link from "../../components/Link";
import UserStore from "../../stores/userStore";

interface IProps extends RouteComponentProps {
  userStore?: UserStore;
}

const UpdateEmail: FunctionComponent<IProps> = ({ history, userStore }) => {
  if (!userStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>Connecting Voices | Update Email</title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify update-email">
        <div className="flex-col--12 my-account--back--container">
          <button onClick={() => history.goBack()} className="my-account--back">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </button>
        </div>
        <div className="flex-col--12">
          <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account--container">
            <div className="flex-col--8 flex-col--tablet-large--12">
              <h1 className="update-email--title">
                {cms("update-email.title")}
              </h1>
              <p className="update-email--about">{cms("update-email.about")}</p>
            </div>

            <form className="flex-col--8 flex-col--tablet-large--10 flex-col--mobile--11">
              <Input
                id="new-email"
                label="New email"
                placeholder="user@email.com"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  userStore.handleChange(e.target.value, "newEmail")
                }
              />

              <div className="update-email--form">
                <div className="flex-container flex-container--justify flex-container--no-padding">
                  <div className="flex-col--mobile--11 flex-col--tablet--6 flex-col--standard--8 flex-col--tablet-large--8 flex-col--8">
                    <div className="update-email--hint">
                      <ReactSVG src={Question} />
                      <span> Send verifcation email</span>
                    </div>
                  </div>
                </div>

                {userStore.changeEmailSuccess && (
                  <p className="update-email--confirmation">
                    Email verification sent.
                  </p>
                )}

                {userStore.changeEmailErrors &&
                  !!userStore.changeEmailErrors.length && (
                    <Fragment>
                      {userStore.changeEmailErrors.map(error => (
                        <p className="update-email--error">{error}</p>
                      ))}
                    </Fragment>
                  )}

                <Button
                  purple={true}
                  text="Save"
                  type="submit"
                  onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    userStore.resetEmail();
                  }}
                />
              </div>
            </form>
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
};

export default inject("userStore")(withRouter(observer(UpdateEmail)));
