import {  Route, Redirect, Switch } from 'react-router-dom';
import { Router } from 'react-router'
import React from 'react';
import Container from './container/index'
import history from './utils/history'
import Err from 'pages/error'
import Login from 'pages/login'

export default class Rout extends React.Component {
    componentWillMount() {
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact render={()=> <Redirect to="/home"/>} />
                    <Route path="/home" component={Container} />
                    <Route path="/login" component={Login} />
                    <Route component={Err} />
                </Switch>
            </Router>
        )
    }
}
