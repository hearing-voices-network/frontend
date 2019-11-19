import { observable, action } from "mobx";
import api from "../service/api";
import get from "lodash/get";
import remove from "lodash/remove";

import { ITag, IOrderedTags } from "../utils/types";

export default class ExperienceStore {
  @observable tags: IOrderedTags[] = [];

  @action
  getTags() {
    api
      .get("/tags")
      .then(resp => {
        const unsortedTags = get(resp, "data.data", []);

        const sortedTags: IOrderedTags[] = [];

        // find all parent tags
        unsortedTags.forEach((tag: ITag, i: number) => {
          if (tag.parent_tag_id === null) {
            sortedTags.push({
              id: tag.id,
              name: tag.name,
              tags: []
            });
          }
        });

        // remove parent tags
        remove(unsortedTags, (tag: ITag) => tag.parent_tag_id === null);

        // add children tags to parent tags array
        unsortedTags.forEach((tag: ITag, i: number) => {
          const parent = sortedTags.find(
            (parent: IOrderedTags) => parent.id === tag.parent_tag_id
          );

          if (parent) {
            parent.tags.push(tag);
          }
        });

        this.tags = sortedTags;
      })
      .catch(err => console.log("redirect to 500 page"));
  }
}
