import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <br/>
      <p>Created by Maansi</p>
    </footer>
  );
}

export default Footer;
