import { observable, action, computed } from "mobx";
import api from "../service/api";
import get from "lodash/get";
import remove from "lodash/remove";

import experienceList from "./experiences.json";

import { ITag, IStory } from "../utils/types";

export default class ExperienceStore {
  @observable tags: ITag[] = [];
  @observable selectedTags: ITag[] = [];
  @observable filterOptionsVisible: boolean = false;
  @observable categories: ITag[] = [];
  @observable experiences: IStory[] = [];
  @observable experiencesLoading: boolean = true;
  @observable filteredResultsShowing: boolean = false;

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
  getExperiences() {
    api
      .get("/contributions")
      .then(resp => (this.experiences = get(resp, "data.data")))
      .catch(err => console.log("redirect to 500 page"));
  }

  @action
  filterResults = () => {
    // server filtering will happen here

    this.filteredResultsShowing = true;
  };

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

  handleTagSelect = (tag: ITag) => {
    if (this.selectedTags.some(tags => tags.id === tag.id)) {
      const indexOfTag = this.selectedTags.indexOf(tag);
      this.removeTag(indexOfTag);
    } else {
      this.handleAddition(tag);
    }
  };

  @computed
  get availableTags() {
    return this.tags.filter((tag: ITag) => !this.selectedTags.includes(tag));
  }

  @computed
  get showFilters() {
    return !!this.tags.length;
  }

  isTagSelected = (tag: ITag) => {
    return this.selectedTags.some(tags => tags.id === tag.id);
  };
}
