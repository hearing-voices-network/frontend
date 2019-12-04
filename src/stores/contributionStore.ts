import { observable, action, computed } from "mobx";
import RichTextEditor, { EditorValue } from "react-rte";
import { ITag } from "../utils/types";

export default class ContributionStore {
  @observable showGuidance: boolean = false;
  @observable guidanceStep: number = 0;
  @observable contributionStep: number = 2;
  @observable contribution: EditorValue = RichTextEditor.createEmptyValue();
  @observable privacy: "public" | "private" = "public";
  @observable selectedTags: ITag[] = [];

  @action
  skipGuidance = () => {
    this.showGuidance = false;
  };

  @observable
  increaseStep = (type: string) => {
    // @ts-ignore
    this[`${type}Step`] = this[`${type}Step`] + 1;
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
    const tags = ([] as ITag[]).concat(this.selectedTags, tag);
    this.selectedTags = tags;
  };

  isTagSelected = (tag: ITag) => {
    return this.selectedTags.some(tags => tags.id === tag.id);
  };
}
