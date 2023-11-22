import React from 'react'

export const Dish = ({dish}) => {
  return (
    <div key={dish.name}>
        <h4>Блюдо: {dish.name}</h4>
        <h5>Состав: {
            dish.ingredients.map((itm, idx) => (
                <span key={idx}>{itm + ' '}</span>
            ))
            }</h5>
        <h4>Цена: {dish.price}</h4>
        <br />
    </div>
  )
}
