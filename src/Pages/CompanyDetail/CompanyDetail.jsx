import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCategoryID } from '../../features/data/dataSlice';
import Vacancy from '../../Main/Vacancy';
import './CompanyDetail.scss'

const CompanyDetail = ({ id, vacancyClickHandle }) => {
    const [activeTab, setActiveTab] = useState(0);
    const { data, companyID } = useSelector((state) => state.mainData);
    const [foundCompanyID, setFoundCompanyID] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        const foundCompanyID = data?.find((item) => item.id === parseInt(id));
        setFoundCompanyID(foundCompanyID);
    },[data, id])

    const filteredCompany = companyID ? data.filter((el) => el.companyName == companyID) : data

    const handleClickCategory = (categoryID) => {
        dispatch(setCategoryID(categoryID));
        navigate('/Elanlar')
      }
  return (
    <div className="com-detail">
      <div className="com-detail__heading">
        <div className="com-detail__heading__title">
          <div className="com-detail__heading__title__logo">
            <img src={foundCompanyID?.image} alt="img" />
          </div>
          <div className='com-detail__heading__title__text'>
            <h3> {foundCompanyID?.companyName}</h3>
            <span onClick={() => handleClickCategory(foundCompanyID?.categoryID)}> {foundCompanyID?.categoryName}</span>
          </div>
        </div>
      </div>
      <div className="com-detail__content">
        <div className="com-detail__content__links">
          <a
            href="#"
            className={`${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            Şirkət haqqında
          </a>
          <a
            href="#"
            className={` ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Son iş elanları
          </a>
        </div>
        <div
          className={`com-detail__content__description ${
            activeTab === 0 ? "active" : ""
          }`}
        >
          <p className="com-detail__content__description__title">
          {foundCompanyID?.companyDescription}
          </p>
        </div>
        <div
          className={`com-detail__content__company ${
            activeTab === 1 ? "active" : ""
          }`}
        >
          <div className="com-detail__content__company__title">
            {
                filteredCompany && filteredCompany.length > 0 ? (
                    filteredCompany.map((com, index) => (
                        <Vacancy key={index} item = {com} vacancyClickHandle ={vacancyClickHandle}/>
                    ))
                )
                :
                <div>No data</div>
            }
          </div>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetail