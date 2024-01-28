import React from 'react'
import { useSelector } from 'react-redux'

const AsideBlock = () => {
const {statistic} = useSelector(state => state.mainData)

  return (
    <div className="aside__statistic__block">
        <h5 className="aside__statistic__block__title">
          Saytda dərc edilmiş vakansiyaların sayı
        </h5>
        <div className="aside__statistic__block__info">
          <ul>
            <li>
              <span>Günlük</span>
              <span className="count">{statistic.daily}</span>
            </li>
            <li>
              <span>Həftəlik</span>
              <span className="count">{statistic.weekly}</span>
            </li>
          </ul>
          <div className="aside__statistic__block__info__month">
            <span className="monthly">Aylıq</span>
            <span className="total">{statistic.monthly}</span>
          </div>
        </div>
      </div>
  )
}

export default AsideBlock