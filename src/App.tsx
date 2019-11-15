import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

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
import ForgotPassword from "./views/ForgotPassword/ForgotPassword";

import Header from "./components/Header";

import CookiesStore from "./stores/cookiesStore";
import RegisterStore from "./stores/registerStore";
import ResetPassword from "./views/ResetPassword";

library.add(fas);

const cookieStore = new CookiesStore();
const registerStore = new RegisterStore();

const App: FunctionComponent = () => (
  <Provider cookieStore={cookieStore} registerStore={registerStore}>
    <Router>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
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
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
);

export default App;
