import React, { FunctionComponent } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/main.scss";

import PatternLibrary from "./components/PatternLibrary";

library.add(fas);

const App: FunctionComponent = () => (
  <div className="flex-container">
    <div className="flex-col--12" style={{ marginTop: "20px" }}>
      <PatternLibrary />
    </div>
  </div>
);

export default App;
