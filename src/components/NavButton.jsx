import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ content, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-link nav-link-active" : "nav-link"
      }
    >
      {content}
    </NavLink>
  );
};

export default NavButton;
