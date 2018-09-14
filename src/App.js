import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Child2 from './Child2';
import Child1 from './Child1';
class App extends Component {

  render() {
    // console.log(aObj);
    // console.log(b);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Child1 calledFrom="App"/>
        <Child2/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button  onClick={()=>this.forceUpdate()}>Force Update</button>
      </div>
    );
  }
}

export default App;
