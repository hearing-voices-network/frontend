import { observable, action, computed } from "mobx";
import httpService from "../service/api";
import get from "lodash/get";
import { EditorValue } from "react-rte";

import { IStory, ITag } from "../utils/types";

export default class ReviewStore {
  @observable storyToReview: IStory | null = null;
  @observable loading: boolean = false;
  @observable reviewStep: number = 0;
  @observable editedStory: EditorValue = EditorValue.createEmpty();
  @observable selectedTags: ITag[] = [];
  @observable reviewSubmitted: boolean = false;
  @observable privacy: "public" | "private" = "private";

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
      this.selectedTags = get(data, "data.tags");
      this.privacy =
        get(data, "data.status") === "in_review" ||
        get(data, "data.status") === "changes_requested"
          ? "public"
          : get(data, "data.status");
      this.loading = false;
    } catch ({ response }) {
      console.error(response);
    }
  };

  @observable
  increaseStep = () => {
    this.reviewStep = this.reviewStep + 1;
    window.scrollTo(0, 0);
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

  @action
  handleTagSelect = (tag: ITag) => {
    if (this.selectedTags.some(tags => tags.id === tag.id)) {
      const indexOfTag = this.selectedTags.indexOf(tag);
      this.removeTag(indexOfTag);
    } else {
      this.handleAddition(tag);
    }
  };

  @action
  removeTag = (index: number) => {
    const tags = this.selectedTags.slice(0);
    tags.splice(index, 1);

    this.selectedTags = tags;
  };

  @action
  handleAddition = (tag: ITag) => {
    const tags = this.selectedTags.slice();
    const newTags = ([] as ITag[]).concat(tags, tag);
    this.selectedTags = newTags;
  };

  isTagSelected = (tag: ITag) => {
    return this.selectedTags.some(tags => tags.id === tag.id);
  };

  submitChanges = async () => {
    try {
      await httpService.api.put(
        `/api/contributions/${get(this.storyToReview, "id")}`,
        {
          content: this.editedStory.toString("markdown"),
          tags: this.selectedTags,
          status: this.privacy === "public" ? "in_review" : "private"
        }
      );

      this.reviewSubmitted = true;
      window.scrollTo(0, 0);
    } catch ({ response }) {
      console.error(response);
    }
  };

  @action
  skipTags = () => {
    this.selectedTags = [];
    this.submitChanges();
  };

  @action
  changePrivacy = (privacy: "public" | "private") => {
    this.privacy = privacy;
  };

  @action
  clear = () => {
    this.reviewStep = 0;
    this.editedStory = EditorValue.createEmpty();
    this.selectedTags = [];
    this.reviewSubmitted = false;
    this.storyToReview = null;
  };
}
