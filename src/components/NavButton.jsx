import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ content, to, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-link nav-link-active" : "nav-link"
      }
    >
      <div className=" text-3xl lg:text-lg">{icon}</div>
      <div className="lg:ml-3 lg:inline-block hidden">{content}</div>
    </NavLink>
  );
};

export default NavButton;
