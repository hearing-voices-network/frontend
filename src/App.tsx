import React, { FunctionComponent } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/main.scss";

import PatternLibrary from "./components/PatternLibrary";

library.add(fas);

const App: FunctionComponent = () => (
  <div className="flex-container flex-container--center" style={{ padding: '0 20px'}}>
    <div className="flex-col--12" style={{ marginTop: "20px" }}>
      <PatternLibrary />
    </div>
  </div>
);

export default App;
