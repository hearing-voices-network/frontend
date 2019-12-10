import { observable, action } from "mobx";
import httpService from "../service/api";
import get from "lodash/get";

export default class UserStore {
  @observable loggedIn: boolean = false;
  @observable experiences = [];
  @observable username: string = "";
  @observable password: string = "";
  @observable userId: string = "";

  @action
  async logIn() {
    try {
      const data = await httpService.api.post("/login", {
        email: this.username,
        password: this.password
      });

      this.userId = get(data, "data.data.id");
      this.loggedIn = true;
      this.clear();
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

  @action clear = () => {
    this.username = "";
    this.password = "";
  };
}
