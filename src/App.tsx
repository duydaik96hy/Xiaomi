import "./App.scss";
import Axios from "axios";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppContext } from "./AppContext";
import { AppRoutes } from "./AppRoutes";
import { AppState } from "./appState/AppState";
import { reducer } from "./appState/reducer";

// import "fontsource-roboto";

interface IProps {
    initialState: AppState;
}

export const App = (props: IProps): JSX.Element => {
    const [appState, dispatch] = React.useReducer(reducer, props.initialState);

    return (
        <BrowserRouter>
            <AppContext.Provider value={{ appState, dispatch }}>
                <AppRoutes />
            </AppContext.Provider>
        </BrowserRouter>
    );
};
