import "./Menu.scss";
import React from "react";
import logo from "./../Assets/jobsearch.png";
import Mode from "../Mode/Mode";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { format } from "date-fns";
import LInks from "./LInks";
// import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";


const date = format(new Date(), "yyyy");

const Menu = React.forwardRef(({ links = [], items = [], item = [], showMenu, favoriteCount, setShowMenu}, ref) => {
  
  return (
    <div ref={ref} className={`sidebar ${showMenu ? 'show' : ''}`}>
      <div className="sidebar__logo">
        <div className="sidebar__logo__img">
          <Link to="/Elanlar">
            <img className="logo" src={logo} alt="logo" />
            </Link>
        </div>


        <div className="sidebar__logo__lang">
          <a href="#">
            AZ <IoIosArrowDown />{" "}
          </a>
          <ul>
            <li>
              <a href="#">EN</a>
            </li>
            <li>
              <a href="#">RU</a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="sidebar__menu">
        <Navbar items = {items}  setShowMenu={setShowMenu} />
        <span className="sidebar__menu__heading">{('Sizin JobSearch')}</span>
        <LInks item = {item} setShowMenu={setShowMenu}  />
      </div>
      <div className="sidebar__mode">
        <Mode />
      </div>
      

      
      <div className="sidebar__footer">
        <div className="sidebar__footer__nav">
          <Footer links = {links} setShowMenu={setShowMenu}  />
        </div>
        <div className="sidebar__footer__copyright">
          <span>© JobSearch.az 2006—{date}</span>
        </div>
        <div className="sidebar__footer__created">
          <span>By</span>
          <span>
            <FaPlane
              style={{ color: "darkcyan", transform: "translateY(3px)" }}
            />
          </span>
          <span>Camal Mammedov</span>
        </div>
      </div>
    </div>
  );
});

export default Menu;
