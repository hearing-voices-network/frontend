import { observable } from "mobx";

export default class RegisterStore {
  @observable step: number = 0;
}
