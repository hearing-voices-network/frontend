import { observable, action } from "mobx";
import api from "../service/api";
import get from "lodash/get";
import remove from "lodash/remove";

import { ITag } from "../utils/types";

export default class ExperienceStore {
  @observable tags: ITag[] = [];
  @observable selectedTags: ITag[] = [];
  @observable filterOptionsVisible: boolean = true;
  @observable categories: ITag[] = [];

  @action
  getTags() {
    api
      .get("/tags")
      .then(resp => {
        const unsortedTags = get(resp, "data.data", []);

        const categories = remove(
          unsortedTags,
          (tag: ITag) => tag.parent_tag_id === null
        );

        this.categories = categories;
        this.tags = unsortedTags;
      })
      .catch(err => console.log("redirect to 500 page"));
  }

  @action
  removeTag = (index: number) => {
    const tags = this.selectedTags.slice(0);
    tags.splice(index, 1);

    this.selectedTags = tags;
  };

  @action
  handleAddition = (tag: ITag) => {
    const tags = ([] as ITag[]).concat(this.selectedTags, tag);
    this.selectedTags = tags;
  };

  @action
  toggleFilterOptions = () => {
    this.filterOptionsVisible = !this.filterOptionsVisible;
  };

  getCategoryTags = (id: string) =>
    this.tags.filter(tag => tag.parent_tag_id === id);
}
