import React, { FunctionComponent, Fragment } from "react";
import { cms } from "../../utils/cms";
import Link from "../../components/Link";
import Checkbox from "../../components/Checkbox";
import { observer, inject } from "mobx-react";
import RegisterStore from "../../stores/registerStore";

interface IProps {
  registerStore?: RegisterStore;
}

const StepThree: FunctionComponent<IProps> = ({ registerStore }) => {
  if (!registerStore) return null;

  return (
    <Fragment>
      <div className="flex-col--12">
        <h1 className="register--title">{cms("register.step-3-title")}</h1>
        <p
          className="register--description"
          dangerouslySetInnerHTML={{
            __html: cms("register.step-3-description")
          }}
        />
        <Link
          size="small"
          text="Link to privacy policy"
          href="/privacy-policy"
          green={true}
          newWindow={true}
        />
      </div>
      <div className="flex-col--10 register--checkbox">
        <Checkbox
          id="consent"
          label="I accept the privacy policy"
          onChange={() => registerStore.toggleConsent()}
          checked={registerStore.consent}
        />
      </div>
    </Fragment>
  );
};

export default inject("registerStore")(observer(StepThree));
