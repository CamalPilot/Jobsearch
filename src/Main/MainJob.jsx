import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Vacancy from "./Vacancy";


function MainJob({ vacancyClickHandle, favoriteHandle }) {
  const { data, categoryID } = useSelector((state) => state.mainData);

  // const { data } = useSelector((state) => state.mainData);
  const filteredData = categoryID ? data.filter(item => item.categoryID == categoryID) : data;
  // console.log(data);
      
  return (
    <div>
      {filteredData && filteredData.length > 0 ? (
        filteredData.map((item) => (
          <Vacancy key={item.id} item={item} vacancyClickHandle={vacancyClickHandle}/>
        ))
      ) : (
        <div className="noData">No Data Found!</div>
      )}
    </div>
  );
}

export default MainJob;
