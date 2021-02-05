import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Props
function Card(props) {
  return (
    <div className="contact">
      <h2>{props.name}</h2>
      <img className="images" src={props.img} alt="anything" />
      <h4>{props.tel}</h4>
      <h4>{props.email}</h4>
    </div>
  );
}

ReactDOM.render(
  <div className="body">
    <h1>My ContactBook</h1>
    <Card
      name="Shawn Mendes"
      img="https://media1.popsugar-assets.com/files/thumbor/xTdEOR_fM75bGS5OYzkq8xhDDPY/733x204:2802x2273/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/019/n/1922398/7c2241aa5d7048792c0e23.11693945_/i/Shawn-Mendes.jpg"
      tel="+1234456789"
      email="s@shawnmendes.com"
    />{" "}
    <br />
    <Card
      name="Billie Eilish "
      img="https://i.insider.com/5d10e5939c5101174c54bb98?width=700"
      tel="+1234896789"
      email="b@billie.com"
    />{" "}
    <br />
    <Card
      name="Zayn Malik "
      img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2015%2F03%2F25%2F032515-zayn-malik-lead_0.jpg&q=85"
      tel="+6734456789"
      email="z@zaynmalik.com"
    />{" "}
    <br />
  </div>,
  document.getElementById("root")
);
