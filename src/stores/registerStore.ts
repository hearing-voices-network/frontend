import { observable, action } from "mobx";

export default class RegisterStore {
  @observable step: number = 0;
  @observable consent = false;
  @observable showConfirmation = false;

  @action
  nextStep() {
    this.step = this.step + 1;
    window.scrollTo(0, 0);
  }

  @action
  toggleConsent() {
    this.consent = !this.consent;
  }

  @action
  confirm() {
    this.showConfirmation = true;
  }
}
