import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";     //components
//import {add,subtract,multiply,divide} from "./calculator.js";  //import-export 


ReactDOM.render(
  <App />,
  /*
  <ul>
    <li>{add(1,2)}</li>
    <li>{subtract(3,4)}</li>
    <li>{multiply(5,6)}</li>
    <li>{divide(4,3)}</li>
  </ul>
  */
  document.getElementById('root')
);