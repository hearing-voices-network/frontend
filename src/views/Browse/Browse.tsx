import React, { FunctionComponent, useEffect } from "react";
import Layout from "../../components/Layout";
import ExperienceStore from "../../stores/experienceStore";
import { inject, observer } from "mobx-react";

interface IProps {
  experienceStore: ExperienceStore;
}

const Browse: FunctionComponent<IProps> = ({ experienceStore }) => {
  useEffect(() => {
    experienceStore.getTags();
  }, [experienceStore]);

  if (!experienceStore) return null;

  const { tags } = experienceStore;

  console.log(tags);
  return (
    <Layout>
      <div>{tags.map(tag => tag.name)}</div>
    </Layout>
  );
};

export default inject("experienceStore")(observer(Browse));
