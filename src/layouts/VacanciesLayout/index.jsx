import React from "react";
import Main from "../../Main/Main";
// import { useRouteMatch } from 'react-router-dom';
import Aside from "../../Aside/Aside";
import VacancyDetail from "../../Pages/Advertisment/Vacancy/VacancyDetail";
import {Outlet} from 'react-router-dom';
import Menu from "../../Menu/Menu";

const VacanciesLayout = ({children}) => (
    <div className="vacancies-layout">
        {/* <Menu/> */}
        {/* <Outlet /> */}
        {/* <Aside /> */}
      {/* <Main>
        {children}
      </Main> */}
    </div>
  );

export default VacanciesLayout;
