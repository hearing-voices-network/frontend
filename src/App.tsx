import React, { FunctionComponent } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/main.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Header from "./components/Header";

library.add(fas);

const App: FunctionComponent = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
