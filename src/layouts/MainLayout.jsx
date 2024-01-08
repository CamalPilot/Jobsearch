import React, { useState } from "react";
import Menu from "../Menu/Menu";
import Aside from "../Aside/Aside";
import { IoMdBriefcase } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { MdDomain } from "react-icons/md";
import { BiSolidHeartCircle } from "react-icons/bi";
import Header from "../Main/Header/Header";
// import { I18nextProvider } from 'react-i18next';
// import i18n from './../i18n';
import AsideBlock from "../AsideBlock/AsideBlock";
import Main from "../Main/Main";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = ({ selectedJobId, watchCount, favoriteCount }) => {
  const [links, setLinks] = useState([
    { id: 1, text: "Haqqımızda" },
    { id: 2, text: "Xidmətlər" },
    { id: 3, text: "Əlaqə" },
  ]);
  const [items, setItems] = useState([
    { id: 1, text: "Elanlar", icon: <IoMdBriefcase /> },
    { id: 2, text: "Kateqoriyalar", icon: <MdCategory /> },
    { id: 3, text: "Şirkətlər", icon: <MdDomain /> },
    { id: 4, text: "Elan Yerləşdir", icon: <BsLayoutTextSidebar /> },
  ]);
  const [item, setItem] = useState([
    {
      id: 1,
      text: "Seçilmiş elanlar",
      icon: <BiSolidHeartCircle style={{ transform: "translateY(2px)" }} />,
      count: 0,
    },
  ]);
  // const [showMenu, setShowMenu] = useState(true);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };
  return (
    <>
      {/* {showMenu && <Menu links={links} item={item} items={items}/>} */}
      {/* <Header toggleMenu = {toggleMenu}/> */}

      <Menu links={links} item={item} items={items} favoriteCount={favoriteCount} />
      <Header links={links} item={item} items={items} />
      {/* <Main/> */}
      <Outlet />
      <div>
        <Aside selectedJobId={selectedJobId} watchCount={watchCount}/>
      </div>
    </>
  );
};

export default MainLayout;
