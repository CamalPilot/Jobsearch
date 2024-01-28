import React from "react";
import "./Category.scss";
import engineering from "./../CreateAd/img/category-engineering.svg";
import buisness from "./../CreateAd/img/buisness.svg";
import design from "./../CreateAd/img/category-design.svg";
import IT from "./../CreateAd/img/category-it.svg";
import delivery from "./../CreateAd/img/delivery.svg";
import health from "./../CreateAd/img/health.svg";
import hotel from "./../CreateAd/img/hotel-n.svg";
import marketing from "./../CreateAd/img/marketing.svg";
import money from "./../CreateAd/img/money.svg";
import traininng from "./../CreateAd/img/traininng.svg";
import AppLayout from "../../layouts/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCategoryID } from "../../features/data/dataSlice";

function Category() {
  const { data, categories } = useSelector((state) => state.mainData);
  const uniqueCategories = Array.from(new Set(data.map((item) => item.categoryID)));
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const categoryClickHandle = (categoryID) => {
    dispatch(setCategoryID(categoryID));
    navigate('/Elanlar')
  }
  return (
    <>
      <AppLayout />
      <div className="category" >
        {uniqueCategories.map((category) => {
          // console.log(category,'444');
          const categoryData = data.find((item) => item.categoryID === category);
          let imagePath = "";
          switch (category) {
            case 4:
              imagePath = engineering;
              break;
            case 1:
              imagePath = IT;
              break;
            case 2:
              imagePath = buisness;
              break;
            case 3:
              imagePath = money;
              break;
            case 5:
              imagePath = traininng;
              break;
            case 6:
              imagePath = hotel;
              break;
            case 7:
              imagePath = delivery;
              break;
            case 8:
              imagePath = design;
              break;
            case 9:
              imagePath = health;
              break;
            case 10:
              imagePath = marketing;
              break;
          }

          return (
            <div className="category__item" key={categoryData.id} onClick={() =>categoryClickHandle(category)}>
              {/* <Link to={`/category/${categoryData.categoryID}`}></Link> */}
              <div className="category__item__img">
                <img src={imagePath} alt={category} />
              </div>
              <div className="category__item__body">
                <div className="category__item__body__text">
                  <a href="#">
                    <h3>{categories.find((ctg) => ctg.id == category).categoryName}</h3>
                    {data.filter(item => item.categoryID == category).length} iş elanı
                  </a>
                </div>
                <div className="category__item__body__end">
                {categories.find(item => item.id == category).company.length} şirkət
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Category;
