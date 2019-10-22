import React, { FunctionComponent } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/grid.scss";

library.add(fas);

const App: FunctionComponent = () => (
  <div className="App">
    <h1>Hello World</h1>
  </div>
);

export default App;
