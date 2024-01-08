import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './../Menu/Menu.scss'
function LInks({ to, text, icon, count }) {
const {favorite} = useSelector ((state) => state.mainData);
const [activeLink, setActiveLink] = useState(0)
const handleLinkClick = (index) => {
  setActiveLink(index);
};
// console.log(favorite);
  return (
    <div className="menu-list-item">
      <li className={`${activeLink === 1 ? "active-link" : ""}`} onClick={() => handleLinkClick(1)}>
        
        <NavLink to={to} >
          {icon}
          {text}
          {count !== undefined && (
            <span className="sidebar__menu__count">{favorite.length}</span>
          )}
        </NavLink>
      </li>
    </div>
  );
}

export default LInks;
