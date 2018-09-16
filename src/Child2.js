import React, { Component } from 'react';
import './App.css';
import Child1 from './Child1';
import Child3 from './Child3';
import Child4 from './Child4';
class Child2 extends Component {

  render() {
    return (
      <div className="App">
        <Child1 calledFrom="Child2" />
        {/* <Child3 calledFrom="Child2" /> */}
        <p>{Child3.y}</p>
        <button onClick={Child3.increment}>Inc</button>
        <Child4 />
      </div>
    );
  }
}

export default Child2;
