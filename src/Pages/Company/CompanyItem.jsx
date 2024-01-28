import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCompanyID } from "../../features/data/dataSlice";

const CompanyItem = ({ company, companyData, companyClickHandle }) => {
  const { data } = useSelector((state) => state.mainData);
  const firstLetter = company.charAt(0).toUpperCase()
  const dispatch = useDispatch()
  
  const clickHandle = (newCompanyName) => {
    companyClickHandle(companyData.id)
    dispatch(setCompanyID(newCompanyName))
    // console.log(company);
  }
  return (
    <Link to = {`/Şirkətlər/${companyData.id}`}>
      <div className="company__item" onClick={() => clickHandle(company)}>
        <div className="company__item__img">
          {firstLetter}
        </div>
        <div className="company__item__body">
          <div className="company__item__body__text">
            <h3>{company}</h3>
            <p>{companyData.categoryName}</p>
          </div>
          <div className="company__item__body__end">
            <span>{data.filter(item => item.companyName == company).length} iş elanı</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyItem;
