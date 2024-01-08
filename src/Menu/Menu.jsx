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


const date = format(new Date(), "yyyy");

const Menu = React.forwardRef(({ links = [], items = [], item = [], showMenu, favoriteCount, }, ref) => {
  
  return (
    <div ref={ref} className={`sidebar ${showMenu ? 'show' : ''} ${'show' ? 'slideRight' : 'slideLeft'}`}>
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
        <ul>
          {items.map((item) => {
            return (
              <LInks
                key={item.id}
                to={`/${item.text}`}
                text={item.text}
                icon={item.icon}
              />
            );
          })}
              
        </ul>
        <span className="sidebar__menu__heading">{('Sizin JobSearch')}</span>
        <ul>
          {item.map((element) => (
            <LInks
              key={element.id}
              to={`/${element.text}`}
              text={element.text}
              icon={element.icon}
              count={favoriteCount}
            >
              {/* <span>{element.count}</span> */}
            </LInks>
          ))}
        </ul>
      </div>
      <div className="sidebar__mode">
        <Mode />
      </div>

      <div className="sidebar__footer">
        <div className="sidebar__footer__nav">
          <ul>
            {links.map((link) => {
              return (
                <LInks key={link.id} to={`/${link.text}`} text={link.text} />
              );
            })}
          </ul>
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
