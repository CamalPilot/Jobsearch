import React, { useEffect, useState } from "react";
import '../layouts/MainLayout.scss'
import Menu from "../Menu/Menu";
import Aside from "../Aside/Aside";
import { IoMdBriefcase } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { MdDomain } from "react-icons/md";
import { BiSolidHeartCircle } from "react-icons/bi";
import Header from "../Main/Header/Header";
import { Outlet, useLocation, useParams } from "react-router-dom";

const links = [
  {
    id: 1, 
    text: "Haqqımızda" 
  },
  {
    id: 2, 
    text: "Xidmətlər"
  },
  {
    id: 3, 
    text: "Əlaqə"
  }

]

const items = [
  {
    id: 1,
    text: "Elanlar",
    icon: <IoMdBriefcase /> 
  },
  {
    id: 2, 
    text: "Kateqoriyalar",
    icon: <MdCategory />
  },
  {
    id: 3, 
    text: "Şirkətlər",
    icon: <MdDomain /> 
  },
  {
    id: 4, 
    text: "Elan Yerləşdir", 
    icon: <BsLayoutTextSidebar />
  }
]



const item = [
  {
    id: 1,
    text: "Seçilmiş elanlar", 
    icon: <BiSolidHeartCircle style={{ transform: 'translateY(2px)' }} />, 
    count: 0
  }
]

const MainLayout = ({ selectedJobId, watchCount, favoriteCount }) => {
  const [showMenu, setShowMenu] = useState(false)
  const { id } = useParams();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <Menu links={links} item={item} items={items} favoriteCount={favoriteCount} showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header links={links} item={item} items={items} showMenu={showMenu} setShowMenu={setShowMenu} />
      { windowWidth > 1200 ? <Outlet /> : !id && <Outlet /> }
      <div>
        { windowWidth > 1200 ? <Aside selectedJobId={selectedJobId} watchCount={watchCount}/> :
         id && <Aside selectedJobId={selectedJobId} watchCount={watchCount}/> }
      </div>
    </>
  );
};

export default MainLayout;
