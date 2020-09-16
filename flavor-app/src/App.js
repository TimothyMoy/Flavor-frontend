import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Config/Routes';
import AppNavbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        { Routes }
      </div>
    );
  }
}

export default App;
