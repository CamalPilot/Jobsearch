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
          // <div className="main__jobs" key={item.id}>
          //   <Link
          //     to={`/Elanlar/${item.id}`}
          //     onClick={() => vacancyClickHandle(item.id)}
          //   >
          //     <div className="main__jobs__company">
          //       {isLoading ? (
          //         <div className="main__jobs__company__logo imageLoading"></div>
          //       ) : (
          //         <div className="main__jobs__company__logo">
          //           <img src={item.image} alt="" />
          //         </div>
          //       )}
          //       <div className="main__jobs__company__type">
          //         {isLoading ? (
          //           <a href="" className="job-name loading"></a>
          //         ) : (
          //           <a href="" className="job-name">
          //             {item.vacancyName}
          //           </a>
          //         )}
          //         {isLoading ? (
          //           <a href="" className="company-name loading"></a>
          //         ) : (
          //           <a href="" className="company-name">
          //             {item.companyName}
          //           </a>
          //         )}
          //       </div>
          //     </div>
          //   </Link>
          //   <div
          //     className={`main__jobs__info ${shouldHideInfo ? "hideInfo" : ""}`}
          //   >
          //     <span className="main__jobs__info__watch">
          //       <VscEye /> 0
          //     </span>
          //     <span>{formattedDate}</span>
          //     <div
          //       // onClick={() =>
          //       //   favoriteHandle(
          //       //     item.id,
          //       //     item.image,
          //       //     item.vacancyName,
          //       //     item.companyName
          //       //   )
          //       // }
          //     >
          //       <HeartIcon id={item.id}/>
          //     </div>
          //   </div>
          // </div>
        ))
      ) : (
        <div className="noData">No Data Found!</div>
      )}
    </div>
  );
}

export default MainJob;
