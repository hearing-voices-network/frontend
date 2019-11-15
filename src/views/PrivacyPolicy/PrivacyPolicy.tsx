import React, { FunctionComponent } from "react";
import Breadcrumb from "../../components/Breadcrumb";

import { cms } from "../../utils/cms";

import "./PrivacyPolicy.scss";
import Layout from "../../components/Layout";

const PrivacyPolicy: FunctionComponent = () => (
  <Layout>
    <div className="flex-container flex-container--no-padding flex-container--center privacy-policy">
      <div className="flex-col--12">
        <Breadcrumb
          crumbs={[
            { text: "Home", url: "/" },
            { text: "Privacy Policy", url: "" }
          ]}
        />
      </div>
      <div className="flex-col--8 flex-col--tablet-large--12">
        <p
          className="privacy-policy--content"
          dangerouslySetInnerHTML={{ __html: cms("privacy.content") }}
        />
      </div>
    </div>
  </Layout>
);

export default PrivacyPolicy;
