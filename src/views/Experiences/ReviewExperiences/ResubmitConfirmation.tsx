import React, { FunctionComponent } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import ReactSVG from "react-svg";
import { Link as RouterLink } from "react-router-dom";

import Resubmitted from "../../../assets/icons/resubmitted.svg";
import Question from "../../../assets/icons/question-circle.svg";
import { cms } from "../../../utils/cms";

import Layout from "../../../components/Layout";
import NavigationBlock from "../../../components/NavigationBlock";
import Button from "../../../components/Button";
import ReviewStore from "../../../stores/reviewStore";
import Footer from "../../../components/Footer";
import Link from "../../../components/Link";

interface IProps extends RouteComponentProps {
  reviewStore?: ReviewStore;
}

const ResubmitConfirmation: FunctionComponent<IProps> = ({
  history,
  reviewStore
}) => {
  if (!reviewStore) return null;
  return (
    <Layout>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify experience-confirmation">
        <div className="flex-col--10">
          <ReactSVG src={Resubmitted} />

          <h1 className="experience-confirmation--title">
            {cms("review.confirmation.title")}
          </h1>

          <p className="experience-confirmation--about">
            {cms("review.confirmation.description")}
          </p>

          {reviewStore.privacy === "public" && (
            <div className="flex-container flex-container--justify flex-container--no-padding">
              <div className="flex-col--tablet--11 flex-col--8">
                <div className="experience-privacy--hint">
                  <ReactSVG src={Question} />

                  <span>{cms("review.confirmation.hint")}</span>
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
                }}
              />
            }
            mobileRightButton={
              <Button
                text="Submit new experience"
                twoCol={true}
                onClick={() => {
                  history.push({ pathname: "/submit-experience" });
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
            <RouterLink to="/browse">
              <Link size="medium" text="View other's stories" href="/browse" />
            </RouterLink>
            <p className="login--footer--description">
              {cms("register.footer.confirmation")}
            </p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("reviewStore")(
  withRouter(observer(ResubmitConfirmation))
);
