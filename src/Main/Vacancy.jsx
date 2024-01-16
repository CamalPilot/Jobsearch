import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VscEye } from "react-icons/vsc";
import HeartIcon from "./HeartIcon";
import { Link } from "react-router-dom";
import { viewCountIncrement } from "../features/data/dataSlice";

function Vacancy({ vacancyClickHandle, item }) {
  const { data } = useSelector((state) => state.mainData);
  
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  const options = { day: "numeric", month: "short" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const [isLoading, setLoading] = useState(true);
  const [shouldHideInfo, setHideInfo] = useState(true);

  const dispatch = useDispatch();

  function handleClick(e) {
    vacancyClickHandle(item.id);
      const updatedData = data.map(i => {
        if (item.id === i.id) {
          return {
            ...item,
            viewCount: item.viewCount + 1
          };
        }
        return i;
      });
      dispatch(viewCountIncrement(updatedData))
  }

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
        onClick={(e) => handleClick(e)}
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
              <span className="job-name loading"></span>
            ) : (
              <span className="job-name">{item.vacancyName}</span>
            )}
            {isLoading ? (
              <span className="company-name loading"></span>
            ) : (
              <span className="company-name">{item.companyName}</span>
            )}
          </div>
        </div>
      </Link>
      <div className={`main__jobs__info ${shouldHideInfo ? "hideInfo" : ""}`}>
        <span className="main__jobs__info__watch">
          <VscEye />{item.viewCount}
        </span>
        <span>{formattedDate}</span>
        <div>
          <HeartIcon id={item.id} />
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
