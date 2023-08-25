import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="description/about"
              style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}
            >
              about
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
