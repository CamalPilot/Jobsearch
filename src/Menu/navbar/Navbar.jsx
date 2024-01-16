import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ items, setShowMenu }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <NavLink
            to={`/${item.text}`}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setShowMenu(false)}
          >
          {item.icon}
          {item.text}
          {item.count !== undefined && (
            <span className="sidebar__menu__count">{favorite.length}</span>
          )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
