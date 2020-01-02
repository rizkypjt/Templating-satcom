import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from '../App';
import Users from '../Components/Users';
import Kanwil from '../Components/Kanwil';
import Ukers from '../Components/Ukers';
import Logout from '../LoginPage/Logout';

class Routing extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={App} />
                <Route path="/users" exact component={Users} />
                <Route path="/kanwils" component={Kanwil} />
                <Route path="/ukers" component={Ukers} />
                <Route path="/logout" component={Logout} />
            </Router>
        )
    }

}

// ReactDOM.render(routing, document.getElementById('root'))
export default Routing;