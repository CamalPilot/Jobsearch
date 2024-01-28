import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
import logo from "./../../Assets/jobsearch.png"
// import { useState } from 'react';
import Menu from '../../Menu/Menu';
import { useState } from 'react';

const Header = ({ links, item, items, showMenu, setShowMenu}) => {
  const menuRef = useRef(null)
  const [isBlurActive, setIsBlurActive] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu)
  }
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    setIsBlurActive(showMenu)
  }, [showMenu])
  
  return (
    <div className={`mobile-header ${isBlurActive ? 'mobile-header__background' : ''}`}>
        <Link to="/">
          <img className="mobile-header__logo" src={logo} alt="logo" />
        </Link>
        <HiOutlineMenu className="mobile-header__icon" onClick={handleToggleMenu}/>
        <Menu showMenu={showMenu} links={links} item={item} items={items} ref={menuRef}/>
      </div>
  )
}

export default Header