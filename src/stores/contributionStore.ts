import { observable, action, computed } from "mobx";
import RichTextEditor, { EditorValue } from "react-rte";
import { ITag } from "../utils/types";
import httpService from "../service/api";

export default class ContributionStore {
  @observable showGuidance: boolean = true;
  @observable guidanceStep: number = 0;
  @observable contributionStep: number = 0;
  @observable contribution: EditorValue = RichTextEditor.createEmptyValue();
  @observable privacy: "public" | "private" = "public";
  @observable selectedTags: ITag[] = [];
  @observable contributionSubmitted: boolean = false;

  @action
  skipGuidance = () => {
    this.showGuidance = false;
  };

  @observable
  increaseStep = (type: string) => {
    // @ts-ignore
    this[`${type}Step`] = this[`${type}Step`] + 1;
    window.scrollTo(0, 0);
  };

  @action
  onContributionChange = (text: EditorValue) => {
    this.contribution = text;
  };

  @action
  setPrivacy = (privacy: "public" | "private") => {
    this.privacy = privacy;
  };

  @computed
  get wordCount() {
    if (
      !this.contribution
        .getEditorState()
        .getCurrentContent()
        .hasText()
    )
      return 0;

    const contributeInMarkdown = this.contribution.toString("markdown");

    return contributeInMarkdown.split(" ").length;
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

  @action
  skipTags = () => {
    this.selectedTags = [];
    this.submitContribution();
  };

  @action
  submitContribution = async () => {
    let tags: any[];

    if (this.selectedTags) {
      tags = this.selectedTags.map((tag: ITag) => ({
        id: tag.id
      }));
    } else {
      tags = [];
    }

    try {
      await httpService.api.post("/api/contributions", {
        content: this.contribution.toString("markdown"),
        status: this.privacy === "public" ? "in_review" : "private",
        tags
      });

      this.contributionSubmitted = true;
      window.scrollTo(0, 0);
      this.clear();
    } catch ({ response }) {
      console.error(response, "error response");
    }
  };

  @action
  clear = () => {
    this.showGuidance = true;
    this.guidanceStep = 0;
    this.contributionStep = 0;
    this.contribution = RichTextEditor.createEmptyValue();
    this.selectedTags = [];
  };
}
