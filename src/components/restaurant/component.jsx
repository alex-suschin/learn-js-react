import React from 'react'

export const Restaurant = ({elem}) => {
  return (
    <div>
      <h2>{elem.name}</h2>
      <h3>Меню:</h3>
      {
        elem.menu.map((dish) => {
          return <div key={dish.name}>
            <h4>Блюдо: {dish.name}</h4>
            <h5>Состав: {
                dish.ingredients.map((el) => {
                  return <span>{el + " "}</span>
                })
              }</h5>
            <h4>Цена: {dish.price}</h4>
            </div>
        })
      }
      <h4>Отзывы:</h4>
      {
        elem.reviews.map((rewiew) => {
          return <div key={rewiew.id}>
            <h4>Имя: {rewiew.user}</h4>
            <p>{rewiew.text}</p>
            </div>
        })
      }
    </div>
  )
}
