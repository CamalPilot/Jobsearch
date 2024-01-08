import React from 'react'
import AsideBlock from '../AsideBlock/AsideBlock'
import AppLayout from '../layouts/AppLayout'
import VacancyDetail from './Advertisment/Vacancy/VacancyDetail'

const DetailPage = ({data}) => {
  return (
    <div>
        <AppLayout />
        <VacancyDetail vacancy={data}/>
        <AsideBlock/>
    </div>
  )
}

export default DetailPage