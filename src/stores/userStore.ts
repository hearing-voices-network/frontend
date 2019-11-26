import { observable, action } from "mobx";

export default class UserStore {
  @observable loggedIn: boolean = true;
  @observable experiences = [];

  @action
  logIn() {
    this.loggedIn = true;
  }
}
