import React from 'react'

export const RestaurantTab = ({title, checkActiveRestaurant}) => {
  return (
    <button onClick={checkActiveRestaurant}>{title}</button>
  )
}
