import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { setMainData } from "../../features/data/dataSlice";
import "./CreateAd.scss";

const CreateAd = ({ dataHandler, }) => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.mainData);

  // console.log(data);

  const [formData, setFormData] = useState({
    vacancyName: "",
    companyName: "",
    image: "",
    require: "",
    companyDescription: "",
    category: "",
    id: "",
    obligations: '',
    workingConditions: "",
    vacancyCount: 0,
    companyCount: 0,
    // watchCountId: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      id: Date.now(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMainData([...data, formData]));
    dataHandler(
      formData.vacancyName,
      formData.companyName,
      formData.image,
      formData.require,
      formData.companyDescription,
      formData.category,
      formData.obligations,
      formData.workingConditions, 
      formData.vacancyCount,
      formData.companyCount,
      // formData.watchCountId
    );
  };

  return (
    <>
    <div className="create">
      <form className="create__form" onSubmit={handleSubmit}>
        <select
          className="create__form__select"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="">Kateqoriya seç</option>
          <option value="Komputerləşmə və İKT">Komputerləşmə və İKT</option>
          <option value="Inzibati, Biznes və İdarəetmə">
            Inzibati, Biznes və İdarəetmə
          </option>
          <option value="Maliyyə xidmətləri">Maliyyə xidmətləri</option>
          <option value="Mühəndislik">Mühəndislik</option>
          <option value="Təlim və tədris">Təlim və tədris</option>
          <option value="Otel, İaşə, Turizm">Otel, İaşə, Turizm</option>
          <option value="Nəqliyyat, paylama və logistika">
            Nəqliyyat, paylama və logistika
          </option>
          <option value="Dizayn, incəsənət və sənətkarlıq">
            Dizayn, incəsənət və sənətkarlıq
          </option>
          <option value="Səhiyyə">Səhiyyə</option>
          <option value="Marketinq, reklam, çap və nəşriyyat">
            Marketinq, reklam, çap və nəşriyyat
          </option>
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
        <button className="create__form__button" type="submit">
          Təsdiqlə
        </button>
      </form>
    </div>
    </>
  );
};

export default CreateAd;
