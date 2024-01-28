import React, { useState } from "react";
import "./VacancyDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import HeartIcon from "../../../Main/HeartIcon";
import { MdAccessTime } from "react-icons/md";
import { setCategoryID } from "../../../features/data/dataSlice";

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 30);
const options = { day: "numeric", month: "short", year: "numeric" };
const formattedDate = currentDate.toLocaleDateString("en-US", options);


const VacancyDetail = ({ id  }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { data, categories } = useSelector((state) => state.mainData);

  const dispatch = useDispatch();
const navigate = useNavigate();
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const vacancy = data?.find((item) => item.id === parseInt(id));

  const handleClickCategory = (categoryID) => {
    dispatch(setCategoryID(categoryID));
    navigate('/Elanlar')
  }

  return (
    <div className="detail">
      <div className="detail__heading">
        <div className="detail__heading__title">
          <div className="detail__heading__title__logo">
            <img src={vacancy.image} alt="" />
          </div>
          <h3> {vacancy.companyName}</h3>
        </div>
        <div className="detail__heading__end">
          <span className="detail__heading__end__watch">
            <VscEye /> {vacancy.viewCount}
          </span>
          <HeartIcon id ={vacancy.id} />
        </div>
      </div>
      <div className="detail__vacancy">
        <div className="detail__vacancy__name">
          <h2>{vacancy.vacancyName}</h2>
        </div>
        <div className="detail__vacancy__date">
          <span className="detail__vacancy__date__format">
            <MdAccessTime style={{ color: "#de7d0b" }} /> Son tarix{" "}
            {formattedDate}
          </span>
          <span className="detail__vacancy__date__category" onClick={() => handleClickCategory(vacancy.categoryID)} > {categories.find((ctg) => ctg.id == vacancy.categoryID).categoryName}</span>
        </div>
      </div>
      <div className="detail__content">
        <div className="detail__content__links">
          <a
            href="#"
            className={`${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            İşin təsviri
          </a>
          <a
            href="#"
            className={` ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Şirkət haqqında
          </a>
        </div>
        <div
          className={`detail__content__description ${
            activeTab === 0 ? "active" : ""
          }`}
        >
          <h3 className="detail__content__description__title">
            İş barədə məlumat:
          </h3>
          <h4>Vəzifə tələbləri:</h4>-{vacancy.require}
          <h4>Vəzifə öhdəlikləri:</h4>-{vacancy.obligations}
          <h4>İş şəraiti:</h4>-{vacancy.workingConditions}
        </div>
        <div
          className={`detail__content__company ${
            activeTab === 1 ? "active" : ""
          }`}
        >
          <h3 className="detail__content__company__title">Şirkət haqqında</h3>
          <p>{vacancy.companyDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default VacancyDetail;
