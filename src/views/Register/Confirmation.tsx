import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";

import AccountCreated from "../../assets/icons/account-created.svg";

import { cms } from "../../utils/cms";

import NavigationBlock from "../../components/NavigationBlock";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Link from "../../components/Link";
import Layout from "../../components/Layout";

const Confirmation: FunctionComponent = () => (
  <Layout>
    <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify register confirmation">
      <div className="flex-col--12">
        <ReactSVG src={AccountCreated} />

        <h1 className="register--title">
          {cms("register.confirmation.title")}
        </h1>
        <p className="register--description">
          {cms("register.confirmation.description")}
        </p>

        <NavigationBlock
          leftButton={
            <Button
              text={cms("register.confirmation.cta.dashboard")}
              twoCol={true}
              onClick={() => console.log("dashboard")}
            />
          }
          mobileLeftButton={
            <Button
              text={cms("register.confirmation.cta.dashboard")}
              onClick={() => console.log("dashboard")}
            />
          }
          leftTitle={cms("register.confirmation.cta.dashboard")}
          leftDescription=""
          rightButton={
            <Button
              text={cms("register.confirmation.cta.submit")}
              twoCol={true}
              onClick={() => console.log("submit")}
            />
          }
          mobileRightButton={
            <Button
              text={cms("register.confirmation.cta.submit")}
              onClick={() => console.log("submit")}
            />
          }
          rightTitle={cms("register.confirmation.cta.submit")}
          rightDescription=""
          mobileDescription={cms("register.confirmation.cta.mobile")}
        />
      </div>
    </div>
    <Footer purple={true}>
      <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center register--footer">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <Link size="medium" text="View other's stories" href="/" />
          <p className="login--footer--description">
            {cms("register.footer.confirmation")}
          </p>
        </div>
      </div>
    </Footer>
  </Layout>
);

export default Confirmation;
