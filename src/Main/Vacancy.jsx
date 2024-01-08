import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VscEye } from "react-icons/vsc";
import HeartIcon from "./HeartIcon";
import { Link } from "react-router-dom";


function Vacancy({vacancyClickHandle,item}) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate());
    const options = { day: "numeric", month: "short" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);

    const [isLoading, setLoading] = useState(true);
    const [shouldHideInfo, setHideInfo] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
            setHideInfo(false);
        }, 1000);
        return () => clearTimeout(delay);
    }, []);


  return (
    <div className="main__jobs" key={item.id}>
      <Link
        to={`/Elanlar/${item.id}`}
        onClick={() => vacancyClickHandle(item.id)}
      >
        <div className="main__jobs__company">
          {isLoading ? (
            <div className="main__jobs__company__logo imageLoading"></div>
          ) : (
            <div className="main__jobs__company__logo">
              <img src={item.image} alt="" />
            </div>
          )}
          <div className="main__jobs__company__type">
            {isLoading ? (
              <a href="" className="job-name loading"></a>
            ) : (
              <a href="" className="job-name">
                {item.vacancyName}
              </a>
            )}
            {isLoading ? (
              <a href="" className="company-name loading"></a>
            ) : (
              <a href="" className="company-name">
                {item.companyName}
              </a>
            )}
          </div>
        </div>
      </Link>
      <div className={`main__jobs__info ${shouldHideInfo ? "hideInfo" : ""}`}>
        <span className="main__jobs__info__watch">
          <VscEye /> 0
        </span>
        <span>{formattedDate}</span>
        <div
        // onClick={() =>
        //   favoriteHandle(
        //     item.id,
        //     item.image,
        //     item.vacancyName,
        //     item.companyName
        //   )
        // }
        >
          <HeartIcon id={item.id} />
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
