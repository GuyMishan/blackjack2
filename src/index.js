import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import SignIn from "./components/App";
import SignUp from "./components/Signup";
import Game from './components/Game';

import history from './history'

ReactDOM.render(
    <>
        <Router history={history}>
            <Switch>
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/game/:id" exact component={Game} />
                <Redirect from="/" to="/signin" />
            </Switch>
        </Router>
    </>, document.getElementById('root'));
