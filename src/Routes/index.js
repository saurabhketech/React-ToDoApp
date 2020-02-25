import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from '../pages/App';

export default class RouterIndex extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </Router>
        )
    }
}