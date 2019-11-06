import { observable, action } from "mobx";

export default class CookiesStore {
  @observable cookiesAccepted: boolean = false;

  constructor() {
    this.displayNotice();
  }

  @action
  displayNotice = () => {
    const acceptance = localStorage.getItem("cookiesAccepted");

    if (acceptance) {
      this.cookiesAccepted = true;
    } else {
      this.cookiesAccepted = false;
    }
  };

  @action
  acceptCookies = () => {
    this.cookiesAccepted = true;

    localStorage.setItem("cookiesAccepted", JSON.stringify(true));
  };
}
