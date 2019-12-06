import { observable, action } from "mobx";
import httpService from "../service/api";

export default class UserStore {
  @observable loggedIn: boolean = false;
  @observable experiences = [];
  @observable username: string = "";
  @observable password: string = "";

  @action
  async logIn() {
    try {
      await httpService.api.post("/login", {
        email: this.username,
        password: this.password
      });

      this.loggedIn = true;
    } catch ({ response }) {
      console.error(response.status, response.statusText);
    }
  }

  async logOut() {
    try {
      await httpService.api.post("/logout", {});
      this.loggedIn = false;
    } catch ({ response }) {
      console.error(response.status, response.statusText);
    }
  }

  @action
  handleChange = (value: string, field: string) => {
    // @ts-ignore
    this[field] = value;
  };
}
