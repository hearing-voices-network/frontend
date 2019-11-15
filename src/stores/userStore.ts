import { observable, action } from "mobx";

export default class UserStore {
  @observable loggedIn: boolean = true;

  @action
  logIn() {
    this.loggedIn = true;
  }
}
