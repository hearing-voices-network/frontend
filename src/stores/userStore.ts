import { observable, action, computed } from "mobx";
import httpService from "../service/api";
import get from "lodash/get";
import groupBy from "lodash/groupBy";
import { IStory } from "../utils/types";
import { format } from "date-fns";

export default class UserStore {
  @observable loggedIn: boolean = false;
  @observable experiences = [];
  @observable experiencesLoading: boolean = true;
  @observable username: string = "";
  @observable password: string = "";
  @observable userId: string = "";
  @observable currentPage: number = 1;
  @observable totalItems: number = 1;
  @observable itemsPerPage: number = 10;

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
      this.clear();
    } catch ({ response }) {
      console.error(response.status, response.statusText);
    }
  }

  @action
  fetchUserExperiences = async (pageNum: number) => {
    try {
      const { data } = await httpService.api.get(
        `/api/contributions?page=${pageNum}`
      );

      this.experiences = get(data, "data");
      this.currentPage = get(data, "meta.current_page");
      this.totalItems = get(data, "meta.total");
      this.itemsPerPage = get(data, "meta.per_page");
      this.experiencesLoading = false;
    } catch ({ response }) {
      console.error(response);
    }
  };

  @computed
  get experiencesGroupedByDate() {
    return groupBy(this.experiences, (experiences: IStory) =>
      format(new Date(experiences.created_at), "dd MMM yyyy")
    );
  }

  @action
  handleChange = (value: string, field: string) => {
    // @ts-ignore
    this[field] = value;
  };

  @action clear = () => {
    this.username = "";
    this.password = "";
    this.experiences = [];
    this.currentPage = 1;
    this.totalItems = 1;
    this.itemsPerPage = 10;
  };
}
