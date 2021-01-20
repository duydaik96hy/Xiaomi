import React from "react";
import { render } from "react-dom";
import { App } from "./App";

import { AppState } from "./appState/AppState";

render(<App initialState={new AppState()} />, document.getElementById("app"));