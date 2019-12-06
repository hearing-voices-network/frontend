import { observable, action } from "mobx";

export default class RegisterStore {
  @observable step: number = 0;
  @observable consent = false;
  @observable showConfirmation = false;
  @observable email: string = "";
  @observable password: string = "";

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

  @action
  handleChange = (value: string, field: string) => {
    // @ts-ignore
    this[field] = value;
  };
}
