import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { setMainData, viewCountIncrement } from "../../features/data/dataSlice";
import Main from "../../Main/Main";
import "./CreateAd.scss";
import { vacancyCountIncrement, companyCountIncrement, vacancyStatisticIncrement } from "../../features/data/dataSlice";
import { useEffect } from "react";

const CreateAd = ({ dataHandler }) => {

  
  const [formData, setFormData] = useState({
    vacancyName: "",
    companyName: "",
    image: "",
    require: "",
    companyDescription: "",
    categoryID: undefined,
    id: "",
    obligations: "",
    workingConditions: "",
    viewCount: 0,
    vacancyCount: 0,
    companyCount: 0,
  });

  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();
  const { data, categories } = useSelector((state) => state.mainData);
  // console.log(categories);

  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "categoryID") {
      setFormData({
        ...formData,
        [name]: Number(value),
        id: Date.now(),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        id: Date.now(),
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("testttttt");

    const {
      vacancyName,
      companyName,
      image,
      require,
      companyDescription,
      categoryID,
      obligations,
      workingConditions,
    } = formData;

    if (
      vacancyName &&
      companyName &&
      image &&
      require &&
      companyDescription &&
      categoryID &&
      obligations &&
      workingConditions
    ) {
      setIsValid(true);
      dispatch(setMainData([...data, formData]));
      dataHandler(
        formData.vacancyName,
        formData.companyName,
        formData.image,
        formData.require,
        formData.companyDescription,
        formData.categoryID,
        formData.obligations,
        formData.workingConditions,
        formData.vacancyCount,
        formData.companyCount,
        formData.viewCount
      );

      const newAdCategoryID = formData.categoryID;

      const otherCategories = categories.filter(cat => cat.id != newAdCategoryID);
      let existingCategory = categories.find((cat) => cat.id === newAdCategoryID);            
      let newCategories;


      if (!existingCategory.company.includes(formData.companyName)) {
        let newExistingCategory = { ...existingCategory };
        newExistingCategory.company  = [ ...newExistingCategory.company, formData.companyName];
        newCategories = [...otherCategories, newExistingCategory];
      }

      dispatch(vacancyCountIncrement({ category: formData.categoryID }));
      newCategories && dispatch(companyCountIncrement(newCategories));
      dispatch(vacancyStatisticIncrement())
      navigate("/Elanlar");
    } else {
      setIsValid(false);
    }
  };
 
  // console.log(data);
 

  return (
    <>
        {
          !isValid && (
            <div className="create">
            <form className="create__form" onSubmit={handleSubmit}>
              <select
                className="create__form__select"
                name="categoryID"
                value={formData.categoryID}
                onChange={handleInputChange}
              >
                <option value="">Kateqoriya seç</option>
                {
                  categories.map((item) => {
                    return(
                      <option value={item.id} key={item.id}>{item.categoryName}</option>
                    )
                  })
                }
              </select>
              <input
                className="create__form__input"
                type="text"
                name="vacancyName"
                value={formData.vacancyName}
                placeholder="Vakansiya adı"
                onChange={handleInputChange}
              />
              <input
                className="create__form__input"
                type="text"
                name="companyName"
                value={formData.companyName}
                placeholder="Şirkətin adı"
                onChange={handleInputChange}
              />
              <input
                className="create__form__input"
                type="url"
                placeholder="image-url"
                name="image"
                onChange={handleInputChange}
              />
              <textarea
                className="create__form__textarea"
                name="require"
                value={formData.require}
                cols="30"
                rows="10"
                placeholder="Vəzifə tələbləri"
                onChange={handleInputChange}
              ></textarea>
              <textarea
                className="create__form__textarea"
                name="obligations"
                value={formData.obligations}
                cols="30"
                rows="10"
                placeholder="Vəzifə öhdəlikləri"
                onChange={handleInputChange}
              ></textarea>
              <textarea
                className="create__form__textarea"
                name="workingConditions"
                value={formData.workingConditions}
                cols="30"
                rows="10"
                placeholder="İş şəraiti"
                onChange={handleInputChange}
              ></textarea>
              <textarea
                className="create__form__textarea"
                name="companyDescription"
                value={formData.companyDescription}
                cols="30"
                rows="10"
                placeholder="Şirkət haqqında"
                onChange={handleInputChange}
              ></textarea>
              <button className="create__form__button" type="submit" 
              >
              Təsdiqlə
            </button>
    
            </form>
          </div>
          )
        }


          {isValid && (<Main />
          )}
    </>
  );
};

export default CreateAd;
