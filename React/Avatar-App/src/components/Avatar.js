import React, { Component } from 'react';
import 'tachyons';
import AvatarList from '../components/AvatarList.js';

class Avatar extends Component {

  constructor(){
    super();
      this.state = {
        name:  'Welcome to Avatar World'
      }
  }
  
  nameChange() {
      this.setState({
          name: 'Subscribe to Maansi react notes'
      })
  }


  render() {
  const AvatarListarray = [
    {
      id: 1,
      name: "Maansi",
      work: "Web-developer"
    },
    {
      id: 2,
      name: "Harshil",
      work: "AI engineer",
    },
    {
      id: 3,
      name: "Meshu",
      work: "Architectural Expert",
    },
    {
      id: 4,
      name: "Raj",
      work: "Mechanical Engineer",
    }
  ]

const card = AvatarListarray.map( (avatarcard, i) => {
      return(
        <AvatarList 
        name={AvatarListarray[i].name}
        work={AvatarListarray[i].work}
       />
      );
  })



return (
    <div>
      <h1 className="app-heading">{this.state.name}</h1>
        {card}
      <br />
      <button onClick = { () => this.nameChange()}>Subscribe</button>
    </div>

  );
}

}
export default Avatar;