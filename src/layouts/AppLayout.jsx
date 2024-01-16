import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import { IoMdBriefcase } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { MdDomain } from "react-icons/md";
import { BiSolidHeartCircle } from "react-icons/bi";

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

const AppLayout = ({children}) => {

  return (
    <div>
        {children}
    </div>
  )
}

export default AppLayout