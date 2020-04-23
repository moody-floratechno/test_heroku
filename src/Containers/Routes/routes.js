import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "../Login/login";
import Dashboard from "../Dashboard/dashboard";
import Contact from "../Contact/contact";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Dashboard" component={Dashboard} />
					<Route path="/Contact" component={Contact} />
                </Switch>
            </Router>
        )
    }
}