import { observable, action, computed } from "mobx";
import RichTextEditor, { EditorValue } from "react-rte";

export default class ContributionStore {
  @observable showGuidance: boolean = false;
  @observable guidanceStep: number = 0;
  @observable contribution: EditorValue = RichTextEditor.createEmptyValue();

  @action
  skipGuidance = () => {
    this.showGuidance = false;
  };

  @observable
  increaseStep = () => {
    this.guidanceStep = this.guidanceStep + 1;
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
