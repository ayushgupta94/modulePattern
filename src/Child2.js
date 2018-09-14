import React, { Component } from 'react';

import './App.css';


import Child1 from './Child1';
class Child2 extends Component {

  render() {
    // console.log(aObj);
    // console.log(b);
    return (
      <div className="App">
   
        <Child1  calledFrom="Child2"/>
        
      </div>
    );
  }
}

export default Child2;
