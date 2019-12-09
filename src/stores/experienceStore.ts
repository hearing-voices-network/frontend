import { observable, action, computed } from "mobx";
import httpService from "../service/api";
import get from "lodash/get";
import remove from "lodash/remove";
import reduce from "lodash/reduce";

import experienceList from "./experiences.json";

import { ITag, IStory, ICategorisedTag } from "../utils/types";

const UNTAGGED = { id: "untagged", name: "No tag" };

export default class ExperienceStore {
  @observable tags: ITag[] = [];
  @observable selectedTags: ITag[] = [];
  @observable filterOptionsVisible: boolean = false;
  @observable categories: ITag[] = [];
  @observable experiences: IStory[] = [];
  @observable experiencesLoading: boolean = true;
  @observable filteredResultsShowing: boolean = false;
  @observable categorizedTags: ICategorisedTag[] = [];

  @action
  async getTags() {
    await httpService.api.get("/api/tags").then(resp => {
      const unsortedTags = get(resp, "data.data", []);

      const categories = remove(
        unsortedTags,
        (tag: ITag) => tag.parent_tag_id === null
      );

      this.categories = categories;
      this.tags = unsortedTags;
    });
  }

  @action
  getExperiences() {
    httpService.api.get("/api/contributions").then(resp => {
      // this.experiences = get(resp, "data.data");

      this.experiences = get(experienceList, "data");
      this.experiencesLoading = false;
    });
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
    if (
      tag.id !== "untagged" &&
      this.selectedTags.some(tags => tags.id === "untagged")
    ) {
      const indexOfUntagged = this.selectedTags.indexOf(UNTAGGED);
      this.removeTag(indexOfUntagged);
    }

    if (this.selectedTags.some(tags => tags.id === tag.id)) {
      const indexOfTag = this.selectedTags.indexOf(tag);
      this.removeTag(indexOfTag);
    } else {
      this.handleAddition(tag);
    }
  };

  @action
  selectNoTag = () => {
    this.selectedTags = [];
    this.handleTagSelect(UNTAGGED);
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

  @action
  categorizeTags = (tags: ITag[]) => {
    this.categorizedTags = reduce(
      tags,
      (acc: ICategorisedTag[], tag: ITag) => {
        // get parent category
        const parent = this.categories.find(
          category => category.id === tag.parent_tag_id
        );

        // if its not already in acc add it

        if (
          parent &&
          !acc.some((category: ICategorisedTag) => category.id === parent.id)
        ) {
          acc.push({
            name: parent.name,
            id: parent.id,
            tags: [tag]
          });
        } else {
          // otherwise add to tag array

          const exsistingCategory = acc.find(
            (category: ICategorisedTag) => category.id === tag.parent_tag_id
          );

          if (exsistingCategory) {
            exsistingCategory.tags.push(tag);
          }
        }

        return acc;
      },
      []
    );
  };
}
