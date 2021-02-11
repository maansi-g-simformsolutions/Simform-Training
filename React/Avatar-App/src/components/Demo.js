import React,{Component} from 'react'

//Class based components practice
class Demo extends Component {
    render() {
        return(
        <div>
          <h1>Hello {this.props.name}</h1>
          <p>Maansi here</p>
          <p>We are going to build a new Avatar app</p>
        </div> );
    }
}

export default Demo;
