import Axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connectContainer, IPageProps } from "./ContainerBase";
import { Home } from "./containers/home/Home";

class AppRoutesRaw extends React.Component<IPageProps> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export const AppRoutes = connectContainer(AppRoutesRaw);
