// Navbar.js
import React from "react";

const Nav = ({ currentScore, topScore }) => {
  return (
    <nav>
      <div>Current Score: {currentScore}</div>
      <div>Top Score: {topScore}</div>
    </nav>
  );
};

export default Nav;
