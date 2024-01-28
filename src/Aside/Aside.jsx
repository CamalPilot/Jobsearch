import React from "react";
import AsideBlock from "../AsideBlock/AsideBlock";
import "./Aside.scss";
import VacancyDetail from "../Pages/Advertisment/Vacancy/VacancyDetail";
import CompanyDetail from "../Pages/CompanyDetail/CompanyDetail";

function Aside({ selectedJobId, selectedCompanyID, vacancyClickHandle}) {
  
  const component =
  selectedJobId ? (
    <VacancyDetail id={selectedJobId} />
  ) : selectedCompanyID ? (
    <CompanyDetail id={selectedCompanyID} vacancyClickHandle={vacancyClickHandle} />
  ) : (
    <AsideBlock />
  );


  return (
    <div className="aside">
      <div className="aside__add">
        {component}
      </div>
    </div>
  );
}
export default Aside;
