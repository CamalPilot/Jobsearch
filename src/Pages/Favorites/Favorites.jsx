import React from "react";
import "./Favorites.scss";
import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Vacancy from "../../Main/Vacancy";
import { useSelector } from "react-redux";

const Favorites = ({ favoriteList }) => {
  const {data, favorite} = useSelector((state) => state.mainData);
  const favoritedData = data.filter((data) => favorite.includes(data.id))

  return (
  <>
  <div className="favorites">
      <div className="favorites__title">
        <h2>Seçdiyim iş elanları</h2>
      </div>
      <div className="favorites__content">
        <div className="favorites__content__icon">
          <IoHeartSharp className="favorites__content__icon__heart" />
        </div>
        <div className="favorites__content__text">
          <h3>Sizin seçilmiş elanınız yoxdur</h3>
        </div>
        <div className="favorites__content__link">
          <Link to="/">Vakansiyaya keçid</Link>
        </div>
      </div>
    {
      favoritedData.map(item => (

        <Vacancy key={item.id} item={item}/>

      ))
    }
    </div>
  </>
  );
};

export default Favorites;
