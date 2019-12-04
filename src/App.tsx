import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider, observer } from "mobx-react";
import { createBrowserHistory } from "history";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles/main.scss";

import httpService from "./service/api";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import About from "./views/About";
import Contribute from "./views/Contribute";
import Login from "./views/Login";
import Register from "./views/Register";
import PrivacyPolicy from "./views/PrivacyPolicy";
import ForgotPassword from "./views/ForgotPassword";
import ResetPassword from "./views/ResetPassword";
import Dashboard from "./views/Dashboard";
import Browse from "./views/Browse";
import MyExperiences from "./views/Experiences/MyExperiences";
import Story from "./views/Story";
import TryAgain from "./views/TryAgain";
import SubmitExperiences from "./views/Experiences/SubmitExperiences";

import PrivateRoute from "./components/PrivateRoute";

import CookiesStore from "./stores/cookiesStore";
import RegisterStore from "./stores/registerStore";
import UserStore from "./stores/userStore";
import ContributionStore from "./stores/contributionStore";
import ExperienceStore from "./stores/experienceStore";

library.add(fas);

const cookieStore = new CookiesStore();
const registerStore = new RegisterStore();
const userStore = new UserStore();
const experienceStore = new ExperienceStore();
const contributionStore = new ContributionStore();
const history = createBrowserHistory();

httpService.setupInterceptors(history);

const App: FunctionComponent = () => (
  <Provider
    cookieStore={cookieStore}
    registerStore={registerStore}
    userStore={userStore}
    experienceStore={experienceStore}
    contributionStore={contributionStore}
  >
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/browse" component={Browse} exact={true} />
          <Route path="/story/:storyId" component={Story} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/contribute" component={Contribute} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Route
            path="/privacy-policy"
            component={PrivacyPolicy}
            exact={true}
          />
          <Route
            path="/forgot-password"
            component={ForgotPassword}
            exact={true}
          />
          <Route
            path="/reset-password"
            component={ResetPassword}
            exact={true}
          />
          <Route path="/try-again" component={TryAgain} exact={true} />

          {/* User Routes */}

          <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
          <PrivateRoute
            path="/my-experiences"
            component={MyExperiences}
            exact={true}
          />
          <PrivateRoute
            path="/submit-experience"
            component={SubmitExperiences}
            exact={true}
          />

          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
);

export default observer(App);
