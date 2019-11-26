import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider, observer } from "mobx-react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles/main.scss";

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

import PrivateRoute from "./components/PrivateRoute";

import CookiesStore from "./stores/cookiesStore";
import RegisterStore from "./stores/registerStore";
import UserStore from "./stores/userStore";
import ExperienceStore from "./stores/experienceStore";
import Story from "./views/Story";
import TryAgain from "./views/TryAgain";

library.add(fas);

const cookieStore = new CookiesStore();
const registerStore = new RegisterStore();
const userStore = new UserStore();
const experienceStore = new ExperienceStore();

const App: FunctionComponent = () => (
  <Provider
    cookieStore={cookieStore}
    registerStore={registerStore}
    userStore={userStore}
    experienceStore={experienceStore}
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

          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
);

export default observer(App);
