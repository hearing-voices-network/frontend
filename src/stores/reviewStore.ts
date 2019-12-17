import { observable, action, computed } from "mobx";
import httpService from "../service/api";
import get from "lodash/get";
import { EditorValue } from "react-rte";

import { IStory } from "../utils/types";

export default class ReviewStore {
  @observable storyToReview: IStory | null = null;
  @observable loading: boolean = false;
  @observable reviewStep: number = 0;
  @observable editedStory: EditorValue = EditorValue.createEmpty();

  @action
  getReviewComments = async (id: string) => {
    this.loading = true;
    try {
      const { data } = await httpService.api.get(`/api/contributions/${id}`);

      this.storyToReview = get(data, "data");
      this.editedStory = EditorValue.createFromString(
        get(data, "data.content"),
        "markdown"
      );

      this.loading = false;
    } catch ({ response }) {
      console.error(response);
    }
  };

  @observable
  increaseStep = () => {
    this.reviewStep = this.reviewStep + 1;
  };

  @observable
  onStoryEdit = (text: EditorValue) => {
    this.editedStory = text;
  };

  @computed
  get wordCount() {
    if (
      !this.editedStory
        .getEditorState()
        .getCurrentContent()
        .hasText()
    )
      return 0;

    const editStoryInMarkdown = this.editedStory.toString("markdown");

    return editStoryInMarkdown.split(" ").length;
  }
}
