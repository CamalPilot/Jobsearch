import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { VscEye } from "react-icons/vsc";
import HeartIcon from "./HeartIcon";
import { Link } from "react-router-dom";
import Vacancy from "./Vacancy";


function MainJob({ vacancyClickHandle, favoriteHandle }) {
  
  const { data } = useSelector((state) => state.mainData);

      
  return (
    <div>
      {data && data.length > 0 ? (
        data.map((item) => (
          <Vacancy key={item.id} item={item} vacancyClickHandle={vacancyClickHandle}/>
        ))
      ) : (
        <div className="noData">No Data Found!</div>
      )}
    </div>
  );
}

export default MainJob;
