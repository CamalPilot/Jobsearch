import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCategoryID } from "../../features/data/dataSlice";


const Navbar = ({ items, setShowMenu }) => {
  const dispatch = useDispatch();
  function resetCategoryFilter() {
    dispatch(setCategoryID(0))
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <NavLink
            to={`/${item.text}`}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => {setShowMenu(false); resetCategoryFilter()}}
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
