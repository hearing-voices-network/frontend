import React, { FunctionComponent } from "react";
import Layout from "../../../components/Layout";
import ReactSVG from "react-svg";
import { withRouter, RouteComponentProps } from "react-router";
import { observer, inject } from "mobx-react";

import Submitted from "../../../assets/icons/submitted.svg";
import Question from "../../../assets/icons/question-circle.svg";

import { cms } from "../../../utils/cms";
import Footer from "../../../components/Footer";
import Link from "../../../components/Link";
import NavigationBlock from "../../../components/NavigationBlock";
import Button from "../../../components/Button";
import ContributionStore from "../../../stores/contributionStore";

interface IProps extends RouteComponentProps {
  contributionStore?: ContributionStore;
}

const Confirmation: FunctionComponent<IProps> = ({
  history,
  contributionStore
}) => {
  if (!contributionStore) return null;

  return (
    <Layout>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify experience-confirmation">
        <div className="flex-col--10">
          <ReactSVG src={Submitted} />

          <h1 className="experience-confirmation--title">
            {cms("submission-confirmation.title")}
          </h1>

          <p className="experience-confirmation--about">
            {cms("submission-confirmation.about")}
          </p>

          {contributionStore.privacy === "public" && (
            <div className="flex-container flex-container--justify flex-container--no-padding">
              <div className="flex-col--tablet--11 flex-col--8">
                <div className="experience-privacy--hint">
                  <ReactSVG src={Question} />

                  <span>{cms("submission-confirmation.hint")}</span>
                </div>
              </div>
            </div>
          )}
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
                onClick={() => {
                  history.push({ pathname: "/submit-experience" });
                  contributionStore.contributionSubmitted = false;
                }}
              />
            }
            mobileRightButton={
              <Button
                text="Submit new experience"
                twoCol={true}
                onClick={() => {
                  history.push({ pathname: "/submit-experience" });
                  contributionStore.contributionSubmitted = false;
                }}
              />
            }
            rightTitle={cms("dashboard.submit")}
            rightDescription=""
            mobileDescription={cms("dashboard.description")}
          />
        </div>
      </div>
      <Footer purple={true}>
        <div className="flex-container flex-container--center flex-container--justify experience-entry--footer">
          <div className="flex-col--8 flex-col--tablet-large--10 guidance--footer--content">
            <Link size="medium" text="View other's stories" href="/browse" />
            <p className="login--footer--description">
              {cms("register.footer.confirmation")}
            </p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("contributionStore")(withRouter(observer(Confirmation)));
