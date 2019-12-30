import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import Users from '../Components/Users';
import Kanwil from '../Components/Kanwil';
import Ukers from '../Components/Ukers';

class Routing extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={App} />
                <Route path="/users" component={Users} />
                <Route path="/kanwils" component={Kanwil} />
                <Route path="/ukers" component={Ukers} />


            </Router>
        )
    }

}

// ReactDOM.render(routing, document.getElementById('root'))
export default Routing;