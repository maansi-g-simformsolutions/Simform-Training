import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or Fragment
// Use camelCase for html attributes
// className instead of class
// close every element
// formatting


/*
function Greeting() {
  return (
    //<React.Fragment>
    <div>
      <h2>Hello World</h2>
      <ul>
        <li>
          <a href="#">HEllo this is a link!</a>
        </li>
      </ul>
    </div>
    //</React.Fragment>
  );
}

ReactDom.render(<Greeting/>,document.getElementById('root'));



// Nested Components, React Tools

function Greeting1() {
  return(
    <div>
      <Person />
      <Message />
    </div>
    );
  }
  
  const Person = () => <h1>Maansi Gupta</h1>;
  const Message = () => {
    return <p>This is my message!</p>;
  };
  
  ReactDom.render(<Greeting1 />,document.getElementById('root'));
*/


// MY MINI BOOKLIST PROJECT (PROPS)
// _____________________________________ //


// CSS
import './index.css'
// setup vars
const title = '365 Fairy Tales';
const author = 'Amelia Hepworth';
const img = "https://m.media-amazon.com/images/I/81Z67V0IZRL._AC_UL480_QL65_.jpg";

function BookList() {
  return (
  <section className="booklist">
      <Book job="developer"/>
      <Book title="random title" number={22}/>
      <Book />
      <Book />
      <Book />
      <Book />
      
  </section>
  );
}

const Book = (props) => {
  return (
  <article class="book">
      <img src= {img} alt="" />);
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
  </article>
  );
};


ReactDOM.render(<BookList />,document.getElementById('root'));
