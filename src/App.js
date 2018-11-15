import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting';
import MyProvider from './MyProvider';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Greeting/>
      </MyProvider>
      
    );
  }
}

export default App;
