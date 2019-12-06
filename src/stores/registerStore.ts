import { observable, action } from "mobx";
import httpService from "../service/api";

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
  register = async () => {
    try {
      const params = {
        email: this.email,
        password: this.password
      };

      const data = await httpService.api.post("/api/end-users", params);

      console.log(data);
      // this.showConfirmation = true;
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
