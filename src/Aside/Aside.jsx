import React from "react";
import AsideBlock from "../AsideBlock/AsideBlock";
import { useLocation } from "react-router-dom";
import "./Aside.scss";
import { Outlet } from "react-router-dom";
import VacancyDetail from "../Pages/Advertisment/Vacancy/VacancyDetail";
import { useParams } from "react-router-dom";
import Main from "../Main/Main";
import { useSelector } from "react-redux";

function Aside({ selectedJobId, }) {
  // const location = useLocation();
  // const isHomeOrAdd = location.pathname === '/' || location.pathname === '/Elanlar';
  const location = useLocation();
  const { pathname, search } = location;

  // const { id } = useParams();

  const { data } = useSelector((state) => state.mainData);
  // const vacancy = selectedJobId && data?.find((item) => item.id === parseInt(selectedJobId));
  //console.log(vacancy, 77)

  const component = selectedJobId ? (
    <VacancyDetail id={selectedJobId} />
  ) : (
    <AsideBlock />
  );
  // if (!vacancy) {
  //   return <div>Advertisment is not found.</div>;
  // }
  // console.log(data);
  return (
    <div className="aside">
      <div className="aside__add">
        {/* {
          isHomeOrAdd ? <AsideBlock /> : <VacancyDetail vacancy = {vacancy} />
        } */}
        {component}
      </div>
    </div>
  );
}

export default Aside;
