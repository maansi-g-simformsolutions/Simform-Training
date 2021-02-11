import React from 'react';
import "./styles.css";
import Demo from './components/Demo.js';
import Avatar from './components/Avatar.js'

function App() {
  return (
      <div className="App">
        <Demo 
        name = 'React'
        />
        <Avatar />
      </div>
  );
}

export default App;