import React from 'react'
import { useSelector } from 'react-redux';
import './Company.scss'
import CompanyItem from './CompanyItem'

function Company({companyClickHandle}) {
  const { data, categories } = useSelector((state) => state.mainData);
  const companies = Array.from(new Set(categories.map((item) => item.company)));
  const uniqueCompany = [...new Set([].concat(...companies))];
  return (
    <>
    {/* <AppLayout/> */}
    <div className='company'>
      {uniqueCompany.map((company,ind) => {
        const companyData = data.find((item) => item.companyName === company);
        return <CompanyItem key={ind} company={company} companyData={companyData} companyClickHandle={companyClickHandle}/>
      })
      
      }
    </div>
    </>
      
  )
}

export default Company