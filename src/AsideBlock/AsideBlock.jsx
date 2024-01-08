import React from 'react'

const AsideBlock = () => {
  return (
    <div className="aside__statistic__block">
        <h5 className="aside__statistic__block__title">
          Saytda dərc edilmiş vakansiyaların sayı
        </h5>
        <div className="aside__statistic__block__info">
          <ul>
            <li>
              <span>Günlük</span>
              <span className="count">80</span>
            </li>
            <li>
              <span>Həftəlik</span>
              <span className="count">406</span>
            </li>
          </ul>
          <div className="aside__statistic__block__info__month">
            <span className="monthly">Aylıq</span>
            <span className="total">503</span>
          </div>
        </div>
      </div>
  )
}

export default AsideBlock