import { observable, action, computed } from "mobx";
import httpService from "../service/api";
import get from "lodash/get";
import remove from "lodash/remove";
import reduce from "lodash/reduce";

import { ITag, IStory, ICategorisedTag } from "../utils/types";

const UNTAGGED = { id: "untagged", name: "No tag" };

export default class ExperienceStore {
  @observable tags: ITag[] = [];
  @observable selectedTags: ITag[] = [];
  @observable filterOptionsVisible: boolean = false;
  @observable categories: ITag[] = [];
  @observable experiences: IStory[] = [];
  @observable experiencesLoading: boolean = true;
  @observable categoriesLoading: boolean = true;
  @observable filteredResultsShowing: boolean = false;
  @observable categorizedTags: ICategorisedTag[] = [];
  @observable currentPage: number = 1;
  @observable totalItems: number = 1;
  @observable itemsPerPage: number = 10;
  @observable filters: string = "";

  @action
  async getTags() {
    await httpService.api.get("/api/tags").then(resp => {
      const unsortedTags = get(resp, "data.data", []);

      const categories = remove(
        unsortedTags,
        (tag: ITag) => tag.parent_tag_id === null
      );

      this.categories = categories;
      this.categoriesLoading = false;
      this.tags = unsortedTags;
    });
  }

  @action
  getExperiences = async () => {
    this.filterOptionsVisible = false;

    try {
      const { data } = await httpService.api.post("/contributions", {
        page: this.currentPage,
        tags: this.filters
      });

      this.experiences = get(data, "data.data");
      this.currentPage = get(data, "data.meta.current_page");
      this.totalItems = get(data, "data.meta.total");
      this.itemsPerPage = get(data, "data.meta.per_page");
      this.experiencesLoading = false;
    } catch ({ response }) {
      console.error(response);
    }
  };

  @action
  paginate = (pageNum: number) => {
    this.currentPage = pageNum;

    this.experiencesLoading = true;

    this.getExperiences();
  };

  @action
  filterResults = () => {
    this.filters = this.selectedTags.map(tag => `${tag.id}`).join(",");

    this.experiencesLoading = true;
    this.currentPage = 1;

    this.getExperiences();

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
    if (
      tag.id !== "untagged" &&
      this.selectedTags.some(tags => tags.id === "untagged")
    ) {
      this.clearTags(tag);
    }

    const tags = this.selectedTags.slice();
    const newTags = ([] as ITag[]).concat(tags, tag);
    this.selectedTags = newTags;
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
      this.clearTags(tag);
    }

    if (this.selectedTags.some(tags => tags.id === tag.id)) {
      this.clearTags(tag);
    } else {
      this.handleAddition(tag);
    }
  };

  @action
  clearTags = (tag: ITag) => {
    const indexOfTag = this.selectedTags.indexOf(tag);
    this.removeTag(indexOfTag);
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
    return reduce(
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
