import { observable, action } from "mobx";
import httpService from "../service/api";
import { IStory } from "../utils/types";
import get from "lodash/get";

export default class ReviewStore {
  @observable storyToReview: IStory | null = null;
  @observable loading: boolean = false;

  @action
  getReviewComments = async (id: string) => {
    this.loading = true;
    try {
      const { data } = await httpService.api.get(`/api/contributions/${id}`);

      this.storyToReview = get(data, "data");
      this.loading = false;
    } catch ({ response }) {
      console.error(response);
    }
  };
}
