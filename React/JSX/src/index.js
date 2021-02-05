// JSX
// JSX Expressions and ES6 template literals
// always supports camelCase attributes

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"

const name = "Maansi";
const num = 30;
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1 className ="heading">{`Hi this is ${name} and these are My Favourite Foods!`}</h1>
      <div className="food-images">
        <img src="https://chowmart.com.ng/wp-content/uploads/2020/07/images-26.jpeg" alt="text"/><br/>
        <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/f_auto,q_auto,w_1100/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg" alt="text" /><br/>
        <img src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80" alt="text" /><br />
      </div>
    <h3>{`My lucky number is ${num}`} <br />
    {`Random number is ${Math.floor(Math.random())}`}</h3>
    
    <p class ="paragraph"><br/><br />Created by {name}<br />
       Copyright {year}</p>
  </div>,
  document.getElementById("root")
);