import React from "react";

const CompanyItem = ({ company, companyData }) => {
  return (
    <div>
      <div className="company__item">
        <div className="company__item__img">
          <img src="https://media.licdn.com/dms/image/C4E0BAQHqPZyEVdNg1A/company-logo_200_200/0/1673424332653?e=2147483647&v=beta&t=ucBq61-4jgHMt0BmblI6uI6fqna-Vy6mrXtpN_qj5CA" alt=""/>
        </div>
        <div className="company__item__body">
          <div className="company__item__body__text">
            <h3>{company}</h3>
            <p>{companyData.category}</p>
          </div>
          <div className="company__item__body__end">
            <span>{companyData.vacancyCount}  iş elanı</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
