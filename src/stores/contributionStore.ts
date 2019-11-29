import { observable, action } from "mobx";

export default class ContributionStore {
  @observable showGuidance: boolean = true;
  @observable guidanceStep: number = 0;

  @action
  skipGuidance = () => {
    this.showGuidance = false;
  };

  @observable
  increaseStep = () => {
    this.guidanceStep = this.guidanceStep + 1;
  };
}
