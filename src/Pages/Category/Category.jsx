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
import { useState } from "react";
import AppLayout from "../../layouts/AppLayout";


// const imgObj = {
//   engineering: "Engineering",
//   buisness: "Business",
//   design: "Design",
//   IT: "IT",
//   delivery: "delivery",
//   health: "Health",
//   hotel: "Hotel",
//   marketing: "Marketing",
//   money: "Money",
//   traininng: "Training",
// };
function Category({ data, jobCount, companyCount, }) {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );
  
  return (
    <>
    <AppLayout/>
    <div className="category">
      {uniqueCategories.map((category) => {
        const categoryData = data.find((item) => item.category === category);
        let imagePath = "";
  switch (category) {
    case "Mühəndislik":
      imagePath = engineering;
      break;
    case "Komputerləşmə və İKT":
      imagePath = IT;
      break;
    case "Inzibati, Biznes və İdarəetmə":
      imagePath = buisness;
      break;
    case "Maliyyə xidmətləri":
      imagePath = money;
      break;
    case "Təlim və tədris":
      imagePath = traininng;
      break;
    case "Otel, İaşə, Turizm":
      imagePath = hotel;
      break;
    case "Nəqliyyat, paylama və logistika":
      imagePath = delivery;
      break;
    case "Dizayn, incəsənət və sənətkarlıq":
      imagePath = design;
      break;
    case "Səhiyyə":
      imagePath = health;
      break;
    case "Marketinq, reklam, çap və nəşriyyat":
      imagePath = marketing;
      break;
  }
        return (
          <div className="category__item" key={categoryData.id}>
            <div className="category__item__img">
              <img src={imagePath} alt={category} />
            </div>
            <div className="category__item__body">
              <div className="category__item__body__text">
                <a href="#">
                  <h3>{categoryData.category}</h3>
                  {jobCount} iş elanı
                </a>
              </div>
              <div className="category__item__body__end">
                {companyCount} şirkət
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

// import React from "react";
// import './Category.scss'
// import icon from './../../Assets/category-engineering.svg'
// import { useState } from "react";

// function Category({data, jobCount, companyCount}) {

//   return (

//     <div className="category">
//       {
//         data.map((item) =>{
//           return(
//        <div className="category__item" key={item.id}>
//         <div className="category__item__img">
//           <img src={icon} alt="" />
//         </div>
//         <div className="category__item__body">
//           <div className="category__item__body__text">
//             <a href="#">
//               <h3>{item.category}</h3>
//               {jobCount} iş elanı
//             </a>
//           </div>
//           <div className="category__item__body__end">{companyCount} şirkət</div>
//         </div>
//       </div>

//         )})
//       }

//     </div>
//   );
// }

// export default Category;