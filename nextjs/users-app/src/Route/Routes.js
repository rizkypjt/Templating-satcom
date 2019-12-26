import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import Users from '../Components/Users';
import Kanwil from '../Components/Kanwil';

class Routing extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={App} />
                <Route path="/users" component={Users} />
                <Route path="/kanwil" component={Kanwil} />

            </Router>
        )
    }

}

// ReactDOM.render(routing, document.getElementById('root'))
export default Routing;