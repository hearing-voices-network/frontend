import { observable, action } from "mobx";

export default class RegisterStore {
  @observable step: number = 1;

  @action
  nextStep() {
    this.step = this.step + 1;
  }
}
