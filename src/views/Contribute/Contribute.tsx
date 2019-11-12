import React, { Fragment } from "react";

import "./Contribute.scss";
import Breadcrumb from "../../components/Breadcrumb";
import { cms } from "../../utils/cms";
import Button from "../../components/Button";
import NavigationBlock from "../../components/NavigationBlock";

const Contribute = () => (
  <Fragment>
    <div className="flex-container flex-container--no-padding flex-container--center contribute">
      <Breadcrumb
        crumbs={[{ text: "Home", url: "/" }, { text: "Contribute", url: "" }]}
      />
      <div className="flex-col--12">
        <h1 className="contribute--subtitle">{cms("global.tagline")}</h1>
      </div>

      <div className="flex-col--8 flex-col--tablet-large--12">
        <p className="contribute--about">{cms("global.about")}</p>
      </div>
    </div>
    <NavigationBlock
      leftButton={
        <Button
          text={cms("contribute.login-cta")}
          twoCol={true}
          onClick={() => console.log("login")}
        />
      }
      mobileLeftButton={
        <Button
          text={cms("contribute.login-cta")}
          onClick={() => console.log("login")}
        />
      }
      leftTitle={cms("contribute.login")}
      leftDescription={cms("contribute.disclaimer")}
      rightButton={
        <Button
          text={cms("contribute.share-cta")}
          twoCol={true}
          onClick={() => console.log("login")}
        />
      }
      mobileRightButton={
        <Button
          text={cms("contribute.share-cta")}
          onClick={() => console.log("login")}
        />
      }
      rightTitle={cms("contribute.share")}
      rightDescription={cms("contribute.disclaimer")}
      mobileDescription={cms("contribute.disclaimer")}
    />
  </Fragment>
);

export default Contribute;
