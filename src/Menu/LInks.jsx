import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './../Menu/Menu.scss'
function LInks({ item, setShowMenu }) {
const {favorite} = useSelector ((state) => state.mainData);

  return (
    <ul>
      {
        item.map((element, index) => (
          <li key={index}>
            <NavLink to = {`/${element.text}`}   className={({isActive}) => isActive ? "active-link" : ""}
            onClick={()=>setShowMenu(false)}>
            {element.icon}
            {element.text}
            {element.count !== undefined && (
             <span className="sidebar__menu__count">{favorite.length}</span>
            )}
            </NavLink>
          </li>
        ))
      }
    </ul>
    // <div className="menu-list-item">
    //   <li >
        
    //     <NavLink to={to} className={({isActive}) => isActive ? "active-link" : ""}>
    //       {icon}
    //       {text}
    //       {count !== undefined && (
    //         <span className="sidebar__menu__count">{favorite.length}</span>
    //       )}
    //     </NavLink>
    //   </li>
    // </div>
  );
}

export default LInks;
