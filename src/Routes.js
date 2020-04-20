import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Main from "./Main/Main";
import News from "./News/News";
import history from './history';
import ImageUpload from "./News/ImageUpload";
import ReadNews from "./News/ReadNews";
import Turismo from "./Turismo/Turismo"

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/About" component={About} />
                    <Route path="/News" component={News} />
                    <Route path="/ImageUpload" component={ImageUpload} />
                    <Route path="/ReadNews" component={ReadNews} />
                    <Route path="/Turismo" component={Turismo} />
                </Switch>
            </Router>
        )
    }
}
