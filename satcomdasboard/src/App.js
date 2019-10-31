import React, { Component } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Content from './Components/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Menu/>
        <Footer/>
      </div>
    )
  }
}

export default App;