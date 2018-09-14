// console.log("A evaluated")
// function AClass (){
//   console.log("A constructor")
// }
// var aObj = new AClass()
// export default aObj;


import React, { Component } from 'react';
import './App.css';

// import b from './Child2';
// import Child1 from './Child1';
let x = 0;
console.log("Child1 evaluation");
class Child1 extends Component {
    constructor(props) {
        super(props)
        this.a = 0;
        console.log("Child1 consructor")
    }
    render() {

        return (
            <div className="App">
                "================Child===================="
        <button name={x} onClick={() => { x = x + 1; this.a = this.a + 1; }}>{this.props.calledFrom}</button>
                <h2>Outside variable {x} </h2>
                <h2>Inside variable {this.a} </h2>
            </div>
        );
    }
}

export default Child1;
