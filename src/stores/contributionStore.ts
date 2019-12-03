import { observable, action, computed } from "mobx";
import RichTextEditor, { EditorValue } from "react-rte";

export default class ContributionStore {
  @observable showGuidance: boolean = false;
  @observable guidanceStep: number = 0;
  @observable contributionStep: number = 0;
  @observable contribution: EditorValue = RichTextEditor.createEmptyValue();

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
}
