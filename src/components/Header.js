import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <h2>Articles</h2>
      </Link>
      <Link to="/AddArticle"> 
        <h4>Add new Articles</h4>
      </Link>
    </div>
  );
}

export default Header;
