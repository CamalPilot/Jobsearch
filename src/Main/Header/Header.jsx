import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
import logo from "./../../Assets/jobsearch.png"
import { useState } from 'react';
import Menu from '../../Menu/Menu';

const Header = ({ links, item, items}) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

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
  
  return (
    <div className="mobile-header">
        <Link to="/">
          <img className="mobile-header__logo" src={logo} alt="logo" />
        </Link>
        <HiOutlineMenu className="mobile-header__icon" onClick={handleToggleMenu}/>
        {showMenu && <Menu showMenu={showMenu} links={links} item={item} items={items} ref={menuRef}/>}
      </div>
  )
}

export default Header