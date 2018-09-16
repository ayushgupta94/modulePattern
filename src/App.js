import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child2 from './Child2';
import Child1 from './Child1';
import Child3 from './Child3';
import Child4 from './Child4';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Child1 calledFrom="App" />
        <Child2 />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.forceUpdate()}>Force Update</button>
        {/* <Child3 calledFrom="App" /> */}
        <p>{Child3.y}</p>
        <button onClick={Child3.increment}>Inc</button>
        <Child4 />
      </div>
    );
  }
}

export default App;
