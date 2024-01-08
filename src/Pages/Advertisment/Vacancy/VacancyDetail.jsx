import React, { useState } from "react";
import "./VacancyDetail.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import HeartIcon from "../../../Main/HeartIcon";
import { MdAccessTime } from "react-icons/md";
// import { format } from "date-fns";

// const date = format(new Date(),"d MMMM  yyyy");
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 30);
const options = { day: "numeric", month: "short", year: "numeric" };
const formattedDate = currentDate.toLocaleDateString("en-US", options);

const VacancyDetail = ({ id,  }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { data } = useSelector((state) => state.mainData);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  // const { id } = useParams();
  const vacancy = data?.find((item) => item.id === parseInt(id));

  // if (!vacancy) {
  //   return <div>Advertisment is not found.</div>;
  // }
  return (
    <div className="detail">
      <div className="detail__heading">
        <div className="detail__heading__title">
          <div className="detail__heading__title__logo">
            <img
              src="https://www.webcoder.az/siteassets/img/logo_webcoder.png"
              alt=""
            />
          </div>
          <h3> {vacancy.companyName}</h3>
        </div>
        <div className="detail__heading__end">
          <span className="detail__heading__end__watch">
            <VscEye /> 0
          </span>
          <HeartIcon />
        </div>
      </div>
      <div className="detail__vacancy">
        <div className="detail__vacancy__name">
          <h2>{vacancy.vacancyName}</h2>
        </div>
        <div className="detail__vacancy__date">
          <span>
            <MdAccessTime style={{ color: "#de7d0b" }} /> Son tarix{" "}
            {formattedDate}
          </span>
          <a href=""> Maliyyə xidmətləri</a>
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
          {/* <a href="">Digər iş elanları</a> */}
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
