import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from '../App';
import Home from '../Components/Home';

class Routes extends Component {
    render() {
        return (
            <Router>
                    <Route path="/" exact component={App} />
                    <Route path="/home" component={Home} />
            </Router>
        );
    }
}

export default Routes;