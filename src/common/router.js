import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Container from './container/index'

export default class Rout extends React.Component {
    

    render() {
        return (
            <Router>
                <Route path="/" component={Container} />
            </Router>
        )
    }
}
