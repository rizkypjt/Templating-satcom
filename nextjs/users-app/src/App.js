import React, { Component } from 'react';
import Login from './LoginPage/Login'
import { BrowserRouter as HeaderBar, Route, Switch } from "react-router-dom";
import Users from './Components/Users';
import Kanwils from './Components/Kanwil';
import Ukers from './Components/Ukers';
import Logout from './LoginPage/Logout';



class App extends Component {
  render() {
    return (
      //   <div>
      //     {/* <MenuList/> */}
      //     {/* <Users/> */}
      //     <Login/>
      //  </div>
      <div className="app">
        <HeaderBar />
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/kanwils" component={Kanwils} />
            <Route path="/ukers" component={Ukers} />
            <Route exact path="/users" component={Users} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;