import httpService from "../service/api";
import { observable, action } from "mobx";
import { IStory, ICategorisedTag } from "../utils/types";
import ExperienceStore from "./experienceStore";

export default class StoryStore {
  @observable story: IStory | null = null;
  @observable experienceStore: ExperienceStore | null = null;
  @observable tags: ICategorisedTag[] = [];
  @observable storyLoading: boolean = false;

  constructor(experienceStore: ExperienceStore) {
    this.experienceStore = experienceStore;
  }

  @action
  fetchStory = async (storyId: string) => {
    this.storyLoading = true;

    try {
      const {
        data: { data }
      } = await httpService.api.get(`/api/contributions/${storyId}`);

      this.story = data;

      if (this.experienceStore && this.story) {
        if (!this.experienceStore.tags.length) {
          await this.experienceStore.getTags();
        }

        this.tags = this.experienceStore.categorizeTags(this.story.tags);
      }

      this.storyLoading = false;
    } catch ({ response }) {
      console.error(response);
    }
  };
}
