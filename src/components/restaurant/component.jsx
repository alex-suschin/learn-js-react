import React from 'react'
import { Dish } from '../dish/component'
import { Review } from '../review/component'

export const Restaurant = ({restaurant}) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Меню:</h3>
      {
        restaurant.menu.map((dish, idx) => {
          return <Dish key={idx} dish={dish} />
        })
      }
      <h4>Отзывы:</h4>
      {
        restaurant.reviews.map((rewiew, idx) => {
          return <Review key={idx} rewiew={rewiew} />
        })
      }
      <hr />
    </div>
  )
}
