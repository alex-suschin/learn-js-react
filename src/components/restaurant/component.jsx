import React from 'react'
import { Dish } from '../dish/component'
import { Review } from '../review/component'

export const Restaurant = ({elem}) => {
  return (
    <div>
      <h2>{elem.name}</h2>
      <h3>Меню:</h3>
      {
        elem.menu.map((dish, idx) => {
          return <Dish key={idx} dish={dish} />
        })
      }
      <h4>Отзывы:</h4>
      {
        elem.reviews.map((rewiew, idx) => {
          return <Review key={idx} rewiew={rewiew} />
        })
      }
      <hr />
    </div>
  )
}
