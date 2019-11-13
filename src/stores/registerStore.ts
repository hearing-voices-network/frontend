import { observable, action } from "mobx";

export default class RegisterStore {
  @observable step: number = 3;
  @observable consent = false;

  @action
  nextStep() {
    this.step = this.step + 1;
  }

  @action
  toggleConsent() {
    this.consent = !this.consent;
  }
}
