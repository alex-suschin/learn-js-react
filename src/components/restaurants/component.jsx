import React from 'react'
import { Restaurant } from '../restaurant/component'

export const Restaraunts = ({restaurants, activeRestaurant}) => {
  return (
    <div>
      {restaurants.map((elem) => (
        <Restaurant key={elem.name} elem={elem}></Restaurant>
      ))}
    </div>
    
  )
}
