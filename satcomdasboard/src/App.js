import React, { Component } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
// import Footer from './Components/Footer';
import Chart from './Chart/Chart';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Chart/>
        <Menu/>
      
        {/* <Footer/> */}
      </div>
    )
  }
}

export default App;