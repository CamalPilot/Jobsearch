import React from 'react'
import { useSelector } from 'react-redux';
import AppLayout from '../../layouts/AppLayout'
import './Company.scss'
import CompanyItem from './CompanyItem'

function Company() {
  const { data } = useSelector((state) => state.mainData);
  const uniqueCompany = Array.from(new Set(data.map((item) => item.companyName)));
  console.log(uniqueCompany);
  return (
    <>
    {/* <AppLayout/> */}
    <div className='company'>
      {uniqueCompany.map((company) => {
        const companyData = data.find((item) => item.companyName === company);
        return <CompanyItem key={company} company={company} companyData={companyData}/>
        // console.log(companyData, 141414);
      })
      
      }
    </div>
    </>
      
  )
}

export default Company