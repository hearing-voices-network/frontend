import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles/main.scss";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import About from "./views/About";

import Header from "./components/Header";

import CookiesStore from "./stores/cookiesStore";

library.add(fas);

const cookieStore = new CookiesStore();

const App: FunctionComponent = () => (
  <Provider cookieStore={cookieStore}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} true={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
