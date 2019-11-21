import { observable, action } from "mobx";

export default class UserStore {
  @observable loggedIn: boolean = false;

  @action
  logIn() {
    this.loggedIn = true;
  }
}
