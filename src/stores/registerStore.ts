import { observable, action } from "mobx";
import httpService from "../service/api";
import UserStore from "./userStore";

export default class RegisterStore {
  @observable step: number = 0;
  @observable consent = false;
  @observable showConfirmation = false;
  @observable email: string = "";
  @observable password: string = "";
  @observable userStore: UserStore | null = null;

  constructor(userStore: UserStore) {
    this.userStore = userStore;
  }

  @action
  clear = () => {
    this.step = 0;
    this.consent = false;
    this.showConfirmation = false;
    this.email = "";
    this.password = "";
  };

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
  register = async () => {
    try {
      const params = {
        email: this.email,
        password: this.password
      };

      const {
        data: {
          data: { id }
        }
      } = await httpService.api.post("/api/end-users", params);

      this.showConfirmation = true;

      if (this.userStore) {
        this.userStore.handleChange(this.email, "username");
        this.userStore.handleChange(this.password, "password");
        this.userStore.userId = id;

        this.userStore.logIn();
      }
    } catch ({ response }) {
      console.error("response", response);
    }
  };

  @action
  handleChange = (value: string, field: string) => {
    // @ts-ignore
    this[field] = value;
  };
}
