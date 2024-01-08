import React, { useEffect, useState } from "react";
import "./Main.scss";
import MainJob from "./MainJob";

function Main({ vacancyClickHandle, favoriteHandle }) {
  return (
    <>
      <div className="main">
        <MainJob vacancyClickHandle={vacancyClickHandle} favoriteHandle={favoriteHandle}/>
      </div>
    </>
  );
}

export default Main;  
