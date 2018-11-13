import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import SideMenu from './components/SideMenu.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideMenu />
      </div>
    );
  }
}

export default App;
