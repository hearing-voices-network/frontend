import React, { FunctionComponent, Fragment } from "react";
import ReactSVG from "react-svg";
import { observer, inject } from "mobx-react";

import { cms } from "../../../utils/cms";
import ReviewStore from "../../../stores/reviewStore";
import Pencil from "../../../assets/icons/pencil-large.svg";
import Question from "../../../assets/icons/question-circle.svg";

import PrivacyButton from "../../../components/PrivacyButton";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";

interface IProps {
  reviewStore?: ReviewStore;
}
const ExperiencePrivacy: FunctionComponent<IProps> = ({ reviewStore }) => {
  if (!reviewStore) return null;

  return (
    <Fragment>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify submit-experiences experience-privacy">
        <div className="flex-col--10">
          <ReactSVG className="experience-privacy--icon" src={Pencil} />
          <h1 className="experience-privacy--title">
            {cms("experience-privacy.title")}
          </h1>
        </div>
        <div className="flex-col--10">
          <p className="experience-privacy--about">
            {cms("experience-privacy.about")}
          </p>
        </div>

        <div className="flex-col--10">
          <PrivacyButton
            text={reviewStore.privacy}
            onChange={(privacy: "public" | "private") =>
              reviewStore.changePrivacy(privacy)
            }
          />
        </div>

        {reviewStore.privacy !== "private" && (
          <div className="flex-col--10">
            <div className="flex-container flex-container--justify flex-container--no-padding">
              <div className="flex-col--mobile--11 flex-col--tablet--10 flex-col--8">
                <div className="experience-privacy--hint">
                  <ReactSVG src={Question} />

                  <span>{cms("experience-privacy.hint")}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer green={true}>
        <div className="flex-container flex-container--center flex-container--justify experience-entry--footer">
          <div className="flex-col--8 flex-col--tablet-large--10 guidance--footer--content">
            <h5 className="experience-entry--footer--title">
              {cms("submission.footer.title")}
            </h5>
            <p className="experience-entry--footer--description">
              {cms("submission.footer.step-2-about")}
            </p>
            <Button
              text="Continue"
              onClick={() => reviewStore.increaseStep()}
            />
          </div>
        </div>
      </Footer>
    </Fragment>
  );
};

export default inject("reviewStore")(observer(ExperiencePrivacy));
