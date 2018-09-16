import './App.css';
import React, { Component } from 'react';
console.log("C4 evalute")
const Child4 = (props) => {
    console.log("C4 load")
    let y = 1;
    let increment = () => {
        debugger;
        y = y + 1;
        alert(y)
    }

    return (
       <div/>
       
    )
}

// export default Child3;
export default Child4;


// Exporting new instance of Child3 makes it singlton..If it was exported as a function then every time <Child3/> was 
// included in code then new closure was retunred therefore every instance was having its own value of y..However on 
// ui updated value was not rendred as functional componet do not render on self-stored data change..and as an alternate 
// if force update from parent is called then too no working as in that case again new closure will be created and 
// value of y will be reset to 0..From child forceUpdate cannot be called as stateless components doesn't extends 
// React.Component they are just plain functions that returns jsx..They do not have acces to react methods.
// So for verification of differnt instances behaviour alert is shown 

//Remove commeted code from above and all other componets including Child3 and updated thier code accordingly to switch b/w diff behavour


// https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
// https://stackoverflow.com/questions/46240647/can-i-call-forceupdate-in-stateless-component