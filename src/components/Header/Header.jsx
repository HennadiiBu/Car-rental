import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">About</NavLink>
      <NavLink to="/favorites">Products</NavLink>
    </nav>
  );
};

export default Header;
