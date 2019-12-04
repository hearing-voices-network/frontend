import React, { FunctionComponent } from "react";

import Layout from "../../../components/Layout";
import ReactSVG from "react-svg";
import Pencil from "../../../assets/icons/pencil-large.svg";
import { cms } from "../../../utils/cms";
import PrivacyButton from "../../../components/PrivacyButton";
import Question from "../../../assets/icons/question-circle.svg";
import { observer, inject } from "mobx-react";
import ContributionStore from "../../../stores/contributionStore";

interface IProps {
  contributionStore?: ContributionStore;
}
const ExperiencePrivacy: FunctionComponent<IProps> = ({
  contributionStore
}) => {
  if (!contributionStore) return null;

  return (
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
          text={contributionStore.privacy}
          onChange={(privacy: "public" | "private") =>
            contributionStore.setPrivacy(privacy)
          }
        />
      </div>

      <div className="flex-col--9 experience-privacy--hint">
        <ReactSVG src={Question} />

        <span>{cms("experience-privacy.hint")}</span>
      </div>
    </div>
  );
};

export default inject("contributionStore")(observer(ExperiencePrivacy));
